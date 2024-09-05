
import Services from '@/components/Services';
import PuzzleScene from '../components/PuzzleScene';
import HeroSection from '@/components/HeroSection';
import ContactUs from '@/components/ContactUs';
import BottomBar from '@/components/BottomBar';

export default function Home() {
  return (
    <div>
      <HeroSection id="hero-section"/>
      <Services/>
      <ContactUs/>
    </div>
  );
}
