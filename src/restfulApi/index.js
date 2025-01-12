import axios from 'axios';

const categoryDB = () => {
    return axios.get('http://localhost:8081/api/v1/category');
};

// login by tk admin
const loginAdmin = (formData) => {
    return axios.post('http://localhost:8081/api/v1/login-admin', formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

// check phiên login admin
const versionLogin = () => {
    //return axios.get('http://localhost:8081/api/v1/check-login-admin');
    const token = localStorage.getItem('role'); // Lấy token từ localStorage
    return axios.get('http://localhost:8081/api/v1/check-login-admin', {
        headers: {
            Authorization: `Bearer ${token}`, // Gửi token trong header
        },
    });
};

// xử lý logout admin
// const logoutAdmin = () => {
//     const token = localStorage.getItem('token'); // Lấy token từ localStorage
//     return axios.get('http://localhost:8081/api/v1/logout-admin', {
//         headers: {
//             Authorization: `Bearer ${token}`, // Gửi token trong header
//         },
//     });
// };

// nhận database Products phân trang
const paginationProductsDB = (currentPages, currentLimit) => {
    return axios.get(`http://localhost:8081/api/v1/products/read?page=${currentPages}&limit=${currentLimit}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

// createProducts
const createProductsDB = (formData) => {
    // Log the FormData
    console.log('restful');
    for (const [key, value] of formData.entries()) {
        console.log(key, value);
    }
    return axios.post(`http://localhost:8081/api/v1/create-products`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

const updateProductsDB = (formData, id) => {
    return axios.post(`http://localhost:8081/api/v1/update-products/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

const deleteProductDB = (id) => {
    return axios.delete(`http://localhost:8081/api/v1/delete-products/${id}`);
};

// shoppingCart
const shoppingCart = (formData) => {
    return axios.post('http://localhost:8081/api/v1/shopping-cart', formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

// shopping cart login success
const shoppingCartLogin = (cart) => {
    return axios.post('http://localhost:8081/api/v1/shopping-cart-login', cart, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

// xử lý xóa sản phẩm trong shopping cart
const deleteShoppingCart = (id) => {
    return axios.post(`http://localhost:8081/api/v1/delete-shopping-cart/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

// check login
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return decodeURIComponent(parts.pop().split(';').shift());
    }
    return null;
};
const checkLoginStatus = getCookie('status');
// take data shopping cart
const takeDataShoppingCart = () => {
    if (checkLoginStatus === 'true') {
        return axios.get('http://localhost:8081/api/v1/take-data-shoppingcart');
    } else {
        return;
    }
};

// take and display data products
// take toastCart
const toastCart = (id) => {
    return axios.get(`http://localhost:8081/api/v1/take-data-toast-cart/${id}`);
};
// trang chủ
const takeDataProducts = () => {
    return axios.get('http://localhost:8081/api/v1/take-data-products');
};
//trang áo nam
const takeDataShirtMent = () => {
    return axios.get('http://localhost:8081/api/v1/take-data-shirt-men');
};
// trang quần
const takeDataPants = () => {
    return axios.get('http://localhost:8081/api/v1/take-data-pants');
};
// trang phụ kiện
const takeDataAccessories = () => {
    return axios.get('http://localhost:8081/api/v1/take-data-accessories');
};
// trang sale
const takeDataSale = () => {
    return axios.get('http://localhost:8081/api/v1/take-data-sale');
};
// end take data

// take data phụ kiện tương thích
const takeDataCategory = () => {
    return axios.get('http://localhost:8081/api/v1/take-data-compatible-accessories');
};
// end

// search product
const searchProducts = (formData) => {
    return axios.post(`http://localhost:8081/api/v1/search-products`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

// category product
const categoryProduct = (id) => {
    return axios.get(`http://localhost:8081/api/v1/category-products/${id}`);
};
//

// result search
const getKeyWword = () => {
    return axios.get(`http://localhost:8081/api/v1/search-keyword`);
};

// take category
const takeCategory = () => {
    return axios.get('http://localhost:8081/api/v1/take-data-category');
};

// auth
const register = (formData) => {
    return axios.post('http://localhost:8081/api/v1/register', formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

const login = (formData) => {
    return axios.post('http://localhost:8081/api/v1/login', formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

const checkLogin = () => {
    return axios.get('http://localhost:8081/api/v1/check-login');
};

// clearSessionLogin
const clearSessionLogin = () => {
    return axios.get('http://localhost:8081/api/v1/clear-session-login');
};

// thanh toán
const payment = (data) => {
    return axios.post('http://localhost:8081/api/v1/payment', data);
};

// lấy thông tin người dùng
const getUser = (userId) => {
    return axios.get(`http://localhost:8081/api/v1/get-user/${userId}`);
};

// cập nhật thông tin người dùng
const updataInfoUser = (data) => {
    return axios.post('http://localhost:8081/api/v1/updata-info-user', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

// xử lý like product
const likeProduct = (formData) => {
    return axios.post('http://localhost:8081/api/v1/like-product', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};
export default {
    categoryDB,
    // admin
    loginAdmin,
    versionLogin,

    paginationProductsDB,
    createProductsDB,
    updateProductsDB,
    deleteProductDB,
    shoppingCart,
    shoppingCartLogin,
    deleteShoppingCart,
    takeDataShoppingCart,
    //
    toastCart,
    takeDataProducts,
    takeDataShirtMent,
    takeDataPants,
    takeDataAccessories,
    takeDataSale,
    //
    searchProducts,
    categoryProduct,
    //
    getKeyWword,
    //
    takeCategory,
    //
    takeDataCategory,
    //
    register,
    login,
    checkLogin,
    clearSessionLogin,

    // thanh toán
    payment,
    getUser,
    updataInfoUser,
    likeProduct,
};
