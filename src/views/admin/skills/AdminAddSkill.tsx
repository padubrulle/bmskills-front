import { useEffect, useState } from "react";
import { FormInput } from "../../../components/common/FormInput";
import { FormTextArea } from "../../../components/common/FormTextArea";
import { SelectElement } from "../../../components/common/SelectElement";
import { AdminNavbar } from "../../../components/navbar/admin/navbar";


export function AdminAddSkill() {

    const [categories, setCategories] = useState('');
    const [skill, setSkill] = useState({
        name: '',
        description: '',
        base_price: 5,
        img_url: '',
        category_id: ''
    });
    useEffect(() => {
        fetch('http://localhost:5000/category')
        .then(async (response) => {
            const resp = await response.json()
            setCategories(resp);
        })
        .catch((error) => console.error("Error: ", error))  
    }, []);

    function handleSubmit(event){
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({ 
                name: skill.name,
                description: skill.description,
                base_price: skill.base_price,
                img_url: skill.img_url,
                category_id: skill.category_id
            })
        }
        fetch('http://localhost:5000/skill', requestOptions)
        .then(async (response) => console.log(await response.json()))
    }

    function handleChange(event, objProp) {
        let updatedValue = { [objProp]: event.target.value };
        setSkill(skill => ({...skill, ...updatedValue }));
    }

    return <>
        <AdminNavbar />
        <div>
            <form onSubmit={handleSubmit}>
                <h1 style={{color: "white"}}>Ajouter un nouveau skill</h1>
                <FormInput fieldName={"skillname"} text={"Skill name"} type="text" required={true} onChange={(event) => handleChange(event, 'name')}/>
                <FormTextArea fieldName={"skilldesc"} text={"Skill description"} onChange={(event) => handleChange(event, 'description')}/>
                <FormInput fieldName={"skillprice"} text={"Skill base price"} type="text" onChange={(event) => handleChange(event, 'base_price')}/>
                <FormInput fieldName={"imgurl"} text={"Skill image url"} type="text" onChange={(event) => handleChange(event, 'img_url')}/>
                <SelectElement list={categories} name={categories} value={skill.category_id} onChange={(event) => handleChange(event, 'category_id')}/>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    </>
}