import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import './sidebar.css'
import Modal from '../CustomModal/Modal';
import CreateCategory from '../AddCategory/CreateCategory';
import AddProduct from '../AddProduct/AddProduct';


const SideBar = () => {

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

   

  return (
    <div className=''>
      <aside className="relative  bg-sidebar h-screen w-64 hidden sm:block shadow-xl ">
        <div className="p-6">
            <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                <i className="fas fa-plus mr-3"></i> Product List App
            </button>
        </div>
        <nav className="text-white text-base font-semibold pt-3">
            <a href="/" className="flex items-center  text-white py-4 pl-6 nav-item">
                <i className="fas fa-tachometer-alt mr-3"></i>
                Dashboard
            </a>
            <a href="#" onClick={()=>setIsOpen1(true)} className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i className="fas fa-sticky-note mr-3"></i>
                Add Category
            </a>
             <Modal isOpen={isOpen1} onClose={() => setIsOpen1(false)}>
            <div className="flex justify-end">
                <button className="" onClick={() => setIsOpen1(false)}>
                <FaTimes className=' text-black' /> 
                </button>
            </div>
            <CreateCategory setIsOpen1={setIsOpen1}/>
            </Modal>

           
            <a href="#" onClick={()=>setIsOpen2(true)} className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i className="fas fa-align-left mr-3"></i>
                Add Product
            </a>
            <Modal isOpen={isOpen2} onClose={() => setIsOpen2(false)}>
            <div className="flex justify-end">
                <button className="" onClick={() => setIsOpen2(false)}>
                <FaTimes className=' text-black' /> 
                </button>
            </div>
            <AddProduct />
            </Modal>
         
        </nav>
        <a href="#" className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4">
            <i className="fas fa-arrow-circle-up mr-3"></i>
        
        </a>
       

    </aside>
    </div>
  );
};

export default SideBar;
