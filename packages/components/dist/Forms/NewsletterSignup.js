import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
/**
 * A dynamic and customizable Newsletter Signup form with email validation.
 *
 * @param onSubmit - Function to handle form submission.
 * @param initialEmail - Initial email value (optional).
 * @param width - Width of the form (default: "100%").
 */
const NewsletterSignup = ({ onSubmit, initialEmail = "", width = "100%", }) => {
    const [email, setEmail] = React.useState(initialEmail);
    const [error, setError] = React.useState(false); // State to track validation error
    // Simple email validation using regex pattern
    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateEmail(email)) {
            onSubmit(email);
            setEmail(""); // Clear email field after submit
            setError(false); // Reset error state if email is valid
        }
        else {
            setError(true); // Set error state if email is invalid
        }
    };
    return (_jsxs(Box, { component: "form", onSubmit: handleSubmit, sx: { width }, children: [_jsx(Typography, { variant: "h6", children: "Sign up for our Newsletter" }), _jsx(TextField, { label: "Email", value: email, placeholder: "Enter your email", onChange: (e) => setEmail(e.target.value), fullWidth: true, margin: "normal", required: true, type: "email" // Set the field type to email
                , error: error, helperText: error ? "Please enter a valid email address." : "" }), _jsx(Button, { type: "submit", variant: "contained", color: "primary", children: "Sign Up" })] }));
};
export default NewsletterSignup;
//# sourceMappingURL=NewsletterSignup.js.map