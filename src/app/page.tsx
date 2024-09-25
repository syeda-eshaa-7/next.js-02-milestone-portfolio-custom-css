
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import About from "@/components/About";
import Skills from "@/components/Skills";

import Contact from "@/components/Contact";
function Home() {
  return (
   <div>

   <Navbar />
   <HeroSection />
   <About />
   <Skills />
  
   <Contact />

   </div>
  );
}
export default Home

