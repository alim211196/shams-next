import { getCmsPages } from "@/app/features/student/cms/cmsService";

const fetchCMS = async (slug, lang) => {
  try {
    const res = await getCmsPages(slug, lang);
    return res.success ? res.data.result : [];
  } catch (error) {
    console.error("Error fetching cms:", error);
    return [];
  }
};
const page = async () => {
  const cms = await fetchCMS("terms-and-conditions", "en");

  return (
    <div className="log_wraps" style={{ marginTop: "10vh" }}>
      <div className="log__heads">
        <h1>{cms.terms_conditions_section1_title || "Terms and Conditions"}</h1>
        <div
          className="terms-conditions-content"
          dangerouslySetInnerHTML={{
            __html: cms.terms_conditions_section1_description,
          }}
        />
      </div>
    </div>
  );
};

export default page;
