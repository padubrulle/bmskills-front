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
    return  <div className="card">
        <NavLink to={`/skill/${skill.id}`}>
            <div className='card-img'>
                {skill.img_url ? <img src={skill.img_url}/> : <img src="https://placehold.co/300x300"/>}
            </div>
            <div className='card-infos'>
                <h4 className='skill-name'><b>{skill.name}</b></h4>
                <p className='skill-price-infos'>Prix: {skill.base_price}€</p>
            </div>
        </NavLink>
        <button className='bi bi-cart-plus'></button>
    </div>
}