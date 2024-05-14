
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SecLayout from "../SecLayout";

const LoginPage = () => {
  return (
    <SecLayout>
      <div className="flex flex-col justify-center items-center">
        <div className="flex mt-24">
          <Image src="/logoUaq.png" alt="logo" width={180} height={87} />
        </div>
        <div className="flex mr-40 mt-10">
          <h1>Expediente:</h1>
        </div>
        <div className="card flex justify-content-center mb-8 mt-4">
          <input
            type="input"
            className="input w-64 h-8 border bg-gray-100 pl-2"
            placeholder="Ingresa el expediente"
          />
        </div>
        <div className="flex mr-[210px] mt-3">
          <h1>NIP:</h1>
        </div>
        <div className="card flex justify-content-center mb-8 mt-4">
          <input
            type="password"
            className="input w-64 h-8 border bg-gray-100 pl-2"
            placeholder="Ingresa la contraseña"
          />
        </div>
        <Link href="/">
        <Button className="bg-gray-700 text-white hover:bg-gray-500 px-28 mt-8">
          Ingresar
        </Button>
        </Link>
        <div>
          <h1 className="text-gray-500 mt-6">
            ¿No tienes cuenta?{" "}
            <Link className='hover:cursor-pointer text-black' href='/' >Crea una</Link>
          </h1>
        </div>
        <h1 className="text-gray-500 mt-20 mb-6">
          ¿Olvidaste tu contraseña?{" "}
          <Link className='hover:cursor-pointer text-black' href='/' >Recupérala</Link>
        </h1>
      </div>
    </SecLayout>
  );
};

export default LoginPage;