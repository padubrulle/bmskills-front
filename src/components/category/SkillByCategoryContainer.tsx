import { SkillCardsContainer } from "../skillcard/SkillCardsContainer";

import '../style/_skills.css'

export function SkillByCategoryContainer({category, skills}){
    
    return <div className="skill-container">
        <details>
            <summary>
                <div className="category-name">{category.name} :</div>
            </summary>
            <SkillCardsContainer skills={skills}/>
        </details>
    </div>
}