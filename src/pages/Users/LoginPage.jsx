/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form"
import { useUser } from "../../context/UserContext";
import { useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";

export default function LoginPage() {

const {register, handleSubmit, formState: { errors },}= useForm();
const {loginContext, isAuthenticated, errors: loginErrors} =useUser();

const navigate = useNavigate();

const onSubmit = handleSubmit(async(data) => {
    await loginContext(data);
});

useEffect(() => {
    if (isAuthenticated) navigate("/carsRent"); 
},[isAuthenticated]);

return (
    <section className="content">
            <div className="container-center animated slideInDown">
                <div className="view-header">
                    <div className="header-icon">
                        <i className="pe page-header-icon pe-7s-unlock"></i>
                    </div>
                    <div className="header-title">
                        <h3>Login</h3>
                        <small>Please enter your data to login.</small>
                    </div>
                </div>
                <div className="panel panel-filled">
                    <div className="panel-body">
                        {
                            loginErrors.map((error, i) =>  (
                                <div className="mapErrors" key={i}> 
                                    {error}
                                </div>
                            ))
                        }
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label className="control-label">Email:</label>
                                <input type="email" className="form-control" placeholder="Introduce your email" { ...register("email", {required: true} )} />
                                <span className="help-block small">Your unique email to app</span>
                                
                                {errors.email && (<p className="error-message">Email is required</p>)}
                            </div>
                            <div className="form-group">
                                <label className="control-label">Password</label>
                                <input type="password" className="form-control" placeholder="Introduce your password" { ...register("password", {required: true} )} />
                                <span className="help-block small">Your unique password to app</span>
                                {errors.password && (<p className="error-message">{errors.password.message}</p>) && (<p className="error-message">Password is required.</p>)}
                            </div>
                            <div className="text-center">
                                <div className="panel-body buttons-margin">
                                    <button type="submit" className="btn btn-w-md btn-primary">Login</button>&nbsp;&nbsp;
                                    <Link className="btn btn-w-md  btn-success" to="/register" >Register</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
