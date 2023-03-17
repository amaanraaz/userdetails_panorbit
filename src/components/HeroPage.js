import { useParams } from "react-router-dom";
import { useAPI } from "../utils/userContext";
import Header from "./Header";
import Profile from "./Profile";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

// HeroPage is loaded once you clicked on any user from first page
const HeroPage= ()=>{
    const {users} = useAPI();
    const id = useParams();
    const newUser = users.filter(user=>user.id==id.id);
    return(
        <div className="flex px-5 pt-5">
            <SideBar />
            <div className="flex flex-col">
                <div>
                    <Header user={newUser} />
                </div>
                <div>
                    {/* outlet for loading the body section only not the sidebar and header */}
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default HeroPage;