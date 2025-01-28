import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FormInput } from "../../../components/common/FormInput";
import { FormTextArea } from "../../../components/common/FormTextArea";
import { SelectElement } from "../../../components/common/SelectElement";
import { AdminNavbar } from "../../../components/navbar/admin/navbar";
import { ISkill } from "../../../interfaces/ISkill";
import { ICategory } from "../../../interfaces/ICatergory";


export function AdminAddSkill() {

    const [categories, setCategories] = useState<ICategory[]>([{
        id:'',
        name:''
    }]);
    const [skill, setSkill] = useState<ISkill>({
        name: '',
        base_price: 0
    });
    
    useEffect(() => {
        fetch('http://localhost:5000/category')
        .then(async (response) => {
            const resp = await response.json();
            setCategories(resp);
        })
        .catch((error) => console.error("Error: ", error));
    }, []);

    function handleSubmit(event: FormEvent<HTMLFormElement>){
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

    function handleChange(event: ChangeEvent<HTMLInputElement>, objProp: string) {
        let updatedValue = { [objProp]: event.target.value };
        setSkill(skill => ({...skill, ...updatedValue }));
    }

    /**
     * Temp fix to build. This handle change have to be linked in the custom component
     */
    function FIhandleChange(event: ChangeEvent<HTMLTextAreaElement>, objProp: string) {
        let updatedValue = { [objProp]: event.target.value };
        setSkill(skill => ({...skill, ...updatedValue }));
    }

    /**
     * Temp fix to build. This handle change have to be linked in the custom component
     */
    function SEhandleChange(event: ChangeEvent<HTMLSelectElement>, objProp: string) {
        let updatedValue = { [objProp]: event.target.value };
        setSkill(skill => ({...skill, ...updatedValue }));
    }


    return <>
        <AdminNavbar />
        <div>
            <form onSubmit={handleSubmit}>
                <h1 style={{color: "white"}}>Ajouter un nouveau skill</h1>
                <FormInput fieldName={"skillname"} text={"Skill name"} type="text" required={true} onChange={(event) => handleChange(event, 'name')}/>
                <FormTextArea fieldName={"skilldesc"} text={"Skill description"} onChange={(event) => FIhandleChange(event, 'description')}/>
                <FormInput fieldName={"skillprice"} text={"Skill base price"} type="text" onChange={(event) => handleChange(event, 'base_price')}/>
                <FormInput fieldName={"imgurl"} text={"Skill image url"} type="text" onChange={(event) => handleChange(event, 'img_url')}/>
                <SelectElement list={categories} name='categories' value={skill.category_id!} onChange={(event) => SEhandleChange(event, 'category_id')}/>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    </>
}