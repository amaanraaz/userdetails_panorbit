import { Link } from "react-router-dom";
import User from "./User";

const UserMenu = ({user})=>{
    return(
        <div className="absolute left-[75%] mt-16 bg-gray-200 w-64 h-80 p-3 flex flex-col items-center content-center rounded-2xl ">
            <div>
            <img src={user[0].profilepicture} className="h-24 rounded-full" />
            </div>
            <div>
            <h2 className="text-lg font-bold font-mono text-gray-600">{user[0].name}</h2>
            <h3 className="text-sm font-bold font-mono text-gray-500">{user[0].email}</h3>
            </div>
            <div className="overflow-y-scroll scroll-">
                <User />
            </div>
            <div>
                <Link to="/">
                <button className="bg-rose-400 px-2 py-1 rounded-2xl text-white font-semibold text-base">
                    Sign Out</button></Link>
            </div>            
        </div>
    )
}
export default UserMenu;