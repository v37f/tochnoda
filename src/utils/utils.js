export const formatPhoneNumber = (phoneNumberString) => {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(7|)?(\d{3})(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    var intlCode = match[1] ? '+7 ' : '';
    return [
      intlCode,
      '(',
      match[2],
      ') ',
      match[3],
      '-',
      match[4],
      '-',
      match[5],
    ].join('');
  }
  return null;
};

export const getMobileOperatingSystem = () => {
  var userAgent = navigator.userAgent || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/android/i.test(userAgent)) {
    return 'android';
  }

  // iOS detection from: https://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'ios';
  }

  return 'desktop';
};
