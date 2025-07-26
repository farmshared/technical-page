import { useScrollToHash } from "./hooks/useScrollToHash";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import SupportPage from "./pages/SupportPage/SupportPage";
import ImageBgCustomDesktopLayer from '@/assets/bg-custom-desk-layer.png';
import ImageBgCustomMobileLayer from '@/assets/bg-custom-mobile-layer.png';
import BgMobileBottom from '@/assets/custom-bg-bottom-mob.png';
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";
import { FaqPage } from "./pages/FAQ/FaqPage";
import { GuidePage } from "./pages/GuidePage/GuidePage";
import { ArticlePage } from "./pages/ArticlePage/ArticlePage";
import { BlogsPage } from "./pages/BlogsPage/BlogsPage";
import { BlogPage } from "./pages/BlogPage/BlogPage";
import { BugBounty } from "./pages/BugBounty/BugBounty";
import { BrandAssetsPage } from "./pages/BrandAssetsPage/BrandAssetsPage";
import { LegalPage } from "./pages/LegalPage/LegalPage";
import { TermsOfService } from "./pages/TermsOfService/TermsOfService";
import BugBountyRules from "./pages/BugBountyRules/BugBountyRules";
import { ContactUs } from "./pages/ContactUsPage/ContactUs";
import ServerMaintenance from "./pages/ServerMaintenance/ServerMaintenance";


function App() {
  const path = window.location.pathname;
  console.log(path);
  useScrollToHash();
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 0,
      delay: 0,
    });
    return () => {
      Aos.refresh();
    };
  }, []);

  return (
    <div className="App bg-dark-gradient min-h-screen text-white relative">
      <div className="absolute top-0 left-0 right-0 z-0">
        <img className="sm:hidden xs:block w-full" src={ImageBgCustomDesktopLayer} alt="bg" />
        <img className="xs:hidden w-full" src={ImageBgCustomMobileLayer} alt="bg" />
      </div>

      {path !== '/server-maintenance' && <Header />}
      <main id="main" className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/server-maintenance" element={<ServerMaintenance />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/support/contact-us" element={<ContactUs />} />
          <Route path="/support/:guideId" element={<GuidePage />} >
            <Route path=":articleId" element={<ArticlePage />} />
          </Route>
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:blogId" element={<BlogPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/bug-bounty" element={<BugBounty />} />
          <Route path="/bug-bounty-rules" element={<BugBountyRules />} />
          <Route path="/brand" element={<BrandAssetsPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {path !== '/server-maintenance' && <Footer />}
      <div className="sm:hidden md:block custom-bg-bottom absolute left-0 right-0 bottom-0 h-[35rem] bg-[url('./assets/footer-bg-image.png')] bg-no-repeat bg-contain"></div>
      <div data-aos="fade-up" data-aos-delay="500" className="md:hidden  absolute left-0 right-0 bottom-0 z-0">
        <img src={BgMobileBottom} className="w-full" alt="background mobile" />
      </div>
    </div>
  )
}

export default App
