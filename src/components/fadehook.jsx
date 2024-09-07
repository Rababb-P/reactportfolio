import { useEffect, useRef } from 'react';

const useFadeInOnScroll = (threshold = 0.3) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add('fadeIn');
          ref.current.classList.remove('fadeOut');
        } else {
          ref.current.classList.add('fadeOut');
          ref.current.classList.remove('fadeIn');
        }
      },
      {
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return ref;
};

export default useFadeInOnScroll;
