import { useUsers } from "../../context/UsersContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import days from "dayjs";
import utc from "dayjs-plugin-utc";
days.extend(utc)
export default function UserPage() {

    
    const { id } = useParams();
    const { getUser } = useUsers();
    const [user, setUser] = useState();
    useEffect(() => {
        async function loadUser() {
            const userData  = await getUser(id);
            console.log(userData);
            setUser(userData);
            }
        
            loadUser();
    }, [getUser, id]);


    if (!user) {
        return <p>Cargando...</p>;
    }
    return (
        <section className="content">
        <div className="container-fluid">
            <div className="row m-t-sm">
                <div className="col-md-15">
                    <div className="panel">
                        <div className="panel-body">
                            <div className="col-lg-12 col-md-12 col-sm-8">
                                <div className="panel panel-filled">
                                    <div className="wrapper wrapper-content animated fadeInRight">
                                        <div className="panel-body">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    {/* Contenido de la segunda mitad */}
                                                    <h2 className="font-bold m-b-xs text-center col-lg-12 col-md-6">
                                                        Hello, this is the user profile {user.username}.
                                                    </h2>
                                                    <hr className="card-divider card" />
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <h2 className="product-main-price text-center col-lg-12 col-md-6">
                                                                Lastname  {user.lastname}
                                                            </h2>
                                                            <h2 className="product-main-price text-center col-lg-12 col-md-6">
                                                                Firstname : {user.firstname}
                                                            </h2>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <h2 className="product-main-price text-center col-lg-12 col-md-6">
                                                                DNI: {user.dni}
                                                            </h2>
                                                            <h2 className="product-main-price text-center col-lg-12 col-md-6">
                                                                Birth Date : {days(user.birth_date).utc().format("DD-MM-YYYY")}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                    <hr className="card-divider card" />
                                                    <hr className="card-divider card" />
                                                    <div className="col-lg-12">
                                                        <h1 className="product-main-price text-center">MORE INFORMATION</h1>
                                                    </div>
                                                    <hr className="card-divider card" />
                                                    <div className="row">
                                                        <div className="div-date col-lg-12 text-left ">
                                                            <h3 className="product-main-price">Company: {user.company_name}</h3>
                                                        </div>
                                                        <div className="div-date col-lg-12 text-left">
                                                            <h3 className="product-main-price">RUC: {user.ruc}</h3>
                                                        </div>
                                                        <div className="div-date col-lg-12 text-left">
                                                            <h3 className="product-main-price">Email: {user.email}</h3>
                                                        </div>
                                                        <div className="div-date col-lg-12 text-left">
                                                            <h3 className="product-main-price">Address {user.address}</h3>
                                                        </div>
                                                        <div className="div-date col-lg-12 text-left">
                                                            <h3 className="product-main-price">Cell Phone: {user.cell_phone}</h3>
                                                        </div>
                                                        <div className="div-date col-lg-12 text-left">
                                                            <h3 className="product-main-price">Role: {user.role}</h3>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="product-images">
                                                        <div className="image-imitation">
                                                            <img
                                                                className="card-img-top col-lg-12 col-md-12"
                                                                src={`${user.image}`}
                                                                alt="..."
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="card-divider card" />
                                            <hr className="card-divider card" />
                                            {/* Sección de información adicional */}
                                            <div className="ibox-footer">
                                                <span className="pull-right">
                                                    Ultima Actualización - <i className="fa fa-clock-o"></i>{" "}
                                                    {days(user.updateAr).utc().format("DD/MM/YYYY")}{" "}
                                                    {days(user.updateAr).utc().format("HH:MM")}
                                                </span>
                                                Se recomienda no adquirir un automóvil después de los dos meses de la última
                                                actualización.
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
