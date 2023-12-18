import axios from "./axios";

export const getCarsRentRequest = () => axios.get("/cars/rent/getcars");

export const getMyCarsRentRequest = () => axios.get("/mycars/rent/getmycars");

export const getCarRentRequest = (id) => axios.get(`/car/rent/getcar/${id}`);

export const createCarRentRequest = (carRent) => {
    const formData = new FormData();
    formData.append("brand", carRent.brand);
    formData.append("model", carRent.model);
    formData.append("year", carRent.year);
    formData.append("image", carRent.image);
    formData.append("license_plate_number", carRent.license_plate_number);
    formData.append("color", carRent.color);
    formData.append("price", carRent.price);
    formData.append("description", carRent.description);
    formData.append("transmission", carRent.transmission);
    formData.append("fuel", carRent.fuel);
    formData.append("seats", carRent.seats);
    formData.append("engine", carRent.engine);
    formData.append("mileage", carRent.mileage);

    return axios.post("/car/rent/createcar", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const updateCarRentRequest = (id, carRent) => {
    const formData = new FormData();
    formData.append("brand", carRent.brand);
    formData.append("model", carRent.model);
    formData.append("year", carRent.year);
    formData.append("image", carRent.image);
    formData.append("license_plate_number", carRent.license_plate_number);
    formData.append("color", carRent.color);
    formData.append("price", carRent.price);
    formData.append("description", carRent.description);
    formData.append("transmission", carRent.transmission);
    formData.append("fuel", carRent.fuel);
    formData.append("seats", carRent.seats);
    formData.append("engine", carRent.engine);
    formData.append("mileage", carRent.mileage);

    return axios.put(`/car/rent/updatecar/${id}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const deleteCarRentRequest = (id) => axios.delete(`/cars/rent/deletecar/${id}`);