// import React, { useEffect, useRef } from "react";

// const ScrollAnimation = ({ children, className }) => {
//   const elementRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("fade-in-shown");
//         } else {
//           entry.target.classList.remove("fade-in-shown");
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }

//     return () => {
//       if (elementRef.current) {
//         observer.unobserve(elementRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div ref={elementRef} className={`animate-fade-in ${className}`}>
//       {children}
//     </div>
//   );
// };

// export default ScrollAnimation;
