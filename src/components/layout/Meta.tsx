import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
  locale: string;
  url: string;
  site_name: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
        <meta name="google-site-verification" content="BVRCNABGRlFLMr-We7xStRmtCY_YSnB01fBQN5v0FQU"/>
        <meta name="google-site-verification" content="bhftwUN-sNJPCoVdDuFhLq-YPUCLkweKu3FVrdMwrXc" />
        <meta name="naver-site-verification" content="48f6e6ce1b86f619dfb1e2f29541150875db62de" />
        {/* 트위터 */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={props.url} />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image" content="" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        {/* 네이트 */}
        <meta name="nate:title" content={props.title} />
        <meta name="nate:description" content={props.description} />
        <meta name="nate:site_name" content={props.site_name} />
        <meta name="nate:url" content={props.url} />
        <meta name="nate:image" content="" />

        <link rel="apple-touch-icon" href={`${router.basePath}/apple-touch-icon.png`} key="apple" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link rel="icon" href={`${router.basePath}/favicon.ico`} key="favicon" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9898399593070144"
                crossOrigin="anonymous"></script>

      </Head>
      {/*웹 메타테그*/}
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.url,
          locale: props.locale,
          site_name: props.site_name,
        }}
      />
    </>
  );
};

export { Meta };
