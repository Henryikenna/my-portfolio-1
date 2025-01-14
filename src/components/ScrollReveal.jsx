// import React from 'react';
// import { useInView } from 'react-intersection-observer';

// const ScrollReveal = ({ children, className = '' }) => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <div
//       ref={ref}
//       className={`transform transition-all duration-700 ease-out ${
//         inView
//           ? 'opacity-100 translate-y-0'
//           : 'opacity-0 translate-y-16'
//       } ${className}`}
//     >
//       {children}
//     </div>
//   );
// };

// export default ScrollReveal; 