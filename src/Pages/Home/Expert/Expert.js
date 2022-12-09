import { Card } from 'flowbite-react';
import React from 'react';

const Expert = ({ expert }) => {
    const { name, img, desc } = expert;
    return (
        <div className="max-w-sm">
        <Card imgSrc={img}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <button className="bg-blue-600 rounded text-lg text-white py-1 px-2 my-2 hover:bg-blue-500 hover:text-gray-800">Book Now</button>
        </Card>
      </div>
    );
};

export default Expert;