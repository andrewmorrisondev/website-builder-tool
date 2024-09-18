"use client";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  NewsletterSignup,
  ContactForm,
  FormField,
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
  );
};

export default Home;
