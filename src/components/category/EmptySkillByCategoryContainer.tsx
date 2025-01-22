import '../style/_skills.css'

export function EmptySkillByCategoryContainer({category}){

    return <div className="skill-container">
        <details>
            <summary>
                <div className="category-name">{category.name} :</div>
            </summary>
            <p>Sorry, no skills in this category at the moment</p>
        </details>
    </div>
}