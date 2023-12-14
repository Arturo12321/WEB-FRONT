import axios from "./axios";

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

    return axios.post(`/register`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });
};

export const loginRequest = (user) => axios.post (`/login`,user);

export const verifyTokenRequest = () => axios.get('/verify');


export const getUsersRequest = () => axios.get("/users");

export const getProfileRequest = (id) => axios.get(`/profile/${id}`);
export const getMyProfileRequest = () => axios.get("/myprofile");
export const updateProfileRequest = (id, user) => {
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
    formData.append("role", user.role);

    return axios.put(`/profile/${id}`,formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const deleteUserRequest = (id) => axios.delete(`/user/${id}`);