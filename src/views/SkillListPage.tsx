import { useEffect, useState } from "react";
import { SkillCardsContainer } from "../components/skills/SkillCardsContainer";

export function SkillListPage(){
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch('http://localhost:5000/skills')
      .then(async (response) => {
        const resp = await response.json()
        setData(resp);
      } )
      .catch((error) => console.error('Erreur: ', error))
    }, []);
  
    return (
      <div className='my-3'>
        <h1>Liste des compétences :</h1>
        <SkillCardsContainer skills={data}/>
      </div>
    )
  }