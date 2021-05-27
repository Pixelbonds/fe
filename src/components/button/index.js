import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.scss';

export const variants = {
  default: '',
  primary: 'Primary',
  grey: 'Grey',
  ghost: 'Ghost',
};

function Button({ children, variant, bold, disabled }) {
  return (
    <button
      className={classNames(
        styles.Button,
        styles[variant],
        {
          [styles.Bold]: bold,
        },
        {
          [styles.Disabled]: disabled,
        }
      )}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(Object.keys(variants)),
};

export default Button;
