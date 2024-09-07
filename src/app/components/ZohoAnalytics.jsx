import Script from "next/script";

export const ZohoAnalytics = () => {
  return (
    <Script id="zsiqchat" strategy="afterInteractive">
      {`
        var $zoho = $zoho || {};
        $zoho.salesiq = $zoho.salesiq || {
          widgetcode: "siqf5aa4700b19d7efd68760691987cdc439704be9a35d42678f305f0140e2e07d1",
          values: {},
          ready: function () {},
        };
        var d = document;
        var s = d.createElement("script");
        s.type = "text/javascript";
        s.id = "zsiqscript";
        s.defer = true;
        s.src = "https://salesiq.zohopublic.com/widget";
        var t = d.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(s, t);
      `}
    </Script>
  );
};
