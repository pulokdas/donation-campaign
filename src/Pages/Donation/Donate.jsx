import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from 'react-router-dom';
const Donate = () => {
    const [card, setcard] = useState({});
    const { id } = useParams();
    

    const data = useLoaderData();
    
    useEffect(() => {
        if (data) {
            const findCard = data.find((card) => card.id === id);
            setcard(findCard);
        }
    }, [id, data]);
    
    const { image, donate_amount, title_color, title, description } = card;



    const handleDonation = () => {

        const addedDonationArray = [];

        const donatedItems = JSON.parse(localStorage.getItem('donated'))
        if (!donatedItems) {
            addedDonationArray.push(card);
            localStorage.setItem('donated', JSON.stringify(addedDonationArray));
            toast.success('Thanks For Donating', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            const isExist = donatedItems.find((card) => card.id === id)
            if (!isExist) {
                addedDonationArray.push(...donatedItems, card);
                localStorage.setItem('donated', JSON.stringify(addedDonationArray));
                toast.success('Thanks For Donating', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            else {
                toast.info('You Already Donated Here. Check Donation Page Thank You!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }

    }



    return (
        <div className='w-9/12 mx-auto'>
            <div className="hero min-h-screen rounded-xl mt-5 relative" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60 h-48 absolute  bottom-0 "></div>
                <div className='bg-black bg-opacity-40'>
                    <button style={{backgroundColor: `${title_color}`}} onClick={handleDonation} className={`btn px-10 rounded-lg text-3xl text-center  text-white font-bold absolute bottom-14 left-5`}>Donate ${donate_amount}</button>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    {/* Same as */}
                    <ToastContainer />
                </div>

            </div>
            <div className=' space-y-7 mt-5 '>
                <h1 className='text-5xl font-bold'>{title}</h1>
                <p className='text-2xl pb-10'>{description}</p>
            </div>
        </div>
    );
}
export default Donate;