import React from "react";
interface ContactFormProps {
    onSubmit: (values: ContactFormValues) => void;
    initialValues?: ContactFormValues;
    width?: string;
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
 * @param width - Width of the form (optional), default is "100%".
 */
declare const ContactForm: React.FC<ContactFormProps>;
export default ContactForm;
