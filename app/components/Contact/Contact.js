import Image from "next/image";

import classes from "./Contact.module.css";

import frog from "@/public/frog.png";

export default function Contact() {
  return (
    <div className={classes.contact}>
      <Image className={classes["contact-image"]} src={frog} alt="Frog" />
      <h1>Join the party! Reserve now!</h1>
      <p>Kapana / Bratq Pulievi 1</p>
      <p>0885 67 33 37</p>
      <p>Tuesday - Sunday: 18:00 - 03:00</p>
    </div>
  );
}
