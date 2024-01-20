import React, { useState, useEffect } from 'react';
import { addCategory, getCategories } from '../../Constants/Services'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateCategory = () => {
  const [name, setName] = useState('');
  const [parent, setParent] = useState(null);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const response = await getCategories(); 
        setAllCategories(response.data);
      } catch (error) {
        console.error('Error fetching all categories:', error);
      }
    };

    fetchAllCategories();
  }, []);

  const isUniqueName = (name) => {
    return !allCategories.some(category => category.name === name.trim());
  };

// fuction for submitting categories
  const handleSubmit = async (e) => {
    e.preventDefault();
  
      if (name.trim().length === 0) {
        return toast.error('Please enter a valid category name');
      }
    
      if (!isUniqueName(name)) {
        return toast.error('Category name must be unique');
      }
    
     
    try {
      await addCategory(name, parent );
      setName('');
      setParent(null);
      toast.success('Category added successfully');
    } catch (error) {
      console.error('Error adding category:', error);
      toast.error('Failed to add category. Please try again.');
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Add Category
          </h4>
          <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Enter category name.
          </p>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 flex flex-col gap-6">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label
                  className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                  htmlFor="name"
                >
                  New Category
                </label>
              </div>

              <div className="relative h-11 w-full min-w-[200px]">
                <select
                  className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  value={parent || ''}
                  onChange={(e) => setParent(e.target.value || null)}
                >
                  <option value="" disabled>
                    Select Parent Category
                  </option>
                  {allCategories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <label
                  className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                  htmlFor="parent"
                >
                  Parent Category
                </label>
              </div>
            </div>

            <button
              className="mt-6 block w-full select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
              data-ripple-light="true"
            >
              Save
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default CreateCategory;
