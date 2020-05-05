import React, { useEffect, useRef, useState } from "react"
import PropTypes from 'prop-types'

const Sticky = ({ scrollPoint, children }) => {
    const [isSticky, setSticky] = useState(false);
    const ref = useRef(null);

    
    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const headerPos = ref.current.getBoundingClientRect().top;
                const isPassedScrollPoint = headerPos < -scrollPoint;
                setSticky(isPassedScrollPoint);
            }
        };
        
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, [scrollPoint]);

    return (
        <div className={`${isSticky ? ' is-sticky' : ''}`} ref={ref}>
            {children}
        </div>
    )
}

Sticky.propTypes = {
    children: PropTypes.element.isRequired,
    scrollPoint: PropTypes.number.isRequired,
}

export default Sticky;