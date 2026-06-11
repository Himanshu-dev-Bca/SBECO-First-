import { useEffect, useRef, useState } from 'react';

const TURNSTILE_SITE_KEY = '0x4AAAAAADikcSsBT05IZFKK';

/**
 * CloudflareTurnstile — renders the Turnstile challenge widget.
 *
 * Props:
 *  - onVerify(token)   called when the user passes verification
 *  - onExpire()        called when a previously-issued token expires
 *  - onError(err)      called if the widget encounters an error
 *  - theme             'light' | 'dark' | 'auto'  (default: 'light')
 */
export default function CloudflareTurnstile({
  onVerify,
  onExpire,
  onError,
  theme = 'light',
}) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const [scriptLoaded, setScriptLoaded] = useState(
    typeof window !== 'undefined' && !!window.turnstile
  );

  /* ── 1. Load the Turnstile script once ── */
  useEffect(() => {
    if (window.turnstile) {
      setScriptLoaded(true);
      return;
    }

    // Avoid duplicate script tags
    if (document.querySelector('script[src*="turnstile"]')) {
      const poll = setInterval(() => {
        if (window.turnstile) {
          setScriptLoaded(true);
          clearInterval(poll);
        }
      }, 100);
      return () => clearInterval(poll);
    }

    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.onload = () => setScriptLoaded(true);
    document.head.appendChild(script);

    // We intentionally do NOT remove the script on unmount so it stays
    // cached if the user navigates back to the contact page.
  }, []);

  /* ── 2. Render the widget once the script + container are ready ── */
  useEffect(() => {
    if (!scriptLoaded || !containerRef.current || !window.turnstile) return;

    // Remove a previously-rendered widget (e.g. HMR / StrictMode)
    if (widgetIdRef.current !== null) {
      try { window.turnstile.remove(widgetIdRef.current); } catch { /* noop */ }
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      theme,
      callback: (token) => onVerify?.(token),
      'expired-callback': () => onExpire?.(),
      'error-callback': (err) => onError?.(err),
    });

    return () => {
      if (widgetIdRef.current !== null) {
        try { window.turnstile.remove(widgetIdRef.current); } catch { /* noop */ }
        widgetIdRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scriptLoaded]);

  /* ── 3. Expose a reset helper via the ref (not used here but useful) ── */

  return (
    <div className="mb-6">
      {scriptLoaded ? (
        <div ref={containerRef} />
      ) : (
        <div className="bg-gray-100 px-4 py-4 text-[12px] text-gray-500 flex items-center gap-2 border border-gray-200">
          <span className="inline-block w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
          Loading security verification…
        </div>
      )}
    </div>
  );
}
