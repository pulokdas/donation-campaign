import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
const Mainlayout =()=>{
return(
<div className=' overflow-hidden'>
 <Navbar/>
<Outlet/>
</div>
);
}
export default Mainlayout;



