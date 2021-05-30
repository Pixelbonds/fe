import React, { Fragment } from 'react';
import { SeoTags } from 'helpers';
import styles from './Home.module.scss';
import Link from 'next/link';

export default function Home({ categories }) {
  return (
    <Fragment>
      <SeoTags
        title="Explore"
        description="Explore modern, trending color palettes"
      />
      <div className={styles.hero}>
        <div className={styles.container}>
          <h1>Pixelbonds</h1>
          <p>Pick a category from below to start exploring</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.categoryGrid}>
          {categories.map((category, index) => (
            <Link href={`/explore/${category.Slug}`}>
              <a>
                <div className={styles.card} key={index}>
                  <div className={styles.thumb}>
                    <div className={styles.image}></div>
                  </div>
                  <h2>{category.Name}</h2>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
