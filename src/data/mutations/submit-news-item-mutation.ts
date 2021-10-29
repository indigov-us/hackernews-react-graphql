import gql from 'graphql-tag';

import { newsFeedNewsItemFragment } from '../../components/news-feed';

export interface ISubmitNewsItemGraphQL {
  submitNewsItem: { id }; // Return type of submitNewsItem mutation
}

export const SUBMIT_NEWS_ITEM_MUTATION = gql`
  mutation SubmitNewsItem($title: String!, $url: String) {
    submitNewsItem(title: $title, url: $url) {
      id
      ...NewsFeed
    }
  }
  ${newsFeedNewsItemFragment}
`;

export const SUBMIT_NEWS_ITEM_MUTATION = gql`
  mutation m1 {
    submitArticle(
      title: "t1"
      url: "abc.com"
      description: "desk"
      userId: "77adf8a8-a6a8-46bf-b509-64f541f18368"
    ) {
      id
      title
      description
      user {
        zendeskId
      }
    }
  }
`;
