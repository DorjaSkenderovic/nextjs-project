import styles from "./Card.module.scss";
import Image from "next/image";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <h3>{props.title}</h3>
      <Image
        src={props.image}
        alt={props.title}
        className={styles.image}
        priority={true}
      />
      <div>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
