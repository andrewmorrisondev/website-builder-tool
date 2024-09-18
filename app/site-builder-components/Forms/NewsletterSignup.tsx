import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

interface NewsletterSignupProps {
  onSubmit: (email: string) => void;
  initialEmail?: string;
}

/**
 * A dynamic and customizable Newsletter Signup form.
 *
 * @param onSubmit - Function to handle form submission.
 * @param initialEmail - Initial email value (optional).
 */
const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  onSubmit,
  initialEmail = "",
}) => {
  const [email, setEmail] = React.useState(initialEmail);

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    onSubmit(email);
    // Clear email field after submit
    setEmail("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h6">Sign up for our Newsletter</Typography>
      <TextField
        label="Email"
        value={email}
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Sign Up
      </Button>
    </Box>
  );
};

export default NewsletterSignup;
