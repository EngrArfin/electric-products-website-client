import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, formState: { errors } } = useForm();
    return (
        <div>
            <div className=" max-w-8xl fixed mx-auto hero min-h-screen bg-white-100 ">
                <div className="hero-content flex-col lg:flex-row">
                    <img /* src={headerphoto} */ className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="divider divider-horizontal mx-auto">
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form /* onSubmit={handleSubmit(onSubmit)} */ className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name </span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enter email</span>
                                </label>
                                {/* <input type="email" name='email' placeholder="email" className="input input-bordered" required /> */}
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                {/* <input type="password" name='password' placeholder="password" className="input input-bordered" required /> */}

                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="Password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            </div>
                            <div className="form-control mt-6">

                                <input type="submit" value="Sign Up" className="btn btn-primary" />
                            </div>
                        </form>

                        <small className='flex'>
                            <p>Already have an account</p>
                            <Link to="/signin" className="text-sky-500 m-2 ">
                                Sign In
                            </Link>
                        </small>

                        <div className="divider">Account user gmail</div>
                        {/* <SocialLogin></SocialLogin> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;