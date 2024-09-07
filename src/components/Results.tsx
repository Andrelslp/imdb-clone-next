import { TheMovieDbProps } from '@/app/page';

interface ResultsProps {
  results: TheMovieDbProps[];
}

export default function Results({ results }: ResultsProps) {
  console.log(results)
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <h2>{result.title || result.name}</h2>
        </div>
      ))}
    </div>
  );
}