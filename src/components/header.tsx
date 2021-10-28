import * as React from 'react';

import { HeaderNav } from './header-nav';
import { Search } from '../components/search';

export interface IHeaderProps {
  me: { id: string; karma: number } | undefined;
  currentUrl: string;
  isNavVisible: boolean;
  title: string;
}

export function Header(props: IHeaderProps): JSX.Element {
  const { currentUrl, isNavVisible, me, title } = props;

  return (
    <header
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '32px',
      }}
    >
      <div style={{ flex: 1 }}>
        <HeaderNav currentUrl={currentUrl} isNavVisible={isNavVisible} title={title} />
      </div>
      <Search />
    </header>
  );
}
