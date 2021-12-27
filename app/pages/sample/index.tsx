import type { ReactElement } from 'react';
import Layout from '../components/Layouts/layout';

function SamplePage() {
  return (
    <div>
      <h1>アバウト</h1>
    </div>
  );
}

SamplePage.getLayout = (page: ReactElement) => {
  return <Layout title="what is this?">{page}</Layout>;
};

export default SamplePage;