function Menu() {
    const box = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9", "box10"];
    return(
        <div className="grid grid-cols-3 gap-8 mt-10">
            {box.map(box => {
                return <div className="flex shrink-0 w-50 h-80 items-center justify-center bg-gray-200">{box}</div>
            })}
        </div>
    )
}

export default Menu