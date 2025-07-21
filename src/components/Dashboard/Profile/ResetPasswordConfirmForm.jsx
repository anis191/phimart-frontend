import { useState } from "react";

const ResetPasswordConfirmForm = ({register,errors,watch}) => {
    const[showPassword, setShowPassword] = useState(false)
    return (
        <div>
            <div className="form-control">
                <label className="label" htmlFor="password">
                  <span className="label-text">Password</span>
                </label>
                <input
                  id="password"
                  type={showPassword ? "string" : "password"}
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
                  type={showPassword ? "string" : "password"}
                  {...register("confirm_password", { required: true, validate: (value) => value === watch("password") || "Password is not match" })}
                  className={`input input-bordered w-full ${errors.confirm_password ? "input-error" : ""}`}
                />
                {errors.confirm_password && (<p className="text-error">{errors.confirm_password.message}</p>)}
            </div>
            <div className="form-control py-2">
                <label htmlFor="showPass" className="label cursor-pointer">
                    <span className="label-text">Show Password</span>
                    <input type="checkbox" className="toggle showPass" checked={showPassword} onChange={()=>setShowPassword(!showPassword)}/>
                </label>
            </div>
        </div>
    );
};

export default ResetPasswordConfirmForm;