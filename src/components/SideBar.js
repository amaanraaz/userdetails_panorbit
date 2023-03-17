import { Link } from "react-router-dom";

const SideBar = ()=>{
    return(
        // creating the list of all sidebar components and link to that specific components using Link tag from react router
        <ul className=" h-[35rem] w-60 bg-gradient-to-r from-purple to-blue rounded-3xl flex flex-col justify-center items-start p-8">
                <Link to="/user/1">
                <li className="text-lg font-normal font-mono text-gray-400 hover:text-gray-200 hover:cursor-pointer ">Profile</li></Link>
                <div className="border border-t mt-1 mb-1 border-gray-200 w-full"></div>
                <Link to="/user/1/posts">
                <li className="text-lg font-normal font-mono text-gray-400 hover:text-gray-200 hover:cursor-pointer ">Posts</li></Link>
                <div className="border border-t mt-1 mb-1 border-gray-200 w-full"></div>
                <Link to="/user/1/gallery">
                <li className="text-lg font-normal font-mono text-gray-400 hover:text-gray-200 hover:cursor-pointer">Gallery</li></Link>
                <div className="border border-t mt-1 mb-1 border-gray-200 w-full"></div>
                <Link to="/user/1/todo">
                <li className="text-lg font-normal font-mono text-gray-400 hover:text-gray-200 hover:cursor-pointer ">ToDo</li></Link>
                <div className="border border-t mt-1 mb-1 border-gray-200 w-full"></div>
            </ul>
    )

}
export default SideBar;