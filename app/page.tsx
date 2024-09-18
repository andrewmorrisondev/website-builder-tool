"use client";
import "./globals.css";
import { CTAButton, ImageCard } from "./site-builder-components/registry";

export default function Home(): JSX.Element {
  return (
    <>
      <ImageCard
        imageSrc="/web-avatar@2x.png"
        actions={<CTAButton title="CTA" />}
      />
    </>
  );
}
