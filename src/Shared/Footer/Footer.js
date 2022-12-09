import React from 'react';

const Footer = () => {
    let today = new Date();
    let year = today.getFullYear()
    return (
        <div className='bg-gray-700 h-16 mt-8 flex items-center justify-center'>
            <h4 className='text-white'>copyright &copy;{year};</h4>
        </div>
    );
};

export default Footer;