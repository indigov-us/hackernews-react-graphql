import Select from 'react-select';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
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

// TODO::
function TagManager(props): JSX.Element {
  const { articleId, defaultTags, userId } = props;

  const [addTags, { data, loading, error }] = useMutation(ADD_TAG_TO_ARTICLE_MUTATION);

  const [selectedOptions, setSelectedOptions] = useState(defaultTags || []);

  // TODO:: update tags mutation
  const handleChange = (value) => {
    console.log(articleId);
    addTags({ variables: { articleId, userId, tag: value } });
  };

  return (
    <div style={{ flex: 1 }}>
      <Select
        placeholder="Add tag"
        isMulti
        value={selectedOptions}
        onChange={setSelectedOptions}
        options={MOCK_OPTIONS}
      />
    </div>
  );
}

export default TagManager;
