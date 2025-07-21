import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import { useState } from "react";

const Login = () => {
    const {loginUser, errorMsg} = useAuthContext()
    const {register, handleSubmit, formState:{errors}} = useForm()
    const navigate = useNavigate()
    const[loading, setLoading] = useState(false)
    
    const onSubmit = async (data) =>{
      setLoading(true)
      try{
        
        const response = await loginUser(data)
        if(response?.success){
          navigate("/dashboard")
        }
      }catch(error){
        console.log(error)
      }finally{setLoading(false)}
    }

    return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Sign in</h2>
          <p className="text-base-content/70">
            Enter your email and password to access your account
          </p>

          {errorMsg && <p className="text-error font-bold">{errorMsg}</p>}

          <form className="space-y-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className={`input input-bordered w-full ${errors.email ? "input-error" : ""}`}
                {...register("email", {required:true})}
              />
              {errors.email?.type === 'required' && <p role="alert" className="label-text-alt text-error">Email is required</p>}
            </div>

            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className={`input input-bordered w-full ${errors.password ? "input-error" : ""}`}
                {...register("password",{required:true})}
              />
              {errors.password?.type === 'required' && <p role="alert" className="label-text-alt text-error">Password is required</p>}
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={loading}>
              {loading ? (
                <span className="flex justify-center items-center gap-2">
                  Logging In
                  <span className="loading loading-dots loading-xs"></span>
                </span>
                ) : (
                  "Login"
                )}
            </button>
          </form>

          <div className="text-center mt-4">
            <Link to="/reset_password" className="btn btn-link">Forgotten your password?</Link>
            <p className="text-base-content/70">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="link link-primary">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;