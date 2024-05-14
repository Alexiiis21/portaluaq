"use client";
import React from "react";
import Image from "next/image";
import Modal from "./Modal";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {


  return (
    <div className="fixed top-0 h-24 bg-white text-black flex items-center justify-between p-4 w-full z-50">
      <div className="flex flex-start ">
        <Image src="/logo.png" alt="logo" width={385} height={71} />
      </div>
      <div className="flex justify-end ml-6  md:px-10">
        <Modal />
      </div>
    </div>
  );
};
