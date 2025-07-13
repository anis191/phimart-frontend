// import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuthContext from "../hooks/useAuthContext";
import { useState } from "react";
// import { useNavigate } from "react-router";

const Register = () => {
  const[successMsg, setSuccessMsg] = useState("")
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const {registerUser,errorMsg} = useAuthContext()
  // const navigate = useNavigate()

  const onSubmit = async (data) => {
    delete data.confirm_password
    // console.log("From Register Page: ",data);
    try{
        const response = await registerUser(data)
        if(response.success){
            // setSuccessMsg(response.message)
            setSuccessMsg(
              <p className="font-bold"> Registration successfull. Please check email <span className="status status-info animate-bounce ml-2"></span>
              </p>
            )
            // setTimeout(()=> navigate("/login"), 2000)
        }
    }catch(error){console.log(error)}
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-base-100 shadow-xl rounded-xl p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>

        {errorMsg && <span className="text-error font-bold mx-auto">{errorMsg}</span>}
        {successMsg && (
            <div role="alert" className="alert alert-success alert-soft">
              <span>{successMsg}</span>
            </div>
        )}
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="form-control">
                <label className="label" htmlFor="first_name">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  id="first_name"
                  type="text"
                  {...register("first_name", { required: true })}
                  className={`input input-bordered w-full ${errors.first_name ? "input-error" : ""}`}
                />
              </div>

              <div className="form-control">
                <label className="label" htmlFor="last_name">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  id="last_name"
                  type="text"
                  {...register("last_name", { required: true })}
                  className={`input input-bordered w-full ${errors.last_name ? "input-error" : ""}`}
                />
              </div>

              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Email</span>
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: true })}
                  className={`input input-bordered w-full ${errors.email ? "input-error" : ""}`}
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="form-control">
                <label className="label" htmlFor="phone_number">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  id="phone_number"
                  type="text"
                  {...register("phone_number", { required: true })}
                  className={`input input-bordered w-full ${errors.phone_number ? "input-error" : ""}`}
                />
              </div>

              <div className="form-control">
                <label className="label" htmlFor="address">
                  <span className="label-text">Address</span>
                </label>
                <input
                  id="address"
                  type="text"
                  {...register("address")}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label" htmlFor="password">
                  <span className="label-text">Password</span>
                </label>
                <input
                  id="password"
                  type="password"
                  {...register("password", { required: true, minLength:{
                    value: 8,
                    message: "Password must be at least 8 characters!",
                  } })}
                  className={`input input-bordered w-full ${errors.password ? "input-error" : ""}`}
                />
                {errors.password && (<p className="text-error">{errors.password.message}</p>)}
              </div>

              <div className="form-control">
                <label className="label" htmlFor="confirm_password">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  id="confirm_password"
                  type="password"
                  {...register("confirm_password", { required: true, validate: (value) => value === watch("password") || "Password is not match" })}
                  className={`input input-bordered w-full ${errors.confirm_password ? "input-error" : ""}`}
                />
                {errors.confirm_password && (<p className="text-error">{errors.confirm_password.message}</p>)}
                {/* {passCheck && <span className="text-error font-bold">{passCheck}</span>} */}
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-6 w-full">
            Register
          </button>

          <div className="text-center mt-4">
            <p className="text-base-content/70">
              Already have an account?{" "}
              <a href="/login" className="link link-primary">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
