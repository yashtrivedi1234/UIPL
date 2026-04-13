/**
 * Utility function to combine classnames with proper precedence
 * @param  {...any} classes 
 * @returns {string}
 */
export function cn(...classes) {
  return classes
    .flat()
    .filter(Boolean)
    .join(" ");
}
