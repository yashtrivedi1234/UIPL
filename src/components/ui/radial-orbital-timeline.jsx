import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RadialOrbitalTimeline({ timelineData }) {
  const [expandedItems, setExpandedItems] = useState({});
  const [viewMode] = useState("orbital");
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [centerOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const orbitRef = useRef(null);
  const nodeRefs = useRef({});

  const handleContainerClick = (e) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setAutoRotate(false);

        centerViewOnNode(id);
      } else {
        setAutoRotate(true);
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index, total) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 200;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "completed":
        return "text-white bg-[#00263f] border-[#00263f]";
      case "in-progress":
        return "text-[#0b3c5d] bg-[#ffdcc0] border-[#fe9824]";
      case "pending":
        return "text-[#0b3c5d] bg-[#eff4ff] border-[#a3cbf2]";
      default:
        return "text-[#0b3c5d] bg-[#eff4ff] border-[#a3cbf2]";
    }
  };

  return (
    <div
      className="w-full overflow-hidden bg-[radial-gradient(circle_at_50%_35%,#f8fbff_0%,#eff4ff_48%,#f8f9ff_100%)]"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="w-full md:hidden px-4 py-8">
        <div className="max-w-xl mx-auto space-y-4">
          {timelineData.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.id}
                className="border-[#0b3c5d]/15 bg-white/95 shadow-lg shadow-[#0b3c5d]/8"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-full bg-[#00263f] text-white flex items-center justify-center shrink-0">
                        <Icon size={16} />
                      </div>
                      <CardTitle className="text-sm text-[#00263f] truncate">
                        {item.title}
                      </CardTitle>
                    </div>
                    <Badge className={`text-[10px] px-2 ${getStatusStyles(item.status)}`}>
                      {item.status === "completed"
                        ? "COMPLETE"
                        : item.status === "in-progress"
                        ? "IN PROGRESS"
                        : "PENDING"}
                    </Badge>
                  </div>
                  <div className="text-xs text-[#0b3c5d]/60 mt-1">{item.date}</div>
                </CardHeader>
                <CardContent className="text-xs text-[#0b3c5d]/85 space-y-3">
                  <p>{item.content}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="relative w-full max-w-4xl h-130 lg:h-140 mx-auto items-center justify-center hidden md:flex">
        <div
          className="absolute inset-0 flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          <div className="absolute w-16 h-16 rounded-full bg-linear-to-br from-[#00263f] via-[#0b3c5d] to-[#fe9824] animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-20 h-20 rounded-full border border-[#0b3c5d]/20 animate-ping opacity-70"></div>
            <div
              className="absolute w-24 h-24 rounded-full border border-[#0b3c5d]/15 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md"></div>
          </div>

          <div className="absolute w-96 h-96 rounded-full border border-[#0b3c5d]/15"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${
                    ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(11,60,93,0.10) 0%, rgba(11,60,93,0) 70%)`,
                    width: `56px`,
                    height: `56px`,
                    left: `-8px`,
                    top: `-8px`,
                  }}
                ></div>

                <div
                  className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? "bg-[#00263f] text-white"
                      : "bg-white text-[#00263f]"
                  }
                  border-2 
                  ${
                    isExpanded
                      ? "border-[#00263f] shadow-lg shadow-[#00263f]/20"
                      : "border-[#0b3c5d]/25"
                  }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-150" : ""}
                `}
                >
                  <Icon size={16} />
                </div>

                <div
                  className={`
                  absolute top-12  whitespace-nowrap
                  text-xs font-semibold tracking-wider
                  transition-all duration-300
                  ${isExpanded ? "text-[#00263f] scale-125" : "text-[#0b3c5d]/70"}
                `}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-60 bg-white/95 backdrop-blur-lg border-[#0b3c5d]/20 shadow-xl shadow-[#0b3c5d]/10 overflow-hidden max-h-75">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-[#0b3c5d]/40"></div>
                    <CardHeader className="pb-2 px-4 pt-4">
                      <div className="flex justify-between items-center gap-2">
                        <Badge
                          className={`px-2 text-[10px] ${getStatusStyles(
                            item.status
                          )}`}
                        >
                          {item.status === "completed"
                            ? "COMPLETE"
                            : item.status === "in-progress"
                            ? "IN PROGRESS"
                            : "PENDING"}
                        </Badge>
                        <span className="text-[10px] font-mono text-[#0b3c5d]/55 whitespace-nowrap">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-[18px] leading-tight mt-2 text-[#00263f]">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-[11px] text-[#0b3c5d]/85 px-4 pb-4 overflow-y-auto max-h-52.5">
                      <p>{item.content}</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
