import React from 'react'
import CatagoryCards from './CatagoryCards';
const Catagories = ({ data, searchTerm }) => {
    // console.log(data)
    //    const {id , image, category, title, donate_amount, description, card_color, category_color, title_color} = data;
    // console.log(id);
    const filteredData = data.filter((catagory) =>
    catagory.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
    return (
        <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10'>
            {filteredData.map((catagory) => (
        <CatagoryCards catagory={catagory} key={catagory.id} />
      ))}
        </div>
    );
}
export default Catagories;
