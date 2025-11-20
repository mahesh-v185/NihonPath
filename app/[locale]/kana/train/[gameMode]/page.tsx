import KanaGame from '@/components/Dojo/Kana/Game';

export function generateStaticParams() {
  return [
    { gameMode: 'Pick' },
    { gameMode: 'Reverse-Pick' },
    { gameMode: 'Input' },
    { gameMode: 'Reverse-Input' },
  ];
}

export default function Train() {
  return <KanaGame />;
}

