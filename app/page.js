import styles from "./page.module.scss";
import Card from "@/components/Card/Card";
import MasineImage from "../public/assets/masine.png";
import KalupiImage from "../public/assets/kalupi.png";
import UslugeImage from "../public/assets/usluge.png";
import ZaptivaciImage from "../public/assets/zaptivaci.png";

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.row}>
                <Card
                    title="Masine"
                    image={MasineImage}
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />
                <Card
                    title="Kalupi"
                    image={KalupiImage}
                    description="Kalupi za brizganje i duvanje plastike su kljicni element svake od nasih masina za proizvodnju proizvoda od plastike. Oni omogucavaju oblikovanje i stvaranje razlicitih vrsta plasticnih predmeta, od malih komponenti do slozenih delova."
                />
            </div>
            <hr className={styles.line} />
            <div className={styles.row}>
                <Card title="USLUGE SERVISIRNJA" image={UslugeImage} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                <Card title="Zaptivaci" image={ZaptivaciImage} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
            </div>
        </div>
    );
}
