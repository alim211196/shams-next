// Helper function to handle API requests securely
export const handleRequest = async (apiCall) => {
  try {
    const response = await apiCall();
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Something went wrong",
      status: error.response?.status || 500,
    };
  }
};
