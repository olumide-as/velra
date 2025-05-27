"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import Image from "next/image";

interface FormData {
  name: string;
  company: string;
  email: string;
  about: string;
  captchaAnswer: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    about: "",
    captchaAnswer: "",
  });

const [captcha, setCaptcha] = useState<{ a: number; b: number; result: number } | null>(null);

useEffect(() => {
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);
  setCaptcha({ a, b, result: a + b });
}, []);

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

if (!captcha || parseInt(formData.captchaAnswer) !== captcha.result) {
  toast.error("Incorrect anti-spam answer");
  return;
}

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.name.trim(),
          company: formData.company.trim(),
          email: formData.email.trim(),
          about: formData.about.trim(),
          answer: formData.captchaAnswer.trim(),
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Failed to send");

      toast.success("Your message has been sent!");
      setFormData({
        name: "",
        company: "",
        email: "",
        about: "",
        captchaAnswer: "",
      });

      // new captcha
      const a = Math.floor(Math.random() * 10);
      const b = Math.floor(Math.random() * 10);
      setCaptcha({ a, b, result: a + b });
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>


      <motion.section
        className="relative min-h-screen w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/assets/contactsbg.webp"
          alt="Contact Background"
          fill
          className="absolute top-0 left-0 object-cover z-0"
        />

        <div className="absolute inset-0 bg-opacity-0 z-10" />

        <div className="relative z-20 text-white px-6 pt-48 md:pt-0 max-w-7xl mx-auto lg:px-20 flex flex-col gap-12 md:flex-row items-center justify-center min-h-screen">
          <Toaster position="top-right" reverseOrder={false} />

          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-left space-y-6 max-w-xl md:pr-20">
              <h1 className="text-3xl">
                Let’s Build Something <br /> Amazing Together
              </h1>
              <p className="text-lg text-gray-400">
                We are excited to hear about your ideas and help you bring them
                to life!
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center items-center md:pt-48"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#040404] p-8 md:p-12 rounded-lg border border-[#DC143C] w-full max-w-2xl">
              <h2 className="text-3xl text-white mb-8">
                Reach Out, We Don’t Bite
              </h2>
              <form onSubmit={handleSubmit}>
                {["name", "company", "email"].map((field) => (
                  <div className="mb-6" key={field}>
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium text-white capitalize"
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field as keyof FormData]}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#333333] text-white border-b-2 border-[#DC143C] focus:outline-none"
                      required
                    />
                  </div>
                ))}

                <div className="mb-6">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-white"
                  >
                    A Bit About What you Need
                  </label>
                  <textarea
                    name="about"
                    value={formData.about}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 bg-[#333333] text-white border-b-2 border-[#DC143C] focus:outline-none"
                    required
                  />
                </div>

                {/* Anti-Spam Math Captcha */}
{captcha && (
  <div className="mb-6">
    <label
      htmlFor="captchaAnswer"
      className="block text-sm font-medium text-white"
    >
      Quick vibe check ✅: What is {captcha.a} + {captcha.b}?
    </label>
    <input
      type="number"
      name="captchaAnswer"
      value={formData.captchaAnswer}
      onChange={handleChange}
      className="w-full p-3 bg-[#333333] text-white border-b-2 border-[#DC143C] focus:outline-none"
      required
    />
  </div>
)}

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 text-sm text-white font-medium bg-[#DC143C] rounded-full hover:bg-[#570516] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
