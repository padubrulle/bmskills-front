import '../style/_skills.css'
import { ReactElement } from "react"

/**
 * Une carte de skill pour un PLP
 * @param {string} name
 * @param {string} description
 * @param {number} base_price
 * @param {string} img_url
 */
export function SkillCard({skill}): ReactElement{
    return <div className="card">
        <div className="">
            {skill.img_url ? <img src={skill.img_url}/> : <img src="https://placehold.co/300x300"/>}
            <h4><b>{skill.name}</b></h4>
            <p>{skill.description}</p>
            <p>Prix: {skill.base_price}€</p>
        </div>
  </div>
}