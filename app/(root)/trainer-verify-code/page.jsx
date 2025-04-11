"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import headerLogo from "../../assets/images/shams-logo.svg";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { otpSchema } from "@/app/utils/validationSchemas";
import { toast } from "react-toastify";
import { decrypt, encrypt } from "@/app/utils/cryptoUtils";
import {
  resendForgotPassOtp,
  verifyResetOtp,
} from "@/app/features/trainer/auth/authService";
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
      decryptedEmail = decrypt(email);
    } catch (error) {
      console.error("Decryption failed:", error);
    }
  }

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    resolver: yupResolver(otpSchema),
  });

  // ✅ Store OTP Digits Individually
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpRefs = useRef([]);

  useEffect(() => {
    if (!decryptedEmail) {
      router.push("/trainer-signup"); // Redirect if no email is found
    }
  }, [decryptedEmail, router]);

  // ✅ Handle Input Change and Auto Focus
  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // Only allow digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setValue("otp", newOtp.join("")); // Sync with form state

    // Move to the next field
    if (value !== "" && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  // ✅ Handle Backspace to Move Focus
  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  // ✅ Form Submission
  const onSubmit = async (data) => {
    try {
      const response = await verifyResetOtp({
        email: decryptedEmail,
        otp: data.otp,
      });
      if (response.success) {
        toast.success(response.data.message);
        const encryptedEmail = encodeURIComponent(encrypt(decryptedEmail));
        setTimeout(() => {
          router.push(`/trainer-set-password?email=${encryptedEmail}`);
        }, 2000);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  // ✅ Handle Resend OTP
  const handleResendOtp = async () => {
    try {
      const response = await resendForgotPassOtp({ email: decryptedEmail });
      if (response.success) {
        toast.success("New OTP sent to your email.");
      } else {
        toast.error(response.message || "Failed to resend OTP.");
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
                <Link className="backLink" href="/trainer-login">
                  Back To login
                </Link>
                <h4 className="logs_title">
                  {" "}
                  {trainer?.trainer_verify_code_title || "Verify code"}
                </h4>
                <p>
                  {" "}
                  {trainer?.trainer_verify_code_description ||
                    "An authentication code has been sent to your email."}
                </p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  {errors.otp ? (
                    <p className="error-text">{errors.otp.message}</p>
                  ) : (
                    <label>Enter Code</label>
                  )}

                  <div className="otpWrap">
                    {/* ✅ OTP Inputs */}
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        type="text"
                        className={`otp-input ${
                          errors.otp ? "error-input" : ""
                        }`}
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        ref={(el) => (otpRefs.current[index] = el)}
                      />
                    ))}
                  </div>
                  <div className="resendCode">
                    Didn’t receive a code?{" "}
                    <Link href="#" onClick={handleResendOtp}>
                      {" "}
                      Resend
                    </Link>
                  </div>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn_apply"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Verifying..." : "Verify"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default page;
