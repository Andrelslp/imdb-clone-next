import Results from '@/components/Results';

export interface TheMovieDbProps {
  backdrop_path: string;
  id: number;
  title?: string;
  original_title?: string;
  name?: string;
  original_name?: string;
  overview: string;
  poster_path: string;
  media_type: 'movie' | 'tv';
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  first_air_date?: string;
  origin_country?: string[];
}

interface HomeProps {
  searchParams: { genre: string };
}

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }: HomeProps) {
  const genre = searchParams.genre || 'fetchTrending';

  const res = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}