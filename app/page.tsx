import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AppSection from '@/components/AppSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'أكاديمية المعرفة الإفتراضية',
};

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#fcfcfc] dark:bg-[#382a55] transition-colors duration-300">
      <div className="flex-grow">
        <Header />
        <Hero />
        <AppSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
