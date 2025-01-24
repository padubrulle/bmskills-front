import { createBrowserRouter, NavLink, RouterProvider } from 'react-router-dom';

import { SkillPage } from './views/skills/SkillPage';
import { AdminLoginPage } from './views/login/AdminLoginPage';
import { AdminAddSkill } from './views/admin/skills/AdminAddSkill';
import { AdminAddTalent } from './views/admin/talents/AdminAddTalent';
import AdminDashboard from './views/admin/dashboard/AdminDashboard';
import { AdminAddRecruiter } from './views/admin/recruiters/AdminAddRecruiter';
import { UserLoginPage } from './views/login/UserLoginPage';
import { MainLayout } from './views/main/MainLayout';
import { SkillListPage } from './views/skills/SkillListPage';
import { HomePage } from './views/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout pageContent={<HomePage />} />
  },
  {
    path: '/skill/all',
    element: <MainLayout pageContent={<SkillListPage />} />
  },
  {
    path: '/skill/:id',
    element: <MainLayout pageContent={<SkillPage />} />
  },
  {
    path: '/adminlogin',
    element: <AdminLoginPage />
  },
  {
    path: 'login',
    element: <MainLayout pageContent={<UserLoginPage />} />,
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
  return <RouterProvider router={router} />
  
}





export default App
