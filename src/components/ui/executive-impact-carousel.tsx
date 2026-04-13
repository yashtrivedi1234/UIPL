import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './executive-impact-carousel.css'

gsap.registerPlugin(ScrollTrigger);

interface CaseStudy {
  id: string;
  title: string;
  company: string;
  impact: string;
  results: string;
  beforeImg: string;
  afterImg: string;
  category: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "1",
    title: "Urban Green Initiative",
    company: "Metro City Projects",
    impact: "Green spaces increased by 45%",
    results: "+2.5M sq ft of sustainable development",
    beforeImg: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
    category: "Sustainability",
  },
  {
    id: "2",
    title: "Smart Infrastructure Hub",
    company: "Tech Innovations Ltd",
    impact: "Energy efficiency improved by 60%",
    results: "3 major cities connected",
    beforeImg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    category: "Technology",
  },
  {
    id: "3",
    title: "Healthcare Excellence Center",
    company: "Global Health Systems",
    impact: "Patient capacity increased 3x",
    results: "50K+ lives impacted annually",
    beforeImg: "https://images.unsplash.com/photo-1580281657527-47d5f9c1c3e3?w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    category: "Healthcare",
  },
  {
    id: "4",
    title: "Education Innovation Campus",
    company: "Future Minds Foundation",
    impact: "Student enrollment up 200%",
    results: "State-of-the-art learning hub",
    beforeImg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    category: "Education",
  },
  {
    id: "5",
    title: "Retail Experience Transformation",
    company: "Commerce Solutions Inc",
    impact: "Customer experience score: 98%",
    results: "5 flagship locations globally",
    beforeImg: "https://images.unsplash.com/photo-1555529771-35a8f6e1c1e3?w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?w=800&q=80",
    category: "Retail",
  },
  {
    id: "6",
    title: "Corporate Sustainability",
    company: "Enterprise Global Corp",
    impact: "Carbon neutral achieved",
    results: "Net-zero emissions by 2026",
    beforeImg: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    category: "Sustainability",
  },
  {
    id: "7",
    title: "Digital Transformation",
    company: "Legacy Industries Inc",
    impact: "Operations efficiency +150%",
    results: "Complete digital migration",
    beforeImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    category: "Technology",
  },
  {
    id: "8",
    title: "Community Health Program",
    company: "WorldCare Alliance",
    impact: "Access expanded to 500K people",
    results: "Low-cost healthcare centers established",
    beforeImg: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1580281658629-1c7a02a1c7e8?w=800&q=80",
    category: "Healthcare",
  },
  {
    id: "9",
    title: "Smart Campus Initiative",
    company: "Academic Excellence Group",
    impact: "Learning outcomes improved 85%",
    results: "AI-powered personalized education",
    beforeImg: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1581091012184-5c2d9d7b9f8f?w=800&q=80",
    category: "Education",
  },
  {
    id: "10",
    title: "Omnichannel Commerce",
    company: "RetailTech Ventures",
    impact: "Sales increased 120%",
    results: "Seamless customer journey",
    beforeImg: "https://images.unsplash.com/photo-1515165562835-c4c37b0f9f3b?w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    category: "Retail",
  },
  {
    id: "11",
    title: "Water & Energy Sustainability",
    company: "Planet Care Foundation",
    impact: "Resource usage reduced 70%",
    results: "Renewable energy implementation",
    beforeImg: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    category: "Sustainability",
  },
  {
    id: "12",
    title: "Automation Excellence",
    company: "Manufacturing Pro Partners",
    impact: "Production time -60%",
    results: "Industry 4.0 adoption complete",
    beforeImg: "https://images.unsplash.com/photo-1581091870622-7c9cfa1eec3c?w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1581091215367-59ab6b9d1c0b?w=800&q=80",
    category: "Technology",
  },
  {
    id: "13",
    title: "Preventive Health Excellence",
    company: "Wellness Global",
    impact: "Preventive care adoption: 92%",
    results: "Disease prevention centers inaugurated",
    beforeImg: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=800&q=80",
    category: "Healthcare",
  },
  {
    id: "14",
    title: "Virtual Learning Platform",
    company: "EdTech Innovations",
    impact: "Students reached: 2M+",
    results: "Global education access achieved",
    beforeImg: "https://images.unsplash.com/photo-1584697964403-c4b44c6e4f9a?w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80",
    category: "Education",
  },
  {
    id: "15",
    title: "Experiential Retail Hub",
    company: "Brand Experience Labs",
    impact: "Customer lifetime value: +200%",
    results: "Immersive shopping destinations",
    beforeImg: "https://images.unsplash.com/photo-1521336575822-6da63fb45455?w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1555529593-1bff0e3b5b9c?w=800&q=80",
    category: "Retail",
  },
];
const COL_1_CASE_STUDIES = CASE_STUDIES.slice(0, 5);
const COL_2_CASE_STUDIES = CASE_STUDIES.slice(5, 10);
const COL_3_CASE_STUDIES = CASE_STUDIES.slice(10, 15);

