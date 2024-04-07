"use client";

import React from "react";
import { TypingText } from "../layout/CustomText";
import { Mail, MapPin, Phone } from "lucide-react";

const ContractInformation = () => {
  return (
    <section className="py-8">
      <TypingText title="CONTRACT INFORMATION" textStyles="text-center" />
      <div className="mt-8 font-normal w-full">
        <div className="w-full">
          <div className="flex items-center gap-4">
            <Mail />
            <a
              href="mailto:inquiry@globalimpactassessment.com"
              className="sm:text-xl break-all font-bold"
            >
              inquiry@globalimpactassessment.com
            </a>
          </div>

          <div className="w-full h-[1px] my-2 bg-gray-300 dark:bg-white rounded-full"></div>
        </div>

        <div className="my-4">
          <div>
            <div className="flex items-center gap-4">
              <Phone />
              <a href="tel:+1-786-977-9908" className="sm:text-xl font-semibold">
                +1-786-977-9908
              </a>
            </div>
            <div className="flex items-center gap-4 my-2 mt-4">
              <MapPin />
              <p className="opacity-70 sm:text-base text-sm">Cambridge, Massachusetts. 02138</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractInformation;
