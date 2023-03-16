import { useParams } from "react-router-dom";
import { useAPI } from "../utils/userContext";
import Header from "./Header";
import Profile from "./Profile";
import SideBar from "./SideBar";

const HeroPage= ()=>{
    const {users} = useAPI();
    const id = useParams();
    const newUser = users.filter(user=>user.id==id.id);
    console.log(id,users,newUser);
    return(
        <div className="flex px-5 pt-5">
            <SideBar />
            <div className="flex flex-col">
                <div>
                    <Header user={newUser} />
                    <div className="border border-t mt-1 mb-1 border-gray-200 w-full mx-5"></div>
                </div>
                <div>
                    <Profile  user={newUser} />
                </div>
            </div>
        </div>
    )
}
export default HeroPage;