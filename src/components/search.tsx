import * as React from 'react';

export function Search(): JSX.Element {
  return (
    <form method="get" action="//hn.algolia.com/">
      <input
        style={{ borderColor: '#d8dcde', borderRadius: '4px', padding: '10px 12px' }}
        type="text"
        name="q"
        placeholder="Search"
        size={17}
        autoCorrect="off"
        spellCheck={false}
        autoCapitalize="off"
        autoComplete="false"
      />
    </form>
  );
}
