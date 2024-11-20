import { useParams } from "react-router-dom";
import { SkillCard } from "../skills/SkillCard";
import { useEffect, useState } from "react";

/**
 * @returns The page of a single skill
 */
export function SkillPage() {
    const {id} = useParams()
    const card = []
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/skills/${id}`)
        .then(async (response) => {
            const resp = await response.json()
            setData(resp);

        } )
        .catch((error) => console.error('Erreur: ', error))
    }, []);

    card.push(<SkillCard skill={data} key={data.name}/>)

    return <div className='my-3'>
    <h1>Bienvenue sur la page de {data.name}</h1>
    {card}
  </div>
}