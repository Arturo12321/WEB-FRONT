import axios from "./axios";

export const getCarsSaleRequest = () => axios.get("/cars/sale/getcars")

export const getMyCarsSaleRequest = () => axios.get("/mycars/sale/getmycars")

export const getCarSaleRequest = (id) => axios.get(`/car/sale/getcar/${id}`)

export const createCarSaleRequest = (carSale) => {
    const formData = new FormData();
    formData.append("brand", carSale.brand);
    formData.append("model", carSale.model);
    formData.append("year", carSale.year);
    formData.append("image", carSale.image);
    formData.append("license_plate_number", carSale.license_plate_number);
    formData.append("color", carSale.color);
    formData.append("price", carSale.price);
    formData.append("description", carSale.description);
    formData.append("transmission", carSale.transmission);
    formData.append("fuel", carSale.fuel);
    formData.append("seats", carSale.seats);
    formData.append("engine", carSale.engine);
    formData.append("mileage", carSale.mileage);

    return axios.post("/car/sale/createCar", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const updateCarSaleRequest = (id, carSale) => {
    const formData = new FormData();
    formData.append("brand", carSale.brand);
    formData.append("model", carSale.model);
    formData.append("year", carSale.year);
    formData.append("image", carSale.image);
    formData.append("license_plate_number", carSale.license_plate_number);
    formData.append("color", carSale.color);
    formData.append("price", carSale.price);
    formData.append("description", carSale.description);
    formData.append("transmission", carSale.transmission);
    formData.append("fuel", carSale.fuel);
    formData.append("seats", carSale.seats);
    formData.append("engine", carSale.engine);
    formData.append("mileage", carSale.mileage);

    return axios.put(`/car/sale/updatecar/${id}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const deleteCarSaleRequest = (id) => axios.delete(`/car/sale/deleteCar/${id}`)