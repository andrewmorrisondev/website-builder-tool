import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
/**
 * A dynamic and customizable Contact Form.
 *
 * @param onSubmit - Function to handle form submission.
 * @param initialValues - Initial form values (optional).
 * @param width - Width of the form (optional), default is "100%".
 */
const ContactForm = ({ onSubmit, initialValues, width = "100%", // Default value for the width prop
 }) => {
    const [values, setValues] = React.useState(initialValues || { name: "", email: "", message: "" });
    const handleChange = (field) => (event) => {
        setValues(Object.assign(Object.assign({}, values), { [field]: event.target.value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(values);
        setValues({ name: "", email: "", message: "" });
    };
    return (_jsxs(Box, { component: "form", onSubmit: handleSubmit, sx: { width }, children: [_jsx(Typography, { variant: "h6", children: "Contact Us" }), _jsx(TextField, { label: "Name", placeholder: values.name, onChange: handleChange("name"), fullWidth: true, margin: "normal", required: true }), _jsx(TextField, { label: "Email", placeholder: values.email, onChange: handleChange("email"), fullWidth: true, margin: "normal", required: true }), _jsx(TextField, { label: "Message", placeholder: values.message, onChange: handleChange("message"), fullWidth: true, margin: "normal", multiline: true, rows: 4, required: true }), _jsx(Button, { type: "submit", variant: "contained", color: "primary", children: "Submit" })] }));
};
export default ContactForm;
//# sourceMappingURL=ContactForm.js.map