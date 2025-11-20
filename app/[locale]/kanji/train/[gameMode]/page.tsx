import KanjiGame from '@/components/Dojo/Kanji/Game';

export function generateStaticParams() {
  return [
    { gameMode: 'Pick' },
    { gameMode: 'Reverse-Pick' },
    { gameMode: 'Input' },
    { gameMode: 'Reverse-Input' },
  ];
}

export default function Train() {
  return <KanjiGame />;
}




