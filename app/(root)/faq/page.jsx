// app/faq/page.tsx (Server Component)
import Image from "next/image";
import Link from "next/link";
import avatar1 from "../../assets/images/avatar.png";
import avatar2 from "../../assets/images/avatar1.png";
import avatar3 from "../../assets/images/avatar2.png";
import { getFaqsByCategory } from "../../features/student/faq/faqService";
import { getCmsPages } from "../../features/student/cms/cmsService";
import FaqList from "./FaqList";

// Fetch FAQs on the server side
const fetchFaqs = async (searchQuery, lang = "en") => {
  try {
    const res = await getFaqsByCategory("student", lang);
    if (!res.success) throw new Error("Failed to fetch data");

    let faqs = res.data.result || [];

    // Filter FAQs based on search query if present
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      faqs = faqs.filter((faq) => {
        const title =
          lang === "en" ? faq.original?.title : faq.translation?.title;
        return title?.toLowerCase().includes(query);
      });
    }

    return faqs;
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
};

const fetchCMS = async (slug, lang) => {
  try {
    const res = await getCmsPages(slug, lang);
    return res.success ? res.data.result : [];
  } catch (error) {
    console.error("Error fetching cms:", error);
    return [];
  }
};

const page = async ({ searchParams }) => {
  const isLoggedIn = true;
  const searchQuery = searchParams?.q || ""; // Get 'q' from URL
  const faqs = await fetchFaqs(searchQuery, "en");
  const cms = await fetchCMS("faq", "en");
  // Extract unique categories from FAQs
  const categories = [...new Set(faqs.map((faq) => faq.category))];

  return (
    <>
      <FaqList faqs={faqs} categories={categories} cms={cms} />

      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="cateringService">
                <div className="cateringContant">
                  <div className="avatar-group">
                    <Image
                      src={avatar1}
                      alt="User 1"
                      className="avatar avatar-1"
                    />
                    <Image
                      src={avatar2}
                      alt="User 2"
                      className="avatar-center avatar-2"
                    />
                    <Image
                      src={avatar3}
                      alt="User 3"
                      className="avatar avatar-3"
                    />
                  </div>
                  <h3>
                    {" "}
                    {cms?.faq_section3_title || "Still have questions?"}{" "}
                  </h3>
                  {(
                    <div
                      dangerouslySetInnerHTML={{
                        __html: cms?.faq_section3_description,
                      }}
                    />
                  ) || (
                    <p>
                      Can’t find the answer you’re looking for? Please chat with
                      our friendly team.
                    </p>
                  )}
                </div>
                <Link href="" className="btnGradient">
                  {cms?.faq_section3_btn_text || "Get in touch"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
