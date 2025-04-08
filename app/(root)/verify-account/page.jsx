"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import {
  resendOtp,
  verifyStudentOtp,
} from "@/app/features/student/auth/authService";
import { decrypt } from "@/app/utils/cryptoUtils";
import { otpSchema } from "@/app/utils/validationSchemas";
import { decodeToken } from "@/app/utils/jwtHelper";
import { handleLogin } from "@/app/utils/cookiesHelper";
import { useSelector } from "react-redux";

const page = () => {
  const router = useRouter();
  const { authPages } = useSelector((state) => state.settings);
  const student = authPages.student;
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
      router.push("/register"); // Redirect if no email is found
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
      const response = await verifyStudentOtp({
        email: decryptedEmail,
        otp: data.otp,
      });
      if (response.success) {
        handleLogin(response.data.token);
        const decoded = decodeToken(response.data.token);
        toast.success(response.data.message);
        const userId = encodeURIComponent(decoded.userId);
        setTimeout(() => {
          router.push(`/student-question?id=${userId}`);
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
      const response = await resendOtp({ email: decryptedEmail });
      if (response.success) {
        toast.success(response.data.message);
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
              <div className="log__heads_center">
                <h4 className="logs_title">
                  {student?.student_verify_account_title ||
                    "Verify your account"}
                </h4>
                <p>
                  {student?.student_verify_account_description ||
                    "Please enter the code we emailed you."}
                </p>
                <p id="email">{decryptedEmail}</p>
              </div>

              {/* ✅ Show Error Message at the Top */}

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  {errors.otp ? (
                    <p className="error-text">{errors.otp.message}</p>
                  ) : (
                    <label>Confirmation Code</label>
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

                  {/* ✅ Resend OTP Button */}
                  <div className="resendCode">
                    Didn’t receive a code?{" "}
                    <Link href="#" onClick={handleResendOtp}>
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
