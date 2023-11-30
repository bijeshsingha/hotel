"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Section1 from "./Section1"
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from './Section4'

const Home = () => {
  return (
    <div className=" ">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default Home;
