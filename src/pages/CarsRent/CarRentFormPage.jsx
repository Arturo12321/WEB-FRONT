/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { useCarsRent } from "../../context/CarsRentContext";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
    
export default function CarRentFormPage() {

    const {register,setValue, handleSubmit, formState: { errors } } = useForm();
    const {createCarRent, getCarRent, updateCarRent } = useCarsRent();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadCar() {
            if(params.id) {
                const carRent = await getCarRent(params.id);
                console.log(carRent);
                setValue('brand', carRent.brand);
                setValue('model', carRent.model);
                setValue('year', dayjs(carRent.year).utc().format('YYYY-MM-DD'));
                setValue('image', carRent.image);
                setValue('license_plate_number', carRent.license_plate_number);
                setValue('color', carRent.color);
                setValue('price', carRent.price);
                setValue('description',carRent.description);
                setValue('transmission',carRent.transmission);
                setValue('fuel',carRent.fuel);
                setValue('seats',carRent.seats);
                setValue('engine',carRent.engine);
                setValue('mileage',carRent.mileage);
            }
        }
        loadCar()
    },[])

    const onSubmit = handleSubmit ((data) => {
        const { brand, model, year, image, license_plate_number, color, price, description, transmission, fuel, seats, engine, mileage} = data;
        const carRentData = { 
            brand, 
            model, 
            year, 
            image: image[0], 
            license_plate_number, 
            color, 
            price, 
            description, 
            transmission, 
            fuel, 
            seats, 
            engine, 
            mileage
        };
        if (params.id) {
            updateCarRent(params.id, carRentData);
        }else {
            createCarRent(carRentData);
        }
        navigate('/pages/CarsRent/CarsRentPage');
    });

    return (
        <section className="content">
            <div className="container-center lg animated slideInDown">
                <div className="view-header">
                    <div className="header-icon">
                        <i className="pe page-header-icon pe-7s-car"></i>
                    </div>
                    <div className="header-title">
                        <h3>Register New Car for Rent</h3>
                        <small>
                            Please enter all information to register a car for rental.
                        </small>
                    </div>
                </div>
                <div className="panel panel-filled">
                    <div className="panel-body">
                        <form onSubmit={onSubmit}>
                            <div className="form-group col-lg-4">
                                <label className="control-label">Brand</label>
                                <input type="text" className="form-control" placeholder="Enter brand"
                                    {...register("brand", { required: true })} />
                                <span className="   help-block small">Your unique brand to app</span>
                                {errors.brand && (
                                    <p className="text-red-500">Brand is required!</p>            
                                )}
                            </div>
                            <div className="form-group col-lg-4">
                                <label className="control-label">Model</label>
                                <input type="text" className="form-control" placeholder="Enter model"
                                    {...register("model", { required: true })} />
                                <span className="help-block small">Your unique model to app</span>
                                {errors.model && (
                                    <p className="text-red-500">Model is required!</p>            
                                )}
                            </div>
                            <div className="form-group col-lg-4">
                                <label className="control-label">Year</label>
                                <input type="date" className="form-control"
                                    {...register("year", { required: true })} />
                                <span className="help-block small">Your unique year to app</span>
                                {errors.year && (
                                    <p className="text-red-500">Year is required!</p>            
                                )}
                            </div>
                            <div className="form-group col-lg-4">
                                <label className="control-label">Plate number</label>
                                <input type="text" className="form-control" placeholder="Enter Plate number"
                                    {...register("license_plate_number", { required: true })} />
                                <span className="help-block small">Your unique Plate number to app</span>
                                {errors.license_plate_number   && (
                                    <p className="text-red-500">Plate number is required!</p>            
                                )}
                            </div>
                            <div className="form-group col-lg-3">
                                <label className="control-label">Color</label>
                                <input type="text" className="form-control" placeholder="Color"
                                    {...register("color", { required: true })} />
                                <span className="help-block small">Your unique color to app</span>
                                {errors.color   && (
                                    <p className="text-red-500">Color is required!</p>            
                                )}
                            </div>
                            <div className="form-group col-lg-2">
                                <label className="control-label">Seats</label>
                                <input type="number" className="form-control" placeholder="Capacity"
                                    {...register("seats", { required: true })} />
                                <span className="help-block small">Your unique seats</span>
                                {errors.seats   && (
                                    <p className="text-red-500">Seats is required!</p>            
                                )}
                            </div>

                            <div className="form-group col-lg-3">
                                <label className="control-label">Transmission</label>
                                <input type="text" className="form-control" placeholder="Transmission"
                                    {...register("transmission", { required: true })} />
                                <span className="help-block small">Your unique transmission</span>
                                {errors.transmission   && (
                                    <p className="text-red-500">Transmission is required!</p>            
                                )}
                            </div>

                            <div className="form-group col-lg-3">
                                <label className="control-label">Price</label>
                                <input type="number" className="form-control" placeholder="Enter price"
                                    {...register("price", { required: true })}/>
                                <span className="help-block small">Your unique price to app</span>
                                {errors.price && (
                                    <p className="text-red-500">Price is required!</p>            
                                )}
                            </div>

                            <div className="form-group col-lg-3">
                                <label className="control-label">Mileage</label>
                                <input type="number" className="form-control" placeholder="Enter mileage"
                                    { ...register("mileage", { required: true })}/>
                                <span className="help-block small">Your unique mileage to app</span>
                                {errors.mileage && (
                                    <p className="text-red-500">Mileage is required!</p>            
                                )}
                            </div>

                            <div className="form-group col-lg-3">
                                <label className="control-label">Engine</label>
                                <input type="text" className="form-control" placeholder="Enter engine"
                                    {...register("engine", { required: true })}/>
                                <span className="help-block small">Your unique engine to app</span>
                                {errors.engine && (
                                    <p className="text-red-500">Engine is required!</p>            
                                )}
                            </div>

                            <div className="form-group col-lg-3">
                                <label className="control-label">Fuel</label>
                                <input type="text" className="form-control" placeholder="Enter el fuel."
                                    {...register("fuel", { required: true })}/>
                                <span className="help-block small">Your unique fuel to app</span>
                                {errors.fuel && (
                                    <p className="text-red-500">Fuel is required!</p>            
                                )}
                            </div>
                            <div className="form-group ">
                                <label className="control-label">Description</label>
                                <textarea type="text" rows="3" className="form-control" placeholder="Enter description" 
                                    {...register("description", { required: true })}/>
                                <span className="help-block small">Your unique description to app</span>
                                {errors.description && (
                                    <p className="text-red-500">Description is required!</p>            
                                )}
                            </div>
                            <div className="form-group">
                                <label className="control-label">Image</label>
                                <input type="file" className="form-control" placeholder="Enter imagen"
                                        {...register("image", { required: true })}/>   
                                    {errors.image && (
                                        <p className="text-red-500">Image is required!</p>            
                                    )}
                                </div>
                            <div  className="col-sm-12 text-right">
                                <div className="panel-body buttons-margin">
                                    <button type="submit" className="btn btn-w-md btn-success">Add Car</button>&nbsp;&nbsp;
                                    <Link className="btn btn-w-md btn-warning" to="/myCarsRent">Return</Link>
                                </div>
                            </div>    
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
