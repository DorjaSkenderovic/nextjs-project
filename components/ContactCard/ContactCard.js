import Image from "next/legacy/image";
import styles from "./ContactCard.module.scss";

const ContactCard = (props) => {

    const className = props.className || "";
    return (
        <div className={`${styles.card} ${className}`}>
            <div className={styles.head}>
                <div className={styles.image}>
                    <Image
                        src={props.image}
                        layout="responsive"
                        alt={props.title}
                        priority={true}
                    />
                </div>
                <h2>{props.title}</h2>
            </div>
            <div className={styles.infoData}>
                {props.contact.split("\n").map((paragraph) => {
                    return <p>{paragraph}</p>;
                })}
            </div>
        </div>
    );
};

export default ContactCard;
