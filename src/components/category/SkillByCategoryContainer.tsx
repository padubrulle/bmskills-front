import { SkillCardsContainer } from "../skillcard/SkillCardsContainer";

export function SkillByCategoryContainer({category, skills}){

    return <div>
        <h2>{category.name} : </h2>
        <SkillCardsContainer skills={skills}/>
    </div>
}