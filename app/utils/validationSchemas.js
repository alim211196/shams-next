import * as yup from "yup";

//  Global validation rules
const nameRules = yup.string().required("Please enter Full Name");
const emailRules = yup
  .string()
  .email("Invalid email format")
  .required("Please enter Email");
const passwordRules = yup
  .string()
  .min(8, "Password must be at least 8 characters")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
  )
  .required("Please enter Password");

//  Signup Validation Schema
export const signUpSchema = yup.object().shape({
  name: nameRules,
  email: emailRules,
  password: passwordRules,
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm Password"),
});

// Verify Account Validation Schema
export const otpSchema = yup.object().shape({
  otp: yup
    .string()
    .length(6, "OTP must be 6 digits")
    .required("Please enter code"),
});

// Login Validation Schema
export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Please enter Email"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Please enter Password"),
});

// forgot-pass Validation Schema
export const forgotPassSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Please enter Email"),
});

// Login Validation Schema
export const resetPassSchema = yup.object().shape({
  new_password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Please enter Password"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("new_password"), null], "Passwords must match")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Please confirm Password"),
});

export const personalDetailsSchema = yup.object().shape({
  tutorType: yup.string().required("Company or Individual is required"),
  license: yup.string().required("Trade license/Emirates ID is required"),
  certification: yup.mixed().required("Certifications are required"),
  expertise: yup.string().required("Expertise is required"),
  is_agreed: yup.bool().oneOf([true], "You must agree to the terms"),
});

export const contactInquiriesSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .trim(),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format")
    .trim(),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .trim(),
  country: yup.string().required("Country is required").trim(),
  message: yup.string().required("Message is required").trim(),
});
