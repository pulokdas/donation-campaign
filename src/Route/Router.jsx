import { createBrowserRouter } from 'react-router-dom'
import Mainlayout from '../Layouts/Mainlayout';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';
import Statistics from '../Pages/Statistics/Statistics';
import Donate from '../Pages/Donation/Donate';
const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout/>,
      children:[
        {
        path: "/",
        element:<Home/>,
        loader:()=> fetch('./donations.json')
      },
        {
        path: "/donation",
        element:<Donation/>,
      },
        {
        path: "/Statistics",
        element:<Statistics/>,
      },
      {
        path: "/donate/:id",
        element:<Donate/>,
        loader:()=> fetch('./donations.json')
      }
    ]
    },
  ]);
export default router;