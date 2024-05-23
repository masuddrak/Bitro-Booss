import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { uploadImage } from "../utils/Api";
import useAxiosCommon from "../hooks/useAxiosCommon";
import SocialLogin from "../componets/SocialLogin";

const Register = () => {
    const { createUser, updateUserProfile, setLoading, loading } = useContext(AuthContext)
    const axiosCommon = useAxiosCommon()
    const naviget = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    if (loading) {
        return <h1>Loading....register.......</h1>
    }
    const onSubmit = async (data) => {
        try {
            setLoading(true)
            const image = await uploadImage(data?.photo[0])
            console.log(image)

            createUser(data.email, data.password)
                .then(result => {
                    updateUserProfile(data?.name, image)
                        .then(() => {
                            const userInfo = { name: data?.name, email: data?.email }
                            axiosCommon.post("/users", userInfo)
                                .then(res => {
                                    console.log(res.data)
                                    naviget("/")
                                })
                        })
                    console.log("loginn user", result.user)
                })
                .catch(error => {
                    console.log("sinup user", error.message)
                })
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
   
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register  now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Enter Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="file" {...register("photo", { required: true })} name="photo" placeholder="Enter Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password")} placeholder="password" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div>
                        <p className="m-3">Have a Already an account? <Link to="/login">Login</Link></p>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;