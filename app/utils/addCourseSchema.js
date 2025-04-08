import * as yup from 'yup';

export const courseSchema = yup.object().shape({
  courseType: yup.string().required('Course type is required'),
  courseTitle: yup.string().required('Course title is required'),
  courseDescription: yup.string().required('Course description is required'),
  courseDuration: yup.string().required('Course duration is required'),
  learningObjectives: yup.string().required('Learning objectives are required'),
  coreConcepts: yup.string().required('Core concepts are required'),
  assessmentCriteria: yup.string().required('Assessment criteria are required'),
  suggestedActivities: yup.string().required('Suggested activities are required'),
  classLanguage: yup.string().required('Class language is required'),
  category: yup.string().required('Category is required'),
  difficulty: yup.string().required('Difficulty level is required'),
  certificate: yup.string().required('Certificate option is required'),
  faqs: yup.array()
  .of(
    yup.object().shape({
      question: yup.string().required("Question is required"),
      answer: yup.string().required("Answer is required"),
    })
  )
  .min(1, "At least one FAQ is required"),

prerequisites: yup.array()
  .of(
    yup.object().shape({
      label: yup.string().required("Label is required"),
    })
  )
  .min(1, "At least one prerequisite is required"),
});