import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <Image className={styles.navbarLogo}
                src="/artstampWsvg.svg"
                width={300}
                height={85}
                alt="Logo"
            />
            {/* <Link href="/all-artworks" passHref className={styles.registrylink}>
                AI art registry
            </Link> */}
            <Link href="/" passHref className={styles.homelink}>
                Home
            </Link>
            <Link href="https://twitter.com/_ArtStamp" passHref>
                <Image
                    src="/twitterwhite.jpg"
                    alt="Twitter"
                    width={50}
                    height={50}
                />
            </Link>
        </div>

    );
}

export default Navbar;