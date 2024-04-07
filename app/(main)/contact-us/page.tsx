import AnimationWrapper from "@/components/layout/AnimationWrapper";
import ContactForm from "@/components/layout/ContactForm";
import Footer from "@/components/layout/Footer";
import Title from "@/components/layout/Title";
import { Phone } from "lucide-react";
import { Metadata } from "next";
import React from "react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contact Us",
}

const ContactPage = () => {
  const days = [
    { name: "Mon", hours: "09:00 am – 05:00 pm" },
    { name: "Tue", hours: "09:00 am – 05:00 pm" },
    { name: "Wed", hours: "09:00 am – 05:00 pm" },
    { name: "Thu", hours: "09:00 am – 05:00 pm" },
    { name: "Fri", hours: "09:00 am – 05:00 pm" },
    { name: "Sat", hours: "Closed" },
    { name: "Sun", hours: "Closed" },
  ];

  const currentDayIndex = new Date().getDay();
  const nextDay = days[currentDayIndex - 1];
  return (
    <AnimationWrapper>
      <section className="py-8">
        <Title title="Let's Connect" />
        <div className="flex gap-6 md:flex-row flex-col mt-16">
          <div className="md:w-1/2 w-full">
            <div>
              <h1 className="text-xl font-bold">Global Impact Assessment</h1>
              <div className="flex items-center gap-4 mt-2">
                <Phone />
                <a href="tel:+1-786-977-9908" className="text-lg font-semibold">
                  +1-786-977-9908
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <h1 className="font-bold text-lg">Contact Availability</h1>
              <ul className="list-disc flex flex-col gap-1">
                {days.map((day, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-2 text-sm ${
                      nextDay.name === day.name
                        ? "text-indigo-400 font-semibold"
                        : "text-black dark:text-slate-50"
                    }`}
                  >
                    <span>{day.name}</span>
                    <span>{day.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-6">
              <p className="text-lg">Follow US</p>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/globalimpactassessment"
                  target="_blank"
                  className="dark:bg-white dark:text-black w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/company/global-impact-assessment/"
                  target="_blank"
                  className="dark:bg-white dark:text-black w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://twitter.com/gia_impacts"
                  target="_blank"
                  className="dark:bg-white dark:text-black w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <FaXTwitter size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <h1 className="capitalize text-center text-lg font-bold mb-6">
              Discover how we can assist your business
            </h1>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </AnimationWrapper>
  );
};

export default ContactPage;
