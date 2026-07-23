import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesBento from '@/components/sections/features/FeaturesBento';
import HeroBrand from '@/components/sections/hero/HeroBrand';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import { Coffee, Utensils, Wifi, Smartphone, Laptop, Globe } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
      <div id="hero" data-section="hero">
        <SectionErrorBoundary name="hero">
          <HeroBrand
            brand="Hotel Tbilisi Tower"
            description="Experience premium 4-star comfort in the heart of the Vake-Sabhurtalo district. Elegance, convenience, and Georgian hospitality await."
            primaryButton={{ text: "Check Availability", href: "#" }}
            secondaryButton={{ text: "View Amenities", href: "#amenities" }}
            imageSrc="http://img.b2bpic.net/free-photo/swimming-pool-beach-luxury-hotel-outdoor-pools-spa-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey_146671-18751.jpg"
            textAnimation="fade-blur"
          />
        </SectionErrorBoundary>
      </div>

      <div id="about" data-section="about">
        <SectionErrorBoundary name="about">
          <AboutMediaOverlay
            tag="Our Story"
            title="Unmatched Comfort in Tbilisi"
            description="Located at Agmashenebeli Alley, Tbilisi Tower combines luxury with accessibility. Whether you are here for sightseeing or business, our hotel provides the perfect home base with refined interiors and attentive service."
            imageSrc="http://img.b2bpic.net/free-photo/elegant-wedding-ceremony-venue-with-floral-decorations_23-2151976686.jpg"
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="amenities" data-section="amenities">
        <SectionErrorBoundary name="amenities">
          <FeaturesBento
            tag="Key Amenities"
            title="Everything for Your Stay"
            description="Relax and recharge with our high-end facilities tailored for your convenience."
            features={[
              {
                title: "Wellness & Leisure",                description: "Dive into our refreshing indoor pool.",                bentoComponent: "media-stack",                mediaItems: [
                  { imageSrc: "http://img.b2bpic.net/free-photo/luxury-resort-pool-paradise_23-2151961791.jpg" },
                  { imageSrc: "http://img.b2bpic.net/free-photo/gym-interior-with-equipment_93675-129242.jpg" },
                  { imageSrc: "http://img.b2bpic.net/free-photo/spa-decoration-wood-background_1150-6743.jpg" }
                ]
              },
              {
                title: "Stay Connected",                description: "High-speed Wi-Fi available throughout the premises.",                bentoComponent: "orbiting-icons",                centerIcon: Wifi,
                orbitIcons: [Smartphone, Laptop, Globe]
              },
              {
                title: "Dining Excellence",                description: "Enjoy fresh, local, and international cuisine.",                bentoComponent: "info-card-marquee",                infoCards: [
                  { icon: "Utensils", label: "Breakfast", value: "Available" },
                  { icon: "Coffee", label: "Restaurant", value: "On-Site" }
                ]
              }
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="metrics" data-section="metrics">
        <SectionErrorBoundary name="metrics">
          <MetricsSimpleCards
            tag="Statistics"
            title="Why Guests Choose Us"
            description="Consistently rated for our comfort and central location."
            metrics={[
              { value: "3.9", description: "Average Star Rating" },
              { value: "837", description: "Happy Guest Reviews" },
              { value: "3.5/5", description: "Location Score" }
            ]}
            textAnimation="fade-blur"
          />
        </SectionErrorBoundary>
      </div>

      <div id="testimonials" data-section="testimonials">
        <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
            tag="Guest Voices"
            title="Stories from Our Guests"
            description="Hear what travelers say about their stay at Tbilisi Tower."
            testimonials={[
              { name: "Anna V.", role: "Traveler", quote: "Fantastic location and the indoor pool is perfect.", imageSrc: "http://img.b2bpic.net/free-photo/woman-with-backpack-map-camera_23-2147847022.jpg" },
              { name: "David M.", role: "Business Guest", quote: "Excellent internet and great breakfast options.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-mature-businessman-black-suit_23-2147955368.jpg" },
              { name: "Elena S.", role: "Sightseer", quote: "Comfortable rooms and very helpful staff.", imageSrc: "http://img.b2bpic.net/free-photo/cheerful-young-woman-taking-selfie-ancient-gate_1262-4775.jpg" },
              { name: "John K.", role: "Tourist", quote: "Great parking and very accessible area.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-redhead-male-sunglasses-wild-city-park_613910-16378.jpg" },
              { name: "Sara D.", role: "Family Guest", quote: "We loved the breakfast and the overall comfort.", imageSrc: "http://img.b2bpic.net/free-photo/elderly-woman_1398-165.jpg" }
            ]}
            textAnimation="fade"
          />
        </SectionErrorBoundary>
      </div>

      <div id="faq" data-section="faq">
        <SectionErrorBoundary name="faq">
          <FaqTwoColumn
            tag="Support"
            title="Frequently Asked Questions"
            description="Answers to commonly asked questions about your visit."
            items={[
              { question: "What are the check-in and check-out times?", answer: "Check-in is at 14:00 (2:00 PM) and check-out is at 12:00 (12:00 PM)." },
              { question: "Is breakfast included?", answer: "We offer paid breakfast options for our guests." },
              { question: "Do you have free parking?", answer: "Yes, we offer free parking for all guests during their stay." }
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="contact" data-section="contact">
        <SectionErrorBoundary name="contact">
          <ContactCta
            tag="Reservations"
            text="Ready to book your stay in Tbilisi? Call us today to secure your reservation at the best rates."
            primaryButton={{ text: "Call 599 81 88 88", href: "tel:599818888" }}
            secondaryButton={{ text: "Email Us", href: "mailto:info@tbilisitower.ge" }}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>
    </>
  );
}