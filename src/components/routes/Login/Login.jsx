
// import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
// import { Helmet } from "react-helmet-async";


const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogin = e => {

        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password')

        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                e.target.reset();
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })

    }
       const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then(result=>{
            console.log((result.user))
            .cath(error=>console.log(error))
        })
       }
    return (
        <div className="mb-12">
            {/* <Helmet><title>Crafted Cloth | Login</title></Helmet> */}
            <h3 className="text-3xl my-10 text-center">Please Login</h3>
            <form onSubmit={handleLogin} className=" md:w-3/4 lg: w-1/2 mx-auto ">
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
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>

            <p className="text-center mt-4"> Do not have an account? <Link to='/register' >
             
            <button className="btn btn-link ">Register </button>
            </Link></p>
            
            <p><button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button></p>
        </div>
        



    );
};

export default Login;