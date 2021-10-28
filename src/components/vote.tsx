import * as React from 'react';
import { useMutation } from '@apollo/client';
import { UPVOTE_NEWS_ITEM_MUTATION } from '../data/mutations/upvote-news-item-mutation';

export default function Vote(props): JSX.Element {
  const { id } = props;
  const [vote, { data, loading, error }] = useMutation(UPVOTE_NEWS_ITEM_MUTATION, {
    onError: () => console.error(Error),
    variables: { id },
  });

  // onClick={(): Promise<any> => upvoteNewsItem()}
  return (
    <form method="post" action="vote" style={{ marginRight: '16px', flex: 1 }}>
      <fieldset style={{ border: 'none' }}>
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
