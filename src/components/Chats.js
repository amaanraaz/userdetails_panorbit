import { useContext, useState } from "react";
import { useAPI } from "../utils/userContext";

const Chats = ()=>{
    // creating a state variable for checking whether the div for chat need to be showed or not
    const[show,setShow] = useState(false);
    // fetching the data from context
    const {users} = useAPI();

    return(

    <div className="float-right bg-blue w-44 rounded-t-lg h-9 flex flex-col justify-between items-center mt-7 cursor-pointer" onClick={()=>setShow(!show)}>
                <div className=" flex justify-between">
                <h2 className="mx-3 text-base font-semibold text-gray-100">Chats</h2>
               {show ? <h2 className="mx-3 text-base font-semibold text-gray-100">^</h2> :
                    <h2 className="mx-3 text-base font-semibold text-gray-100">⌄</h2>
               }
               </div>
               <div>
               {
                // logic for showing div of chat section
                show&& <div className="p-3">
                    {users.map((user)=>{
                        return(
                        <div className="flex justify-start items-center">
                            <img src={user.profilepicture} alt="img" className="h-8 rounded-full ml-2" />
                            <h3 className="ml-2">{user.name}</h3>
                        </div>)
                    })}
                </div>
               }
               </div>
    </div>
    )

}
export default Chats;