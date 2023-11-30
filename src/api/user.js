import axios from "axios";


const API = 'http://localhost:1538/api'
export const registerRequest = async (user) =>{
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

    try {
        const response = await axios.post(`${API}/register`, formData, {
            headers: {
            'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
};