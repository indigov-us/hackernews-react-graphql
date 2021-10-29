import gql from 'graphql-tag';

export const VOTE_NEWS_ITEM_MUTATION = gql`
  mutation m2($userId: String!, $articleId: String!, $vote: Integer) {
    voteOnArticle(articleId: $articleId, userId: $userId, vote: $vote) {
      id
      score
    }
  }
`;
