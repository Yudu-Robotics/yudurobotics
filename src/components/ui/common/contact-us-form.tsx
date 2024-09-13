// components/ContactForm.js
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    privacyPolicy: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-xs font-medium text-gray-700">
                First name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 text-sm text-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="First name"
                required
              />
            </div>

            <div className="w-1/2">
              <label className="block text-xs font-medium text-gray-700">
                Last name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 text-sm text-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Last name"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700">
              Email <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 text-sm rounded-md text-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="you@company.com"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700">
              Message <span className="text-primary">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 text-sm text-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Leave us a message..."
              rows={4}
              required
            ></textarea>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="privacyPolicy"
                name="privacyPolicy"
                type="checkbox"
                checked={formData.privacyPolicy}
                onChange={handleChange}
                className="focus:ring-primary h-4 w-4 text-primary border-gray-300 text-sm text-gray-600 rounded-lg"
                required
              />
            </div>
            <div className="ml-2 text-xs">
              <label
                htmlFor="privacyPolicy"
                className="font-medium text-gray-700"
              >
                You agree to our friendly{" "}
                <a href="#" className="text-primary underline">
                  privacy policy
                </a>
                .
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-primary text-white rounded-md shadow-lg font-semibold text-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
