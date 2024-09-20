"use client";
import {
  GoogleMap,
  HeroBanner,
  MetaTags,
} from "../site-builder-components/registry";

const About: React.FC = () => {
  return (
    <>
      <MetaTags />
      <HeroBanner title={"Title"} />
      <GoogleMap />
    </>
  );
};

export default About;
