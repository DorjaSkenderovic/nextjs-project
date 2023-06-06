import React from "react";
import Image from "next/legacy/image";
import styles from "./ContactCard.module.scss";

const ContactCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={`/assets/${props.image}`}
          layout="responsive"
          width={100}
          height={100}
          alt={props.title}
        />
        <p>{props.title}</p>
      </div>
      <div>
        {props.contact.split("\n").map((paragraph) => {
          return <p>{paragraph}</p>;
        })}
      </div>
    </div>
  );
};

export default ContactCard;
