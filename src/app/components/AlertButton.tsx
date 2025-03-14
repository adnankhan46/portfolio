'use client';

export default function AlertButtonLive() {
  const showAlertLive = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert('Will be updating soon.');
  };

  return <button onClick={showAlertLive}>View Live</button>;
}
