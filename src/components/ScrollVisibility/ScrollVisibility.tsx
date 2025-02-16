import { useEffect } from 'react';

export const ScrollVisibility = () => {
  useEffect(() => {
    const scrollbarStyle = document.createElement('style');
    scrollbarStyle.innerHTML = `
      ::-webkit-scrollbar-thumb {
        opacity: 0;
      }
    `;
    document.head.appendChild(scrollbarStyle);

    let timeout: NodeJS.Timeout;

    const showScrollbar = () => {
      scrollbarStyle.innerHTML = `
        ::-webkit-scrollbar-thumb {
          opacity: 1;
        }
      `;

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        scrollbarStyle.innerHTML = `
          ::-webkit-scrollbar-thumb {
            opacity: 0;
          }
        `;
      }, 1500);
    };

    window.addEventListener('scroll', showScrollbar);

    return () => {
      window.removeEventListener('scroll', showScrollbar);
      clearTimeout(timeout);
      document.head.removeChild(scrollbarStyle);
    };
  }, []);

  return null; // No UI needed, just controlling scrollbar visibility
};
