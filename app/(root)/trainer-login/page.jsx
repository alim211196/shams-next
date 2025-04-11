"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import googleIcon from "../../assets/images/google-icon.svg";
import facebookIcon from "../../assets/images/facebook-icon.svg";
import appleIcon from "../../assets/images/apple-icon.svg";
import authLogin from "../../assets/images/trainer-login.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import eyeIcon from "../../assets/images/eye-icon.svg";
import eyeOffIcon from "../../assets/images/eye-off-icon.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/app/utils/validationSchemas";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
  encrypt,
  getRememberedUser,
  removeRememberedUser,
  storeRememberedUser,
} from "@/app/utils/cryptoUtils";
import { loginTrainer } from "@/app/features/trainer/auth/authService";
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

  const router = useRouter();
  const { authPages } = useSelector((state) => state.settings);
  const trainer = authPages.trainer;
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
      const response = await loginTrainer(data);
      if (response.success) {
        toast.success(response.data.message);
        if (rememberMe) {
          storeRememberedUser(data);
        } else {
          removeRememberedUser();
        }
        setTimeout(() => {
          router.push("/"); // Change to your dashboard route
        }, 2000);
      } else if (response.status === 401) {
        // Handle unverified user
        toast.error(response.data.message);
        const encryptedEmail = encodeURIComponent(encrypt(data.email));
        setTimeout(() => {
          router.push(`/verify-account?email=${encryptedEmail}`);
        }, 2000);
      } else if (response.status === 403) {
        toast.error(response.message);
        const userId = encodeURIComponent(response.id);
        setTimeout(() => {
          router.push(`/trainer-signup-after?id=${userId}`);
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
              trainer?.trainer_login_banner_img
                ? getS3ImageUrl("auth_page", trainer?.trainer_login_banner_img)
                : authLogin
            }
            unoptimized
            width={trainer?.trainer_login_banner_img ? 500 : 500} // Set a numeric width for static images
            height={trainer?.trainer_login_banner_img ? 400 : 500}
            alt="login"
          />
        </div>
        <div className="auth-right">
          <div className="log_wraps">
            <div className="log__heads">
              <h4 className="logs_title">
                {trainer?.trainer_login_title || "Log in to your account"}{" "}
              </h4>
              {<p>{trainer?.trainer_login_description} </p> || (
                <p>
                  Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio{" "}
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

                <Link href="/trainer-forgot-password">Forget password</Link>
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
                Dont have an account?{" "}
                <Link href="/trainer-signup"> Register Now</Link>
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
