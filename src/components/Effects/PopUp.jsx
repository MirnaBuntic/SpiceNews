import { useState, useLayoutEffect, useRef } from "react";
import "../../styles/_popup.scss";

export default function PopUp({ info, children }) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    const togglePopup = () => setIsVisible(!isVisible)

    useLayoutEffect(() => {
        function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsVisible(false);
        }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <span className="info-container" ref={ref}>
            <span className="clickable-text" onClick={togglePopup}>
                {children}
            </span>

            <span className="info-icon" onClick={togglePopup}>
                ?
            </span>

            {isVisible && (
                <div className="info-popup">
                    {info}
                </div>
            )}
        </span>
    )
}