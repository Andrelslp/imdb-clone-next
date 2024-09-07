import Image from 'next/image';

interface GenreProps {
  id: number;
  name: string;
}

interface ProductionCompanyProps {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface ProductionCountryProps {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguageProps {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface MovieDataProps {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: null | object;
  budget?: number;
  genres?: GenreProps[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  origin_country?: string[];
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: ProductionCompanyProps[];
  production_countries?: ProductionCountryProps[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: SpokenLanguageProps[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  success?: boolean;
  status_code?: number;
  status_message?: string;
}

interface MovieProps {
  params: { id: string }
}

export default async function Movie({ params }: MovieProps) {
  const movieId = params.id;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`,
    {next: { revalidate: 10000 }}
  );
  const movie: MovieDataProps = await res.json();

  if (!res.ok) {
    throw new Error('Failed to fetch movie data');
  }

  return (
    <div className='w-full'>
      <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          alt='movie poster'
          width={500}
          height={300}
          className='rounded-lg'
          style={{ maxWidth: '100%', height: '100%' }}
        />
        <div className='p-2'>
          <h2 className='text-lg mb-3 font-bold'>{movie.title}</h2>
          <p className='text-lg mb-3'>{movie.overview}</p>
          <p className='mb-3'>
            <span className='font-semibold mr-1'>Date released:</span>
            {movie.release_date}
          </p>
          <p className='mb-3'>
            <span className='font-semibold mr-1'>Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}