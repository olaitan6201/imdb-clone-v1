import DataItem from "@/components/DataItem";

const API_KEY = process.env.API_KEY

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending"
  const res = await fetch(`https://api.themoviedb.org/3/${genre == "fetchTopRated" ? "movie/top_rated" :
    "trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`, { next: { revalidate: 30000 } })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();

  const results = data.results;

  return (
    <div className="max-w-6xl mx-auto py-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {results.map(({ id, original_title, title, name, backdrop_path, poster_path, overview, release_date, first_air_date, vote_count }) => (
        <DataItem
          id={id} key={id}
          title={original_title || title || name}
          path={backdrop_path || poster_path}
          overview={overview}
          date={release_date || first_air_date}
          vote_count={vote_count} />
      ))}
    </div>
  )
}
