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
        <p className="text">Calificaciones: </p>
        <div className="items-center mt-4">
          <Table className="text-center z-0">
            <TableBody className="">
              <TableRow className="">
                <TableHead className="w-4 text-center text-table font-bold">
                  Materia
                </TableHead>
                <TableHead className="w-4 text-center text-table font-bold">
                  Calificación
                </TableHead>
                <TableHead className="w-4 text-center text-table font-bold">
                  Acta
                </TableHead>
                <TableHead className="w-4 text-center text-table font-bold">
                Fecha de Publicación de la Calificación
                </TableHead>
              </TableRow>
                <TableRow>
                    <TableCell className="w-4 text-center text-table">
                    ADMINISTRACION
                        </TableCell>
                        <TableCell className="w-4 text-center text-table">
                        10
                        </TableCell>
                        <TableCell className="w-4 text-center text-table">
                        202337500031
                        </TableCell>
                        <TableCell className="w-4 text-center text-table">
                        12/01/2024
                        </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="w-4 text-center text-table">
                    INTRODUCCION A LAS TECNOLOGIAS DE INFORMACION
                        </TableCell>
                        <TableCell className="w-4 text-center text-table">
                        8
                        </TableCell>
                        <TableCell className="w-4 text-center text-table">
                        202337500032
                        </TableCell>
                        <TableCell className="w-4 text-center text-table">
                        12/01/2024
                        </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="w-4 text-center text-table">
                    MATEMATICAS COMPUTACIONALES
                        </TableCell>
                        <TableCell className="w-4 text-center text-table">
                        8
                        </TableCell>
                        <TableCell className="w-4 text-center text-table">
                        202337500034
                        </TableCell>
                        <TableCell className="w-4 text-center text-table">
                        12/12/2023
                        </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="w-4 text-center text-table">
                    ETICA Y LEGISLACION INFORMATICA
                        </TableCell>
                        <TableCell className="w-4 text-center text-table">
                        9
                        </TableCell>
                        <TableCell className="w-4 text-center text-table">
                        202337500033
                        </TableCell>
                        <TableCell className="w-4 text-center text-table">
                        14/12/2023
                        </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="w-4 text-center text-table">
                    INTRODUCCION A LA INVESTIGACION	
                        </TableCell>
                        <TableCell className="w-4 text-center text-table">
                        8
                        </TableCell>
                        <TableCell className="w-4 text-center text-table">
                        202337500037
                        </TableCell>
                        <TableCell className="w-4 text-center text-table">
                        22/12/2023
                        </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="w-4 text-center text-table">
                    INTRODUCCION A LA PROGRAMACION	
                        </TableCell>
                        <TableCell className="w-4 text-center text-table">
                        9
                        </TableCell>
                        <TableCell className="w-4 text-center text-table">
                        202337500035
                        </TableCell>
                        <TableCell className="w-4 text-center text-table">
                        27/12/2023
                        </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="w-4 text-center text-table">
                    DESARROLLO HUMANO I	
                        </TableCell>
                        <TableCell className="w-4 text-center text-table">
                        10
                        </TableCell>
                        <TableCell className="w-4 text-center text-table">
                        202337500036
                        </TableCell>
                        <TableCell className="w-4 text-center text-table">
                        12/01/2024
                        </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className="w-4 text-center text-table">
                    DEPORTES I	
                        </TableCell>
                        <TableCell className="w-4 text-center text-table">
                        9
                        </TableCell>
                        <TableCell className="w-4 text-center text-table">
                        202337500038
                        </TableCell>
                        <TableCell className="w-4 text-center text-table">
                        29/12/2023
                        </TableCell>
                    </TableRow>
            </TableBody>
          </Table>
        </div>
    </div>
    </div>
  )
}
export default page;