
export function EmptySkillByCategoryContainer({category}){

    return <div className="skill-container">
        <h2>{category.name} : </h2>
        <p>Sorry, no skills in this category at the moment</p>
    </div>
}