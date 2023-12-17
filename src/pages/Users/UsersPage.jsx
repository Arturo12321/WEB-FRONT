/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { useUsers } from "../../context/UsersContext";
import { Link, useNavigate  } from "react-router-dom";
import days from "dayjs";
import utc from "dayjs-plugin-utc";
days.extend(utc)

export default function UsersPage() {

    const {user} =  useUser();
    const {users, getUsers, deleteUser} = useUsers();
    const navigate = useNavigate();
    useEffect(() => {
        getUsers();
    },[]);
    
    const isAdmin = user && user.role === 'admin';

    useEffect(() => {
        if (!isAdmin) {
            navigate("/carsRent");
        }
    }, [isAdmin, navigate]);
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
                                                    <h1 className="m-t-xs">User registered</h1>
                                                </div>
                                            </div>
                                            <div className="table-responsive">
                                            <table className="table table-hover table-striped" >
                                                <thead >
                                                    <tr>
                                                        <th>Username</th>
                                                        <th>Lastname</th>
                                                        <th>Firstname</th>
                                                        <th>Email</th>
                                                        <th>Cell Phone</th>
                                                        <th>Birth Date</th>
                                                        <th>Role</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {isAdmin && users.map((user) => (
                                                        <tr key={user._id}>
                                                            <td>{user.username}</td>
                                                            <td>{user.lastname}</td>
                                                            <td>{user.firstname}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.cell_phone}</td>
                                                            <td>{days(user.birth_date).utc().format('DD/MM/YYYY')}</td>
                                                            <td>{user.role}</td>
                                                            
                                                            <td>
                                                                <i  style={{ fontSize: '25px' }} className="pe pe-7s-trash text-accent " onClick={() =>{deleteUser(user._id)}}></i>&nbsp;&nbsp;
                                                                <Link to={`/profileForm/${user._id}`}>
                                                                    <i  style={{ fontSize: '25px' }} className="pe pe-7s-pen text-accent" ></i>
                                                                </Link>&nbsp;&nbsp;                                                                
                                                                <Link to={`/profile/${user._id}`}>
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
                                                        {isAdmin && users.map((user) => (
                                                                <div className="col-lg-4 col-md-4 col-sm-6 mb-4" key={user._id}>
                                                                    <div className="card-section border rounded ml-4 mr-4">
                                                                        <div className="card-header card-header-third rounded">
                                                                            <h3 className="card-header-title">{user.username}</h3>
                                                                        </div>
                                                                        <div className="card-body card-body-third "> 
                                                                            <img className="card-img"  src={`${user.image}`}  alt="..."  />    
                                                                            <h3 className="card-text-third">Lastname : {user.lastname}</h3>
                                                                            <h3 className="card-text-third">Firstname : {user.firstname}</h3>
                                                                            <h3 className="card-text-third">Email : {user.email}</h3>
                                                                            <h3 className="card-text-third">Cell Phone : {user.cell_phone}</h3>
                                                                            <h3 className="card-text-third">Birth Date : {days(user.birth_date).utc().format('DD/MM/YYYY')}</h3>
                                                                            <h3 className="card-text-third">Role : {user.role}</h3>
                                                                            <hr className="card-divider card" />       
                                                                            <div className="card-button-third">
                                                                                <i className="pe pe-7s-trash text-accent" onClick={() =>{deleteUser(user._id)}}></i>&nbsp;&nbsp;
                                                                                <Link to={`/profile/${user._id}`}>
                                                                                    <i className="fa fa-sharp fa-eye text-accent"></i>
                                                                                </Link> &nbsp;&nbsp;
                                                                                <Link to={`/profileForm/${user._id}`}>
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
