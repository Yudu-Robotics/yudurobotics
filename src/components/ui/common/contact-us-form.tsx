// components/ContactForm.tsx
import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState({
    "entry.1725892135": "", // Full Name
    "entry.2098983406": "", // Email
    "entry.1155783579": "", // Phone
    "entry.1655141018": "", // Enquiry Type
    "entry.557944683": "", // Message
    privacyPolicy: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    // @ts-ignore
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation checks
    if (
      !formData["entry.1725892135"] ||
      !formData["entry.2098983406"] ||
      !formData["entry.1155783579"] ||
      !formData["entry.1655141018"] ||
      !formData["entry.557944683"]
    ) {
      alert("Please fill all required fields!");
      setIsSubmitting(false);
      return;
    }

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(formData["entry.2098983406"])) {
      alert("Enter a valid email address!");
      setIsSubmitting(false);
      return;
    }

    const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (!phoneRegex.test(formData["entry.1155783579"])) {
      alert("Enter a valid phone number!");
      setIsSubmitting(false);
      return;
    }

    const transformedData: Record<string, string> = {
      "entry.1725892135": formData["entry.1725892135"], // Full Name field
      "entry.2098983406": formData["entry.2098983406"], // Email field
      "entry.1155783579": formData["entry.1155783579"], // Phone field
      "entry.1655141018": formData["entry.1655141018"], // Enquiry Type
      "entry.557944683": formData["entry.557944683"], // Message field
      privacyPolicy: formData.privacyPolicy.toString(), // Convert boolean to string
    };

    // Convert to URLSearchParams for submission
    const formDataStr = new URLSearchParams(transformedData).toString();
    const url = `https://docs.google.com/forms/d/e/1FAIpQLSeehS-RjlfQrM6CaPUBqEWNkqIvAquMViMqa6mDAJcVDW9q1A/formResponse`;

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataStr,
        mode: "no-cors",
      });

      // Simulate delay for UX purposes
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsSubmitting(false);
      setSubmitSuccess(true);
    } catch (error) {
      setIsSubmitting(false);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form Fields */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-xs font-medium text-secondary-foreground">
                Full Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="entry.1725892135"
                value={formData["entry.1725892135"]}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 text-sm text-secondary-foreground rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Full name"
                required
                style={{ border: "1px solid #D6D6D8" }}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-xs font-medium text-secondary-foreground">
                Email <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                name="entry.2098983406"
                value={formData["entry.2098983406"]}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2  text-sm rounded-md text-secondary-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="you@company.com"
                required
                style={{ border: "1px solid #D6D6D8" }}
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-secondary-foreground">
              Phone <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              name="entry.1155783579"
              value={formData["entry.1155783579"]}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2  text-sm rounded-md text-secondary-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your phone number"
              required
              style={{ border: "1px solid #D6D6D8" }}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-secondary-foreground">
              Enquiry Type <span className="text-primary">*</span>
            </label>
            <select
              name="entry.1655141018"
              value={formData["entry.1655141018"]}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 text-sm text-secondary-foreground rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              required
              style={{ border: "1px solid #D6D6D8" }}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Partner">Partner</option>
              <option value="Product Enquiry">Product Enquiry</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-secondary-foreground">
              Message <span className="text-primary">*</span>
            </label>
            <textarea
              name="entry.557944683"
              value={formData["entry.557944683"]}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2  text-sm text-secondary-foreground rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Leave us a message..."
              rows={4}
              required
              style={{ border: "1px solid #D6D6D8" }}
            ></textarea>
          </div>

          {/* Privacy Policy */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="privacyPolicy"
                name="privacyPolicy"
                type="checkbox"
                checked={formData.privacyPolicy}
                onChange={handleChange}
                className="focus:ring-primary h-4 w-4 border-secondary-foreground text-sm text-secondary-foreground rounded-lg"
                required
              />
            </div>
            <div className="ml-2 text-xs">
              <label
                htmlFor="privacyPolicy"
                className="font-medium text-secondary-foreground"
              >
                You agree to our friendly{" "}
                <a href="#" className="text-primary underline">
                  privacy policy
                </a>
                .
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-primary cursor-pointer text-primary-foreground rounded-full shadow-lg font-semibold text-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Send message"}
            </button>
          </div>
        </form>
        {submitSuccess && (
          <p className="text-primary mt-4">Form submitted successfully!</p>
        )}
      </div>
    </div>
  );
}
