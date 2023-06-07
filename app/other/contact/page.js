import React from "react";
import ContactCard from "@/components/ContactCard/ContactCard";
import styles from "./page.module.scss";
const contact = () => {
    return (
        <div className={styles.contact}>
            <ContactCard image="phone.png" title="Telefon" contact="+123456789" />
            <ContactCard image="email.png" title="Email" contact="lorem@ipsum.com" />
            <ContactCard
                image="location.png"
                title="Lokacija"
                contact={"Ulica br. 11\n Negdje Tamo, 12345"}
            />
        </div>
    );
};

export default contact;
