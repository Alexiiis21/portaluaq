import { Sidebar } from "@/components/sidebar";
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
      border-none rounded-3xl shadow-md md:mt-[120px] mt-[140px]"
      >
        <h2 className="title">Bienvenido</h2>
        <p className="text">Generales: </p>
        <div className="items-center mt-4 md:px-[150px]">
          <Table className="text-center">
            <TableBody className="">
              <TableRow className="">
                <TableHead className="w-4 text-center text-table font-bold">
                  Escuela
                </TableHead>
                <TableCell className="w-4 text-center text-table">
                  IF-FACULTAD DE INFORMÁTICA
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="w-4 text-center text-table font-bold">
                  Carrera
                </TableHead>
                <TableCell className="w-4 text-center text-table">
                  SOF18-INGENIERO DE SOFTWARE
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="w-4 text-center text-table font-bold">
                  Tipo de periodo
                </TableHead>
                <TableCell className="w-4 text-center text-table">
                  Semestral
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="w-4 text-center text-table font-bold">
                  Semestre
                </TableHead>
                <TableCell className="w-4 text-center1 text-table">2</TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="w-4 text-center text-table font-bold">
                  Grupo
                </TableHead>
                <TableCell className="w-4 text-center1 text-table">
                  31
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="w-4 text-center text-table font-bold">
                  Promedio
                </TableHead>
                <TableCell className="w-4 text-center text-table">
                  9.0
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="w-4 text-center text-table font-bold">
                  Total nas
                </TableHead>
                <TableCell className="w-4 text-center text-table">0</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
export default page;