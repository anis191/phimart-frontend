// import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import apiClient from "../../services/api-client";
import useAuthContext from "../../hooks/useAuthContext";
import ResetPasswordConfirmForm from "../Dashboard/Profile/ResetPasswordConfirmForm";

const ResetPasswordConfirm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {uid, token} = useParams()
    const {handleAPIerrors, errorMsg} = useAuthContext()
    const[successMsg, setSuccessMsg] = useState("")

    const onSubmit = async (data) =>{
        const resetPassPayload = {
            uid: uid,
            token: token,
            new_password: data.password
        }
        try{
            await apiClient.post("/auth/users/reset_password_confirm/", resetPassPayload)
            setSuccessMsg("Reset Password successfully")
        }catch(error){handleAPIerrors(error)}
    }

    return (
        <div className="flex min-h-screen items-center justify-center px-4 py-12 bg-base-200">
          <div className="card w-full max-w-md bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">Reset Password</h2>

                {errorMsg && <span className="text-error font-bold mx-auto">{errorMsg}</span>}
                {successMsg && (
                    <div role="alert" className="alert alert-success alert-soft">
                      <span>{successMsg}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
                    <ResetPasswordConfirmForm register={register} errors={errors} watch={watch}/>
                    <button type="submit" className="btn btn-primary w-full">
                      <span className="flex justify-center items-center gap-2">submit</span>
                    </button>
                </form>
              </div>
            </div>
        </div>
    );
};

export default ResetPasswordConfirm;