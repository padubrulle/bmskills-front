import { useEffect, useState } from "react";
import { SkillByCategoryContainer } from "../../components/category/SkillByCategoryContainer";
import { EmptySkillByCategoryContainer } from "../../components/category/EmptySkillByCategoryContainer";

export function SkillListPage(){
    const observer = new IntersectionObserver((entries) => {
      for(const entry of entries){
        if(entry.isIntersecting){
          if(!entry.target.classList.contains('already-loaded')){
            entry.target.animate([
              {transform: 'translateY(100px)', opacity: 0},
              {transform: 'translateY(0px)', opacity: 1},
            ], {
                duration: 1000
            }),
            entry.target.classList.add('already-loaded')
          }
        }
      }
    })
      
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

          return <SkillByCategoryContainer key={cat.id} category={cat} skills={filteredSkills} />;
        });
        setSkillsByCategory(combinedSkills);
      }
    }, [categories, data]);

    if(!data || !categories){
      return <div>Chargement...</div>
    }


    const skillscont = document.querySelectorAll('.skill-container')!
    
    skillscont.forEach((element) => {
        observer.observe(element)
    })
  
    return <div className='slp'>
        <h1>Liste des compétences :</h1>
        {skillsByCategory}
      </div>
    
  }