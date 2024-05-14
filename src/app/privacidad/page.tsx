import React from "react";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import SecLayout from "./SecLayout";

const page = () => {
  return (
    <SecLayout>
<div>
      <div className="flex m-10 w-full">
        <Link href="/">
          <Button className="">
            <MoveLeft />
            Volver
          </Button>
        </Link>
      </div>
      <div className="flex justify-center items-center">
          <Image
            src="/privacidad.png"
            alt="privacidad"
            width={540}
            height={65}
          />
        </div>
      <div className="flex text-left px-10 md:px-[400px] mt-10">
        La transparencia, la rendición de cuentas y el derecho de acceso a la
        información son elementos de un Estado Constitucional de Derecho.
        Enmarcados en nuestro país dentro del proceso de rediseño institucional,
        resultado de la transición democrática y su incipiente consolidación,
        traduciéndose de esta forma en dos generaciones de reformas: La primera
        de ellas, institucionalizó Órganos Electorales imparciales, Órganos
        defensores de derechos humanos y los primeros consejos de la judicatura;
        así como la crítica a nuestro sistema de procuración de justicia. La
        segunda ola de reformas, trajo consigo la idea del ejercicio
        transparente del poder público. Una democracia es el ejercicio del poder
        público en público. Misma que demanda escrutinio para su perfección, ya
        que solo los regímenes autoritarios son opacos. De esta forma, nacieron
        dos Instituciones básicas: Las Comisiones de Información Gubernamental y
        los Órganos de fiscalización. La transparencia se asume como un derecho
        fundamental que el ser humano tiene para contar con instituciones y
        gobiernos responsables y transparentes. Para la Oficina del Alto
        Comisionado de las Naciones Unidas para los Derechos Humanos, la
        rendición de cuentas es la capacidad de las instituciones para hacerse
        responsables de sus actos y decisiones. En la ciencia jurídica, el
        derecho a la información es una de las áreas relativamente recientes,
        que nace ante la necesidad de reglamentar y organizar el ejercicio de un
        derecho natural del hombre, reconocido en las normas internacionales y
        también en las leyes fundamentales de diversos países. En México, la
        adición al artículo sexto de la Constitución Política, en el sentido de
        que el derecho a la información será garantizado por el Estado, se
        produjo con motivo de la iniciativa presidencial del 5 de octubre de
        1977. Desde entonces varios intentos se realizaron para reglamentar el
        derecho a la información sin ningún resultado concreto, hasta
        veinticinco años después con la promulgación de la recientemente
        aprobada Ley Federal de Transparencia y Acceso a la Información Pública
        Gubernamental, publicada en el Diario Oficial de la Federación el día 11
        de junio de 2002 y del Reglamento de la misma, publicado en el Diario
        Oficial el día 11 de junio de 2003; los cuales permiten al ciudadano
        tener acceso a la información de los órganos públicos y así lograr
        confiar en sus instituciones de gobierno. Querétaro.- En nuestra entidad
        Federativa, la Ley Estatal de Acceso a la Información Gubernamental
        entró en vigor en abril del 2003. Se consolidó el Órgano denominado
        Comisión Estatal de Información Gubernamental en el Estado. En dicha ley
        se cataloga jurídicamente a la Universidad Autónoma de Querétaro como
        una entidad Gubernamental porque maneja recursos públicos. Tanto
        estatales como federales, lo que sujeta a la Universidad a los supuestos
        normativos de la ley local de información así como la de transparencia
        federal. La Universidad Autónoma de Querétaro consiente de que la
        transparencia de la actividad pública es una manifestación y un
        requisito típico de los sistemas democráticos, que tiene como objetivo
        el sometimiento al escrutinio público de las actividades
        institucionales, ha dado cumplimiento cabal a las obligaciones que le
        impone el artículo 7 de la Ley Estatal al tener a disposición del
        público en general la información que dicha ley considera obligatoria.es
        como el ejercicio de la acción penal, las sentencias interlocutorias y
        definitiva, laudos y resoluciones de apelación y de amparo.
      </div>
      <div className="flex justify-center mb-6">
      <Link href="https://transparencia.uaq.mx/documentos/AVISO-DE-PRIVACIDAD.pdf">
        <Button className="mt-6">
          Política de Privacidad
        </Button>
        </Link>
      </div>

    </div>
    </SecLayout>
  );
};

export default page;
