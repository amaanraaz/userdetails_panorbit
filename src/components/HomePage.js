import { useEffect, useState } from "react";
import User from "./User";

const HomePage = ()=>{
    const[user,setUser] = useState([]);

    useEffect(()=>{
        getUser();
    },[])

    async function getUser(){
        const data = await fetch("https://panorbit.in/api/users.json");
        const json = await data.json();
        // console.log(json);
        setUser(json.users);
    }

    return(
        <div>
            <div className="absolute w-full">
            <span className="bg-gradient-to-r from-purple to-blue h-[50vh]" />
            {/* Created svg using online tools for the wavy effect */}
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#395ac8"></stop><stop offset="95%" stop-color="#702cc8"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 91.57894736842107,214.92822966507177 183.15789473684214,229.85645933014354 281,224 C 378.84210526315786,218.14354066985646 482.9473684210526,191.5023923444976 588,166 C 693.0526315789474,140.4976076555024 799.0526315789474,116.13397129186603 903,126 C 1006.9473684210526,135.86602870813397 1108.8421052631577,179.96172248803825 1198,198 C 1287.1578947368423,216.03827751196175 1363.5789473684213,208.01913875598086 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>
            </div>
            <div className="bg-slate-200 h-24 w-[30rem] mx-[70vh] my-24 absolute rounded-3xl">
                <div className="text-center p-2 text-2xl font-bold font-serif text-gray-500 shadow-lg">Select an account</div>
                <div className="overflow-y-scroll h-[28rem] bg-slate-200 bottom-20 p-7 rounded-3xl">
                    {
                        <User users={user} />
                    }
                </div>
                    
            </div>
        </div>
    )
}

export default HomePage;