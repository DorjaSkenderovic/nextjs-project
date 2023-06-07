import Image from "next/image";
import styles from "./page.module.scss";
import AboutImage from "../../../public/assets/about.png"
const About = () => {
    return (
        <div className={styles.about}>
            
            <div className={styles.image}>
                <Image src={AboutImage} alt="about" />
            </div>

            <div className={styles.info}>
                <h1>Zadatak</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur</h3>

                <div className={styles.lines}>
                    <hr className={styles.mainline} /><hr className={styles.sideline} />
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit
                    amet nulla interdum, vestibulum turpis nec, vehicula enim. Vestibulum
                    quis tortor blandit, porta diam nec, maximus arcu. Mauris convallis
                    sodales velit a pharetra. Duis consequat metus quis lobortis sagittis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
                    nisl nec lacus mattis aliquam. Etiam aliquet augue eget velit
                    efficitur dictum. Nunc fermentum non augue sed commodo. Proin egestas
                    hendrerit laoreet. Donec in arcu lacinia, pulvinar mauris vitae,
                    commodo erat. Nunc laoreet diam elit, et ultricies turpis blandit sit
                    amet. Vestibulum quis fringilla eros. Maecenas id erat at erat porta
                    rutrum sed vitae risus. Donec ut vestibulum dui. Aliquam eros felis,
                    consectetur rutrum scelerisque a, vestibulum vel lacus. Nulla congue
                    ac quam ac suscipit. In neque sem, egestas sed fringilla consequat,
                    viverra et tortor. Etiam facilisis massa velit, id fermentum turpis
                    hendrerit vel. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Fusce sit amet egestas lorem. Nunc finibus, sem a fringilla
                    dapibus, urna ipsum malesuada enim, nec finibus tellus orci nec risus.
                    Donec viverra magna sed dignissim convallis. Nunc maximus, odio id
                    aliquam suscipit, erat risus maximus turpis, blandit posuere erat
                    magna quis risus. Maecenas rutrum porttitor risus. Sed in magna
                    tellus. Maecenas turpis odio, eleifend eu sollicitudin nec, bibendum
                    quis velit. Praesent enim augue, congue nec bibendum ut, laoreet
                    maximus nulla.
                </p>

            </div>

        </div>
    );
};

export default About;
