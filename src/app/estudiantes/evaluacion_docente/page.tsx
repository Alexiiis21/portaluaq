
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EvDocente } from '@/components/evDocente';

const page = () => {
  return (
    <div className="">
      <div
        className="h-auto md:w-[calc(100%-310px)] w-96vh md:ml-[290px] ml-0 bg-white flex-col p-4 border 
      border-none rounded-3xl shadow-md md:mt-[120px] mt-[140px]"
      >
        <h2 className="title">Evaluación Docente</h2>
        <div className="flex justify-center items-center mt-[100px] mb-[100px]">
          <EvDocente />
        </div>
      </div>
    </div>
  )
}

export default page