import { ReactElement } from "react";
import { Navbar } from "../navbar";
import { Methodbar } from "./methodbar";

const LINKS = [
    {name: "Skills", url:"/admin/skill"},
    {name: "Recruiter", url:"/admin/recruiter"},
    {name: "Talent", url:"/admin/talent"},
]

export function AdminNavbar(): ReactElement{
    return <div>
        <Navbar links={LINKS}/>
    </div>
}