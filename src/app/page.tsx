import ChooseUser from "@/components/ChooseUser";
import Image from "next/image";
import SecondFooter from "@/components/SecondFooter";


export default function Home() {
  return (
    <div className="mt-24">
      <div className="flex items-center justify-center">
      <Image src="/portal_ppal.jpg" alt="logo1" width={990} height={300} />
      </div>
      <div className="flex flex-col mt-12 md:mt-30">
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <ChooseUser
            icon="GraduationCap"
            title="Estudiantes/Egresados"
            content="Entra como estudiante o egresado para consulta escolar, cuestionarios, etc."
            iconSIze={48}
            path="/estudiantes"
          />
          <ChooseUser
            icon="School"
            title="Docentes"
            content="Entra como docente para consultar listas, horarios, resultados, etc."
            iconSIze={48}
            path="/docentes"
          />
          <ChooseUser
            icon="CircleUserRound"
            title="Directivos"
            content="Entra como directivo para consultar estadísticas, actas, adeudos, etc."
            iconSIze={48}
            path="/directivos"
          />
          </div>
        </div>
      </div>
      <SecondFooter />
    </div>
    
  ); 
}
