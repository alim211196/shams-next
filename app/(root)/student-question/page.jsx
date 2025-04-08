export const dynamic = "force-dynamic";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import headerLogo from "../../assets/images/shams-logo.svg";
// import { getQuestions } from "@/app/features/student/auth/authService";
import QuestionSection from "./QuestionSection";
import { getQuestionsServer } from "@/app/features/student/auth/serverServices";
// const fetchQuestions = async () => {
//   try {
//     const res = await getQuestions();
//     return res.success ? res.data.result : [];
//   } catch (error) {
//     console.error("Error fetching FAQs:", error);
//     return [];
//   }
// };

const page = async () => {
  // const questions = await fetchQuestions();
  const { success, data } = await getQuestionsServer();
  const questions = success ? data : [];
  return (
    <>
      <div className="trainerHeader">
        <div className="container">
          <div className="headerWrap">
            <div className="logo">
              <Link href="#">
                <Image src={headerLogo} alt="Logo" />
              </Link>
            </div>
            <Link className="CancelBtn" href="/">
              Cancel
            </Link>
          </div>
        </div>
      </div>
      <QuestionSection questions={questions} />
    </>
  );
};

export default page;
