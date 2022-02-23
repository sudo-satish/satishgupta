import Head from 'next/head'
import {useMemo} from 'react'
import { getExperience } from '../../utility';

const HeadMeta = () => {
  const exp = useMemo(() => getExperience(), []);
  return (
    <Head>
      <title>Satish Gupta</title>
      <meta
        name="description"
        content={`Satish Gupta, Highly skilled developer having experience of more than ${exp} years.`}
      ></meta>
      <meta property="og:title" content="Satish Gupta" />
      <meta property="og:url" content="https://satishgupta.dev/" />
      <meta property="og:description" content={`Highly skilled developer having experience of more than ${exp} years.`} />
      <meta property="og:image" content="https://satishgupta.dev/img/profile-image-reduced-quality.jpg" />
      <meta property="og:type" content="profile" />
      <meta property="og:profile:first_name" content="Satish" />
      <meta property="og:profile:last_name" content="Gupta" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon-16x16.png" />
    </Head>
  );
};

export default HeadMeta;
