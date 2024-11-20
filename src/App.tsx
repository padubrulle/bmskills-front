import './App.css';
import { createBrowserRouter, NavLink, RouterProvider } from 'react-router-dom';

import { SkillPage } from './components/pages/SkillPage';
import { SkillListPage } from './components/pages/SkillListPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world
      <nav>
        <NavLink to="/skills">Liste des compétences</NavLink>
      </nav>
    </div>
  },
  {
    path: '/skills',
    element: <SkillListPage />
  },
  {
    path: '/skills/:id',
    element: <SkillPage />
  }
])

function App() {
  return <RouterProvider router={router}/>
}



export default App
