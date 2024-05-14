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
        <p className="text">Materias Actuales: </p>
        <div className="items-center mt-4">
          <Table className="text-center z-0">
            <TableBody className="">
              <TableRow className="">
                <TableHead className="w-4 text-center text-table font-bold">
                  Materia
                </TableHead>
                <TableHead className="w-4 text-center text-table font-bold">
                  Grupo
                </TableHead>
                <TableHead className="w-4 text-center text-table font-bold">
                  Periodo
                </TableHead>
                <TableHead className="w-4 text-center text-table font-bold">
                  Docente
                </TableHead>
                <TableHead className="w-4 text-center text-table font-bold">
                  Créditos
                </TableHead>
                <TableHead className="w-4 text-center text-table font-bold">
                  Lunes
                </TableHead>
                <TableHead className="w-4 text-center text-table font-bold">
                  Martes
                </TableHead>
                <TableHead className="w-4 text-center text-table font-bold">
                  Miércoles
                </TableHead>
                <TableHead className="w-4 text-center text-table font-bold">
                  Jueves
                </TableHead>
                <TableHead className="w-4 text-center text-table font-bold">
                  Viernes
                </TableHead>
                <TableHead className="w-4 text-center text-table font-bold">
                  Sábado
                </TableHead>
                <TableHead className="w-4 text-center text-table font-bold">
                  Domingo
                </TableHead>
              </TableRow>
              <TableRow>
                <TableCell className="w-4 text-center text-table">
                  ÁLGEBRA LINEAL
                </TableCell>
                <TableCell className="w-4 text-center text-table">31</TableCell>
                <TableCell className="w-4 text-center text-table">
                  241
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  CANCHOLA MAGDALENO SANDRA LUZ
                </TableCell>
                <TableCell className="w-4 text-center text-table">5</TableCell>
                <TableCell className="w-4 text-center text-table">
                  13:00-15:00
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  13:00-15:00
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="w-4 text-center text-table">
                  CONTABILIDAD FINANCIERA
                </TableCell>
                <TableCell className="w-4 text-center text-table">31</TableCell>
                <TableCell className="w-4 text-center text-table">
                  241
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  PALACIOS MARTINEZ ANABEL
                </TableCell>
                <TableCell className="w-4 text-center text-table">6</TableCell>
                <TableCell className="w-4 text-center text-table">
                  07:00-09:00
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  07:00-09:00
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell className="w-4 text-center text-table">
              DEPORTES II
                </TableCell>
                <TableCell className="w-4 text-center text-table">31</TableCell>
                <TableCell className="w-4 text-center text-table">
                  241
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                BARREDA ROJAS CHRISTIAN RICARDO
                </TableCell>
                <TableCell className="w-4 text-center text-table">5</TableCell>
                <TableCell className="w-4 text-center text-table">
                11:00-13:00
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                11:00-13:00
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell className="w-4 text-center text-table">
              DESARROLLO HUMANO II
                </TableCell>
                <TableCell className="w-4 text-center text-table">31</TableCell>
                <TableCell className="w-4 text-center text-table">
                  241
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                SERVIN GONZALEZ CECILIA
                </TableCell>
                <TableCell className="w-4 text-center text-table">5</TableCell>
                <TableCell className="w-4 text-center text-table">
                {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                13:00-15:00
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                13:00-15:00
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell className="w-4 text-center text-table">
              DISEÑO DE INTERFACES DE SOFTWARE
                </TableCell>
                <TableCell className="w-4 text-center text-table">31</TableCell>
                <TableCell className="w-4 text-center text-table">
                  241
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                PACHECO SANCHEZ GABRIELA
                </TableCell>
                <TableCell className="w-4 text-center text-table">5</TableCell>
                <TableCell className="w-4 text-center text-table">
                09:00-11:00
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                09:00-11:00
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell className="w-4 text-center text-table">
              PRINCIPIOS DE ELECTRONICA Y CIRCUITOS LOGICOS
                </TableCell>
                <TableCell className="w-4 text-center text-table">31</TableCell>
                <TableCell className="w-4 text-center text-table">
                  241
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                GONZALEZ GUTIERREZ FIDEL
                </TableCell>
                <TableCell className="w-4 text-center text-table">5</TableCell>
                <TableCell className="w-4 text-center text-table">
                {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                09:00-11:00
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                09:00-11:00
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell className="w-4 text-center text-table">
              PROGRAMACION ORIENTADA A OBJETOS
                </TableCell>
                <TableCell className="w-4 text-center text-table">31</TableCell>
                <TableCell className="w-4 text-center text-table">
                  241
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                IBARRA CORONA DIEGO OCTAVIO
                </TableCell>
                <TableCell className="w-4 text-center text-table">5</TableCell>
                <TableCell className="w-4 text-center text-table">
                {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  11:00-13:00
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                11:00-13:00
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="w-4 text-center text-table">
                INGLES II
                </TableCell>
                <TableCell className="w-4 text-center text-table">31</TableCell>
                <TableCell className="w-4 text-center text-table">
                  241
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                BARREDA ROJAS CHRISTIAN RICARDO
                </TableCell>
                <TableCell className="w-4 text-center text-table">5</TableCell>
                <TableCell className="w-4 text-center text-table">
                {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                07:00-09:00
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                07:00-09:00
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
                </TableCell>
                <TableCell className="w-4 text-center text-table">
                  {" "}
                  -{" "}
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