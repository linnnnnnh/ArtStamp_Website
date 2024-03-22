import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <Image
                src="/artstampB.svg"
                width={300}
                height={70}
                alt="Logo"
            />
            <Link href="/all-artworks" passHref className={styles.registrylink}>
                AI art registry
            </Link>
            <Link href="/" passHref className={styles.homelink}>
                Home
            </Link>
        </div>

    );
}

export default Navbar;