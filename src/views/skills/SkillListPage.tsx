import { useEffect, useState } from "react";
import { SkillByCategoryContainer } from "../../components/category/SkillByCategoryContainer";
import { EmptySkillByCategoryContainer } from "../../components/category/EmptySkillByCategoryContainer";

export function SkillListPage(){
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [skillsByCategory, setSkillsByCategory] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/category')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Erreur: ',error))
    }, []);

    useEffect(() => {
      fetch('http://localhost:5000/skill')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Erreur: ', error))
    }, []);

    useEffect(() => {
      if (categories.length > 0 && data.length > 0) {
        const combinedSkills = categories.map((cat) => {
          const filteredSkills = data.filter((skill) => skill.category_id === cat.id);
          if(filteredSkills.length>0){
            return <SkillByCategoryContainer key={cat.id} category={cat} skills={filteredSkills} />;
          } else {
            return <EmptySkillByCategoryContainer key={cat.id} category={cat} />
          }
        });
        setSkillsByCategory(combinedSkills);
      }
    }, [categories, data]);

    if(!data || !categories){
      return <div>Chargement...</div>
    }
  
    return (
      <div className=''>
        <h1>Liste des compétences :</h1>
        {skillsByCategory}
      </div>
    )
  }