import gql from 'graphql-tag';
import * as React from 'react';
import { useQuery } from '@apollo/client';

import { NewsItemWithComments } from '../src/components/news-item-with-comments';
import { NewsItemModel } from '../src/data/models';
import { withDataAndRouter } from '../src/helpers/with-data';
import { MainLayout } from '../src/layouts/main-layout';

export interface INewsItemWithCommentsQuery {
  newsItem: NewsItemModel;
}

const newsItemWithCommentsQuery = gql`
  query q2($articleId: String!) {
    article(id: $articleId) {
      user {
        id
      }
      id
      title
      description
      url
      tags {
        id
        label
      }
      votes {
        id
        value
      }
    }
  }
`;

export interface INewsItemWithCommentsWithGraphQLOwnProps {
  id: number;
}

export function ItemPage(props): JSX.Element {
  const { router } = props;

  const { data } = useQuery(newsItemWithCommentsQuery, {
    variables: { articleId: (router.query.id) || 0 },
  });

  return (
    <MainLayout currentUrl={router.pathname}>
      <NewsItemWithComments error={data?.error} loading={data?.loading} newsItem={data?.article} />
    </MainLayout>
  );
}

export default withDataAndRouter(ItemPage);
