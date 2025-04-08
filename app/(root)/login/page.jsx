"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import googleIcon from "../../assets/images/google-icon.svg";
import facebookIcon from "../../assets/images/facebook-icon.svg";
import appleIcon from "../../assets/images/apple-icon.svg";
import authLogin from "../../assets/images/login-bg.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import eyeIcon from "../../assets/images/eye-icon.svg";
import eyeOffIcon from "../../assets/images/eye-off-icon.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/app/utils/validationSchemas";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { loginStudent } from "@/app/features/student/auth/authService";
import {
  encrypt,
  getRememberedUser,
  removeRememberedUser,
  storeRememberedUser,
} from "@/app/utils/cryptoUtils";
import { handleLogin } from "@/app/utils/cookiesHelper";
import { useSelector } from "react-redux";
import { getS3ImageUrl } from "@/app/utils/helper";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const { authPages } = useSelector((state) => state.settings);
  const student = authPages.student;
  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const rememberedUser = getRememberedUser();
    if (rememberedUser) {
      const { email, password } = rememberedUser;
      setValue("email", email);
      setValue("password", password);
      setRememberMe(true);
    }
  }, [setValue]);

  const onSubmit = async (data) => {
    try {
      const response = await loginStudent(data);
      if (response.success) {
        handleLogin(response.data.token);
        toast.success(response.data.message);
        if (rememberMe) {
          storeRememberedUser(data);
        } else {
          removeRememberedUser();
        }
        setTimeout(() => {
          router.replace("/dashboard-learner");
          router.refresh();
        }, 2000);
      } else if (response.status === 401) {
        // Handle unverified user
        toast.error(response.data.message);

        const encryptedEmail = encodeURIComponent(encrypt(data.email));

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
    <div className="auth-main">
      <div className="auth-wrap">
        <div className="auth-bg">
          <Image
            src={
              student?.student_login_banner_img
                ? getS3ImageUrl("auth_page", student?.student_login_banner_img)
                : authLogin
            }
            width={student?.student_login_banner_img ? 500 : 500} // Set a numeric width for static images
            height={student?.student_login_banner_img ? 400 : 500}
            alt="login"
          />
        </div>
        <div className="auth-right">
          <div className="log_wraps">
            <div className="log__heads">
              <h4 className="logs_title">
                {student?.student_login_title || "Log in and start learning"}
              </h4>
              {<p>{student?.student_login_description} </p> || (
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
                  type={showPassword ? "text" : "password"}
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
                  src={showPassword ? eyeOffIcon : eyeIcon}
                  alt="eye"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: "pointer" }}
                />
              </div>

              <div className="remember-password form-group">
                <div className="checkbox">
                  <input
                    id="remember"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember"> Remember me</label>
                </div>

                <Link href="/forgot-password">Forget password</Link>
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="btn_apply"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Log in"}
                </button>
              </div>
            </form>
            <div className="allready-login form-group text-center">
              <span>
                Dont have an account? <Link href="/signup"> Register Now</Link>
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
