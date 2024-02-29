import React, { useEffect } from 'react';
import Typed from 'typed.js';
import styles from '../styles/Home.module.css';


function FlowingWords() {
    useEffect(() => {
        const options = {
            strings: ['intellectual property', 'AI art', 'saveguard promptly your creative process!', 'AI artist', 'copyright', 'human intervention',
                'human authorship', 'degree of intellectual involvement', 'creative expression', 'human creativity and the artistic expression'],
            typeSpeed: 50,
            loop: true
        };

        const typed = new Typed('.flowing-words', options);

        return () => {
            typed.destroy(); // Clean up the Typed.js instance
        };
    }, []);

    return (
        <div className={styles.flowingWordsContainer}>
            <span className={`${styles.flowingWords} flowing-words`}></span>
        </div>
    );

}

export default FlowingWords;
