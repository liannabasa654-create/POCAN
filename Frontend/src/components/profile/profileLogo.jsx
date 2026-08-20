function ProfileLogo() {
    return(
        <>
        
        <div className="flex gap-4 ml-3 items-center mt-7">
            <div className="w-15 h-15 bg-gray-800 rounded-full"></div>
            <span className="text-white flex flex-col gap-2">
                <p className="font-semibold text-xl">John Doe</p>
                <p className="text-xs">🟢 Buka</p>
            </span>
        </div>
        </>
    )
}

export default ProfileLogo