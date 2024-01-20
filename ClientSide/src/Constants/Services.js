import { userAxios } from "../Axios/UserAxios";


// Axios API calls for adding a category
export const addCategory = async (name, parent) => {  
    try {
        const response = await userAxios.post('/addCategory', { name, parent });
    } catch (error) {
        console.error('Error adding category:', error);
    }
};

// Axios API call to get all categories
export const getCategories = async () => {
    try {
        const response = await userAxios.get('/categories');
        return response.data; 
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

// Axios API call for adding a product
export const addProducts = async (productName, price, category, description, image, stock) => {
    try {
        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('description', description);
        formData.append('stock', stock);
        for (let i = 0; i < image.length; i++) {
            formData.append('image', image[i]);
        }

        const response = await userAxios.post('/addProduct', formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Axios API call to get products for a selected category
export const getSelectedProducts = async (categoryId) => {
    try {
        const response = await userAxios.get('/getSelectedProducts', {
            params: {
                categoryId: categoryId,
            },
        });
        console.log(response.data,'ppppp');
        return response.data;
    } catch (error) {
        console.error("Error fetching selected products:", error);
        throw error; 
    }
};

// Axios API call to get all categories in a tree-like structure
export const getAllCategories = async () => {
    try {
        const response = await userAxios.get('/getAllCategories');
        return response.data;
    } catch (error) {
        throw error;
    }
};


// Axios API call to get all Products
export const getAllProducts = async () => {
    try {
        const response = await userAxios.get('/getAllProducts');
        return response.data;
    } catch (error) {
        throw error;
    }
};
