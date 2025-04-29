import { useState } from 'react';
import QRCode from './Qrcode';
import '../styles/getUrl.css';

const GetUrl = () => {
  const [value, setValue] = useState<string>('');

  const downloadQRCodeImage = () => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = value ? `qrcode.png` : `qrcode.png`;

    const qrCodeImage = new Image();
    qrCodeImage.src = canvas.toDataURL('image/png');

    qrCodeImage.onload = () => {
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
  };

  return (
    <div className="container">
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <QRCode url={value} />
      <button type="button" onClick={downloadQRCodeImage}>
        Download
      </button>
    </div>
  );
};

export default GetUrl;
