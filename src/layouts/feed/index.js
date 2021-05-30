import React, { useState, useEffect } from 'react';
import { Card } from 'components';
import styles from './Feed.module.scss';

export default function Feed({ posts }) {
  return (
    <div className={styles.container}>
      <div className={styles.feedGrid}>
        {posts.map((item, index) => (
          <Card
            title={item.Title}
            thumbnail={item.Thumb}
            url={item.URL}
            favorites={item.Favorites}
            // category={item.Categories[0]['Name']}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
