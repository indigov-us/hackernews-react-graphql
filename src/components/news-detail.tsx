import * as React from 'react';

import TagManager from './tag-manager';
import Vote from './vote';

export interface INewsDetailProps {
  commentCount: number;
  creationTime: number;
  hidden?: boolean;
  id: number;
  isFavoriteVisible?: boolean;
  isJobListing?: boolean;
  isPostScrutinyVisible?: boolean;
  submitterId: string;
  upvoteCount: number;
}

export const newsDetailNewsItemFragment = `
  fragment NewsDetail on NewsItem {
    id
    commentCount
    creationTime
    hidden
    submitterId
    upvoteCount
  }
`;

export function NewsDetail(props: INewsDetailProps): JSX.Element {
  const {
    commentCount,
    creationTime,
    hidden,
    id,
    score,
    submitterId = 'de151acc-bd78-4e6e-9796-5bc275661969',
  } = props;

  return (
    <div>
      <div style={{ marginBottom: '8px' }}>
      <span className="score">{score} points</span>
      {/* {' by '} {submitterId} {convertNumberToTimeAgo(creationTime)} */}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Vote articleId={id} userId={submitterId} />
        <TagManager articleId={id} userId={submitterId} />
      </div>
    </div>
  );
}
