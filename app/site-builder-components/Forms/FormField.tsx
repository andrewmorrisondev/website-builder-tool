import React from "react";
import { TextField } from "@mui/material";

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "password";
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}

/**
 * A highly dynamic and reusable Form Field component.
 *
 * @param label - The field label.
 * @param value - The current field value.
 * @param onChange - Function to handle value changes.
 * @param type - The field input type (default: 'text').
 * @param required - Whether the field is required (default: false).
 * @param multiline - Whether the field is multiline (default: false).
 * @param rows - Number of rows for multiline field (default: 1).
 */
const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  multiline = false,
  rows = 1,
}) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={type}
      fullWidth
      margin="normal"
      required={required}
      multiline={multiline}
      rows={rows}
    />
  );
};

export default FormField;
