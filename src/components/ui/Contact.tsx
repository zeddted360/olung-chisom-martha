"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { Label } from "./label";
import { Input } from "./input";
import { Textarea } from "./textarea";

interface IFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  useEffect(() => {
    if (successMessage) {
      setTimeout(() => setSuccessMessage(""), 5000);
    }
    if (error) {
      setTimeout(() => setError(""), 5000);
    }
  }, [error, successMessage]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const res = await fetch(`/api/contact/me`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const errorData: { error: string } = await res.json();
          setError(
            errorData.error || "Validation error. Please check your input."
          );
        } else if (res.status === 500) {
          setError("Server error. Please try again later.");
        } else {
          setError("An unexpected error occurred. Please try again.");
        }
        throw new Error("Request failed");
      }

      const data: { message: string } = await res.json();
      setSuccessMessage(data.message || "Message sent successfully!");
      resetForm();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "An unknown error occurred";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="relative">
      {/* Form */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </Label>
                <Input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                  required
                  value={formData.name}
                />
              </div>
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </Label>
                <Input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={formData.email}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <Label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </Label>
              <Textarea
                onChange={handleChange}
                name="message"
                value={formData.message}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="How can I help you?"
              ></Textarea>
            </div>
            <Button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Custom Toast Notification */}
      {successMessage && (
        <div className="fixed top-4 right-4 bg-green-100 border border-green-300 text-green-800 p-4 rounded-lg shadow-md">
          <strong className="block font-semibold">Success</strong>
          <span>{successMessage}</span>
          <button
            onClick={() => setSuccessMessage("")}
            className="absolute top-2 right-2 text-green-900 hover:text-green-700"
          >
            &times;
          </button>
        </div>
      )}
      {error && (
        <div className="fixed top-4 right-4 bg-red-100 border border-red-300 text-red-800 p-4 rounded-lg shadow-md">
          <strong className="block font-semibold">Error</strong>
          <span>{error}</span>
          <button
            onClick={() => setError("")}
            className="absolute top-2 right-2 text-red-900 hover:text-red-700"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Contact;
