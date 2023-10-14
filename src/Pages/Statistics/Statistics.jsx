import React, { useEffect, useState } from 'react'
import Piechart from '../../Components/Piechart';

const Statistics =()=>{
   const [donatedItems, setDonatedItems]= useState([]);
    const donatedItem = JSON.parse(localStorage.getItem('donated'))
    useEffect(()=>{
        setDonatedItems(donatedItem);
    },[])
return(
<div className='flex flex-col gap-16 justify-center items-center h-screen'>
    <Piechart  donatedItems={donatedItems}/>
    <div className='flex flex-col lg:flex-row gap-20'>
        <div className='flex items-center gap-2'>
            <h1 className='text-lg font-semibold'>Total donation</h1>
            <div className='w-20 h-3 bg-[#FF444A] '> </div>
        </div>
        <div className='flex items-center gap-2'>
            <h1 className='text-lg font-semibold'>Your donation</h1>
            <div className='w-20 h-3 bg-[#00C49F] '></div>
        </div>
    </div>
</div>
);
}
export default Statistics;
