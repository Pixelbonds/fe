import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiUrl } from 'config';
import { SeoTags } from 'helpers';
import { useSession } from 'next-auth/client';
import { Card } from 'components';
import Template from 'layouts/templates/default';
import { fetchAPI } from 'helpers';
import styles from './Feed.module.scss';

export default function Feed({ resources }) {
  const [feedData, setFeedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [session] = useSession();

  useEffect(() => {
    setLoading(true);

    async function fetchPosts() {
      const res = await axios.get('/api/posts/list');
      setFeedData(res.data);
    }

    setLoading(false);
    fetchPosts();
  }, []);

  console.log(resources);

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
      <div className={styles.container}>
        <div className={styles.feedGrid}>
          {feedData.map((item, index) => (
            <Card
              title={item.title}
              thumbnail={item.thumb}
              url={item.url}
              favorites={item.favorites}
              category={item.category}
              key={index}
            />
          ))}
        </div>
      </div>
    </Template>
  );
}

export async function getStaticPaths() {
  const resources = await fetchAPI('/resources');

  return {
    paths: resources.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}
