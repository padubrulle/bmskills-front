import { useEffect, useState } from "react";
import { LoginButton } from "../../admin/LoginButton";
import { LoginFormInput } from "../../admin/LoginFormInput";
import { LoginFormTitle } from "../../components/common/LoginFormTitle";
import '../../components/style/_login.css'


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

    return <div className="adminForm">
        <form>
            <LoginFormTitle title="Connexion Admin" />
            <LoginFormInput fieldName="email" type="text" text="Email" />
            <LoginFormInput fieldName="password" type="password" text="password" />
            <LoginButton />
        </form>
    </div>
    
}

