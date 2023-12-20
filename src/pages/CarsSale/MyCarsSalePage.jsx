/* eslint-disable react-hooks/exhaustive-deps */
import {  Link } from "react-router-dom";
import { useEffect } from "react";
import { useCarsSale } from "../../context/CarsSaleContext";
import { useUser } from "../../context/UserContext";
import days from "dayjs";
import utc from "dayjs-plugin-utc";
days.extend(utc)

export default function MyCarsSalePage() {

    const { user } = useUser();
    const { getMyCarsSale, deleteCarSale, carsSale } = useCarsSale();
    console.log(user);
    useEffect(() => {
        getMyCarsSale();
    },[]);

    if (carsSale.length === 0) return (
        <section className="content">
            <div className="container-center md animated slideInDown">
    
                <div className="view-header">
                    <div className="header-icon">
                        <i className="pe page-header-icon pe-7s-close-circle"></i>
                    </div>
                    <div className="header-title">
                        <h1>There are no Cars available . . .</h1>
                    </div>
                </div>
                <div className="panel panel-filled">
                    <div className="panel-body"> 
                        Hello {user.firstname}, there are no cars on this page, you can refresh the page or you can come back in a moment.
                    </div>
                    <div className="panel-body">
                        Sorry..
                    </div>
                </div>
                <div>
                    <Link to="/carSaleForm" className="btn btn-accent">CREATE NEW CAR</Link>
                </div>
            </div>
        </section>
    );

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
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <h5 className="m-t-xs">Cars registered for sale.</h5>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 text-right">
                                                <div className="panel-body buttons-margin">
                                                    <Link id="btnNuevo" className="btn btn-w-md btn-info"
                                                        to="/carSaleForm">New Car</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table table-hover table-striped" >
                                                <thead >
                                                    <tr>
                                                        <th>Model</th>
                                                        <th>Brand</th>
                                                        <th>Car plate</th>
                                                        <th>Color</th>
                                                        <th>Price</th>
                                                        <th>Publication date</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {carsSale.map((carSale) => (
                                                        <tr key={carSale._id}>
                                                            <td>{carSale.model}</td>
                                                            <td>{carSale.brand}</td>
                                                            <td>{carSale.license_plate_number}</td>
                                                            <td>{carSale.color}</td>
                                                            <td>{carSale.price}</td>
                                                            <td>{days(carSale.createdAt).utc().format('DD/MM/YYYY')}</td>
                                                            <td>
                                                                <i  style={{ fontSize: '25px' }} className="pe pe-7s-trash text-accent " onClick={() =>{deleteCarSale(carSale._id)}}></i>&nbsp;&nbsp;
                                                                <Link to={`/carSaleForm/${carSale._id}`}>
                                                                    <i  style={{ fontSize: '25px' }} className="pe pe-7s-pen text-accent" ></i>
                                                                </Link>&nbsp;&nbsp;
                                                                <Link to={`/carSale/${carSale._id}`}>
                                                                    <i  style={{ fontSize: '25px' }} className="fa fa-sharp fa-eye text-accent" ></i>
                                                                </Link>    
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="container-responsive principal">
                                            <div className="row">
                                                <div className="col-lg-12 text-center">
                                                    <div className="row">
                                                        {carsSale.map((carSale) => (
                                                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={carSale._id}>
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
                                                                        <div className="panel-body"> {carSale.description}</div>
                                                                        <div className="card-button-third"> 
                                                                            <i className="pe pe-7s-trash text-accent" onClick={() =>{deleteCarSale(carSale._id)}}></i>&nbsp;&nbsp;
                                                                            <Link to={`/carSale/${carSale._id}`}>
                                                                                <i className="fa fa-sharp fa-eye text-accent"></i>
                                                                            </Link> &nbsp;&nbsp;
                                                                            <Link to={`/carSaleForm/${carSale._id}`}>
                                                                                <i className="pe pe-7s-pen text-accent "></i> 
                                                                            </Link>     
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
