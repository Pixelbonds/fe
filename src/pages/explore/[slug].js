import React, { Fragment, useEffect, useState } from 'react';
import Template from 'layouts/templates/default';
import { getStrapiURL, SeoTags } from 'helpers';
import Explorepage from 'layouts/feed';
import styles from './Explore.module.scss';

const Explore = ({ slug, data }) => {
  const [loading, setLoading] = useState(true);
  const [categoryData, setCategoryData] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (data) {
      setCategoryData(data[0]);
      setPosts(data[0].Resources);

      setLoading(false);
    }
  }, [data]);

  return (
    <Template>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Fragment>
          <SeoTags
            title={categoryData.Name}
            description="Explore modern, trending color palettes"
          />
          <div className={styles.hero}>
            <div className={styles.container}>
              <h1>{categoryData.Name}</h1>
              <p>{posts.length} amazing pastel designs</p>
            </div>
          </div>
          <Explorepage posts={posts} />
        </Fragment>
      )}
    </Template>
  );
};

export async function getStaticPaths() {
  const data = await fetch(getStrapiURL('/resource-categories'));
  const posts = await data.json();

  const paths = posts.map((post) => ({
    params: { slug: post.Slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const data = await fetch(getStrapiURL(`/resource-categories?Slug=${slug}`));

  return {
    props: {
      data: await data.json(),
    },
  };
}

export default Explore;
