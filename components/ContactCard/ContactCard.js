import Image from "next/legacy/image";
import styles from "./ContactCard.module.scss";

const ContactCard = (props) => {

    const className = props.className || "";
    return (
        <div className={`${styles.card} ${className}`}>
            <div className={styles.image}>
                <Image
                    src={props.image}
                    layout="responsive"
                    alt={props.title}
                    priority={true}
                />
                <h2>{props.title}</h2>
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
