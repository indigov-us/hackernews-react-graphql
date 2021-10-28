import Link from 'next/link';
import * as React from 'react';

interface IHeaderNavProps {
  userId?: string;
  currentUrl: string;
  isNavVisible: boolean;
  title: string;
}

export function HeaderNav(props: IHeaderNavProps): JSX.Element {
  const { userId, currentUrl, isNavVisible, title } = props;

  return isNavVisible ? (
    <div className="pagetop">
      <div style={{ fontSize: '26px', marginBottom: '8px' }}>
        <Link href="/" as="/news">
          <a>{title}</a>
        </Link>
      </div>
      <div>
        {userId && ' | '}
        <Link href="/newest">
          <a className={currentUrl === '/newest' ? 'topsel' : ''}>new</a>
        </Link>
        {' | '}
        {/* <Link href="/newcomments">
          <a className={currentUrl === '/newcomments' ? 'topsel' : ''}>comments</a>
        </Link>
        {' | '} */}
        {/* <Link href="/show">
          <a className={currentUrl === '/show' ? 'topsel' : ''}>all</a>
        </Link>
        {' | '} */}
        <Link href="/submit">
          <a className={currentUrl === '/submit' ? 'topsel' : ''}>submit</a>
        </Link>
        {currentUrl === '/best' && ' | '}
        {currentUrl === '/best' && (
          <Link href="/best">
            <a className="topsel">best</a>
          </Link>
        )}
      </div>
    </div>
  ) : (
    <div className="pagetop">
      <b>{title}</b>
    </div>
  );
}
