"use client";

import React from "react";
import { TypingText } from "../layout/CustomText";
import Slider from "react-slick";
import Image from "next/image";

const teams = [
  {
    image: "/images/teams/thiri.png",
    name: "THIRI SHWESIN AUNG",
    role: "Assessment Lead",
  },
  {
    image: "/images/teams/thomas.png",
    name: "THOMAS B. FISHER",
    role: "Assessment Lead",
  },
  {
    image: "/images/teams/robert.png",
    name: "ROBERT M. SANFORD",
    role: "Assessment Lead",
  },
  {
    image: "/images/teams/ben.png",
    name: "BEN CAVE",
    role: "Assessment Lead",
  },
  {
    image: "/images/teams/bonny.png",
    name: "BONNY P. MCCLAIN",
    role: "Geospatial Lead",
  },
];

const Team = () => {
  const settings = {
    dots: false,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          pauseOnHover: true,
        },
      },
      
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        },
      },
    ],
  };
  return (
    <section className="py-8 flex flex-col gap-14">
      <TypingText title="MEET THE LEADERSHIP TEAM" textStyles="text-center" />
      <Slider {...settings}>
        {teams.map((team, index) => (
          <div key={index} className="dark:shadow cursor-pointer rounded p-2">
            <Image
              width={150}
              height={150}
              src={team.image}
              alt={team.name}
              loading="lazy"
              className="w-[150px] h-[150px] rounded-full mx-auto object-cover"
            />

            <div className="mt-2">
              <h3 className="text-center font-poppins font-medium uppercase">
                {team.name}
              </h3>
              <p className="text-center text-sm font-medium capitalize">
                {team.role}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Team;
