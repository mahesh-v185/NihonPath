import SubsetDictionary from '@/components/Dojo/Kana/SubsetDictionary';

export function generateStaticParams() {
  return [
    { subset: 'hiragana-base' },
    { subset: 'hiragana-dakuon' },
    { subset: 'hiragana-yoon' },
    { subset: 'katakana-base' },
    { subset: 'katakana-dakuon' },
    { subset: 'katakana-yoon' },
    { subset: 'katakana-foreign' },
  ];
}

export default function KanaSubsetDictionaryPage() {
  return <SubsetDictionary />;
}
