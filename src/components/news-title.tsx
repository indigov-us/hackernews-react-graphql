import * as React from 'react';
import { parse } from 'url';


export interface INewsTitleProps {
  id: number;
  isRankVisible?: boolean;
  isUpvoteVisible?: boolean;
  rank?: number;
  title: string;
  url?: string;
  upvoted?: boolean;
}

export const newsTitleFragment = `
  fragment NewsTitle on NewsItem {
    id
    title
    url
    upvoted
  }
`;

export function NewsTitle(props: INewsTitleProps): JSX.Element {
  const { id, isRankVisible = true, isUpvoteVisible = true, rank, title, upvoted, url } = props;

  return (
    <div className="athing" style={{ display: 'flex', flexDirection: 'row', marginBottom: '8px' }}>
      <div style={{ marginRight: '8px', verticalAlign: 'top' }} className="title">
        <span className="rank">{isRankVisible && `${rank}.`}</span>
      </div>
      {/* <td style={{ verticalAlign: 'top' }} className="votelinks">
        <div style={{ textAlign: 'center' }}>
          {isUpvoteVisible && (
            <a
              className={upvoted ? 'nosee' : ' '}
              onClick={(): Promise<any> => upvoteNewsItem()}
              style={{ cursor: 'pointer' }}
            >
              <div className="votearrow" title="upvote" />
            </a>
          )}
        </div>
      </td> */}
      <div className="title">
        <a className="storylink" href={url || `item?id=${id}`}>
          {title}
        </a>
        {url && (
          <span className="sitebit comhead">
            {' '}
            (
            <a href={`from?site=${parse(url).hostname}`}>
              <span className="sitestr">{parse(url).hostname}</span>
            </a>
            )
          </span>
        )}
      </div>
    </div>
  );
}
