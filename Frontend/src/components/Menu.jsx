function Menu() {
    const box = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9", "box10"];
    return(
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 my-10 justify-center w-full place-items-center">
            {box.map(box => {
                return <div className="flex shrink-0 w-32 h-40 sm:w-52 sm:h-60 items-center justify-center flex bg-gray-200">{box}</div>
            })}
        </div>
    )
}

export default Menu