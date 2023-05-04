import React from 'react';
const Footer = () => {
    return (
        <div className='bg-gray-700 py-8'>
            <div className='flex justify-center gap-4'>
                <img src="https://img.icons8.com/arcade/30/null/facebook-new.png" />
                <img src="https://img.icons8.com/fluency/30/null/instagram-new.png" />
                <img src="https://img.icons8.com/external-those-icons-flat-those-icons/30/null/external-WhatsApp-Logo-social-media-those-icons-flat-those-icons.png" />
            </div>
            <ul className='flex justify-center gap-4 mt-6 text-white'>
                <li>ADDRESS</li>
                <li>OWNER</li>
                <li>CONTACT</li>
                <li>VIEW</li>
                <li>MENU</li>
            </ul>
            <h1 className='text-center text-white font-semibold mt-4'><span className='text-red-600 text-lg'>@FOOD-VALLY</span> Korean Restaurent</h1>
        </div>
    );
};

export default Footer;