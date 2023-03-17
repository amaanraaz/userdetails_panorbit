import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import UserMenu from "./UserMenu";

const Header = ({user})=>{
    // creating a show state variabele for checking whether the side menu for users and sign out is clicked or not
    const [show,setShow] = useState(false);
    // creating a variable for checking at which route we are there and showing the same on header section
    let headText = "";
    const xy = useLocation().pathname;
    console.log(xy);
    xy.includes("post")?headText="Posts":
    xy.includes("gallery")?headText="Gallery":
    xy.includes("todo")?headText="TODO":
    headText="Profile"
    console.log(headText);
    

    return(
        <div className="flex flex-col">
        <div className="flex justify-between w-[70vw] mx-5 my-5 items-start">
            <h3 className="text-lg font-bold font-mono text-gray-500">{headText}</h3>
            <div>
                <div className="flex justify-between items-center cursor-pointer" onClick={()=>{setShow(!show)}}> 
                    <img src={user[0].profilepicture} alt="img"  className="h-7 w-7 rounded-full"/>
                    <h3 className="text-base font-bold font-mono text-gray-400 ml-2">{user[0].name}</h3>
                </div>
            </div>
        </div>
        <div className="border border-r mx-10 border-gray-200 h-full "></div>
            {show && <UserMenu user={user}/>}
            
        </div>
    )
}
export default Header;