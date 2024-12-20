import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import '../../components/style/_spd.css'

/**
 * @returns The page of a single skill
 */
export function SkillPage() {
    const {id} = useParams()
    const [data, setData] = useState({});
    const [category, setCategory] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/skill/${id}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .then()
        .catch((error) => console.error('Erreur: ', error))
    }, []);

    useEffect(() => {
        if(data.category_id){
            fetch(`http://localhost:5000/category/${data.category_id}`)
            .then((res) => res.json())
            .then((data) => setCategory(data))
            .catch((error) => console.error('Erreur: ', error))
        }
    }, [data]);
    
    if(!data){
        return <div>Chargement...</div>
    }     

    return <div className="compo">
        <div className="spd">
            <div className="skill-infos">
                <div className="leftCol">
                    <img src={data.img_url}></img>
                </div>
                <div className="rightCol">
                    <div className="skill-name">{data.name}</div>
                    <div className="skill-category">{category.name}</div>
                    <hr />
                    <div className="skill-baseprice">Base Price 
                        <div className="price">{data.base_price} €</div>
                    </div>
                    <div className="skill-finalprice">Final Price 
                        <div className="price">{data.base_price + (data.base_price *0.2)} €</div>
                    </div>
                </div>
            </div>
            <div className="skill-description">
                <h2>Description</h2>
                <div className="description">{data.description}</div>
            </div>
        </div>
    </div>
}