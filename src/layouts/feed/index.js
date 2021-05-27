import Head from 'next/head';
import { useSession } from 'next-auth/client';
import { Card } from 'components';
import Template from 'layouts/templates/default';
import styles from './Feed.module.scss';

export default function Feed() {
  const [session] = useSession();

  return (
    <Template>
      <Head>
        <title>feed</title>
      </Head>
      <div className={styles.hero}>
        <div className={styles.container}>
          <h1>Illustrations</h1>
          <p>206 amazing pastel designs</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.feedGrid}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Template>
  );
}
