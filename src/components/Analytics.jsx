import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (window.plausible) {
      window.plausible("pageview");
    }
  }, [location.pathname]);

  return null;
}

export default Analytics;
