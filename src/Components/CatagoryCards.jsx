import React from 'react';
import { Link } from 'react-router-dom';

const CatagoryCards = ({ catagory }) => {
  const { id, image, category, title, donate_amount, description, card_color, category_color, title_color } = catagory;
  console.log(category_color, card_color);

  return (
    <div>
      <Link to={`/donate/${id}`}>
      <div className={`relative space-y-4 flex h-96 flex-col rounded-xl bg-[${card_color}] bg-clip-border text-gray-700 shadow-md`}>
        <div className="relative m-0 overflow-hidden rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img src={image} alt="ui/ux review check" />
        </div>
        <div className="px-5">
          <div className={`bg-[${category_color}] text-[${title_color}] text-lg w-1/3 text-center font-medium mt-2 px-2.5 py-0.5 rounded`}>
            {category}
          </div>
        </div>
        <div className="px-5">
          <h4 className={`block font-sans text-3xl font-semibold text-[${title_color}] mb-4 antialiased`}>
            {title}
          </h4>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default CatagoryCards;
