import { ReactElement } from "react";
import { Navbar } from "../navbar";

const LINKS = [
    {name: "Skills", url:"/admin/skill/add"},
    {name: "Recruiter", url:"/admin/recruiter/add"},
    {name: "Talent", url:"/admin/talent/add"},
]

export function AdminNavbar(): ReactElement{
    return <div>
        <Navbar links={LINKS}/>
    </div>
}