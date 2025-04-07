import React, { useState } from 'react';

import { HiOutlineUser, HiOutlineShoppingCart, HiOutlineUserAdd, HiDotsVertical } from 'react-icons/hi';
import { SlArrowDown } from "react-icons/sl";
import { HiMenu } from 'react-icons/hi';


 

const Home = () => {
  const [drop, setDrop] = useState(false);

  const [drop1, setDrop1] = useState(false);

  const [respon, setRespon] = useState(false);




  const aa = () => {  
    if (!drop) { 
        setDrop((prev) => !prev);  
    } else {  
        setDrop((prev) => !prev);  
    }  
};

  
const aa1 = () => {  
  if (!drop) { 
      setDrop1((prev) => !prev);  
  } else {  
      setDrop1((prev) => !prev);  
  }  
};


const searchbar = (e) => {  
  alert("Search not found. "+ e.target.value)
};



  return (
    <div className="bg-white">


<header className="border-b border-gray-200">



        <div className="max-w-7xl mx-auto flex items-center p-4">



          <div className="text-xl font-bold text-blue-600">Flipkart</div>



          <button className="md:hidden text-gray-600 absolute right-[0%]" onClick={() => setRespon(!respon)}><HiMenu className="h-6 w-6" /></button>



          <div className="hidden md:flex items-center space-x-8 flex-grow">

          <input type="text" placeholder="Search products, brands and more" className="flex-grow mx-4 p-2 border border-gray-300 rounded" onChange={searchbar}/>
         


          <nav className="flex items-center space-x-8">





            <button className="flex items-center text-gray-600 hover:text-blue-600 focus:outline-none" onMouseOver={aa1} ><HiOutlineUser className="h-5 w-5 mr-1 " /> Login <SlArrowDown className="h-5 w-5 m-3 mr-1"/></button>




          {drop1 && (

                <div className="absolute top-15 mt-2 w-48 bg-white rounded-md shadow-lg">

                  <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Option 1</a>

                  <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Option 2</a>

                  <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Option 3</a>

                </div>
            )}
            



            <a href="#" className="flex items-center text-gray-600 hover:text-blue-600"><HiOutlineShoppingCart className="h-5 w-5 mr-1" />Cart</a>


            <a href="#" className="flex items-center text-gray-600 hover:text-blue-600"><HiOutlineUserAdd className="h-5 w-5 mr-1" />Become a Seller</a>
            


            <div className="relative">


              <button className="flex items-center text-gray-600 hover:text-blue-600 focus:outline-none" onMouseOver={aa}><HiDotsVertical className="h-5 w-5" /></button>



              {drop && (

                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">

                  <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Option 1</a>

                  <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Option 2</a>

                  <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Option 3</a>

                </div>
              )}



            </div>
          </nav>
          </div>

        </div>
    
    
    {respon && (

    <div className="md:hidden px-4 pb-4 space-y-2 " ><button className="w-full text-left flex items-center text-gray-600 hover:text-blue-600"><HiOutlineUser className="h-5 w-5 mr-2" /> Login</button>

    <a href="#" className="flex items-center text-gray-600 hover:text-blue-600"><HiOutlineShoppingCart className="h-5 w-5 mr-2" /> Cart</a>

    <a href="#" className="flex items-center text-gray-600 hover:text-blue-600"><HiOutlineUserAdd className="h-5 w-5 mr-2" /> Become a Seller</a>

    <a href="#" className="flex items-center text-gray-600 hover:text-blue-600"><HiDotsVertical className="h-5 w-5 mr-2" /> More</a>
   
    </div>
)}

      </header>
    </div>
  );
};

export default Home;  