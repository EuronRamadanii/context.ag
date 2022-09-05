import Jobs from "../../components/Jobs/Jobs";
import { Header, Footer } from "../../components";
import "../../Assets/css/_career.scss";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

function Career() {
  AOS.init({ once: true });
  useTranslation([]);
  return (
    <div className="career-content">
      <Header />
      <div data-aos="fade-up" data-aos-duration="2300">
        <Jobs />
        <Footer />
      </div>
    </div>
  );
}

export default Career;
