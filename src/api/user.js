import axios from "axios";


const API = 'http://localhost:1538/api'
export const registerRequest = (user) =>{
    const formData = new FormData();

    formData.append("username", user.username);
    formData.append("firstname", user.firstname);
    formData.append("lastname", user.lastname);
    formData.append("dni", user.dni);
    formData.append("birth_date", user.birth_date);
    formData.append("company_name", user.company_name);
    formData.append("ruc", user.ruc);
    formData.append("email", user.email);
    formData.append("address", user.address);
    formData.append("cell_phone", user.cell_phone);
    formData.append("password", user.password);
    formData.append("image", user.image);

    return axios.post(`${API}/register`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const loginRequest = (user) => axios.post (`${API}/login`,user);