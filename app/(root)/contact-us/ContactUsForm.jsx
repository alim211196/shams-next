"use client";
import { postContactUs } from "@/app/features/student/contactus/contactService";
import { contactInquiriesSchema } from "@/app/utils/validationSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { countries } from "countries-list";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(contactInquiriesSchema),
  });

  const countryNames = Object.values(countries).map((country) => country.name);

  const onSubmit = async (data) => {
    try {
      const response = await postContactUs(data);
      if (response.success) {
        toast.success(response.data.message);
        reset();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form className="contactForm" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="row">
        <div className="form-group col-12">
          <label>Your name*</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "error-input" : ""}`}
            placeholder="Your name"
            {...register("name")}
          />
          {errors.name && <p className="error-text">{errors.name.message}</p>}
        </div>
        <div className="form-group col-6">
          <label>Contact email *</label>
          <input
            type="text"
            className={`form-control ${errors.email ? "error-input" : ""}`}
            placeholder="you@example.com"
            {...register("email")}
          />
          {errors.email && <p className="error-text">{errors.email.message}</p>}
        </div>
        <div className="form-group col-6">
          <label>Contact No*</label>
          <input
            type="text"
            className={`form-control ${errors.phone ? "error-input" : ""}`}
            placeholder="Contact No*"
            {...register("phone")}
          />
          {errors.phone && <p className="error-text">{errors.phone.message}</p>}
        </div>

        <div className="form-group col-12">
          <label>Country*</label>
          <select className="form-control" {...register("country")}>
            {countryNames.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
          {errors.country && (
            <p className="error-text">{errors.country.message}</p>
          )}
        </div>

        <div className="form-group col-12">
          <label>Your message*</label>
          <textarea
            className={`form-control ${errors.message ? "error-input" : ""}`}
            placeholder="Type your message…."
            {...register("message")}
          ></textarea>
          {errors.message && (
            <p className="error-text">{errors.message.message}</p>
          )}
        </div>

        <div className="form-group col-12">
          <div className="contactPolicy">
            By submitting this form you agree to our terms and conditions and
            our Privacy Policy which explains how we may collect, use and
            disclose your personal information including to third parties.
          </div>
        </div>

        <div className="form-group col-12">
          <button className="btnGradient" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactUsForm;
