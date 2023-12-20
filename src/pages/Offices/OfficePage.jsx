import { useEffect, useState } from "react";
import { useOffices } from "../../context/OfficesContext"
import { useParams } from "react-router-dom";
import days from "dayjs";
import utc from "dayjs-plugin-utc";
days.extend(utc)

export default function OfficePage() {

    const {getOffice} = useOffices();
    const {id} = useParams();
    const [office, setOffice] = useState();

    useEffect(() => {
        async function loadOffice() {
            const officeData = await getOffice(id);
            console.log(officeData);
            setOffice(officeData);
        }
    
        loadOffice();
    }, [getOffice, id]);
    
    if (!office) {
        return <p>Cargando...</p>;
    }


    return (
        <section className="content">
        <div className="container-fluid">
            <div className="row m-t-sm">
                <div className="col-md-15">
                    <div className="panel">
                        <div className="panel-body">
                            <div className="col-lg-12 col-md-12 col-sm-8" >
                            <div className="panel panel-filled">
                                <div className="wrapper wrapper-content animated fadeInRight">
                                <div className="panel-body">
                                    <div className="row">
                                    <div className="col-lg-12">
                                        <div className="ibox product-detail">
                                        <div className="ibox-content">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <h2 className="font-bold m-b-xs text-center">Hola, parece que te gusto este auto.</h2>
                                                    <hr className="card-divider card" /> 
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <h1 className="product-main-price text-center">{office.name}</h1>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <h1 className="product-main-price text-center">Address {office.address}</h1>
                                                            </div>
                                                        </div>
                                                        <hr className="card-divider card" /> 
                                                        <hr className="card-divider card" /> 
                                                        <div className="col-lg-12">
                                                                <h1  className="product-main-price text-center"> CARACTERISTICAS </h1>
                                                            </div>
                                                            <hr className="card-divider card" /> 
                                                        <div className="row">
                                                            <div className="col-lg-3 text-center">
                                                                <h4 className="product-main-price">City: {office.city}</h4>
                                                            </div>
                                                            <div className="col-lg-3 text-center">
                                                                <h4 className="product-main-price">Country: {office.country}</h4>
                                                            </div>
                                                            <div className="col-lg-3 text-center">
                                                                <h4 className="product-main-price">Phone: {office.phone}</h4>
                                                            </div>
                                                            
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-4 text-center">
                                                            <h4 className="product-main-price">Email: {office.email}</h4>
                                                            </div>
                                                            <div className="col-lg-4 text-center">
                                                            <h4 className="product-main-price">Puntos de Ubicacion: {office.latitude}, {office.longitude} </h4>
                                                            </div>
                                                            <div className="col-lg-4 text-center">
                                                            <h4 className="product-main-price">Dueño: {office.user.lastname}</h4>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                        <div className="product-images">     
                                                            <div className="image-imitation">
                                                            <img className="card-img-top col-lg-12 col-md-12"  src={`${office.image}`}  alt="..."  />                                                            </div>         
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="card-divider card" /> 
                                            <hr className="card-divider card" /> 
                                            <div className="ibox-footer">
                                                <span className="pull-right">
                                                    Ultima Actualización - <i className="fa fa-clock-o"></i> {days(office.updateAr).utc().format('DD/MM/YYYY')} {days(office.updateAr).utc().format('HH:MM')} 
                                                </span>
                                                Se recomieda no adquirir un automovil luego de los dos meses de la ultima actualización.
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
            </div>
        </section>
    )
}
