import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ICategory } from "../../interfaces/ICatergory";
import { ISkill } from "../../interfaces/ISkill";

import '../../components/style/_spd.css'


/**
 * @returns The page of a single skill
 */
export function SkillPage() {
    const {id} = useParams()
    const [skill, setSkill] = useState<ISkill>({
        name: '',
        base_price: 0
    });
    const [category, setCategory] = useState<ICategory>({
        id:'',
        name:''
    });

    useEffect(() => {
        fetch(`http://localhost:5000/skill/${id}`)
        .then((res) => res.json())
        .then((data) => setSkill(data))
        .then()
        .catch((error) => console.error('Erreur: ', error))
    }, []);

    useEffect(() => {
        if(skill.category_id){
            fetch(`http://localhost:5000/category/${skill.category_id}`)
            .then((res) => res.json())
            .then((data) => setCategory(data))
            .catch((error) => console.error('Erreur: ', error))
        }
    }, [skill]);
    
    if(!skill){
        return <div>Chargement...</div>
    }     

    return <div className="compo">
        <div className="spd">
            <div className="skill-infos">
                <div className="leftCol">
                    <img src={skill.img_url}></img>
                </div>
                <div className="rightCol">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-category">{category.name}</div>
                    <hr />
                    <div className="skill-baseprice">Base Price 
                        <div className="price">{skill.base_price} €</div>
                    </div>
                    <div className="skill-finalprice">Final Price 
                        <div className="price">{skill.base_price + (skill.base_price *0.2)} €</div>
                    </div>
                </div>
            </div>
            <div className="skill-description">
                <h2>Description</h2>
                <div className="description">{skill.description}</div>
            </div>
        </div>
    </div>
}