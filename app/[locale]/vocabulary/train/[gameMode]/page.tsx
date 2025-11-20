import VocabGame from '@/components/Dojo/Vocab/Game';

export function generateStaticParams() {
  return [
    { gameMode: 'Pick' },
    { gameMode: 'Reverse-Pick' },
    { gameMode: 'Input' },
    { gameMode: 'Reverse-Input' },
  ];
}

export default function Train() {
  return <VocabGame />;
}





