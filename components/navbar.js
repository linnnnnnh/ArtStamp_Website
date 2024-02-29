// import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <Image
                src="/litchi-logo-W.svg"
                width={260}
                height={55}
                alt="Logo"
            />
            <div>
                <a href="https://twitter.com/LitchiAI">
                    <img src="/X_logo_2023.svg" alt="X" className={styles.logo} />
                </a>
            </div>
        </div>
    );
}

export default Navbar;
