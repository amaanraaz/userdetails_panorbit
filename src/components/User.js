import { Link } from "react-router-dom";
import { useAPI } from "../utils/userContext";

const User = ()=>{
    const {users} = useAPI();
    return(
        <>
        {
            users.map((user)=>{
                return(
                    <>
                    <Link to={"/user/"+user.id} key={user.id}>
                        <div className="flex justify-start items-center">
                            <img src={user.profilepicture} alt="user" className="w-8 h-8 rounded-3xl" />
                            <h2 className="mx-3 text-sm font-serif font-semibold text-gray-600">{user.name}</h2>
                        </div>
                        <div className="border border-t mt-2 mb-2 border-gray-300"></div>
                    </Link>
                    </>
                )
            })
        }
        
        </>
    )
}
export default User;