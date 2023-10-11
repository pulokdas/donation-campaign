import React from 'react'
import CatagoryCards from './CatagoryCards';
const Catagories = ({ data }) => {
    // console.log(data)
    //    const {id , image, category, title, donate_amount, description, card_color, category_color, title_color} = data;
    // console.log(id);
    return (
        <div className='w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
            {
                (data ?? []).map(catagory => <CatagoryCards catagory={catagory}/>)
            }
        </div>
    );
}
export default Catagories;
