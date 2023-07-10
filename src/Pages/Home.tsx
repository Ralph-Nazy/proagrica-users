import React from "react";
import { Link } from "react-router-dom";

const links = [
    {
        id:1,
        name: "User List",
        url: "users",
    },
    {
        id:2,
        name: "Drag and Drop",
        url: "drap-drop",
    },
    {
        id:3,
        name: "Dashboard",
        url: "dashboard",
    },
    {
        id:4,
        name: "Chat Application",
        url: "chat-application",
    }
]

const HomePage: React.FC<{}> = () => {

    return(
        <div className="my-24">
        <div className="container mx-auto px-10 lg:px-24">
            <div className="grid grid-cols-2 gap-4">
                {links.map((link, index) =>(
                    <Link key={index} to={link.url}>
                    <div className="rounded-[10px] bg-slate-300 text-center shadow-md p-12 cursor-pointer">
                    {link.name}
                </div>
                </Link>
                ))} 
            </div>
        </div>
        </div>
    )
}

export default HomePage