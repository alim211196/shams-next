export const getS3ImageUrl = (module, imageName) => {
  if (!module || !imageName) return null;
  return `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/${module}/${imageName}`;
};

export const hideHeaderFooterPaths = [
  "/login",
  "/forgot-password",
  "/set-password",
  "/signup",
  "/student-question",
  "/success-password",
  "/trainer-forgot-password",
  "/trainer-login",
  "/trainer-set-password",
  "/trainer-signup",
  "/trainer-signup-after",
  "/trainer-verify-account",
  "/trainer-verify-code",
  "/verify-account",
  "/verify-code",
];
