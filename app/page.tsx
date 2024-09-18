"use client";
import "./globals.css";
import { TestimonialCard } from "./site-builder-components/registry";

export default function Home(): JSX.Element {
  return (
    <>
      <TestimonialCard testimonial="this company is good" authorName="author" />
    </>
  );
}
