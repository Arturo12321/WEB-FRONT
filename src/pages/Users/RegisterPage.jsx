import { useForm } from "react-hook-form"
import { registerRequest } from "../../api/user";


export default function RegisterPage() {

    const {register, handleSubmit,setError, formState: { errors }, } = useForm();

    const onSubmit = handleSubmit(async(data) => {
        const { username, firstname, lastname, dni, birth_date, company_name, ruc, email, address, cell_phone, password,repeatPassword, image} = data;
        
        if (password !== repeatPassword) {
            setError("repeatPassword", {
                type: "manual",
                message: "Passwords do not match",
            });
            return;
        }
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
            image:image[0], 
        };
        try {
            const res = await registerRequest(userData);
            console.log(res);
        } catch (error) {
            console.error("Error during registration:", error);
        }
    });


    return (
        <section className="content">
            <div className="container-center lg animated slideInDown">
                <div className="view-header">
                    <div className="header-icon">
                        <i className="pe page-header-icon pe-7s-add-user"></i>
                    </div>
                    <div className="header-title">
                        <h3>Register</h3>
                        <small>Please enter your data to register.</small>
                    </div>
                </div>
                <div className="panel panel-filled">
                    <div className="panel-body">
                        <form onSubmit={onSubmit}>
                            <div className="form-group col-lg-6">
                                <label className="control-label">Username:</label>
                                <input type="text" className="form-control" placeholder="Ingresar username" { ...register("username", {required: true} )} />
                                <span className="help-block small">Your unique username to app</span>
                            </div>

                            <div className="form-group col-lg-6">
                                <label className="control-label">Firstname:</label>
                                <input type="text" className="form-control" placeholder="Introduce your firstname" { ...register("firstname", {required: true} )} />
                                <span className="help-block small">Your unique firstname to app</span>
                            </div>

                            <div className="form-group col-lg-6">
                                <label className="control-label">Lastname:</label>
                                <input type="text" className="form-control" placeholder="Introduce your lastname" { ...register("lastname", {required: true} )} />
                                <span className="help-block small">Your unique lastname to app</span>
                            </div>
                            
                            <div className="form-group col-lg-6">
                                <label className="control-label">DNI:</label>
                                <input type="number" className="form-control" placeholder="Introduce your DNI" { ...register("dni", {required: true} )} />
                                <span className="help-block small">Your unique DNI to app</span>
                            </div>

                            <div className="form-group col-lg-6">
                                <label className="control-label">Birth date:</label>
                                <input type="date" className="form-control" placeholder="Introduce your birth date" { ...register("birth_date", {required: true} )} />
                                <span className="help-block small">Your unique birth date to app</span>
                            </div>

                            <div className="form-group col-lg-6">
                                <label className="control-label">Company:</label>
                                <input type="text" className="form-control" placeholder="Introduce your company name " { ...register("company_name", {required: true} )} />
                                <span className="help-block small">Your unique company name to app</span>
                            </div>

                            <div className="form-group col-lg-6">
                                <label className="control-label">RUC:</label>
                                <input type="number" className="form-control" placeholder="Introduce your RUC" { ...register("ruc", {required: true} )} />
                                <span className="help-block small">Your unique RUC to app</span>
                            </div>

                            <div className="form-group col-lg-6">
                                <label className="control-label">Email:</label>
                                <input type="text" className="form-control" placeholder="Introduce your email" { ...register("email", {required: true} )} />
                                <span className="help-block small">Your unique email to app</span>
                            </div>

                            <div className="form-group col-lg-6">
                                <label className="control-label">Address</label>
                                <input type="text" className="form-control" placeholder="Introduce your address" { ...register("address", {required: true} )} />
                                <span className="help-block small">Your unique address to app</span>
                            </div>

                            <div className="form-group col-lg-6">
                                <label className="control-label">Cell Phone</label>
                                <input type="number" className="form-control" placeholder="Introduce your cell phone number" { ...register("cell_phone", {required: true} )} />
                                <span className="help-block small">Your unique cell phone to app</span>
                            </div>

                            <div className="form-group col-lg-6">
                                <label className="control-label">Password</label>
                                <input type="password" className="form-control" placeholder="Introduce your password" { ...register("password", {required: true} )} />
                                <span className="help-block small">Your unique password to app</span>
                                {errors.password && (<p className="error-message">{errors.password.message}</p>)}
                            </div>

                            <div className="form-group col-lg-6">
                                <label className="control-label">Repite - Password</label>
                                <input type="password" className="form-control" placeholder="Repite your password" {...register("repeatPassword", {required:"Repeat password is required"})} />
                                <span className="help-block small">Your repite password to app</span>
                                {errors.repeatPassword && (<p className="error-message">{errors.repeatPassword.message}</p>)}
                            </div>

                            <div className="form-group col-lg-12">
                                <label className="control-label">Image</label>
                                <input type="file" className="form-control" placeholder="Introduce your image" { ...register("image", {required: true} )} />
                                <span className="help-block small">Your unique image to app</span>
                            </div>

                            <div className="col-sm-12 text-center">
                                <div className="panel-body buttons-margin">
                                    <button type="submit" className="btn btn-w-md btn-success">Register</button>&nbsp;&nbsp;
                                </div>
                            </div>
                            

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
