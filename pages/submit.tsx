import Link from 'next/link';
import Router from 'next/router';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { SUBMIT_NEWS_ITEM_MUTATION } from '../src/data/mutations/submit-news-item-mutation';
import { withDataAndRouter } from '../src/helpers/with-data';
import { MainLayout } from '../src/layouts/main-layout';

interface ISubmitPageProps {
  router;
}

function SubmitPage(props: ISubmitPageProps): JSX.Element {
  const { router } = props;

  const [title, setTitle] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const [submitNewsItem] = useMutation(SUBMIT_NEWS_ITEM_MUTATION, {
    variables: { title, url, description, userId: 'de151acc-bd78-4e6e-9796-5bc275661969' },
    onCompleted(res) {
      if (res && res.submitArticle) {
        Router.push(`/item?id=${res.submitArticle.id}`);
      }
    },
    onError(err) {
      console.error(err);
    },
  });

  return (
    <MainLayout
      currentUrl={router.pathname}
      title="Add New Article">
      <tr>
        <td>
          <form onSubmit={(e): void => e.preventDefault()}>
            <input type="hidden" name="fnid" value="GvyHFpy11L26dCAIgGQ9rv" />
            <input type="hidden" name="fnop" value="submit-page" />
            <script type="text/javascript">
              {
                "function tlen(el) { var n = el.value.length - 80; el.nextSibling.innerText = n > 0 ? n + ' too long' : ''; }"
              }
            </script>
            <table style={{ border: '0' }}>
              <tbody>
                <tr>
                  <td>Title</td>
                  <td>
                    <input
                      type="text"
                      name="title"
                      defaultValue=""
                      size={50}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                        setTitle(e.target.value);
                      }}
                    />
                    <span style={{ marginLeft: '10px' }} />
                  </td>
                </tr>
                <tr>
                  <td>url</td>
                  <td>
                    <input
                      type="text"
                      name="url"
                      defaultValue=""
                      size={50}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                        setUrl(e.target.value);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <b>or</b>
                  </td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>
                    <textarea
                      name="text"
                      rows={4}
                      cols={49}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => {
                        setDescription(e.target.value);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td />
                  <td />
                </tr>
                <tr>
                  <td />
                  <td>
                    <input
                      type="submit"
                      value="submit"
                      onClick={(): Promise<any> => submitNewsItem()}
                    />
                  </td>
                </tr>
                <tr style={{ height: '20px' }} />
                <tr>
                  <td />
                  <td>
                    Leave url blank to submit a question for discussion. If there is no url, the
                    text (if any) will appear at the top of the thread.
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </td>
      </tr>
    </MainLayout>
  );
}

export default withDataAndRouter(SubmitPage);
