import React, { useState } from "react";
import styles from "./Modal.module.css";
import { Menu, X, Twitter, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  return (
    <div>
      <Button
        size="icon"
        variant="ghost"
        className="fixed top-7 md:right-14 right-3 z-50"
        onClick={toggleModal}
      >
        <Menu size={32} />
      </Button>
      {modal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <Button
              size="icon"
              variant="ghost"
              className="fixed top-0 right-2 z-50"
              onClick={toggleModal}
            >
              <X />
            </Button>
            <div className="mt-4">
              <a href="https://www.uaq.mx/" target="_blank" onClick={toggleModal}>
                <Button className="w-full bg-button hover:bg-buttonHover mt-4">
                  Página Oficial
                </Button>
              </a>
              <a href="http://mail.uaq.mx/" target="_blank" onClick={toggleModal}>
                <Button className="w-full bg-button hover:bg-buttonHover mt-4">
                  Correo
                </Button>
              </a>
              <Link href="/privacidad" onClick={toggleModal}>
                <Button className="w-full bg-button hover:bg-buttonHover mt-4">
                  Aviso de Privacidad
                </Button>
              </Link>

              <div className="mt-6 flex justify-between w-full">
                <a href="https://www.facebook.com/uaq.mx" target="_blank" onClick={toggleModal}>
                  <Image
                    src="/facebook.png"
                    alt="logo"
                    width={30}
                    height={30}
                  />
                </a>
                <a href="https://www.instagram.com/uaq_mx/" target="_blank" onClick={toggleModal}>
                  <Image
                    src="/instagram.png"
                    alt="logo"
                    width={30}
                    height={30}
                  />
                </a>
                <a href="https://twitter.com/UAQmx" target="_blank" onClick={toggleModal}>
                  <Image src="/gorjeo.png" alt="logo" width={24} height={24} />
                </a>
                <a
                  href="https://www.tiktok.com/@uaq.mx?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  onClick={toggleModal}
                >
                  <Image src="/tiktok.png" alt="logo" width={26} height={26} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
