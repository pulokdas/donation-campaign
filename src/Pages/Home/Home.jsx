import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import Catagories from '../../Components/Catagories';
import Banner from '../../Components/Banner';
const Home =()=>{
  
    const data = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
      setSearchTerm(term);
    };
return(
  <div className=' space-y-10'>
      <Banner onSearch={handleSearch} />
      <Catagories data={data} searchTerm={searchTerm} />
  </div>
);
}
export default Home;
