import Image from "next/image"

const API_KEY = process.env.API_KEY

export default async function MoviePage({ params }) {
    const id = params.id
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
    // if (!res.ok) {
    //     throw new Error('Unable to fetch date')
    // }
    const data = await res.json()

    return (
        <div className="w-full">
            {data && (
                <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path || data?.poster_path}`}
                        alt="Movie Image"
                        width={500} height={300}
                        className="rounded-lg"
                        placeholder="blur"
                        blurDataURL="/spinner2.svg"
                        style={{
                            maxWidth: "100%",
                            height: "100%"
                        }}
                    />
                    <div className="p-2 text-sm">
                        <h2 className="text-lg mb-3 font-bold">
                            {data.title || data.name || data?.original_title}
                        </h2>
                        <p className="text-lg mb-3">
                            <span className="font-semibold mr-1">Overview:</span>
                            <span>{data?.overview}</span>
                        </p>
                        <p className="mb-3">
                            <span className="font-semibold mr-1">Release Date:</span>
                            <span>{data.release_date || data?.first_air_date}</span>
                        </p>
                        <p className="mb-3">
                            <span className="font-semibold mr-1">Rating:</span>
                            <span>{data?.vote_count}</span>
                        </p>
                    </div>
                </div>)}
        </div>
    )
}
