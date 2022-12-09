import React from 'react';

const BookingSuccess = () => {
    const Number = Math.floor(Math.random() * 100);
    console.log(Number)
    return (
        <div>
            <h3>Successs!</h3>
            <p>Your Information has been collected</p>
            <p>You Booking Number is: {Number}</p>
        </div>
    );
};

export default BookingSuccess;