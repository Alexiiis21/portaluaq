import React from "react";
import Generales from "@/components/Generales";
import Actual from "@/components/Actual";
import Calificaciones from "@/components/Calificaciones";
import Restricciones from "@/components/Restricciones";

const page = () => {
  return (
    <div className="">
      <div>
       <Generales />
      <Actual />
      <Calificaciones />
      <Restricciones />
      </div>
      </div>
  );
};

export default page;
