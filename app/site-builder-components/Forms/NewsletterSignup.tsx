import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

interface NewsletterSignupProps {
  onSubmit: (email: string) => void;
  initialEmail?: string;
  width?: string;
}

/**
 * A dynamic and customizable Newsletter Signup form with email validation.
 *
 * @param onSubmit - Function to handle form submission.
 * @param initialEmail - Initial email value (optional).
 * @param width - Width of the form (default: "100%").
 */
const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  onSubmit,
  initialEmail = "",
  width = "100%",
}) => {
  const [email, setEmail] = React.useState(initialEmail);
  const [error, setError] = React.useState(false); // State to track validation error

  // Simple email validation using regex pattern
  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    if (validateEmail(email)) {
      onSubmit(email);
      setEmail(""); // Clear email field after submit
      setError(false); // Reset error state if email is valid
    } else {
      setError(true); // Set error state if email is invalid
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ width }} // Apply the customizable width prop
    >
      <Typography variant="h6">Sign up for our Newsletter</Typography>
      <TextField
        label="Email"
        value={email}
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
        required
        type="email" // Set the field type to email
        error={error} // Show error state if validation fails
        helperText={error ? "Please enter a valid email address." : ""} // Error message
      />
      <Button type="submit" variant="contained" color="primary">
        Sign Up
      </Button>
    </Box>
  );
};

export default NewsletterSignup;
