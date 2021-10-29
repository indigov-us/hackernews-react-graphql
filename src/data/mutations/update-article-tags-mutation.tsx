import gql from 'graphql-tag';

export const ADD_TAG_TO_ARTICLE_MUTATION = gql`
  mutation m3($userId: String!, $articleId: String!, $tags: [TagObject]!) {
    tagArticle(articleId: $articleId, userId: $userId, tags: $tags) {
      id
    }
  }
`;
