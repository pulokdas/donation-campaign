import React, { useEffect, useState } from 'react'
import DonatedCard from '../../Components/DonatedCard';
const Donation =()=>{
    const [donation , setDonation]= useState([]);
    const [Nodata , setNodata]= useState('');
    const [showButton, setShowbutton]= useState(false);
const [isShow , setIsShow]=useState(false);
const [buttonText , setButtonText]= useState("Show All")
    useEffect(()=>{
        const donatedItems = JSON.parse(localStorage.getItem('donated'))
        if(donatedItems){
            setDonation(donatedItems)
            if(donatedItems.length >4 ){
                setShowbutton(true);
            }
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
     { Nodata ? <p>{Nodata}</p> : <div><div className='grid grid-cols-1 lg:grid-cols-2 gap-5 w-11/12 mx-auto'> 
        
        {
            isShow?donation.map(donatedCard=><DonatedCard donatedCard={donatedCard} />) :
            donation.slice(0,4).map(donatedCard=><DonatedCard donatedCard={donatedCard} />)
        }
        </div>
           {
            showButton ? <button onClick={handleButton} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg block mt-7 bg-green-700 text-white mx-auto">{buttonText}</button>: <br />
           } </div>}

        
</div>
);
}
export default Donation;
