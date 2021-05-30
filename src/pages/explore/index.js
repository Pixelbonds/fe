import React, { useEffect, useState, Fragment } from 'react';
import Template from 'layouts/templates/default';
import { getStrapiURL, SeoTags } from 'helpers';
import Explorepage from 'layouts/feed';
import styles from './Explore.module.scss';

const Explore = ({ posts }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (posts) {
      setLoading(false);
    }
  }, [posts]);

  return (
    <Template>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Fragment>
          <SeoTags
            title="Explore"
            description="Explore modern, trending color palettes"
          />
          <div className={styles.hero}>
            <div className={styles.container}>
              <h1>Explore</h1>
              <p>{posts.length} amazing pastel designs</p>
            </div>
          </div>
          <Explorepage posts={posts} />
        </Fragment>
      )}
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
