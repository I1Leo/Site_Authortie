import AppFooter from '../components/app-footer/app-footer';
import AppHeader from '../components/app-header/app-header';
import Community from '../components/community/community';
import HeroSection from '../components/hero-section/hero-section';
import HowItWorks from '../components/howitworks/howitworks';
import Modal from '../components/modal/modal';
import { useAppSelector } from '../hooks';

export default function App() {
  const isModal = useAppSelector((state) => state.root.modalSlice.isModal);

  return (
    <>
      {isModal && <Modal />}
      <AppHeader />
      <main>
        <HeroSection />
        <HowItWorks />
        <Community />
      </main>
      <AppFooter />
    </>
  );
}
