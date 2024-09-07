import Card from './Card';
import { TheMovieDbProps } from '@/app/page';

interface ResultsProps {
  results: TheMovieDbProps[];
}

export default function Results({ results }: ResultsProps) {
  console.log(results)
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}