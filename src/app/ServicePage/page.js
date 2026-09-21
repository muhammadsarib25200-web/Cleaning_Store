"use client";
import "./servicePage.css";
import React, { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "@/store/serviceSlice";
import ServiceCard from "../../../components/ServiceCard/serviceCard";

export default function ServicePage() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const { servicesData, selectedCategory } = useSelector((state) => state.services);

  const categoryFromUrl = searchParams.get("category");
  const validCategory = categoryFromUrl === "business" || categoryFromUrl === "house" ? categoryFromUrl : selectedCategory;
  const activeCategory = validCategory === "business" ? "business" : "house";

  useEffect(() => {
    dispatch(setSelectedCategory(activeCategory));
  }, [dispatch, activeCategory]);

  const currentServices = servicesData?.[activeCategory] ?? [];
  const pageTitle = activeCategory === "business" ? "Business Cleaning Services" : "House Cleaning Services";

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-content">
          <p>OUR CATALOG</p>
          <h1>{pageTitle}</h1>
          <span>
            Professional cleaning services designed to keep your space
            fresh, clean and comfortable.
          </span>
          <div className="service-cta-wrap">
            <Link href="/contact" className="book-service-btn">Book Service</Link>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="services-heading">
          <p>OUR SERVICES</p>
          <h2>Choose Your Service</h2>
        </div>

        <div className="services-grid">
          {currentServices?.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isActive={false}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
