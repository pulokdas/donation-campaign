import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
const Donate =()=>{
    const [card , setcard]= useState({});
    const {id} = useParams();
    console.log(id);

    const data = useLoaderData();
    console.log(data);
    useEffect(() => {
        if (data) {
          const findCard = data.find((card) => card.id === id);
          setcard(findCard);
        }
      }, [id, data]);
      console.log(card);
      const {image, donate_amount, title_color}= card;
     
return(
<div>
<div className="hero min-h-screen" style={{backgroundImage: `url(${image})`} }>
      <button className={`btn-lg px-10 rounded-lg text-3xl text-center bg-${title_color} text-white font-bold absolute bottom-0 left-5`}>Donate ${donate_amount}</button>
  
  
</div>
</div>
);
}
export default Donate;