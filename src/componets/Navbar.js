import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import HeroSection from '../HeroSection';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [fakeData, setDate] = useState([]);
  useEffect(() => {
      fetch(
        "fakedatatwo.json"
      )
        .then((res) => res.json())
        .then(data => setDate(data))
     
  
    }, []);



    const [fakeDat, setDat] = useState([]);
    useEffect(() => {
        fetch(
          "fakedatalast.json"
        )
          .then((res) => res.json())
          .then(data => setDat(data))
       
    
      }, []);


  return (
    <div className=' container ml-auto mr-auto'>
      <div className='flex justify-between container ml-auto mr-auto mt-2 mb-4'>
        <p>shopcart</p>
        <p className='flex '> <span className='mr-2 flex mt-1 text-xl'> <FaUserCircle></FaUserCircle></span> <span> sign in </span></p>
       

      </div>
      
      <hr />


      <div className='flex justify-between h-16'>
        <p className='bg-[#ffae5d] flex  p-2 mb-3 rounded-lg mt-4'>
           <span className='mr-2 mt-1'><GoLocation></GoLocation></span> <span> Dhaka, 1212</span>
        </p>
      <input
                  className="mt-6 cursor-pointer   ml-auto mr-auto font-bold  w-full p-2.5   border border-black rounded-md shadow-sm outline-none w-1/5 mr-0 "
                  placeholder="Search"
                  disabled 
                  type="search"
                >
                  {/* <BiSearch></BiSearch> */}
       </input>
      </div>
      <div className='md:flex justify-between mt-2'>
        <p>Fresh</p>
        <p>Today's Deals</p>
        <p>Mobiles</p>
        <p>Gift Cards</p>
        <p>Women Clothing</p>
        <p>Men Clothing</p>
        <p>Health</p>
        <p>Pet Corner</p>
        <p>Beauty</p>
        <p>Beauty</p>
        <p>kitchen </p>
        <p>Bed Room</p>
        <p>Sport</p>
        <p>Bags</p>

      </div >

      <div className='grid md:grid-cols-3 ml-auto mr-auto mt-10'>
        <div className='text-2xl font-bold '>
          <p>We Picked some</p>
          <p> <span className='text-[#ffae5d]'>cool things</span>  <span>for</span></p>
          <p>you!</p>
        </div>
        <div className='col-span-2 '>
          <p className='mb-1'>hot deals for you</p>
          <hr className='bg-[#ffae5d]' />
          <HeroSection></HeroSection>
          
          
        </div>
       


      </div>

     
      <div>

      </div>
      <div className='container bg-[#b6adad] h-52 w-2/5 rounded-r-lg'>
        <div className=' grid grid-cols-2'>
          <img className='w-40' src="https://doc-0o-38-docs.googleusercontent.com/docs/securesc/n2d8rmlsebmikp0rtf11bjlhmejt544m/k21di9n5qngl6abodkeegn01jg3d2d4o/1669378575000/04146242941155153142/15975153617238139029/1mYYBivb3sVWKu-MHIV1QcpZmR0dvjBpU?e=view&ax=AEKYgySwOkIQ93J4bvLkYLobG2UtR-xa2PAI8kg0qbYt0KyYSubM6NYsmF9FW0Bq-h9N4KEScWLBCD04ri4bQegCTkidz3SiI3n3SYqa84Et1NtZU_nKs1C6jHHdgOCM2G0822IoKtKJivE9t7fT3n4KjOBy1oHHaGrkQmWLdBmg1qs_EbemGz6mqL3Ah6ZdIND23JWXbTljnnxWdp9IPRUvUJLzO6-PC2jQLi8TrmtakrlmypLt4ulwZZXU9Ym4WGC6IQmppT1GeTgdUT7YgvsTbz7LK7XzfYYZBT-nHOfCy_yvs8mROeY30DG7VZHd8WYWxeGhu0pV5RVCNKXpfPDVPJBJg4kgitJ_q1-OyQowe2U31NlPRgRyavtvwq13iYpiV8xjQnmVoLxFJnKjQ-SUfklgPi-4oJNiz2LaNbqde2wpMFzYnHWDhzis3LTo-iNzW0blfXzqNqKtWeoDhzsZiL79SyMJQLhzc-WPXmY8i6MjekY50CLp0fWA1Me5kH1Q30DE4k2cu3junAlV5T3_MG3cGnvggYmrDlTgR_c1Bl6b9RDp3Adi9-4cLhPDzw3eK3_eWHB-2gPoSoRr1jLl4gJMZMQgLFlkSuH5iEtIVNNtLIGBR9VpdA8Z0V7_cuvj-bm4e9eANONz_bmuX7T302epQdbRscrXARngRGs3vC3SCNjUCca-kZ646dxBTSoc9TOAQS0Y2DYNNQCDmQavI787KajKPF6EX-ZhLf1-brKHCQsBFHNQWIvLk67l4LlhwRnxnYCSIYVPt3szMYuEIKf4ZL-_j1wQhdK_hTw4nylJ3aSOGYNQFgXE_BQbmJe1Ud1DIWXSK1FLM7z3ppgjpbshVgJY20rRhwHpcWprfIYPLO7hOPFEqmABQnS-rXoy416l-vvu8V1kbJu_rnBqzVlPo3f1UGBBla-C1LoZUFWjkcznVc7yJyrX6KvAI0qPkdAY53kov39Y8iK-mQtCUUhwYUAXebYD5uIk-xE5uA3TYg&uuid=01b7e296-051d-457e-ba8f-00450274a3f8&authuser=0&nonce=8aspube6ve0r6&user=15975153617238139029&hash=t0tjnuguoq2r66ieka5dap1h28it5ftd" alt="" />
          <div>
            <p>"Alexa switech on the lights"</p>
            <p>echodot</p>
          </div>

        </div>
      </div>



      <div>
        <p>Today's HOT </p>
        <hr />
        <div className='grid md:grid-cols-4 '>
          <div className=' ml-auto mr-auto flex col-span-3 '>
        
            
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

        </div>
      
      </div>
      <p>Your secti items</p>
      <hr />
      <div className='grid md:grid-cols-4'>
      <div className='flex col-span-3   ml-auto mr-auto '>
        
            
        {fakeDat.map((product) =>
        <div key={product.id} className="ml-auto mr-auto"> 
         <img className='w-20 mt-4 ml-auto mr-auto' src={product?.picture} alt="" />
         <p>{product.name}</p>
         <div className='w-8'>
         <p className='flex w-12 '> <span className='mr-4'> {product?.price}  </span> <span className='text-[#d44949]'>-{product?.discount}</span></p>
         </div>
        </div>
     )}
        

      
  </div>

      </div>
      
      
    </div>
  );
};

export default Navbar;