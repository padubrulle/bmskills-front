import { ChangeEvent, FormEvent, useState } from "react";
import { FormInput } from "../../../components/common/FormInput";
import { AdminNavbar } from "../../../components/navbar/admin/navbar";


export function AdminAddTalent() {
    const [talent, setTalent] = useState({
        email: "",
        password: "",
        first_name: "",
        last_name: ""
    });

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({ 
                email: talent.email,
                password: talent.password,
                first_name: talent.first_name,
                last_name: talent.last_name
            })
        }
        fetch('http://localhost:5000/talent', requestOptions)
        .then(async (response) => console.log(await response.json()))
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>, objProp: string) {
        let updatedValue = { [objProp]: event.target.value };
        setTalent(talent => ({...talent, ...updatedValue }));
    }

    return <>
        <AdminNavbar />
        <div>
            <form onSubmit={handleSubmit}>
                <h1 style={{color: "white"}}>Ajouter un nouveau talent</h1>
                <FormInput fieldName={"talentemail"} text={"Email"} type="text" required={true} onChange={(event) => handleChange(event, 'email')}/>
                <FormInput fieldName={"talentpassword"} text={"Password"} type="password" required={true} onChange={(event) => handleChange(event, 'password')}/>
                <FormInput fieldName={"talentfirstname"} text={"First name"} type="text" required={true} onChange={(event) => handleChange(event, 'first_name')}/>
                <FormInput fieldName={"talentlastname"} text={"Last name"} type="text" required={true} onChange={(event) => handleChange(event, 'last_name')}/>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    </>
}