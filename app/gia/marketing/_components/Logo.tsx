"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/gia/marketing">
      <Image
        src="/images/logo.png"
        alt="logo"
        width={130}
        height={130}
        className="object-contain"
      />
    </Link>
  );
};

export default Logo;
