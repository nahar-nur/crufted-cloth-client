
// import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { ToastContainer,toast } from "react-toastify";
// import { Helmet } from "react-helmet-async";


const Login = () => {
    const { createUser, loading, setLoading, signInUser, signInWithGoogle } = useContext(AuthContext)
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
                setLoading(false)
                
                const user = result.user
                console.log(user);
                e.target.reset();
                navigate('/')
                toast.success("Login successful");
                
            })
            .catch(error => {
                console.log(error);
                setLoading(false)
                
            })
            

    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                setLoading(false)
                console.log((result.user))
                    .cath(error => console.log(error))
                setLoading(false)

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

            <p
                onClick={() => navigate("/")}
                className="text-lg font-semibold text-[#FF497C] my-3 cursor-pointer hover:bg-
[#FF497C] inline-block rounded py-1 px-2 hover:text-white duration-200"
            >
                <i className="bx bx-left-arrow-alt"></i> <span>Back Home</span>
            </p>
            {/* google login */}
            <div className="flex items-center flex-wrap md:flex-nowrap gap-4 mb-4 mx-auto">
                <button
                    onClick={() => handleGoogleSignIn()}
                    className="w-full max-w-md font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                >
                    <div className="bg-white p-2 rounded-full">
                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                            <path
                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                fill="#4285f4"
                            />
                            <path
                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                fill="#34a853"
                            />
                            <path
                                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                fill="#fbbc04"
                            />
                            <path
                                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                fill="#ea4335"
                            />
                        </svg>
                    </div>
                    <span className="ml-4">Sign In with Google</span>
                </button>
            </div>
            <ToastContainer></ToastContainer>
        </div>




    );
};

export default Login;