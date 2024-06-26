// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";
// import { Helmet } from "react-helmet-async";


const Register = () => {
    // const { createUser } = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        // createUser
        // createUser(email, password)
            // .then(result => {
                // console.log(result.user);
            // })
            // .catch(error => {
                // console.log(error);
            // })
    }
    return (

        <div className="mb-12">
            {/* <Helmet> */}
                {/* <title>Crufte Cloth | Register</title> */}
            {/* </Helmet> */}
            <h3 className="text-3xl my-10 text-center">Please Register</h3>
            <form onSubmit={handleRegister} className=" md:w-3/4 lg: w-1/2 mx-auto ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name"
                        className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photp URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL"
                        className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password"
                        className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot
                            password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="text-center mt-4"> Already have an account? <Link to='/login' className="text-purple-900  font-semibold ">Login</Link></p>
        </div>

    );
}

export default Register
