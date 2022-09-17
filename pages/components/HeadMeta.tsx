import Head from "next/head";

const HeadMeta = ({}) => {
  return (
    <Head>
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      ></meta>
    </Head>
  );
};

export default HeadMeta;
