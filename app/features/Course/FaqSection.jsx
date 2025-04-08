import React, { useState } from "react";
import { useSelector } from "react-redux";

const FAQSection = ({ register, errors }) => {
  const { formData } = useSelector((state) => state.courseForm);
  const [faqs, setFaqs] = useState(formData.faqs || [{ id: 1, question: "", answer: "" }]);

  const addFaq = () => {
    setFaqs([...faqs, { id: faqs.length + 1, question: "", answer: "" }]);
  };

  const removeFaq = (id) => {
    setFaqs(faqs.filter((faq) => faq.id !== id));
  };

  return (
    <form>
      {faqs.map((faq, index) => (
        <div key={faq.id} className="form-group col-12 faqSection">
          <label>
            {index + 1}. Question{" "}
            <a href="#" className="trashIcon" onClick={() => removeFaq(faq.id)}>
              🗑️
            </a>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Write question"
            {...register(`faqs[${index}].question`)}
          />
          {errors.faqs?.[index]?.question && (
            <p className="error-text">{errors.faqs[index].question.message}</p>
          )}
          <textarea
            className="form-control"
            placeholder="Add Answer"
            {...register(`faqs[${index}].answer`)}
          />
          {errors.faqs?.[index]?.answer && (
            <p className="error-text">{errors.faqs[index].answer.message}</p>
          )}
        </div>
      ))}
      <div className="addFormBtn">
        <button type="button" className="btnGradient" onClick={addFaq}>
          Add more
        </button>
      </div>
    </form>
  );
};

export default FAQSection;