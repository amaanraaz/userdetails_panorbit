const User = ({users})=>{
    console.log(users);
    return(
        <>
        {
            users.map((user)=>{
                return(
                    <>
                    <div key={user.id} className="flex justify-start items-center">
                        <img src={user.profilepicture} alt="user" className="w-8 h-8 rounded-3xl" />
                        <h2 className="mx-3 text-sm font-serif font-semibold text-gray-600">{user.name}</h2>
                    </div>
                    <div className="border border-t mt-2 mb-2 border-gray-300"></div>
                    </>
                )
            })
        }
        
        </>
    )
}
export default User;