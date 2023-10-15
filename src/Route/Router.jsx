import { createBrowserRouter } from 'react-router-dom'
import Mainlayout from '../Layouts/Mainlayout';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';
import Statistics from '../Pages/Statistics/Statistics';
import Donate from '../Pages/Donation/Donate';
import ErrorPage from '../Pages/error/ErrorPage';
const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout/>,
      errorElement: <ErrorPage />,
      children:[
        {
        path: "/",
        element:<Home/>,
        loader:()=> fetch('/donations.json')
      },
        {
        path: "/donation",
        element:<Donation/>,
        errorElement: <ErrorPage />,
      },
        {
        path: "/Statistics",
        element:<Statistics/>,
      },
      {
        path: "/donate/:id",
        element:<Donate/>,
        loader:()=> fetch('./donations.json'),
        errorElement: <ErrorPage />,
        
      }
    ]
    },
  ]);
export default router;