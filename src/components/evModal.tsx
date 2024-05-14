import React, { useState } from "react";
import { Button } from "./ui/button";
import styles from "./ev.module.css";
import { X } from "lucide-react";

export default function EvModal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  if(modal) {
    document.body.classList.add(styles.activeModal)
  } else {
    document.body.classList.remove(styles.activeModal)
  }
  return (
    <div className="flex justify-center items-center z-50">
      <Button className="bg-button hover:bg-buttonHover" onClick={toggleModal}>Comenzar</Button>
      {modal && (
        <div className={styles.modal}>
        <div className={styles.overlay} onClick={toggleModal}></div>
        <div className={styles.modalContent}>
          <h2>Hello</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            laborum eum nisi, neque modi impedit inventore eos itaque! Corporis
            beatae doloribus quaerat culpa ex illum inventore velit perspiciatis
            quos maxime, harum mollitia fugiat sit repellat nihil ipsa dolorem
            incidunt veniam voluptatum modi excepturi. Officiis laudantium est
            molestiae, illum dolorem dolorum.
          </p>
          <Button className={styles.close} onClick={toggleModal}><X /></Button>
        </div>
      </div>
      )}
    </div>
   );
}
