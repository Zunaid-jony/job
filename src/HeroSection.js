import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Productone from './Productone';

const HeroSection = () => {
    const [fakeData, setDate] = useState([]);
    const [fakeDat, setDat] = useState([]);
    useEffect(() => {
        fetch(
          "fakedata.json"
        )
          .then((res) => res.json())
          .then(data => setDate(data))
       
    
      }, []);




      useEffect(() => {
        fetch(
          "fakedata.json"
        )
          .then((res) => res.json())
          .then(data => setDate(data))
       
    
      }, []);
    return (
        <div className='grid md:grid-cols-3  ml-auto mr-auto '>
            
            {fakeData.map((product) =>
            <div key={product.id} className="ml-auto mr-auto"> 
             <img className='w-20 mt-4 ml-auto mr-auto' src={product?.picture} alt="" />
             <p>{product.name}</p>
             <div className='w-8'>
             <p className='flex w-12 '> <span className='mr-4'> {product?.price}  </span> <span className='text-[#d44949]'>-{product?.discount}</span></p>
             </div>
            </div>
         )}
            

          
        </div>
    );
};

export default HeroSection;