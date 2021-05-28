import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';
const siteName = 'Pixelbonds';

export const makeTitle = (title) => `${title} | ${siteName}`;
export const makeDescription = (description) => `${description} - ${siteName}`;

export function SeoTags({ title, description, ...others }) {
  const pageTitle = makeTitle(title);
  const pageDescription = makeDescription(description);

  return (
    <NextSeo title={pageTitle} description={pageDescription} {...others} />
  );
}

SeoTags.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  others: PropTypes.object,
};

SeoTags.defaultProps = {
  title: siteName,
  description: 'Free design resources for your next project',
};
