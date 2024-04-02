import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import React from 'react';
import FlowingWords from '../components/FlowingWords';
import Helmet from "react-helmet"
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
          <div className={styles.containerForImageTagline}>
            <div className={styles.circularImage}>
              <Image
                src="/midjourneywrok1.png"
                alt="girl"
                width={300}
                height={300}
                layout="fixed"
              />
            </div>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>
                Unleash <br />
                your creativity <br />
                with confidence <br />
              </h2>
              <h1 className={styles.description} style={{ marginBottom: '0px' }}>
                A tool for AI art creators to <br />
                prove their intellectual effort <br />
                in the creation process <br />
              </h1>
              <FlowingWords />
            </div>
          </div>

          <h1 className={styles.waitlistText}>
            Join our waitlist to test ArtStamp soon!
          </h1>
          <div className={styles.waitlist} id="getWaitlistContainer" data-waitlist_id="14121" data-widget_type="WIDGET_3"></div>
          <Helmet>
            <link rel="stylesheet" type="text/css" href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css" />
            <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
          </Helmet>

          <div className={styles.gridUp}>
            <a className={`${styles.card} ${styles.cardUp}`}>
              <h3>The problem &rarr;</h3>
              <p>AI-generated art is gaining traction in the art industry, offering a unique blend of creativity and technology.
                However, the current court ruiling often exclude AI art from copyright protection due to its perceived lack of human
                involvement, which puts AI artists at risk of losing copyright in legal disputes.
                The challenge for AI artists is proving this intellectual involvement. The key to copyrighting AI art is to evidence
                the human intellect behind the machine output.</p>
            </a>
          </div>

          {/* <div className={styles.imageContainerUp}>
            <Image
              src="/midjourneywrok2.png"
              width={300}
              height={300}
              alt="Image"
            />
          </div> */}
          <div className={styles.gridDown}>

            <a className={`${styles.card} ${styles.cardDown}`}>
              <h3>Our solution &rarr;</h3>
              <p>Our solution empowers creators to timestamp their creative process, providing the proof of their intellectual effort in AI art creation.
                ArtStamp is a browser extension offering a one-click solution to capture your entire creative process, every prompt and every image.
                This creative process document acts as undeniable and immutable evidence of your intellectual contribution. If you face a copyright dispute years later, you
                can prove that your creative process was recorded and preserved at the time of creation.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          ArtStamp - ai.artstamp@gmail.com
        </footer>

        <style jsx>{`
        main {
          padding: 1rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

        <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
      </div >
    </Layout >
  );
}
