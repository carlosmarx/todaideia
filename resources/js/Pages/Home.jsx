import Header from './Home/Header';
import PageIllustration from './Home/PageIllustration';
import HeroHome from './Home/HeroHome';
import FeaturesBlocks from './Home/FeaturesBlocks';
import FeaturesZigZag from './Home/FeaturesZigzag';
import Testimonials from './Home/Testimonials';
import Newsletter from './Home/Newsletter';
import Banner from './Home/Banner';
import Footer from './Home/Footer';

function Home0() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        <FeaturesBlocks />
        <FeaturesZigZag />
        <Testimonials />
        <Newsletter />
      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home0;
