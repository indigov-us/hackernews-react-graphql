import React, { ChangeEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { VOTE_NEWS_ITEM_MUTATION } from '../data/mutations/upvote-news-item-mutation';

export default function Vote(props): JSX.Element {
  const [score, setScore] = useState<number | undefined>(undefined);
  const { articleId, userId } = props;
  const [scoreArticle, { data, loading, error }] = useMutation(VOTE_NEWS_ITEM_MUTATION);

  const onSelect = ({ target }: ChangeEvent<HTMLInputElement>) => {
    scoreArticle({ variables: { articleId, userId, vote: target.value } });
  };

  // onClick={(): Promise<any> => upvoteNewsItem()}
  return (
    <form style={{ marginRight: '16px', flex: 1 }}>
      <fieldset style={{ border: 'none' }} onChange={onSelect}>
        <span style={{ marginRight: '16px' }}>Least relevant</span>
        <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
          <input type="radio" id="1" name="vote" value="1" />
          <label htmlFor="1">1</label>
        </span>
        <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
          <input type="radio" id="2" name="vote" value="2" />
          <label htmlFor="2">2</label>
        </span>
        <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
          <input type="radio" id="3" name="vote" value="3" />
          <label htmlFor="3">3</label>
        </span>
        <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
          <input type="radio" id="4" name="vote" value="4" />
          <label htmlFor="4">4</label>
        </span>
        <span style={{ marginLeft: '16px' }}>Most relevant</span>
      </fieldset>
    </form>
  );
}
