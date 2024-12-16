import { useEffect, useState } from "react";
import { AdminButtonLogin } from "../admin/AdminButton";
import { AdminInput } from "../admin/AdminInput";
import '../components/style/_admin.css'

export function AdminLoginPage() {
    // function loginCheck(username, password){
    //     const [isLoginAttemptValid, setIsLoginAttempt] = useState(false);
    
    //     useEffect(() => {
    //         fetch(`http://localhost:5000/recruiter/${username}/password/${password}`)
    //         .then(async (response) => {
    //             const resp = await response.json();
    //             setIsLoginAttempt(resp.useFound);
    //         })
    //     })
    
    //     return isLoginAttemptValid;
    // }

    // function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    //     event.preventDefault();
    //     onSubmitLogin()
    // }

    return <form>
        <AdminInput fieldName="email" type="text" text="Email" />
        <div style={{paddingTop: "10%"}}>
        <AdminInput fieldName="password" type="password" text="password" />
        </div>
        <div style={{paddingTop: "10%"}}>
        <AdminButtonLogin />
        </div>
    </form>
}

