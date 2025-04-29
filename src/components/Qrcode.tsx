'use client';

import { QRCodeCanvas } from 'qrcode.react';
import icon from '../assets/iconAyu.png';

interface QRCodeProps {
  url: string;
}

const QRCode = (props: QRCodeProps) => {
  return (
    <QRCodeCanvas
      value={props.url}
      size={256}
      bgColor={'#FFFFFF'}
      fgColor={'#000000'}
      level={'M'}
      includeMargin={true}
      imageSettings={{
        src: icon,
        x: undefined,
        y: undefined,
        height: 32,
        width: 32,
        excavate: true,
      }}
    />
  );
};

export default QRCode;
