import React, { useState } from "react";
import { useSelector } from "react-redux";

const PrerequisiteSection = ({ register, errors }) => {
  const { formData } = useSelector((state) => state.courseForm);
  const [prerequisites, setPrerequisites] = useState(formData.prerequisites || [{ id: 1, label: "" }]);

  const addPrerequisite = () => {
    setPrerequisites([
      ...prerequisites,
      { id: prerequisites.length + 1, label: "" },
    ]);
  };

  const removePrerequisite = (id) => {
    setPrerequisites(prerequisites.filter((prereq) => prereq.id !== id));
  };

  return (
    <form>
      {prerequisites.map((prereq, index) => (
        <div key={prereq.id} className="form-group col-12 faqSection">
          <label>
            Label {index + 1}{" "}
            <a
              href="#"
              className="trashIcon"
              onClick={() => removePrerequisite(prereq.id)}
            >
              🗑️
            </a>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Text"
            {...register(`prerequisites[${index}].label`)}
          />
          {errors.prerequisites?.[index]?.label && (
            <p className="error-text">
              {errors.prerequisites[index].label.message}
            </p>
          )}
        </div>
      ))}
      <div className="addFormBtn">
        <button type="button" className="btnGradient" onClick={addPrerequisite}>
          Add more
        </button>
      </div>
    </form>
  );
};

export default PrerequisiteSection;