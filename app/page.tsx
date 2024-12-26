import Image from "next/image";
import { ServicesGrid } from "@/components/services/services-grid";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen">
        <Image
          src="/images/logo.jpg"
          alt="Luxury salon interior"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={100}
        />
      </section>
      <div className="relative">
        {/* Services Section */}
        <section className="py-20 bg-black px-4">
          <div className="container mx-auto">
            <h2 className="heading-lg text-center mb-12">
              Our <span className="gold-gradient">Services</span>
            </h2>
            <ServicesGrid />
          </div>
        </section>

        {/* <Philosophy />
        <Testimonials />
        <Footer /> */}
      </div>
    </main>
  );
}
