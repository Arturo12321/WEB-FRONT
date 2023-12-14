/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUsers } from "../../context/UsersContext";
import { useEffect } from "react";
import dayjs from "dayjs";
export default function UserFormPage() {
    const {register, setValue, handleSubmit, formState: { errors } } = useForm();
    const {updateUser, getUser, errors: registerErrors } = useUsers();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadUser() {
            if(params.id) {
                const user = await getUser(params.id);
                console.log(user);
                setValue('username', user.username);
                setValue('firstname', user.firstname);
                setValue('lastname', user.lastname);
                setValue('dni', user.dni);
                setValue('birth_date', dayjs(user.birth_date).utc().format('YYYY-MM-DD'));
                setValue('company_name', user.company_name);
                setValue('ruc', user.ruc);
                setValue('email', user.email);
                setValue('address', user.address);
                setValue('cell_phone',user.cell_phone);
                setValue('password',user.password);
                setValue('image',user.image);
                setValue('role',user.role);
            }
        }
        loadUser()
    },[])

    const onSubmit = handleSubmit (async(data) => {
        const { username, firstname, lastname, dni ,birth_date, company_name, ruc, email, address, cell_phone, password, image, role} = data;
        const userData = { 
            username, 
            firstname, 
            lastname, 
            dni,
            birth_date, 
            company_name, 
            ruc, 
            email, 
            address, 
            cell_phone, 
            password,
            image: image[0],
            role
        };
        try {
            const res = await updateUser(params.id, userData);
            console.log(res)
        } catch (error) {
            console.error("Error during registration:", error);
        }
        navigate('/users');
    });

    return (
        <section className="content">
            <div className="container-center md animated slideInDown">
                <div className="view-header">
                    <div className="header-icon">
                        <i className="pe page-header-icon pe-7s-add-user"></i>
                    </div>
                    <div className="header-title">
                        <h3>Update User</h3>
                        <small>Please enter your data to register.</small>
                    </div>
                </div>
                <div className="panel panel-filled">
                    <div className="panel-body">
                {
                    registerErrors.map((error, i) =>  (
                        <div className="mapErrors" key={i}> 
                            {error}
                        </div>
                    ))
                }
                        <form onSubmit={onSubmit}>
                            <div className="form-group col-lg-6">
                                <label className="control-label">Username:</label>
                                <input type="text" className="form-control" placeholder="Ingresar username" { ...register("username", {required: true} )} />
                                <span className="help-block small">Your unique username to app</span>
                                {errors.username && (<p className="error-message">Username is required</p>)}
                            </div>

                            <div className="form-group col-lg-6">
                                <label className="control-label">Firstname:</label>
                                <input type="text" className="form-control" placeholder="Introduce your firstname" { ...register("firstname", {required: true} )} />
                                <span className="help-block small">Your unique firstname to app</span>
                                {errors.firstname && (<p className="error-message">Firstname is required</p>)}
                            </div>

                            <div className="form-group col-lg-6">
                                <label className="control-label">Lastname:</label>
                                <input type="text" className="form-control" placeholder="Introduce your lastname" { ...register("lastname", {required: true} )} />
                                <span className="help-block small">Your unique lastname to app</span>
                                {errors.lastname && (<p className="error-message">Lastname is required</p>)}
                            </div>
                            
                            <div className="form-group col-lg-6">
                                <label className="control-label">DNI:</label>
                                <input type="text" className="form-control" placeholder="Introduce your DNI" { ...register("dni", {required: true} )} />
                                <span className="help-block small">Your unique DNI to app</span>
                                {errors.dni && (<p className="error-message">DNI is required</p>)}
                            </div>

                            <div className="form-group col-lg-6">
                                <label className="control-label">Birth date:</label>
                                <input type="date" className="form-control" placeholder="Introduce your birth date" { ...register("birth_date", {required: true} )} />
                                <span className="help-block small">Your unique birth date to app</span>
                                {errors.birth_date && (<p className="error-message">Birth date is required</p>)}
                            </div>

                            <div className="form-group col-lg-6">
                                <label className="control-label">Company:</label>
                                <input type="text" className="form-control" placeholder="Introduce your company name " { ...register("company_name", {required: true} )} />
                                <span className="help-block small">Your unique company name to app</span>
                                {errors.company_name && (<p className="error-message">Company is required</p>)}
                            </div>

                            <div className="form-group col-lg-6">
                                <label className="control-label">RUC:</label>
                                <input type="text" className="form-control" placeholder="Introduce your RUC" { ...register("ruc", {required: true} )} />
                                <span className="help-block small">Your unique RUC to app</span>
                                {errors.ruc && (<p className="error-message">RUC is required</p>)}
                            </div>

                            <div className="form-group col-lg-6">
                                <label className="control-label">Email:</label>
                                <input type="email" className="form-control" placeholder="Introduce your email" { ...register("email", {required: true} )} />
                                <span className="help-block small">Your unique email to app</span>
                                
                                {errors.email && (<p className="error-message">Email is required</p>)}
                            </div>

                            <div className="form-group col-lg-6">
                                <label className="control-label">Address</label>
                                <input type="text" className="form-control" placeholder="Introduce your address" { ...register("address", {required: true} )} />
                                <span className="help-block small">Your unique address to app</span>
                                {errors.address && (<p className="error-message">Address is required</p>)}
                            </div>

                            <div className="form-group col-lg-6">
                                <label className="control-label">Cell Phone</label>
                                <input type="text" className="form-control" placeholder="Introduce your cell phone number" { ...register("cell_phone", {required: true} )} />
                                <span className="help-block small">Your unique cell phone to app</span>
                                {errors.cell_phone && (<p className="error-message">Cell Phone is required</p>)}
                            </div>

                            <div className="form-group col-lg-6">
                                <label className="control-label">Password</label>
                                <input type="password" className="form-control" placeholder="Introduce your password" { ...register("password", {required: true} )} />
                                <span className="help-block small">Your unique password to app</span>
                                {errors.password && (<p className="error-message">{errors.password.message}</p>) && (<p className="error-message">Password is required.</p>)}
                            </div>

                            <div className="form-group col-lg-6">
                                <label className="control-label">Repite - Password</label>
                                <input type="password" className="form-control" placeholder="Repite your password" {...register("repeatPassword", {required:"Repeat password is required"})} />
                                <span className="help-block small">Your repite password to app</span>
                                {errors.repeatPassword && (<p className="error-message">{errors.repeatPassword.message}</p>) }
                            </div>

                            <div className="form-group col-lg-6">
                                <label className="control-label">Role</label>
                                <input type="text" className="form-control" placeholder="Repite your role" {...register("role", {required:"Repeat role is required"})} />
                                <span className="help-block small">Your repite role to app</span>
                                {errors.role && (<p className="error-message">Role is required</p>) }
                            </div>

                            <div className="form-group col-lg-12">
                                <label className="control-label">Image</label>
                                <input type="file" className="form-control" placeholder="Introduce your image" { ...register("image", {required: true} )} />
                                <span className="help-block small">Your unique image to app</span>
                                {errors.image && (<p className="error-message">Image is required</p>) }
                            </div>

                            <div className="col-sm-12 text-center">
                                <div className="panel-body buttons-margin">
                                    <button type="submit" className="btn btn-w-md btn-primary">Register</button>&nbsp;&nbsp;
                                    <Link className="btn btn-w-md  btn-success" to="/login" >Login</Link> 
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
