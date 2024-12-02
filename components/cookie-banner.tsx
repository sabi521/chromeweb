"use client";

import { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../lib/storage-helper";

// CookieBanner component that displays a banner for cookie consent.
export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<null | boolean>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    console.log("Cookie Consent retrieved from storage: ", storedCookieConsent);
    setCookieConsent(storedCookieConsent);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (cookieConsent !== null) {
      setLocalStorage("cookie_consent", cookieConsent);
    }

    const newValue = cookieConsent ? "granted" : "denied";

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: newValue,
      });
    } else if (cookieConsent !== null) {
      console.warn("Google Analytics (gtag) is not available.");
    }
  }, [cookieConsent]);

  if (isLoading || cookieConsent !== null) {
    return null;
  }

  return (
    <div
      className={`cookie-banner ${
        cookieConsent == null ? "visible" : "hidden"
      }`}
    >
      <div className="cookie-banner-inner">
        <div className="cookie-banner-content">
          <div className="cookie-banner-text">
            <p>
              This website uses cookies to improve user experience. By using our
              website you consent to all cookies in accordance with our Cookie
              Policy.
            </p>
          </div>
          <div className="cookie-banner-buttons">
            <button
              className="accept-button"
              aria-label="Accept cookies"
              onClick={() => setCookieConsent(true)}
            >
              Accept
            </button>
            <button
              className="decline-button"
              aria-label="Decline cookies"
              onClick={() => setCookieConsent(false)}
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
