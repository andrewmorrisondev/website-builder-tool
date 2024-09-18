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
} from "./site-builder-components/registry";

const Home: React.FC = () => {
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

  return (
    <>
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
          <Typography variant="body1">
            We are a company dedicated to providing high-quality services to
            meet your needs. Our experienced team is here to assist you in every
            step of the way.
          </Typography>
        </Section>
      </Box>
    </>
  );
};

export default Home;
