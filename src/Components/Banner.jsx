import React, { useState } from 'react'
const Banner = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = () => {
        onSearch(searchTerm);
      };
    return (
        <div className='bg-black'>
            <div className=" min-h-screen " style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="bg-white h-screen bg-opacity-80 flex items-center justify-center ">

                    <div className=" text-black font-bold  flex flex-col items-center gap-10   ">
                        <h1 className=" text-5xl text-center font-bold">I Grow By Helping People In Need</h1>
                        <div className="join">
                            <input className="input input-bordered join-item" value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)}/>
                            <button className="btn join-item bg-red-500 text-white rounded" onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Banner;
