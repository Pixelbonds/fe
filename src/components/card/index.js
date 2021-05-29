import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import classNames from 'classnames';
import { makeRelUrl } from 'helpers';
import styles from './Card.module.scss';

function Card({ title, url, thumbnail, favorites, category }) {
  return (
    <Link href={makeRelUrl(url)}>
      <a>
        <article className={styles.card}>
          <div className={styles.hover} />
          <div className={classNames(styles.thumb, 'skeleton')}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${thumbnail})` }}
            />
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"
              />
            </svg>
          </div>
          <h2>{title}</h2>
        </article>
      </a>
    </Link>
  );
}

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
