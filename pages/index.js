import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import React from 'react';
import FlowingWords from '../components/FlowingWords';
import Helmet from "react-helmet"
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Safeguard promptly!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h2 className={styles.title}>
            Safeguard promptly!
          </h2>
          <h1 className={styles.description} style={{ marginBottom: '0px' }}>
            Timestamp your prompt conversation,
          </h1>
          <h1 className={styles.description} style={{ marginTop: '0px' }}>
            value the creative process in your AI art.
          </h1>

          <FlowingWords />

          <div className={styles.waitlist} id="getWaitlistContainer" data-waitlist_id="14121" data-widget_type="WIDGET_1"></div>
          <Helmet>
            <link rel="stylesheet" type="text/css" href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css" />
            <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
          </Helmet>

          <div className={styles.gridUp}>
            <a className={`${styles.card} ${styles.cardUp}`}>
              <h3>The problem &rarr;</h3>
              <p>AI-generated art is gaining traction in the art industry, offering a unique blend of creativity and technology. While only a fraction of people have encountered AI art, a majority of those who have enjoy it. However, debates around its ethical implications persist, with many artists expressing concerns about its impact on originality. As AI technology advances, it raises questions about the future of artistry and the role of human creativity in the AI age.</p>
            </a>
            <div className={styles.imageContainerUp}>
              <Image
                src="/ai_art.png"
                width={400}
                height={400}
                alt="Image"
              />
            </div>
          </div>

          <div className={styles.gridDown}>
            <div className={styles.imageContainerDown}>
              <video controls autoplay loop className="video" width={400} height={400}>
                <source src="/ai.mp4" type="video/mp4" />
              </video>
            </div>

            <a className={`${styles.card} ${styles.cardDown}`}>
              <h3>Our solution &rarr;</h3>
              <p>Litchi a tool that
                records the creative process of an AI artist that generates an artwork on
                any AI model. Our tool will record the entire creation process of an AI artist,
                from the first prompt to the final artwork. It will then package this information
                and the associated hash on the blockchain, providing a timestamp certificate.
                This certificate will allow the users to demonstrate the whole process of
                creation and most importantly, the intellectual involvement
                in the generation of the content by AI in case of dispute (e.g.
                litigation), so that to claim originality in their artwork.</p>
            </a>
          </div>

        </main>

        <footer>
          Powered by Autonomous Agent: AI x Web3 Hackathon 2024
        </footer>

        <style jsx>{`
        main {
          padding: 5rem 0;
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
