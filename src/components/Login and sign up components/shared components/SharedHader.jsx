import React from 'react';

const SharedHeader = ({heading,paragraph}) => {
    return (
        <div className='text-center mb-6'>
            <h1 className='mb-3 font-bold text-3xl'>{heading}</h1>
            <p className='font-thin text-lg'>{paragraph}</p>
        </div>
    );
};

export default SharedHeader;