import { SkillCardsContainer } from "../skillcard/SkillCardsContainer";
import { ICategory } from "../../interfaces/ICatergory";
import { ISkill } from "../../interfaces/ISkill";

import '../style/_skills.css'

interface SkillByCategoryContainerProps{
    category: ICategory,
    skills: ISkill[]
}


export function SkillByCategoryContainer({category, skills}: SkillByCategoryContainerProps){
    let container;
    if(skills.length === 0){
        container = <p>Sorry, no skills in this category at the moment</p>
    } else {
        container = <SkillCardsContainer skills={skills}/>
    }
    return <div className="skill-container">
        <details>
            <summary>
                <div className="category-name">{category.name} :</div>
            </summary>
            {container}
        </details>
    </div>
}