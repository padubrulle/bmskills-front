import { Link, NavLink } from 'react-router-dom'
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
    return <NavLink to={`/skill/${skill.id}`}>
        <div className="card">
                <div className='card-img'>
                    {skill.img_url ? <img src={skill.img_url}/> : <img src="https://placehold.co/300x300"/>}
                </div>
                <h4><b>{skill.name}</b></h4>
                <p>Prix: {skill.base_price}€</p>
        </div>
  </NavLink>
}