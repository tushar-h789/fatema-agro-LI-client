import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'; 
import './ScrollToTopButton.css'


const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show/hide the button based on the user's scroll position
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Adjust the threshold based on your design
      const scrollThreshold = 300;

      setIsVisible(scrollTop > scrollThreshold);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Smooth scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    }

  return (
    <div>
        <button onClick={scrollToTop} className={`scroll-to-top ${isVisible ? 'visible' : ''}`}><FaArrowUp/></button>
    </div>
  )
}

export default ScrollToTopButton