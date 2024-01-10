import Script from "next/script";

function AnalyticsTag() {
  const tag = process.env.NEXT_PUBLIC_ANALYTICS_GTAG || "";
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${tag}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${tag}');
        `}
      </Script>
    </>
  );
}

export default AnalyticsTag;
