import React, { useEffect, useState, Fragment } from 'react';
import { getStrapiURL, SeoTags } from 'helpers';
import Template from 'layouts/templates/default';
import Homepage from 'layouts/home';

const Home = ({ categories }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categories) {
      setLoading(false);
    }
  }, [categories]);

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
          <Homepage categories={categories} />
        </Fragment>
      )}
    </Template>
  );
};

export default Home;

export async function getStaticProps() {
  const data = await fetch(getStrapiURL('/resource-categories'));

  return {
    props: {
      categories: await data.json(),
    },
  };
}
