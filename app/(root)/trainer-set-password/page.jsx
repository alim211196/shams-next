"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import headerLogo from "../../assets/images/shams-logo.svg";
import eyeIcon from "../../assets/images/eye-icon.svg";
import eyeOffIcon from "../../assets/images/eye-off-icon.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter, useSearchParams } from "next/navigation";
import { resetPassSchema } from "@/app/utils/validationSchemas";
import { toast } from "react-toastify";
import { decrypt } from "@/app/utils/cryptoUtils";
import { resetPassword } from "@/app/features/trainer/auth/authService";
import { useSelector } from "react-redux";

const page = () => {
  const router = useRouter();
  const { authPages } = useSelector((state) => state.settings);
  const trainer = authPages.trainer;
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  let decryptedEmail = "";
  if (email) {
    try {
      const decodedEmail = decodeURIComponent(email); // Fix: decode first
      decryptedEmail = decrypt(decodedEmail); // Now decrypt correctly
    } catch (error) {
      console.error("Decryption failed:", error);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(resetPassSchema),
  });

  const onSubmit = async (data) => {
    try {
      const updatedData = {
        email: decryptedEmail,
        new_password: data.new_password,
        confirm_password: data.confirm_password,
      };
      const response = await resetPassword(updatedData);
      if (response.success) {
        toast.success("Password has been reset successfully!");
        setTimeout(() => {
          router.push("/trainer-login");
        }, 2000);
      } else {
        toast.error(response.message || "Login failed.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const [showPasswords, setShowPasswords] = useState({
    password: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field) => {
    setShowPasswords((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
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
                  {" "}
                  {trainer?.trainer_reset_password_title || "Set a password"}
                </h4>
                {<p>{trainer?.trainer_reset_password_description} </p> || (
                  <p>Kindly create a new password for your account. </p>
                )}
              </div>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="form-group password">
                  <input
                    type={showPasswords.password ? "text" : "password"}
                    placeholder="Create Password"
                    className={`form-control ${
                      errors.new_password ? "error-input" : ""
                    }`}
                    {...register("new_password")}
                  />
                  {errors.new_password && (
                    <p className="error-text">{errors.new_password.message}</p>
                  )}

                  <Image
                    className="eyeIcon"
                    src={showPasswords.password ? eyeOffIcon : eyeIcon}
                    alt="eye"
                    onClick={() => togglePasswordVisibility("password")}
                    style={{ cursor: "pointer" }}
                  />
                </div>

                <div className="form-group password">
                  <input
                    type={showPasswords.confirmPassword ? "text" : "password"}
                    placeholder="Re-enter Password"
                    className={`form-control ${
                      errors.confirm_password ? "error-input" : ""
                    }`}
                    {...register("confirm_password")}
                  />
                  {errors.confirm_password && (
                    <p className="error-text">
                      {errors.confirm_password.message}
                    </p>
                  )}

                  <Image
                    className="eyeIcon"
                    src={showPasswords.confirmPassword ? eyeOffIcon : eyeIcon}
                    alt="eye"
                    onClick={() => togglePasswordVisibility("confirmPassword")}
                    style={{ cursor: "pointer" }}
                  />
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="btn_apply"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Set password"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
