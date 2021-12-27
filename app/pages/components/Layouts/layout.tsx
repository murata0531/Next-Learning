import Head from 'next/head';
import type { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

export default function Layout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title} | サンプルプロジェクト</title>
        <meta name="description" content="サンプル" />
      </Head>
      <main>{children}</main>
    </>
  );
}
