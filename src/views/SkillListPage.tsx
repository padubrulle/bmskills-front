import { useEffect, useState } from "react";
import { SkillCardsContainer } from "../components/skill/SkillCardsContainer";

export function SkillListPage(){
    const [data, setData] = useState(null);
    const [categories, setCategories] = useState(null);

    useEffect(() => {
      fetch('http://localhost:5000/category')
      .then(async(response) => {
        const resp = await response.json();
        setCategories(resp);
      })
      .catch((error) => console.error('Erreur: ',error))
    }, []);

    useEffect(() => {
      fetch('http://localhost:5000/skill')
      .then(async (response) => {
        const resp = await response.json()
        setData(resp);
      } )
      .catch((error) => console.error('Erreur: ', error))
    }, []);

    for(let category of categories){
      //create the container with the name of category
      //and filter skills based on categories

      // const filteredSkills = data.filter(skill => {
      //   skill.category === category.name
      // })
    }

    console.log(data);
  
    return (
      <div className='my-3'>
        <h1>Liste des compétences :</h1>
        <SkillCardsContainer skills={data}/>
      </div>
    )
  }