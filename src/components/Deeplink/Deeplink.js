import { useEffect, useRef, useState } from 'react';
import './Deeplink.scss';
import { getMobileOperatingSystem } from '../../utils/utils';

function Deeplink({ id, styleType = 'icon', socialsData, children = '' }) {
  const deeplinkRef = useRef(null);
  const appframeRef = useRef(null);

  const { phone, telegram, instagram, facebook, message } = socialsData;
  const [attributes, setAttributes] = useState({
    androidApk: '',
    apk: '',
    href: '',
  });

  useEffect(() => {
    switch (id) {
      case 'telegram':
        setAttributes((attributes) => ({
          ...attributes,
          androidApk: `intent://resolve?domain=${telegram}#Intent;package=org.telegram.messenger;scheme=tg;end`,
          apk: `https://t.me/${telegram}`,
          href: `https://web.telegram.org/k/#@${telegram}`,
        }));
        break;
      case 'facebook':
        setAttributes((attributes) => ({
          ...attributes,
          androidApk: `intent://profile/${facebook}#Intent;package=com.facebook.katana;scheme=fb;end`,
          apk: `fb://profile/${facebook}`,
          href: `https://www.facebook.com/${facebook}`,
        }));
        break;
      case 'instagram':
        setAttributes((attributes) => ({
          ...attributes,
          androidApk: `intent://instagram.com/_u/${instagram}/#Intent;package=com.instagram.android;scheme=https;end`,
          apk: `instagram://${instagram}`,
          href: `https://www.instagram.com/${instagram}`,
        }));
        break;
      default:
        // by default set attributes for whatsapp
        setAttributes((attributes) => ({
          ...attributes,
          androidApk: `intent://send?phone=${phone}&text=${message}#Intent;package=com.whatsapp;scheme=whatsapp;end`,
          apk: `https://wa.me/${phone}?text=${encodeURI(message)}`,
          href: `https://web.whatsapp.com/send?phone=${phone}&text=${message}&source=&data=`,
        }));
        break;
    }
  }, [id, phone, message, telegram, instagram, facebook]);

  const handleLinkClick = (e) => {
    e.preventDefault();
    // Detect device
    var deviceType = getMobileOperatingSystem();
    var android_apk_url = deeplinkRef.current.getAttribute('android-apk');
    var apk_url = deeplinkRef.current.getAttribute('apk');
    var siteUrl = deeplinkRef.current.getAttribute('href');

    switch (deviceType) {
      case 'android':
        appframeRef.current.setAttribute('src', android_apk_url);
        break;
      case 'ios':
        window.location = apk_url;
        break;
      default:
        window.open(siteUrl, '_blank', 'noopener,noreferrer');
        break;
    }
  };

  return (
    <a
      className="deeplink"
      id={id}
      android-apk={attributes.androidApk}
      apk={attributes.apk}
      href={attributes.href}
      onClick={handleLinkClick}
      target="_blanc"
      rel="noreferrer"
      ref={deeplinkRef}
      aria-label={`Перейти в ${id}`}
    >
      {styleType === 'icon' ? (
        <div
          className={`deeplink__icon deeplink__icon_type_${id}`}
          aria-hidden="true"
        ></div>
      ) : (
        <div className={`deeplink__${styleType}`} aria-hidden="true">
          {children}
        </div>
      )}
      <iframe
        id="app-frame"
        src=""
        title="app-frame"
        className="deeplink__app-frame"
        ref={appframeRef}
      ></iframe>
    </a>
  );
}

export default Deeplink;
