const SideBar = ()=>{
    return(
        <ul className=" h-[35rem] w-60 bg-gradient-to-r from-purple to-blue rounded-3xl flex flex-col justify-center items-start p-8">
                <li className="text-lg font-normal font-mono text-gray-400 hover:text-gray-200 hover:cursor-pointer ">Profile</li>
                <div className="border border-t mt-1 mb-1 border-gray-200 w-full"></div>
                <li className="text-lg font-normal font-mono text-gray-400 hover:text-gray-200 hover:cursor-pointer ">Posts</li>
                <div className="border border-t mt-1 mb-1 border-gray-200 w-full"></div>
                <li className="text-lg font-normal font-mono text-gray-400 hover:text-gray-200 hover:cursor-pointer">Gallery</li>
                <div className="border border-t mt-1 mb-1 border-gray-200 w-full"></div>
                <li className="text-lg font-normal font-mono text-gray-400 hover:text-gray-200 hover:cursor-pointer ">ToDo</li>
                <div className="border border-t mt-1 mb-1 border-gray-200 w-full"></div>
            </ul>
    )

}
export default SideBar;