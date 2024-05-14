"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { DialogPrimitive } from "@/components/ui/dialog";
import { Link } from "lucide-react";


const Page = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const handleConfirm = () => {
    if (!selectedButton) {
      toast.error('Por favor, selecciona un documento y una carrera antes de confirmar.');
      return;
    }
    toast.success('Documento generado con éxito.')
  }

  return (
    <div>
      <div
        className="h-auto md:w-[calc(100%-310px)] w-96vh md:ml-[290px] ml-0 bg-white flex-col p-4 border 
            border-none rounded-3xl shadow-md md:mt-[120px] mt-[140px]"
      >
        <h2 className="title">Constancias</h2>
        <div className="mt-4">
          <span className="text-noraml font-bold">
            A través de este servicio podrás imprimir tu kardex, constancia de
            inscripción y constancia de egreso.{" "}
          </span>
          <div className="flex justify-center">
            <Dialog>
              <div className="mt-10 mb-10">
                <DialogTrigger asChild>
                  <Button className="bg-button text-white font-bold hover:bg-buttonHover">
                    Continuar
                  </Button>
                </DialogTrigger>
              </div>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Generar documento</DialogTitle>
                  <DialogDescription>
                    Antes de continuar, asegúrate de haber leído las
                    instrucciones. Tu documento será enviado al correo
                    proporcionado.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Correo:
                    </Label>
                    <Input
                      id="name"
                      defaultValue="alexisccaa@gmail.com"
                      className="col-span-3"
                    />
                    <Label htmlFor="name" className="text-right">
                      Carrera:
                    </Label>
                    <div className="">
                      <Select>
                        <SelectTrigger className="w-[342px]">
                          <SelectValue placeholder="Selecciona la carrera" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="system">
                            ( SOF18 ) INGENIERIA EN SOFTWARE
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <Label htmlFor="name" className="text-left">
                  Elige el documento que deseas generar:
                </Label>
                <div className="flex justify-between w-full gap-4">
                  <Button
                    onClick={() => setSelectedButton("kardex")}
                    className={`w-auto h-auto whitespace-normal ${
                      selectedButton === "kardex"
                        ? "bg-button text-white"
                        : "bg-white text-black border border-button"
                    } hover:bg-button hover:text-white active:bg-buttonHover active:text-white`}
                  >
                    Kardex (Estado Académico)
                  </Button>
                  <Button
                    onClick={() => setSelectedButton("inscripcion")}
                    className={`w-auto h-auto whitespace-normal ${
                      selectedButton === "inscripcion"
                        ? "bg-button text-white"
                        : "bg-white text-black border border-button"
                    } hover:bg-button hover:text-white active:bg-buttonHover active:text-white`}
                  >
                    Constancia de inscripción
                  </Button>
                  <Button
                    onClick={() => setSelectedButton("egresado")}
                    className={`w-auto h-auto whitespace-normal ${
                      selectedButton === "egresado"
                        ? "bg-button text-white"
                        : "bg-white text-black border border-button"
                    } hover:bg-button hover:text-white active:bg-buttonHover active:text-white`}
                  >
                    Constancia de Egresado
                  </Button>
                </div>
                <div>
                  <Button onClick={handleConfirm} className="bg-buttonHover text-white font-bold mt-4 w-full hover:bg-buttonHover hover:shadow-2xl">Confirmar</Button>
                </div>
              </DialogContent>
              <ToastContainer />
            </Dialog>
          </div>
          <div className="mt-4">
            <span className="text-normal">
              <ul>
                <li>
                  1. Tendrás la oportunidad de obtener un crédito por cada
                  documento, el cual se volverá a reactivar una vez que liquides
                  el adeudo.{" "}
                </li>
                <li className="mt-3">
                  2. El adeudo podrás liquidarlo en cualquier momento de tu
                  semestre antes de tu próxima reinscripción o trámite escolar,
                  en la caja de ingresos (ubicada en la planta baja del edificio
                  de servicios escolares) con el concepto de &quot;LIBERACION DE
                  ADEUDO DE KARDEX&quot; o &quot;LIBERACION DE ADEUDO DE
                  CONSTANCIA&quot; y entregar el recibo en ventanilla de
                  servicios escolares para borrar tu adeudo.
                </li>
                <li className="mt-3">
                  3. El documento lo podrás reimprimir cuantas veces lo
                  requieras con la misma fecha de emisión y tu destinatario
                  final podrá verificar la autenticidad del mismo a través de la
                  liga que aparecerá en la parte inferior.
                </li>
                <li className="mt-3">
                  4. <span className="font-bold">COSTOS: </span>
                  <ul>
                    <ul>
                      <li>
                      <span className="font-bold">Costo General:</span>
                      </li>
                    </ul>
                    {" "}
                    <ul> 
                      <li>- Kardex (Estado Académico): $ 30.00</li>
                      <li>- Constancia de Inscripción: $ 50.00</li>
                      <li>- Constancia de Egresado: $
                  50.00</li>
                  <li><span className="font-bold">Costo para Prepas UAQ:</span></li>
                  <li>- Kardex (Estado Académico): $
                  20.00 </li>
                  <li>- Constancia de Inscripción: $ 30.00 </li>
                  <li>- Constancia de
                  Egresado: $ 30.00 s</li>
                    </ul>
                  </ul>{" "}
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Page;
