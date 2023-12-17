/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useCarsSale } from "../../context/CarsSaleContext"
import { useUser } from "../../context/UserContext"
import days from "dayjs";
import utc from "dayjs-plugin-utc";
import { Link } from "react-router-dom";
days.extend(utc)


export default function CarsSalePage() {
    const {user} = useUser()

    const { getCarsSale, carsSale } = useCarsSale();

    console.log(user);

    useEffect(() => {
        getCarsSale();
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
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div className="card-header card-header-third-2 rounded">
                                                    <h1 className="card-header-title">Welcome {user.firstname} {user.lastname}</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container-responsive principal">
                                            <div className="row">
                                                <div className="col-lg-12 text-center">
                                                    <div className="row">
                                                        {carsSale.map((carSale) => (
                                                            <div className="col-lg-4 col-md-4 col-sm-6 mb-4" key={carSale._id}>
                                                                <div className="card-section border rounded ml-4 mr-4">
                                                                    <div className="card-header card-header-third rounded">
                                                                        <h3 className="card-header-title">{carSale.model}</h3>
                                                                    </div>
                                                                    <div className="card-body card-body-third "> 
                                                                        <img className="card-img"  src={`${carSale.image}`}  alt="..."  />    
                                                                        <h3 className="card-text-third">Brand : {carSale.brand}</h3>
                                                                        <h3 className="card-text-third">Price $/. {carSale.price}</h3>
                                                                        <h3 className="card-text-third">Date : {days(carSale.year).utc().format('DD/MM/YYYY')}</h3>
                                                                        <hr className="card-divider card" />       
                                                                        <div className="panel-body">
                                                                            {carSale.description}
                                                                        </div>
                                                                        <div className="card-button-third"> 
                                                                            <Link to={`/carSalePay/${carSale._id}`}>
                                                                                <i className="fa fa-automobile text-accent"></i>
                                                                            </Link>&nbsp;&nbsp; 
                                                                            <i className="fa fa fa-heart-o text-accent "></i>&nbsp;&nbsp;
                                                                            <Link to={`/carSale/${carSale._id}`}>
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
