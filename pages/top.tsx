import gql from 'graphql-tag';
import React, { useMemo } from 'react';
import { useQuery } from '@apollo/client';

import { NewsFeed } from '../src/components/news-feed';
import { withDataAndRouter } from '../src/helpers/with-data';
import { MainLayout } from '../src/layouts/main-layout';
import { FeedType } from '../src/data/models';
import { POSTS_PER_PAGE } from '../src/config';

const query = gql`
  query feed {
    feed {
      id
      title
      description
      score
      tags {
        value
        label
      }
    }
  }
`;
export interface ITopNewsFeedProps {
  options: {
    currentUrl: string;
    first: number;
    skip: number;
  };
}

export function Top10(props): JSX.Element {
  const { router } = props;

  const pageNumber = (router.query && +router.query.p) || 0;

  const first = POSTS_PER_PAGE;
  const skip = POSTS_PER_PAGE * pageNumber;

  const { data } = useQuery(query, { variables: { first, skip, type: FeedType.TOP }, fetchPolicy: "no-cache" });

  const top10Articles = useMemo(() => {
    const articles = data?.feed ? [...data.feed] : [];
    return articles.sort((a, b) => b.score - a.score)
  }, [data]);

  return (
    <MainLayout currentUrl={router.pathname}>
      <NewsFeed
        data={{ feed: top10Articles }}
        currentUrl={router.pathname}
        first={first}
        skip={skip}
      />
    </MainLayout>
  );
}

export default withDataAndRouter(Top10);
