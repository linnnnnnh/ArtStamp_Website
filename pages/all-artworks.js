import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

export default function AllArtworks() {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        async function fetchImageUrl() {
            const response = await fetch('http://localhost:3000/api/latest-image');
            if (!response.ok) {
                console.error('Failed to fetch the image URL');
                return;
            }
            const data = await response.json();
            setImageUrls(data.urls);
        }

        fetchImageUrl();
    }, []);

    return (
        <Layout>
            <div className={styles.allartworks}>
                <h1>AI Art Registry</h1>
                {imageUrls.length > 0 ? (
                    <div className={styles.gridContainer}>
                        {imageUrls.map((url, index) => (
                            <div key={index} className={styles.gridItem}>
                                <img src={url} alt={`Artwork ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No image uploaded yet.</p>
                )}
            </div>
        </Layout>
    );
}