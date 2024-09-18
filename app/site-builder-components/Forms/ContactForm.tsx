// ContactForm.tsx component
import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

interface ContactFormProps {
  onSubmit: (values: ContactFormValues) => void;
  initialValues?: ContactFormValues;
}

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

/**
 * A dynamic and customizable Contact Form.
 *
 * @param onSubmit - Function to handle form submission.
 * @param initialValues - Initial form values (optional).
 */
const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  initialValues,
}) => {
  const [values, setValues] = React.useState<ContactFormValues>(
    initialValues || { name: "", email: "", message: "" },
  );

  const handleChange =
    (field: keyof ContactFormValues) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [field]: event.target.value });
    };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    onSubmit(values);
    setValues({ name: "", email: "", message: "" });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h6">Contact Us</Typography>
      <TextField
        label="Name"
        placeholder={values.name}
        onChange={handleChange("name")}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Email"
        placeholder={values.email}
        onChange={handleChange("email")}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Message"
        placeholder={values.message}
        onChange={handleChange("message")}
        fullWidth
        margin="normal"
        multiline
        rows={4}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default ContactForm;
