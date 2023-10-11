import React, { useEffect, useState } from 'react'
import DonatedCard from '../../Components/DonatedCard';
const Donation =()=>{
    const [donation , setDonation]= useState([]);
    const [Nodata , setNodata]= useState('');
const [isShow , setIsShow]=useState(false);
const [buttonText , setButtonText]= useState("Show All")
    useEffect(()=>{
        const donatedItems = JSON.parse(localStorage.getItem('donated'))
        if(donatedItems){
            setDonation(donatedItems)
        }
        else{
            setNodata('No Donation Found')
        }
    },[])
    const handleButton =()=>{
        setIsShow(!isShow)
        if (isShow){
            setButtonText(" Show All");
        }
        else{
            setButtonText("Show Less");
        }
    }
    
return(
<div>
     { Nodata ? <p>{Nodata}</p> : <div className='grid grid-cols-2 gap-5 w-11/12 mx-auto'> 
        
        {
            isShow?donation.map(donatedCard=><DonatedCard donatedCard={donatedCard} />) :
            donation.slice(0,4).map(donatedCard=><DonatedCard donatedCard={donatedCard} />)
        }

        </div>}

        <button onClick={handleButton} class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg block mt-7 bg-green-700 text-white mx-auto">{buttonText}</button>
</div>
);
}
export default Donation;
