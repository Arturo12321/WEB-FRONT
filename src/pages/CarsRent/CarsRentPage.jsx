/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useCarsRent } from "../../context/CarsRentContext";
import { useUser } from "../../context/UserContext"
import { Link } from "react-router-dom";
import days from "dayjs";
import utc from "dayjs-plugin-utc";
days.extend(utc)

export default function CarsRentPage() {

  const {user} = useUser()

  const { getCarsRent, carsRent } =  useCarsRent();

  console.log(user);

  useEffect(() => {
    getCarsRent();
  },[]);

  return (
    <section className="content">
        <div className="container-fluid">
            <div className="row m-t-sm">
                <div className="col-md-15">
                    <div className="panel">
                        <div className="panel-body">
                            <div className="col-md-12 col-sm-12" id="list_alumnos">
                                <div className="panel panel-filled">
                                    <div className="panel-body">
                                        <div className="row ">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div className="card-header card-header-third-2 rounded">
                                                    <h1 className="card-header-title">Hola {user.firstname}</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container-responsive principal">
                                            <div className="row">
                                                <div className="col-lg-12 text-center">
                                                    <div className="row">
                                                        {carsRent.map((carRent) => (
                                                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={carRent._id}>
                                                                <div className="card-section border rounded ml-4 mr-4">
                                                                    <div className="card-header card-header-third rounded">
                                                                        <h3 className="card-header-title">{carRent.model}</h3>
                                                                    </div>
                                                                    <div className="card-body card-body-third "> 
                                                                        <img className="card-img card-img-top "  src={`${carRent.image}`}  alt="..."  />    
                                                                        <h3 className="card-text-third">Marca : {carRent.brand}</h3>
                                                                        <h3 className="card-text-third">Precio $/. {carRent.price}</h3>
                                                                        <h3 className="card-text-third">Fecha : {days(carRent.year).utc().format('DD/MM/YYYY')}</h3>
                                                                        <hr className="card-divider card" />       
                                                                        <div className="panel-body">
                                                                            {carRent.description}
                                                                        </div>
                                                                        <div className="card-button-third">
                                                                            <Link to={`/carRentPay/${carRent._id}`}>
                                                                                <i className="fa fa-automobile text-accent"></i>
                                                                            </Link>&nbsp;&nbsp; 
                                                                            <i className="fa fa fa-heart-o text-accent "></i>&nbsp;&nbsp;
                                                                            <Link to={`/carRent/${carRent._id}`}>
                                                                              <i className="fa fa-sharp fa-eye text-accent "></i> 
                                                                            </Link>&nbsp;&nbsp;  
                                                                        </div>                     
                                                                    </div>         
                                                                </div> 
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
