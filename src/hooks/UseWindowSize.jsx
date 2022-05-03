import { useEffect, useState } from "react";

const UseWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    });
    useEffect(() => {
        let box = document.body;
        let width = box.offsetWidth;
        let height = window.innerHeight;
        setWindowSize({
            width: width,
            height: height
        })
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, [])
    return windowSize;
};
export default UseWindowSize;
