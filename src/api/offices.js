import axios from "./axios";

export const getOfficesRequest = () => axios.get("/offices/getoffices");

export const getMyOfficesRequest = () => axios.get("/offices/getmyoffices");

export const getOfficeRequest = (id) => axios.get(`/office/getoffice/${id}`);

export const createOfficeRequest = (office) => {

    const formData = new FormData();
    formData.append("name", office.name);
    formData.append("address", office.address);
    formData.append("city", office.city);
    formData.append("country", office.country);
    formData.append("phone", office.phone);
    formData.append("email", office.email);
    formData.append("latitude", office.latitude);
    formData.append("longitude", office.longitude);
    formData.append("image", office.image);

    return axios.post("/office/createoffice", formData, {
        headers: {
            "Content-Type" : "multipart/form-data",
        },
    });
};

export const updateOfficeRequest = (id, office) => {
    
    const formData = new FormData();
    formData.append("name", office.name);
    formData.append("address", office.address);
    formData.append("city", office.city);
    formData.append("country", office.country);
    formData.append("phone", office.phone);
    formData.append("email", office.email);
    formData.append("latitude", office.latitude);
    formData.append("longitude", office.longitude);
    formData.append("image", office.image);

    return axios.put(`/office/updateoffice/${id}`, formData, {
        headers: {
            "Content-Type" : "multipart/form-data",
        },
    });
};

export const deleteOfficeRequest = (id) => axios.delete(`/office/deleteoffice/${id}`);