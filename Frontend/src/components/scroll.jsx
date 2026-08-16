import { useRef, useState } from "react"

function ScrollUser() {
    const box = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9", "box10"];
    const sliderRef = useRef(null);
    const isDown = useRef(false);
    const position = useRef(0);
    const scrollLeft = useState(0);

    const handleMouseDown = (e) => {
        isDown.current = true;
        position.current = e.pageX - sliderRef.current.offsetLeft;
        scrollLeft.current = sliderRef.current.scrollLeft;
    }

    const handleMove = (e) => {
        if (!isDown.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - position.current) * 2;

        sliderRef.current.scrollLeft = scrollLeft.current - walk
    }

    const handleLeft = () => {
        isDown.current = false;
    }

    return (
        <>
        <div className="flex p-3 w-full gap-10 overflow-x-auto cursor-grab scrollbar-none [&::-webkit-scrollbar]:hidden py-10 shadow-xl"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMove}
        onMouseLeave={handleLeft}
        onMouseUp={handleLeft}>
            {box.map(box => {
                return <div className="flex hover:cursor-pointer rounded-full shrink-0 items-center justify-center select-none w-30 h-30 bg-gray-300">{box}</div>
            })}
        </div>
        </>
    )
}

export default ScrollUser