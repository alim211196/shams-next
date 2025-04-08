"use client";
import Link from "next/link";
import React from "react";
import headerLogo from "../../assets/images/shams-logo.svg";
import Image from "next/image";
import { forgotPassSchema } from "@/app/utils/validationSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { forgotPassword } from "@/app/features/student/auth/authService";
import { toast } from "react-toastify";
import { encrypt } from "@/app/utils/cryptoUtils";
import { useSelector } from "react-redux";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(forgotPassSchema),
  });
  const { authPages } = useSelector((state) => state.settings);
  const student = authPages.student;

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const response = await forgotPassword(data);
      const encryptedEmail = encodeURIComponent(encrypt(data.email));
      if (response.success) {
        toast.success(response.data.message);
        setTimeout(() => {
          router.push(`/verify-code?email=${encryptedEmail}`);
        }, 2000);
      } else if (response.status === 401) {
        // Handle unverified user
        toast.error(response.data.message);
        setTimeout(() => {
          router.push(`/verify-account?email=${encryptedEmail}`);
        }, 2000);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="reset-password">
      <div className="auth-wrap">
        <div className="auth-right">
          <div className="resetBox">
            <div className="log_wraps">
              <div className="logoBox">
                <Link href="#">
                  <Image src={headerLogo} alt="Logo" />
                </Link>
              </div>

              <div className="log__heads">
                <h4 className="logs_title">
                  {student?.student_forgot_password_title || "Reset Password"}
                </h4>

                {<p>{student?.student_forgot_password_description} </p> || (
                  <p>
                    Don’t worry, happens to all of us. Enter your email below to
                    recover your password{" "}
                  </p>
                )}
              </div>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.email ? "error-input" : ""
                    }`}
                    placeholder="Enter Email Address"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="error-text">{errors.email.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="btn_apply"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send OTP"}
                  </button>
                </div>
              </form>
              <div className="back-login form-group text-center">
                <Link href="/login">Back To login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
