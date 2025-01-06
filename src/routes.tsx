// src/routes.tsx
import { createBrowserRouter } from 'react-router-dom';
import DashbordPage from './pages/DashbordPage';
import EnquiryManagementPage from './pages/EnquiryManagementPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <DashbordPage/>
  },
  {
    path: '/EnquiryManagement',
    element: <EnquiryManagementPage/>
  },
]);

export default router;
