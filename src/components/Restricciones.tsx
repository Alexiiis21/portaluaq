import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const page = () => {
  return (
    <div className="">
      <div
        className="h-auto md:w-[calc(100%-310px)] w-96vh md:ml-[290px] ml-0 bg-white flex-col p-4 border 
      border-none rounded-3xl shadow-md md:mt-[20px] mt-[20px]"
      >
        <p className="text">Restricciones del plan de estudios: </p>
        <div className="items-center mt-4 md:px-[300px]">
          <Table className="text-center">
            <TableBody className="">
              <TableRow className="">
                <TableHead className="w-4 text-center text-table font-bold">
                  Duración
                </TableHead>
                <TableCell className="w-4 text-center text-table">
                  9 (semestral)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="w-4 text-center text-table font-bold">
                  Inscripciones Permitidas:
                </TableHead>
                <TableCell className="w-4 text-center text-table">14</TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="w-4 text-center text-table font-bold">
                  Total de materias:
                </TableHead>
                <TableCell className="w-4 text-center text-table">54</TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="w-4 text-center text-table font-bold">
                  Total de créditos:
                </TableHead>
                <TableCell className="w-4 text-center1 text-table">
                  312
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <p className="text-secTitle">
          Baja y pérdida de todos los derechos académicos en el programa
          educativo (Art. 41 del reglamento de estudiantes){" "}
        </p>
        <span className="text-secText">
          Acumular 3 NAs en la misma asignatura. Acumular 12 NAs en el plan de
          estudios. Acumular el 50% de NAs en el primer ciclo escolar Por
          expulsión definitiva de la Universidad, al imponerse como sanción por
          el Consejo Universitario.
        </span>
        <p className="text">Requisitos de titulación: </p>
        <span className="text-secText">
          MANEJO DE LENGUA CALIFICACIÓN MÍNIMA DE 6+ DE LA FAC. DE LENGUAS 3
          TALLERES DE HERRAMIENTAS Y COMPETENCIAS COMPUTACIONALES DURACIÓN
          MÍNIMA DE 40 HRS. CADA UNO
        </span>
      </div>
    </div>
  );
};
export default page;
