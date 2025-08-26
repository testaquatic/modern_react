import { useState } from "react";

export function EventMouse({beforeSrc, afterSrc, alt}: {beforeSrc: string, afterSrc: string, alt: string}) {
    const [current, setCurrent] = useState(beforeSrc);
    const handleEnter = () => setCurrent(afterSrc);
    const handleLeave = () => setCurrent(beforeSrc);

    return (
        <img src={current} alt={alt} onMouseEnter={handleEnter} onMouseLeave={handleLeave} />
    );
}