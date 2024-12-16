import { createBrowserRouter, NavLink, RouterProvider } from 'react-router-dom';

import { SkillPage } from './views/SkillPage';
import { SkillListPage } from './views/SkillListPage';
import { AdminLoginPage } from './views/AdminLoginPage';
import { AdminAddSkill } from './views/admin/addskill/AdminAddSkill';
import AdminDashboard from './views/admin/dashboard/AdminDashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world
      <nav>
        <NavLink to="/skill/all">Liste des compétences</NavLink>
      </nav>
    </div>
  },
  {
    path: '/skill/all',
    element: <SkillListPage />
  },
  {
    path: '/skill/:id',
    element: <SkillPage />
  },
  {
    path: '/adminlogin',
    element: <AdminLoginPage />
  },
  {
    path: '/admin/skill/add',
    element: <AdminAddSkill />
  },
  {
    path: '/admin/dashboard',
    element: <AdminDashboard />
  }
])

function App() {
  return <RouterProvider router={router}/>
}



export default App
