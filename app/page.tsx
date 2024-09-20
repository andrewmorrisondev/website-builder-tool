"use client";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  NewsletterSignup,
  ContactForm,
  FormField,
  ResponsiveGrid,
  Section,
  InfoCard,
  HeroBanner,
  Carousel,
  ImageGallery,
  Lightbox,
  VideoEmbed,
  Modal,
  PricingTable,
  MetaTags,
  ScrollAnimation,
  HoverEffect,
  ClickAnimation,
  Tabs,
  Timeline,
} from "./site-builder-components/registry";

const Home: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formFieldValue, setFormFieldValue] = useState<string>("");
  const [contactFormData, setContactFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleContactFormSubmit = (values: typeof contactFormData): void => {
    setContactFormData(values);
    console.log("Contact Form Submitted:", values);
  };

  const handleNewsletterSubmit = (email: string): void => {
    console.log("Newsletter Signup Submitted:", email);
  };

  const handleFormFieldChange = (value: string): void => {
    setFormFieldValue(value);
  };
  const pricingOptions = [
    {
      title: "Basic",
      price: "$9.99/month",
      features: ["1 Project", "Basic Support", "500MB Storage"],
      buttonText: "Get Started",
      onButtonClick: () => alert("Basic plan selected"),
    },
    {
      title: "Pro",
      price: "$19.99/month",
      features: ["5 Projects", "Priority Support", "5GB Storage"],
      buttonText: "Choose Pro",
      onButtonClick: () => alert("Pro plan selected"),
    },
    {
      title: "Enterprise",
      price: "$49.99/month",
      features: ["Unlimited Projects", "24/7 Support", "Unlimited Storage"],
      buttonText: "Contact Us",
      onButtonClick: () => alert("Enterprise plan selected"),
    },
  ];

  /**
   * Handles the click on the image from the gallery, opens the lightbox
   * and sets the index of the clicked image.
   */
  const handleImageClick = (index: number): void => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  /**
   * Handles the closing of the lightbox.
   */
  const handleCloseLightbox = (): void => {
    setLightboxOpen(false);
  };

  // Carousel items can be anything, here we'll use InfoCard as an example
  const carouselItems = [
    <InfoCard
      title="Service 1"
      description="We provide top-notch web development services."
      key={1}
    />,
    <InfoCard
      title="Service 2"
      description="Our design services will help your brand stand out."
      key={2}
    />,
    <InfoCard
      title="Service 3"
      description="Get comprehensive digital marketing solutions."
      key={3}
    />,
  ];

  const images = [
    { src: "/web-avatar@2x.png", alt: "Image of Andy" },
    { src: "/web-avatar@2x.png", alt: "Another Image" },
    { src: "/web-avatar@2x.png", alt: "Third Image" },
  ];

  const handleCtaClick: () => void = () => {
    console.log("CTA button clicked");
  };

  return (
    <>
      <MetaTags />
      <Tabs labels={["Tab 1", "Tab 2"]}>
        <div>Content for Tab 1</div>
        <div>Content for Tab 2</div>
      </Tabs>
      <Timeline
        items={[
          {
            title: "Event 1",
            date: "2024-01-01",
            content: <p>Details of Event 1</p>,
          },
          {
            title: "Event 2",
            date: "2024-02-01",
            content: <p>Details of Event 2</p>,
          },
        ]}
      />
      <HeroBanner
        title="Welcome to Our Company"
        subtitle="We create beautiful digital experiences"
        backgroundImage="/web-avatar@2x.png" // Example background image
        ctaText="Learn More"
        onCtaClick={handleCtaClick}
        align="center" // Can be "left", "center", or "right"
        fullHeight={true}
      />
      {/* Carousel Usage */}
      <Box padding={4}>
        <Typography variant="h4" gutterBottom>
          Our Services
        </Typography>
        <Carousel items={carouselItems} interval={5000} />
      </Box>
      <Box padding={4}>
        <Typography variant="h4" gutterBottom>
          Example Usage of Dynamic Forms
        </Typography>

        {/* Contact Form */}
        <Box marginBottom={4}>
          <ContactForm onSubmit={handleContactFormSubmit} />
        </Box>

        {/* Newsletter Signup */}
        <Box marginBottom={4}>
          <NewsletterSignup onSubmit={handleNewsletterSubmit} />
        </Box>

        {/* Dynamic Form Field */}
        <Box>
          <Typography variant="h6">Custom Form Field</Typography>
          <FormField
            label="Custom Input"
            value={formFieldValue}
            onChange={handleFormFieldChange}
            required
          />
          <Typography variant="body1" color="textSecondary">
            Current Form Field Value: {formFieldValue}
          </Typography>
        </Box>

        {/* Display Submitted Contact Form Data */}
        {contactFormData.name && (
          <Box marginTop={4}>
            <Typography variant="h6">Submitted Contact Form Data:</Typography>
            <Typography>Name: {contactFormData.name}</Typography>
            <Typography>Email: {contactFormData.email}</Typography>
            <Typography>Message: {contactFormData.message}</Typography>
          </Box>
        )}
      </Box>
      <Box>
        {/* Section with title, subtitle, and background color */}
        <Section
          title="Our Services"
          subtitle="We provide the best services tailored for you"
          textAlign="center"
          padding={6}
        >
          {/* Responsive grid for service items */}
          <ResponsiveGrid spacing={4} columns={{ xs: 12, sm: 6, md: 4 }}>
            {/* InfoCard for service item 1 */}
            <InfoCard
              title="Service 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />

            {/* InfoCard for service item 2 */}
            <InfoCard
              title="Service 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />

            {/* InfoCard for service item 3 */}
            <InfoCard
              title="Service 3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />

            {/* InfoCard for service item 4 */}
            <InfoCard
              title="Service 4"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </ResponsiveGrid>
        </Section>

        {/* Another section with just content */}
        <Section padding={4}>
          <Typography variant="h5">About Us</Typography>
          <ScrollAnimation>
            <HoverEffect>
              <ClickAnimation>
                <Typography variant="body1">
                  We are a company dedicated to providing high-quality services
                  to meet your needs. Our experienced team is here to assist you
                  in every step of the way.
                </Typography>
              </ClickAnimation>
            </HoverEffect>
          </ScrollAnimation>
        </Section>
      </Box>
      {/* Image Gallery */}
      <ImageGallery
        images={images}
        spacing={2}
        columns={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
        onClickImage={handleImageClick}
      />

      {/* Lightbox Modal */}
      <Lightbox
        images={images}
        open={lightboxOpen}
        onClose={handleCloseLightbox}
        initialIndex={selectedImageIndex}
      />
      <VideoEmbed
        title={"demo video"}
        src={"https://www.youtube.com/embed/pCTTOnSpupo"}
      />
      <div>
        <button onClick={() => setModalOpen(true)}>Open Modal</button>
        <Modal
          open={isModalOpen}
          onClose={() => setModalOpen(false)}
          title="My Modal"
        >
          <p>This is a modal content.</p>
        </Modal>

        <button onClick={() => setLightboxOpen(true)}>Open Lightbox</button>
      </div>
      <PricingTable options={pricingOptions} />
    </>
  );
};

export default Home;
