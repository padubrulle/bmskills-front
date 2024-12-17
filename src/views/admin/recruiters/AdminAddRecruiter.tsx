import { useEffect, useState } from "react";
import { FormInput } from "../../../components/common/FormInput";
import { AdminNavbar } from "../../../components/navbar/admin/navbar";


export function AdminAddRecruiter() {
    const [recruiter, setTalent] = useState({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        job_title: ""
    });

    function handleSubmit(event){
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({ 
                email: recruiter.email,
                password: recruiter.password,
                first_name: recruiter.first_name,
                last_name: recruiter.last_name,
                job_title: recruiter.job_title
            })
        }
        fetch('http://localhost:5000/recruiter', requestOptions)
        .then(async (response) => console.log(await response.json()))
    }

    function handleChange(event, objProp) {
        let updatedValue = { [objProp]: event.target.value };
        setTalent(recruiter => ({...recruiter, ...updatedValue }));
    }

    return <>
        <AdminNavbar />
        <div>
            <form onSubmit={handleSubmit}>
                <h1 style={{color: "white"}}>Ajouter un nouveau recruteur</h1>
                <FormInput fieldName={"recruiteremail"} text={"Email"} type="text" required={true} onChange={(event) => handleChange(event, 'email')}/>
                <FormInput fieldName={"recruiterpassword"} text={"Password"} type="password" required={true} onChange={(event) => handleChange(event, 'password')}/>
                <FormInput fieldName={"recruiterfirstname"} text={"First name"} type="text" required={true} onChange={(event) => handleChange(event, 'first_name')}/>
                <FormInput fieldName={"recruiterlastname"} text={"Last name"} type="text" required={true} onChange={(event) => handleChange(event, 'last_name')}/>
                <FormInput fieldName={"recruiterjobtitle"} text={"Job title"} type="text" required={true} onChange={(event) => handleChange(event, 'job_title')}/>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    </>
}