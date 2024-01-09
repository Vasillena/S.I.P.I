import classes from "./Contact.module.css";

import Image from "next/image";

import frog from "@/public/frog.png";

export default function Contact() {
  return (
    <div className={classes.contact}>
      <Image className={classes["contact-image"]} src={frog} alt="frog" />
      <h1>Join the party! Reserve now!</h1>
      <p>Kapana / Bratq Pulievi 1</p>
      <p>0885 67 33 37</p>
      <p>Tuesday - Sunday: 18:00 - 03:00</p>
      {/* <div>
        <form className={classes.reserve}>
          <div>
            <div>
              <label for="name" />
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label for="number" />
              <input
                type="number"
                id="number"
                name="number"
                placeholder="Phone number"
                required
              />
            </div>
            <div>
              <label for="date" />
              <input
                type="date"
                id="date"
                name="date"
                min="2024-01-01"
                max="2024-12-31"
                required
              />
            </div>
            <div>
              <label for="time" />
              <input
                type="time"
                id="time"
                name="time"
                min="18:00"
                max="21:00"
                required
              />
            </div>

            <div>
              <input type="submit" class="submit-button" defaultValue="SEND" />
            </div>
          </div>
        </form>
      </div> */}
    </div>
  );
}
