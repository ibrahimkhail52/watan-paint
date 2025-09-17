import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import QRCode from "../../../assets/service/ConsultancyToggle/QR code.jpg";

export default function ConsultancyToggle() {
  const [activeTab, setActiveTab] = useState("form");

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Buttons */}
      <div className="flex border rounded mb-6 overflow-hidden w-full max-w-md mx-auto">
        {["form", "whatsapp"].map((tab) => (
          <Motion.button
            key={tab}
            className={`flex-1 py-2 font-semibold ${
              activeTab === tab
                ? "bg-green-500 text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {tab === "form" ? "Get a free consultancy" : "Whatsapp us"}
          </Motion.button>
        ))}
      </div>

      {/* Animated Content */}
      <AnimatePresence mode="wait">
        {activeTab === "form" ? (
          <Motion.form
            key="form"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-xl mx-auto space-y-6"
          >
            <p className="text-center mb-4">
              Sign up today to receive a free consultation from our experts.
              We'll help you choose the perfect shade and finish for your home.
            </p>

            {/* Name fields */}
            {[
              {
                id: "firstName",
                label: "First Name:",
                type: "text",
                required: true,
              },
              {
                id: "lastName",
                label: "Last Name:",
                type: "text",
                required: true,
              },
            ].map(({ id, label, type, required }) => (
              <div key={id} className="flex items-center gap-4">
                <label htmlFor={id} className="w-48 font-semibold text-right">
                  {label} {required && <span className="text-red-600">*</span>}
                </label>
                <input
                  id={id}
                  type={type}
                  required
                  className="border rounded px-3 py-2 flex-1"
                />
              </div>
            ))}

            <h3 className="font-semibold mb-2">Contact details</h3>

            {[
              {
                id: "email",
                label: "Email Address:",
                type: "email",
                required: true,
              },
              {
                id: "phone",
                label: "Phone Number:",
                type: "tel",
                required: true,
              },
              { id: "city", label: "City:", type: "text", required: true },
            ].map(({ id, label, type }) => (
              <div key={id} className="flex items-center gap-4">
                <label htmlFor={id} className="w-48 font-semibold text-right">
                  {label} <span className="text-red-600">*</span>
                </label>
                <input
                  id={id}
                  type={type}
                  required
                  className="border rounded px-3 py-2 flex-1"
                />
              </div>
            ))}

            <div className="text-sm mt-4 space-y-2">
              <label className="inline-flex items-start space-x-2">
                <input type="checkbox" required />
                <span>
                  By submitting this form, I agree to the{" "}
                  <a
                    href="/terms"
                    target="_blank"
                    className="text-blue-600 underline"
                    rel="noreferrer"
                  >
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy"
                    target="_blank"
                    className="text-blue-600 underline"
                    rel="noreferrer"
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
              <label className="inline-flex items-start space-x-2">
                <input type="checkbox" />
                <span>
                  I consent to receiving marketing emails. You can unsubscribe
                  at any time.
                </span>
              </label>
            </div>

            <Motion.button
              type="submit"
              className="mt-6 bg-green-500 text-white font-semibold px-6 py-2 rounded hover:bg-green-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </Motion.button>
          </Motion.form>
        ) : (
          <Motion.div
            key="whatsapp"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-6 rounded shadow max-w-4xl mx-auto flex items-center gap-8"
          >
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2">
                Get a Free Paint Consultancy via WhatsApp!
              </h2>
              <p className="mb-4">
                Let’s connect in a Simpler and Secured Way to resolve your
                queries to get a faster response.
              </p>
              <Motion.a
                href="https://wa.me/+93785032858"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp Us
              </Motion.a>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="h-24"
              />
              <img src={QRCode} alt="WhatsApp QR Code" className="h-24" />
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
