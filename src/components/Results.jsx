import DataItem from "./DataItem";

export default function Results({ data }) {
    return (
        <div className="max-w-6xl mx-auto py-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {data.map(({ id, original_title, title, name, backdrop_path, poster_path, overview, release_date, first_air_date, vote_count }) => (
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
