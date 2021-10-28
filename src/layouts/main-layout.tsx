import Head from 'next/head';
import * as React from 'react';
import { useQuery } from '@apollo/client';

import { Header } from '../components/header';
import { IMeQuery, ME_QUERY } from '../data/queries/me-query';

interface IMainLayoutProps {
  children: React.ReactChild;
  currentUrl: string;
  isNavVisible?: boolean;
  isUserVisible?: boolean;
  isFooterVisible?: boolean;
  title?: string;
}

export function MainLayout(props: IMainLayoutProps): JSX.Element {
  const { data } = useQuery<IMeQuery>(ME_QUERY);

  const {
    children,
    currentUrl,
    isNavVisible = true,
    title = 'News Feed',
  } = props;

  return (
    <div>
      <Head>
        <title>Hacker News Clone</title>
        <meta name="referrer" content="origin" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" type="text/css" href="/static/news.css" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <div
        id="hnmain"
        style={{
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', padding: '0 32px',}}>
          <Header
            currentUrl={currentUrl}
            isNavVisible={!!isNavVisible}
            me={data?.me}
            title={title!}
          />
          <div style={{ flex: 1 }}>{children}</div>
        </div>
      </div>
    </div>
  );
}
