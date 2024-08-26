"use client";
import React, { useState } from "react";
import { IoCall } from "react-icons/io5";

const Contact: React.FC = () => {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const form = event.currentTarget;

    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        form.reset();
      } else {
        console.error("Error", data);
        setResult(data.message || "Submission failed.");
      }
    } catch (error) {
      console.error("Error", error);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-gray-100 pt-10" id="contact">
      <h2 className="text-3xl text-center font-medium sm:text-5xl">
        Contact Us
      </h2>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              At Chrome Double Glazing, our independence from manufacturers and
              external groups ensures that our recommendations are always in
              your best interest. We are committed to providing you with
              top-quality, personalized solutions that meet your unique needs.
            </p>

            <div className="mt-8 ">
              <h4 className="text-3xl font-bold">Call Us:</h4>
              <div className="mt-4 max-w-52 flex gap-2 items-center justify-center py-2 rounded-lg text-2xl font-medium text-white bg-black/90">
                <IoCall className="text-2xl" />
                <a href="tel:07508443393">07508443393</a>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="#" className="space-y-4" onSubmit={onSubmit}>
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    required
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                    name="phone"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="Option1"
                    className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                    tabIndex={0}
                  >
                    <input
                      className="sr-only"
                      id="Option1"
                      type="radio"
                      tabIndex={-1}
                      name="option" // Make sure the name attribute is the same for all options
                      value="Windows" // Set a value for each option
                    />

                    <span className="text-sm"> Windows </span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="Option2"
                    className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                    tabIndex={0}
                  >
                    <input
                      className="sr-only"
                      id="Option2"
                      type="radio"
                      tabIndex={-1}
                      name="option"
                      value="Doors" // Set a value for each option
                    />

                    <span className="text-sm"> Doors </span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="Option3"
                    className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                    tabIndex={0}
                  >
                    <input
                      className="sr-only"
                      id="Option3"
                      type="radio"
                      tabIndex={-1}
                      name="option"
                      value="Roofline" // Set a value for each option
                    />

                    <span className="text-sm"> Roofline </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows={8}
                  id="message"
                  name="message"
                ></textarea>
                <input
                  type="hidden"
                  name="access_key"
                  value="4010528b-fa66-4c15-a0e5-acc88fe20d1e"
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