export default function ExecutiveImpactCarousel() {
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      const ctx = gsap.context(() => {
        if (containerRef.current) {
          const travel = 900;

          const scrollConfig = {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.3,
          };

          if (col1Ref.current) {
            gsap.fromTo(col1Ref.current, { y: -travel / 2 }, { y: travel / 2, ease: "none", scrollTrigger: scrollConfig });
          }
          if (col3Ref.current) {
            gsap.fromTo(col3Ref.current, { y: -travel / 2 }, { y: travel / 2, ease: "none", scrollTrigger: scrollConfig });
          }
          if (col2Ref.current) {
            gsap.fromTo(col2Ref.current, { y: travel / 2 }, { y: -travel / 2, ease: "none", scrollTrigger: scrollConfig });
          }
        }
      });

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      <main className="case-study-carousel">
        {/* ── Section Heading ── */}
        <div className="case-study-section-heading">
          <span className="case-study-eyebrow">Success Stories</span>
          <h2 className="case-study-heading-title">Case Studies</h2>
          <p className="case-study-heading-subtitle">
            Real impacts from innovative projects and transformative initiatives
          </p>
        </div>

        <div ref={containerRef} className="col-scroll">

          {/* Column 1 — starts lower, moves fastest */}
          <div className="col-scroll__box col-scroll__box--col1" ref={col1Ref}>
            <div className="col-scroll__list">
              {COL_1_CASE_STUDIES.map((study) => (
                <CaseStudyCard key={study.id} caseStudy={study} />
              ))}
            </div>
          </div>

          {/* Column 2 — center, baseline speed */}
          <div className="col-scroll__box col-scroll__box--col2" ref={col2Ref}>
            <div className="col-scroll__list">
              {COL_2_CASE_STUDIES.map((study) => (
                <CaseStudyCard key={study.id} caseStudy={study} />
              ))}
            </div>
          </div>

          {/* Column 3 — starts slightly lower, medium speed */}
          <div className="col-scroll__box col-scroll__box--col3" ref={col3Ref}>
            <div className="col-scroll__list">
              {COL_3_CASE_STUDIES.map((study) => (
                <CaseStudyCard key={study.id} caseStudy={study} />
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}

function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <figure className="case-study-card">
      <div className="col-scroll__img-wrapper">
        <img className="product-img" src={caseStudy.beforeImg} alt={caseStudy.title} />
        <img className="model-img" src={caseStudy.afterImg} alt={`${caseStudy.title} - After`} />

        <div className="case-study-card__info">
          <h3 className="case-study-card__title">{caseStudy.title}</h3>
          <p className="case-study-card__company">{caseStudy.company}</p>
          <p className="case-study-card__impact">{caseStudy.impact}</p>
        </div>

        <button className="case-study-card__btn">Learn More +</button>
      </div>
    </figure>
  );
}