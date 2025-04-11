"use client";
import Link from "next/link";
import React from "react";
import googleIcon from "../../assets/images/google-icon.svg";
import facebookIcon from "../../assets/images/facebook-icon.svg";
import appleIcon from "../../assets/images/apple-icon.svg";
import authSignUp from "../../assets/images/tariner-signup.svg";
import Image from "next/image";
import eyeIcon from "../../assets/images/eye-icon.svg";
import eyeOffIcon from "../../assets/images/eye-off-icon.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "@/app/utils/validationSchemas";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { encrypt } from "@/app/utils/cryptoUtils";
import { useState } from "react";
import { registerTrainer } from "@/app/features/trainer/auth/authService";
import { getS3ImageUrl } from "@/app/utils/helper";
import { useSelector } from "react-redux";
const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });
  const router = useRouter();
  const { authPages } = useSelector((state) => state.settings);

  const trainer = authPages.trainer;
  const [isAgreed, setIsAgreed] = useState("no");
  const handleCheckboxChange = (e) => {
    setIsAgreed(e.target.checked ? "yes" : "no");
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

  const onSubmit = async (data) => {
    try {
      const formData = {
        ...data,
        is_agreed: isAgreed,
      };
      const response = await registerTrainer(formData);
      if (response.success) {
        toast.success(response.data.message);
        const encryptedEmail = encodeURIComponent(encrypt(data.email));
        setTimeout(() => {
          router.push(`/trainer-verify-account?email=${encryptedEmail}`);
        }, 2000);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="auth-main">
      <div className="auth-wrap">
        <div className="auth-bg">
          <Image
            src={
              trainer?.trainer_signup_banner_img
                ? getS3ImageUrl("auth_page", trainer?.trainer_signup_banner_img)
                : authSignUp
            }
            width={trainer?.trainer_signup_banner_img ? 500 : 500} // Set a numeric width for static images
            height={trainer?.trainer_signup_banner_img ? 500 : 500}
            alt="signup"
          />
        </div>
        <div className="auth-right">
          <div className="log_wraps">
            <div className="log__heads">
              <h4 className="logs_title">
                {trainer?.trainer_signup_title ||
                  "Become a Shams Training instructor"}
              </h4>

              {<p>{trainer?.trainer_signup_description} </p> || (
                <p>
                  Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio
                </p>
              )}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="form-group">
                <input
                  type="text"
                  className={`form-control ${errors.name ? "error-input" : ""}`}
                  placeholder="Full Name"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="error-text">{errors.name.message}</p>
                )}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className={`form-control ${
                    errors.email ? "error-input" : ""
                  }`}
                  placeholder="Email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="error-text">{errors.email.message}</p>
                )}
              </div>

              <div className="form-group password">
                <input
                  type={showPasswords.password ? "text" : "password"}
                  className={`form-control ${
                    errors.password ? "error-input" : ""
                  }`}
                  placeholder="Password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="error-text">{errors.password.message}</p>
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
                  className={`form-control ${
                    errors.confirmPassword ? "error-input" : ""
                  }`}
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <p className="error-text">{errors.confirmPassword.message}</p>
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
                <div className="checkbox">
                  <input
                    id="terms"
                    type="checkbox"
                    value="yes"
                    checked={isAgreed === "yes"}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="terms">
                    I agree to the{" "}
                    <Link href="/terms-and-conditions">
                      Terms and Conditions
                    </Link>{" "}
                    for instructors.
                  </label>
                </div>
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="btn_apply"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing up..." : "Sign up"}
                </button>
              </div>
            </form>
            <div className="allready-login form-group text-center">
              <span>
                Already Have A Account?{" "}
                <Link href="/trainer-login"> Log in</Link>
              </span>
            </div>

            <div className="social_logs">
              <ul>
                <li className="gp-login">
                  <Link href="#">
                    <Image src={googleIcon} alt="" />
                  </Link>
                </li>
                <li className="fb-login">
                  <Link href="#">
                    {" "}
                    <Image src={facebookIcon} alt="" />{" "}
                  </Link>
                </li>
                <li className="ap-login">
                  <Link href="#">
                    <Image src={appleIcon} alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default page;
