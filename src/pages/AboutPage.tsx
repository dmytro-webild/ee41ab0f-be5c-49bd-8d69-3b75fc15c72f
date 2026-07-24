import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import AboutMediaOverlay from "@/components/sections/about/AboutMediaOverlay";
import AboutTextSplit from "@/components/sections/about/AboutTextSplit";
import AboutFeaturesSplit from "@/components/sections/about/AboutFeaturesSplit";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavbarCentered
        logo="LuxeLiving"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Book a Tour", href: "/contact" }}
      />

      <main className="flex-grow">
        <AboutMediaOverlay
          tag="Our Story"
          title="Redefining Modern Living"
          description="Discover the vision behind our exceptional residential communities, where comfort meets unparalleled design."
          imageSrc="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80"
          textAnimation="fade-blur"
        />

        <AboutTextSplit
          title="A Commitment to Excellence"
          descriptions={[
            "Founded on the principle that a home should be a sanctuary, we have spent over a decade crafting spaces that inspire and rejuvenate. Every detail, from the architectural lines to the landscaping, is thoughtfully considered.",
            "Our mission is to create more than just buildings; we build vibrant communities where residents can thrive, connect, and experience the very best of contemporary living."
          ]}
          textAnimation="slide-up"
        />

        <AboutFeaturesSplit
          tag="Our Values"
          title="What Sets Us Apart"
          description="We believe in a holistic approach to residential development, focusing on sustainability, community, and uncompromising quality."
          items={[
            {
              icon: "leaf",
              title: "Sustainable Design",
              description: "Eco-friendly materials and energy-efficient systems integrated into every home."
            },
            {
              icon: "users",
              title: "Community First",
              description: "Shared spaces designed to foster connection, well-being, and a sense of belonging."
            },
            {
              icon: "shield",
              title: "Uncompromising Quality",
              description: "Premium finishes and meticulous attention to detail in every corner of our properties."
            }
          ]}
          imageSrc="https://images.unsplash.com/photo-1600607687931-cebf66713e28?auto=format&fit=crop&q=80"
          textAnimation="slide-up"
        />
      </main>

      <FooterSimple
        brand="LuxeLiving"
        columns={[
          {
            title: "Explore",
            items: [
              { label: "Amenities", href: "/amenities" },
              { label: "Location", href: "/location" }
            ]
          },
          {
            title: "Company",
            items: [
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" }
            ]
          }
        ]}
        copyright="© 2024 LuxeLiving. All rights reserved."
        links={[
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" }
        ]}
      />
    </div>
  );
}