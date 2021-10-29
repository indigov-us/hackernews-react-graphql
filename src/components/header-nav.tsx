import Link from 'next/link';
import * as React from 'react';

interface IHeaderNavProps {
  userId?: string;
  currentUrl: string;
  isNavVisible: boolean;
  title: string;
}

const Separator = () => <span style={{ margin: '0 16px' }}>|</span>;

export function HeaderNav(props: IHeaderNavProps): JSX.Element {
  const { currentUrl, isNavVisible, title } = props;

  return isNavVisible ? (
    <div className="pagetop">
      <div style={{ fontSize: '26px', marginBottom: '8px' }}>
        <Link href="/">
          <a>{title}</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a className={currentUrl === '/' ? 'topsel' : ''}>All</a>
        </Link>
        <Separator />
        <Link href="/top">
          <a className={currentUrl === '/top' ? 'topsel' : ''}>Top 10</a>
        </Link>
        <Separator />
        <Link href="/submit">
          <a className={currentUrl === '/submit' ? 'topsel' : ''}>Add new article</a>
        </Link>
      </div>
    </div>
  ) : (
    <div className="pagetop">
      <b>{title}</b>
    </div>
  );
}
