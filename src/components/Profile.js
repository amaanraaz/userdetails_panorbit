import { useParams } from "react-router-dom";
import mapImg from "../assets/map.jpg"
import { useAPI } from "../utils/userContext";
import Chats from "./Chats"

const Profile = ()=>{
    // fetching data from context
    const {users} = useAPI();
    // fetching the dynamic data from url
    const id = useParams();
    const user = users.filter(user=>user.id==id.id);
    return(
        // user display profile data that we got from context
        <div className="flex w-[75vw] h-[30rem]  mx-5 mt-5">
            <div className="w-1/3">
                <div className="flex flex-col items-center">
                    <img src={user[0].profilepicture} className="h-44 rounded-full" />
                    <h2 className="text-lg font-bold font-mono text-gray-500">{user[0].name}</h2>
                </div>
                <div className="mx-5">
                    {/* user profile details */}
                    <h2 className="text-base font-normal font-mono text-gray-400">username : 
                    <span className="text-base font-bold font-mono text-gray-500"> {user[0].username}</span></h2>
                    <h2 className="text-base font-normal font-mono text-gray-400">email : 
                    <span className="text-base font-bold font-mono text-gray-500"> {user[0].email}</span></h2>
                    <h2 className="text-base font-normal font-mono text-gray-400">Phone : 
                    <span className="text-base font-bold font-mono text-gray-500"> {user[0].phone}</span></h2>
                    <h2 className="text-base font-normal font-mono text-gray-400">Website : 
                    <span className="text-base font-bold font-mono text-gray-500"> {user[0].website}</span></h2>
                    <div className="border border-t mt-1 mb-1 border-gray-200 w-full mx-5"></div>
                    {/* company details */}
                    <h2 className="text-base font-normal font-mono text-gray-400">Name : 
                    <span className="text-base font-bold font-mono text-gray-500"> {user[0].company.name}</span></h2>
                    <h2 className="text-base font-normal font-mono text-gray-400">catchPhrase : 
                    <span className="text-base font-bold font-mono text-gray-500"> {user[0].company.catchPhrase}</span></h2>
                    <h2 className="text-base font-normal font-mono text-gray-400">bs : 
                    <span className="text-base font-bold font-mono text-gray-500"> {user[0].company.bs}</span></h2>
                </div>
            </div>
                <div className="border border-r mx-10 border-gray-200 h-full "></div>
            <div>
                {/* address section starts */}
            <div>
                <h1 className="text-base font-bold font-mono text-gray-500" >Address : </h1>
                <div className="flex mx-8 flex-col">
                <h2 className="text-base font-normal font-mono text-gray-400">Street : 
                    <span className="text-base font-bold font-mono text-gray-500"> {user[0].address.street}</span></h2>
                <h2 className="text-base font-normal font-mono text-gray-400">Suite : 
                    <span className="text-base font-bold font-mono text-gray-500"> {user[0].address.suite}</span></h2>
                <h2 className="text-base font-normal font-mono text-gray-400">city : 
                    <span className="text-base font-bold font-mono text-gray-500"> {user[0].address.city}</span></h2>
                <h2 className="text-base font-normal font-mono text-gray-400">ZipCode : 
                    <span className="text-base font-bold font-mono text-gray-500"> {user[0].address.zipcode}</span></h2>
                </div>
            </div>
            <div>
                {/* map section */}
                <img src={mapImg} className="h-64 mt-5" /> 
                <div className="flex justify-end">
                    <h4 className="text-sm font-bold font-mono text-gray-500">Lat: <span className="text-sm font-bold font-mono text-gray-700">{user[0].address.geo.lat}</span></h4>
                    <h4 className="text-sm font-bold font-mono text-gray-500 ml-2">Long: <span className="text-sm font-bold font-mono text-gray-700">{user[0].address.geo.lng}</span></h4>
                </div>
            </div>
                <Chats/>
            </div>
        </div>
    )
}
export default Profile