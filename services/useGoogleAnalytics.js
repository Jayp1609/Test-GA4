import { useEffect } from "react";

const useGoogleAnalytics = (tagId) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${tagId}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", tagId);

    return () => {
      document.head.removeChild(script);
    };
  }, [tagId]);

  const pushEventToDataLayer = (event) => {
    window.dataLayer.push(event);
  };

  return pushEventToDataLayer;
};

export default useGoogleAnalytics;

