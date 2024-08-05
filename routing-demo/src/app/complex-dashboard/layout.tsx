export default function dashboardLayout(
    {children,
        user,
        notification,
        revenue,
    login} : {
    children:React.ReactNode,
    user:React.ReactNode,
    notification:React.ReactNode,
    revenue:React.ReactNode,
    login:React.ReactNode,
}){
    const isLogin = true;
    return isLogin? (
        <div>
        <div>
        {children}
        </div>
        <div style={{display:"flex"}}>
            <div style={{display:"flex" , flexDirection:"column"}}>
                <div>{user}</div> 
                <div>{revenue}</div>
            </div>
            <div style={{display:"flex", flex:1}}>{notification}</div>
        </div>
        </div>
    ):(
        login
    );
}