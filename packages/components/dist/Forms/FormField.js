import { jsx as _jsx } from "react/jsx-runtime";
import { TextField } from "@mui/material";
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
const FormField = ({ label, value, onChange, type = "text", required = false, multiline = false, rows = 1, width = "100%", // Default value for width
 }) => {
    return (_jsx(TextField, { label: label, value: value, onChange: (e) => onChange(e.target.value), type: type, fullWidth: false, margin: "normal", required: required, multiline: multiline, rows: rows, sx: { width } }));
};
export default FormField;
//# sourceMappingURL=FormField.js.map