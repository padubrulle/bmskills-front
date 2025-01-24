import { useEffect, useState } from "react";
import { LoginButton } from "../../admin/LoginButton";
import { LoginFormInput } from "../../admin/LoginFormInput";
import { LoginFormTitle } from "../../components/common/LoginFormTitle";
import '../../components/style/_login.css'
import { setCookie } from "../../security/CookieProvider";


export function UserLoginPage() {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    function handleSubmit(event){
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({ 
                email: user.email,
                password: user.password
            })
        }

        
        fetch(`http://localhost:5000/auth/login`, requestOptions)
        .then(async (response) => {
            const resp = await response.json();
            
            if(response.ok){
                setCookie('user-login', resp.access_token, 1);
            } else {
                throw new Error('login invalide');
            }
        })
    
    }


    function handleChange(event, objProp){
        let updatedValue = { [objProp]: event.target.value };
        setUser(user => ({...user, ...updatedValue }));
    }

    return <div className="admin-form">
        <form onSubmit={handleSubmit}>
            <LoginFormTitle title="Connexion" />
            <LoginFormInput fieldName="email" type="text" text="Email" onChange={(event) => handleChange(event, 'email')} />
            <LoginFormInput fieldName="password" type="password" text="password" onChange={(event) => handleChange(event, 'password')}/>
            <LoginButton />
        </form>
    </div>
    
}

