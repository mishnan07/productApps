import React, { useEffect, useState } from 'react';
import SideBar from '../Components/SideBars/SideBar';
import Navbar from '../Components/NavBar/NavBar';
import { getAllCategories, getAllProducts, getSelectedProducts } from '../Constants/Services';
import ProductList from '../Components/ProductList/ProductList';

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (selectedCategory) {
          const productsData = await getSelectedProducts(selectedCategory);
          setProducts(productsData);
        } else {
          const productsData = await getAllProducts();
          setProducts(productsData);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="w-full lg:flex-1 flex flex-col p-3">
        {/* Navbar */}
        <Navbar categories={categories} setSelectedCategory={setSelectedCategory} />

        {/* Product List */}
        <div className="overflow-y-auto flex-grow">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
