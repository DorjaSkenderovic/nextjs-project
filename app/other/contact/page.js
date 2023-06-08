import ContactCard from "@/components/ContactCard/ContactCard";
import styles from "./page.module.scss";
import PhoneImage from "../../../public/assets/phone.png";
import EmailImage from "../../../public/assets/email.png";
import LocationImage from "../../../public/assets/location.png";

const contact = () => {
    return (
        <div className={styles.contact}>
            <ContactCard image={PhoneImage} title="Telefon" contact="+123456789" className={styles.card} />
            <ContactCard image={EmailImage} title="Email" contact="lorem@ipsum.com" className={styles.card} />
            <ContactCard
                image={LocationImage}
                title="Lokacija"
                contact={"Ulica br. 11\n Negdje Tamo, 12345"}
                className={styles.card}
            />
        </div>
    );
};

export default contact;
