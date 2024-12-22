import { ReactElement } from "react"
import { SkillCard } from "./SkillCard"
import '../style/_skills.css'

/**
 * @param {JSON} skills
 * @returns cards container
 */
export function SkillCardsContainer({skills}): ReactElement{
    const cards = []
    if(skills){
      if(skills.length > 0){
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