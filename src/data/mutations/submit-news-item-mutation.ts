import gql from 'graphql-tag';

export interface ISubmitNewsItemGraphQL {
  submitNewsItem: { id }; // Return type of submitNewsItem mutation
}

export const SUBMIT_NEWS_ITEM_MUTATION = gql`
  mutation m1($title: String!, $url: String!, $description: String, $userId: String!) {
    submitArticle(title: $title, url: $url, description: $description, userId: $userId) {
      id
      title
      description
      user {
        zendeskId
      }
    }
  }
`;
