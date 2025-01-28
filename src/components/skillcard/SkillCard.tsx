import { ReactElement } from "react"
import { NavLink } from 'react-router-dom'

import { ISkill } from "../../interfaces/ISkill"


import '../style/_skills.css'

interface SkillCardProps{
    skill: ISkill;
}

/**
 * Une carte de skill pour une PLP
 * @param {ISkill} skill
 */
export function SkillCard({skill}: SkillCardProps): ReactElement{
    return  <div className="card">
        <NavLink to={`/skill/${skill.id}`}>
            <div className='card-img'>
                {skill.img_url ? <img src={skill.img_url}/> : <img src="https://placehold.co/400x400"/>}
            </div>
            <div className='card-infos'>
                <h4 className='skill-name'><b>{skill.name}</b></h4>
                <p className='skill-price-infos'>Prix: {skill.base_price}€</p>
            </div>
        </NavLink>
        <button className='bi bi-cart-plus'></button>
    </div>
}