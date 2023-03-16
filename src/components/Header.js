const Header = ({user})=>{
    return(
        <div className="flex justify-between w-[70vw] mx-5 my-5 items-start">
            <h3 className="text-lg font-bold font-mono text-gray-500">Profile</h3>
            <div className="flex justify-between items-center"> 
                <img src={user[0].profilepicture} alt="img"  className="h-7 w-7 rounded-full"/>
                <h3 className="text-base font-bold font-mono text-gray-400 ml-2">{user[0].name}</h3>
            </div>
        </div>
    )
}
export default Header;