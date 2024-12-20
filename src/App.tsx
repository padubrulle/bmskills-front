import { createBrowserRouter, NavLink, RouterProvider } from 'react-router-dom';

import { SkillPage } from './views/skills/SkillPage';
import { SkillListPage } from './views/skills/SkillListPage';
import { AdminLoginPage } from './views/AdminLoginPage';
import { AdminAddSkill } from './views/admin/skills/AdminAddSkill';
import { AdminAddTalent } from './views/admin/talents/AdminAddTalent';
import AdminDashboard from './views/admin/dashboard/AdminDashboard';
import { AdminAddRecruiter } from './views/admin/recruiters/AdminAddRecruiter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <h1>Hello world</h1>
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
    path: '/admin/talent/add',
    element: <AdminAddTalent />
  },
  {
    path: '/admin/recruiter/add',
    element: <AdminAddRecruiter />
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
