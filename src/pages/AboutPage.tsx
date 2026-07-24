import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import AvatarGroup from "@/components/ui/AvatarGroup";
import AboutParallax from "@/components/sections/about/AboutParallax";

export default function AboutPage() {
  return (
    <>
      <div data-webild-section="HeroOverlay"><section aria-label="Hero section" className="relative w-full h-svh overflow-hidden flex flex-col justify-end mb-20"><HeroBackgroundSlot /><ImageOrVideo imageSrc="https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg" className="absolute inset-0 w-full h-full object-cover rounded-none" /><div className="absolute z-10 w-[150vw] h-[150vw] left-0 bottom-0 -translate-x-1/2 translate-y-1/2 backdrop-blur mask-[radial-gradient(circle,black_20%,transparent_70%)]" aria-hidden="true" /><div className="relative z-10 w-content-width mx-auto pb-10 md:pb-25"><div className="flex flex-col gap-3 w-full md:w-6/10 lg:w-1/2 xl:w-45/100 2xl:w-4/10"><div className="w-fit px-3 py-1 mb-1 text-sm card rounded"><p>About Us</p></div><TextAnimation text="A Legacy of Refined Hospitality" variant="fade-blur" gradientText={true} tag="h1" className="text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-white text-balance" /><TextAnimation text="Discover the story behind Tbilisi Tower. We blend modern luxury with Georgian warmth to create an unforgettable stay at Agmashenebeli Alley." variant="fade-blur" gradientText={false} tag="p" className="text-lg md:text-xl text-white leading-snug text-balance" /><div className="flex flex-wrap gap-3 mt-2 md:mt-3"><Button text="View Amenities" href="/amenities" variant="primary" /><Button text="Contact Us" href="/contact" variant="secondary" animationDelay={0.1} /></div></div></div></section></div>
      <div data-webild-section="AboutTextSplit"><section aria-label="About section" className="py-20"><div className="flex flex-col gap-20 mx-auto w-content-width"><div className="flex flex-col md:flex-row gap-3 md:gap-15"><div className="w-full md:w-1/2"><TextAnimation text="Welcome to Tbilisi Tower" variant="fade-blur" gradientText={true} tag="h2" className="text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-balance" /></div><div className="flex flex-col gap-2 w-full md:w-1/2"><TextAnimation key={0} text="Nestled along Agmashenebeli Alley, Tbilisi Tower is a beacon of modern luxury and Georgian warmth. We offer an oasis of comfort for both leisure and business travelers." variant="fade-blur" gradientText={false} tag="p" className="text-xl md:text-2xl leading-snug text-balance" />
<TextAnimation key={1} text="From elegantly appointed rooms to world-class amenities, every detail is carefully curated. We pride ourselves on attentive service that makes every stay unforgettable." variant="fade-blur" gradientText={false} tag="p" className="text-xl md:text-2xl leading-snug text-balance" /><div className="flex flex-wrap gap-3 mt-2 md:mt-3"><Button text="View Amenities" href="/amenities" variant="primary" /><Button text="Contact Us" href="/contact" variant="secondary" animationDelay={0.1} /></div></div></div><div className="w-full border-b border-foreground/5" /></div></section></div>
      <div data-webild-section="AboutParallax"><AboutParallax
        tag="Our Story"
        title="Welcome to Tbilisi Tower"
        description="Discover a perfect blend of modern luxury and traditional Georgian warmth. Located at Agmashenebeli Alley, we offer an unforgettable stay in the heart of the city."
        badge="Premium Hotel"
        frontImageSrc="https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg"
        backImageSrc="https://img.freepik.com/free-photo/beautiful-cityscape-tbilisi-georgia_181624-11855.jpg"
        textAnimation="fade-blur"
      /></div>
    </>
  );
}
