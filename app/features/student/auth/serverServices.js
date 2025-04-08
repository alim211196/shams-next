// app/features/student/auth/serverServices.js (or utils/apiServer.js)
const API_BASE_URL = process.env.NEXT_PUBLIC_STUDENT_API_URL;

export const getQuestionsServer = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/question/all`, {
      method: "GET",
      cache: "no-store", // avoid build-time caching
    });

    if (!res.ok) {
      const errorBody = await res.json();
      throw new Error(errorBody.message || "Failed to fetch questions");
    }

    const response = await res.json();
    return { success: true, data: response.result };
  } catch (error) {
    console.error("getQuestionsServer Error:", error.message);
    return {
      success: false,
      message: error.message || "Something went wrong",
      status: 500,
    };
  }
};
