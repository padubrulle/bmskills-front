import { ReactElement } from "react"
import { SkillCard } from "./SkillCard"

/**
 * @param {JSON} skills
 * @returns 
 */
export function SkillCardsContainer({skills}): ReactElement{
    const cards = []
    console.log(skills)
    if(skills){
      if(skills.length > 1){
        for(let skill of skills){
          cards.push(<SkillCard skill={skill} key={skill.name} />)
        }
      } else {
        cards.push(<SkillCard skill={skills} key={skills.name} />)
      }
    } else {
      return <p>Chargement des compétences...</p>;
    }

    return <div className="card-container">
      {cards}
    </div>
  }