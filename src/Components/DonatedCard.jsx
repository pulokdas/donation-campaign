import React from 'react'
const DonatedCard =({donatedCard})=>{
    const {id , image, category, title, donate_amount, description, card_color, category_color, title_color} = donatedCard;
return(
<div style={{backgroundColor: `${card_color}`}} className={`card card-side shadow-xl`}>
  <figure className='w-1/3  bg-black pb-0'><img className=' h-full w-full   ' src={image}/></figure>
  <div className="card-body">
  <div >
          <div style={{backgroundColor: `${category_color}`, color: `${title_color}`}}  className={`  w-1/4  text-center font-medium mt-2 px-2 py-0.5 rounded`}>
            <h1 className='p-1'>{category}</h1>
          </div>
        </div>
    <h2 className="card-title text-3xl font-bold">{title}</h2>
    
    <div className="card-actions mt-5 ">
      <button style={{backgroundColor: `${title_color}`}} className={`btn text-white`}>View Details</button>
    </div>
  </div>
</div>
);
}
export default DonatedCard;
