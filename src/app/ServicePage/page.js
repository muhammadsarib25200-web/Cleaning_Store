import { Suspense } from "react";
import ServicePageClient from "./ServicePageClient";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="services-page">
          <section className="services-hero">
            <div className="services-hero-content">
              <p>OUR CATALOG</p>
              <h1>Loading services...</h1>
            </div>
          </section>
        </div>
      }
    >
      <ServicePageClient />
    </Suspense>
  );
}
