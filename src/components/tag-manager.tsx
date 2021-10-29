import Select from 'react-select';
import React, { useMemo } from 'react';
import { useMutation } from '@apollo/client';
import sortBy from 'lodash.sortby';
import uniqBy from 'lodash.uniqby';
import { ADD_TAG_TO_ARTICLE_MUTATION } from '../data/mutations/update-article-tags-mutation';

const MOCK_OPTIONS = [
  { value: 'abortion', label: 'abortion' },
  { value: 'buildbackbetter', label: 'build back better' },
  { value: 'childcare', label: 'childcare' },
  { value: 'climate', label: 'climate change' },
  { value: 'debt', label: 'debt ceiling' },
  { value: 'drug', label: 'drug prices' },
  { value: 'finance', label: 'finance' },
  { value: 'infrastructure', label: 'infrastructure' },
  { value: 'jobs', label: 'jobs' },
  { value: 'tax', label: 'tax' },
  { value: 'vaccine', label: 'vaccine for kids' },
];

function TagManager(props): JSX.Element {
  const { articleId, defaultTags = [], userId } = props;
  const [addTags] = useMutation(ADD_TAG_TO_ARTICLE_MUTATION);

  const handleChange = (value) => {
    addTags({ variables: { articleId, userId, tags: value } });
  };
  const initialTags = useMemo(() => {
    const uniqueTags = uniqBy(defaultTags, 'value')
    const sortedTags = sortBy(uniqueTags, 'label')
    return sortedTags.map((tag) => ({'value': tag.value, 'label': tag.label}));
  }, [defaultTags]);

  return (
    <div style={{ flex: 1 }}>
      <Select
        placeholder="Add tag"
        defaultValue={initialTags}
        isMulti
        onChange={handleChange}
        options={MOCK_OPTIONS}
      />
    </div>
  );
}

export default TagManager;
