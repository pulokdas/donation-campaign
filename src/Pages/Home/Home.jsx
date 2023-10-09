import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Catagories from '../../Components/Catagories';
import Banner from '../../Components/Banner';
const Home =()=>{
    const data = useLoaderData();
    
return(
  <div className=' space-y-10'>
      <Banner/>
<Catagories data={data}/>
  </div>
);
}
export default Home;
