'use client';

export default function AlertButtonLive() {
  const showAlertLive = () => {
    alert('Will be updating soon.');
  };

  return <button onClick={showAlertLive}>View live</button>;
}
