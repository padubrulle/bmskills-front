import { createBrowserRouter, NavLink, RouterProvider } from 'react-router-dom';

import { SkillPage } from './views/SkillPage';
import { SkillListPage } from './views/SkillListPage';
import { AdminLoginPage } from './views/AdminLoginPage';
import { AdminAddSkill } from './views/admin/addskill/AdminAddSkill';

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
  },
  {
    path: '/adminlogin',
    element: <AdminLoginPage />
  },
  {
    path: '/admin/skills/add',
    element: <AdminAddSkill />
  }
])

function App() {
  return <RouterProvider router={router}/>
}



export default App
