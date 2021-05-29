import React from 'react';
import Template from 'layouts/templates/default';
import { getStrapiURL, SeoTags } from 'helpers';
import Explorepage from 'layouts/feed';
import styles from './Explore.module.scss';

const Explore = ({ posts }) => {
  return (
    <Template>
      <SeoTags
        title="Explore"
        description="Explore modern, trending color palettes"
      />
      <div className={styles.hero}>
        <div className={styles.container}>
          <h1>Illustrations</h1>
          <p>206 amazing pastel designs</p>
        </div>
      </div>
      <Explorepage posts={posts} />
    </Template>
  );
};

export default Explore;

export async function getStaticProps() {
  const data = await fetch(getStrapiURL('/resources'));

  return {
    props: {
      posts: await data.json(),
    },
  };
}
