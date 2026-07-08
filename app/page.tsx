import { BookingProvider } from "@/components/booking-context";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ethos from "@/components/Ethos";
import Services from "@/components/Services";
import CabinCarousel from "@/components/CabinCarousel";
import Film from "@/components/Film";
import Fleet from "@/components/Fleet";
import Destinations from "@/components/Destinations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  return (
    <BookingProvider>
      <Nav />
      <main>
        <Hero />
        <Ethos />
        <Services />
        <CabinCarousel />
        <Film />
        <Fleet />
        <Destinations />
        <Contact />
      </main>
      <Footer />
      <BookingModal />
    </BookingProvider>
  );
}
