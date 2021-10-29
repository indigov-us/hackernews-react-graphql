import * as React from 'react';
import { convertNumberToTimeAgo } from '../helpers/convert-number-to-time-ago';

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
    creationTime,
    description,
    isItemDetail = false,
    id,
    score = 0,
    submitterId = 'de151acc-bd78-4e6e-9796-5bc275661969',
    tags,
  } = props;

  const roundedScore = Math.round(score);
  return (
    <div>
      <div style={{ marginBottom: '8px' }}>
        <span className="score">{roundedScore} points</span>
        {/* {isItemDetail && (
          <span>
            {' by '} {submitterId} {convertNumberToTimeAgo(creationTime)}`
          </span>
        )} */}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Vote articleId={id} userId={submitterId} />
        <TagManager articleId={id} userId={submitterId} defaultTags={tags} />
      </div>
      {isItemDetail && <p>{description}</p>}
    </div>
  );
}
