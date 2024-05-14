"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { X, MoveLeft, MoveRight } from "lucide-react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

  const data = [
    {
      goal: 'CANCHOLA MAGDALENO SANDRA LUZ',
      materia: 'Álgebra Lineal'
    },
    {
      goal: 'PALACIOS MARTINEZ ANABEL',
      materia: 'Contabilidad Financiera'
    },
    {
        goal: 'BARREDA ROJAS CHRISTIAN RICARDO',
        materia: 'Deportes II'
      },
      {
        goal: 'SERVIN GONZALEZ CECILIA',
        materia: 'Desarrollo Humano II'
      },
      {
        goal: 'PACHECO SANCHEZ GABRIELA',
        materia: 'Diseño de Interfaces de Soft'
      },
      {
        goal: 'AGUILAR PEDRO JESSICA IVONNE',
        materia: 'Inglés II'
      },
      {
        goal: 'GONZALEZ GUTIERREZ FIDEL',
        materia: 'P. de Electrónica y C. Lógicos'
      },
      {
        goal: 'IBARRA CORONA DIEGO OCTAVIO',
        materia: 'Programación Orientada a Objetos'
      },
  ]
   
  export function EvDocente() {
    const [goal, setGoal] = React.useState(data[1].goal)
    const [materia, setMateria] = React.useState(data[0].materia);
    const currentIndex = data.findIndex(item => item.goal === goal);
   
    function onClick(adjustment: number) {
        const newIndex = Math.max(0, Math.min(data.length - 1, currentIndex + adjustment));
        setGoal(data[newIndex].goal);
        setMateria(data[newIndex].materia);
      }
   
    return (
 <Drawer>
        <DrawerTrigger asChild>
          <Button className="bg-button hover:bg-buttonHover w-[400px] h-[50px]">Evaluar</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Evaluar</DrawerTitle>
              <DrawerDescription>Elige a un docente para evaluarlo.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                  onClick={() => onClick(-1)}
                  disabled={currentIndex === 0}
                >
                  <MoveLeft className="h-4 w-4" />
                  <span className="sr-only">Decrease</span>
                </Button>
                <div className="flex-1 text-center">
                  <div className="text-3xl font-bold tracking-tighter">
                    {goal}
                  </div>
                  <div className="text-[0.70rem] uppercase text-muted-foreground">
                    {materia}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                  onClick={() => onClick(1)}
                  disabled={currentIndex === data.length - 1}
                >
                  <MoveRight className="h-4 w-4" />
                  <span className="sr-only">Increase</span>
                </Button>
              </div>
              <div className="mt-3 h-[120px]">
              </div>
            </div>
            <DrawerFooter>
            <Button className="bg-button hover:bg-buttonHover">Comenzar</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancelar</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
     
    )
  }
