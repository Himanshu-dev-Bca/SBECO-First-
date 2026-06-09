import { useState, useEffect } from 'react';

export default function ReCAPTCHA({ onChange, theme = 'light' }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    // Load reCAPTCHA script
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setIsLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const onReCAPTCHAChange = (token) => {
    if (token) {
      setVerified(true);
      onChange?.(token);
    } else {
      setVerified(false);
      onChange?.(null);
    }
  };

  return (
    <div className="mb-5">
      {isLoaded ? (
        <div
          className="g_recaptcha"
          data-sitekey="6LdZa60qAAAAAJHfVSREqO7F1y5bzXFjRQr-5vMn"
          data-callback="onReCAPTCHAChange"
          data-theme={theme}
        />
      ) : (
        <div className="bg-gray-100 px-4 py-4 text-[12px] text-gray-600 rounded">
          Loading security verification...
        </div>
      )}
      <input
        type="hidden"
        id="recaptcha_response"
        name="recaptcha_response"
      />
    </div>
  );
}
