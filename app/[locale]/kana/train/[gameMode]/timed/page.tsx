import TimedChallengeKana from '@/components/Dojo/Kana/TimedChallenge';

export function generateStaticParams() {
  return [
    { gameMode: 'Pick' },
    { gameMode: 'Reverse-Pick' },
    { gameMode: 'Input' },
    { gameMode: 'Reverse-Input' },
  ];
}

export default function TimedKanaPage() {
  return (
    <main className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Timed Challenge: Kana</h1>
      <TimedChallengeKana />
    </main>
  );
}
