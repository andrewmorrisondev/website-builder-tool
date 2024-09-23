import React from "react";
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
declare const NewsletterSignup: React.FC<NewsletterSignupProps>;
export default NewsletterSignup;
