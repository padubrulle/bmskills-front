import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { SkillCardsContainer } from './components/skills/SkillCardsContainer';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/skills')
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.error('Erreur: ', error))
  }, []);

  console.log(data)
  return (
    <div className='my-3'>
      <h1>Liste des compétences :</h1>
      <SkillCardsContainer skills={data}/>
    </div>
  )
}

export default App
