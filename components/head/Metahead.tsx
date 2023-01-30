import Head from 'next/head';
import { FC } from 'react';

const MetaHead: FC = () => {
  return (
    <Head>
      <title>Julia Mendes</title>
      <meta name="description" content="Julia Mendes - Frontend Developer" />
      <link rel="icon" href="/favicon/cat-footprint.png" />
    </Head>
  );
};

export default MetaHead;
