import React from "react";
interface FormFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: "text" | "email" | "password";
    required?: boolean;
    multiline?: boolean;
    rows?: number;
    width?: string;
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
 * @param width - Width of the field (default: '100%').
 */
declare const FormField: React.FC<FormFieldProps>;
export default FormField;
