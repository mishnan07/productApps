import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  return (
    <div className="mx-auto container py-8  max-h-screen overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductItem
              key={product._id}
              imageSrc={product.image}
              title={product.productName}
              price={`₹${product.price}`}
              description={product.description}
              category={product.category}
              stock={product.stock}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No items found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
