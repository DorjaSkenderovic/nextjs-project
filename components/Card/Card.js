import React from "react";
import styles from "./Card.module.scss";
import Image from "next/image";

const Card = (props) => {
    return (
        <div className={styles.card}>
            <h2>{props.title}</h2>
            <Image
                src={`/assets/${props.image}`}
                width={350}
                height={250}
                alt={props.title}
                className={styles.image}
            />
            <p className={styles.description}>{props.description}</p>
        </div>
    );
};

export default Card;
