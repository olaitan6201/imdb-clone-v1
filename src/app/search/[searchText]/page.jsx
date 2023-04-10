import DataItem from "@/components/DataItem";
import Results from "@/components/Results";

const API_KEY = process.env.API_KEY

const getData = async (search) => {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&language=en-US&include_adult=false`)

  if (!res.ok) return null

  return await res.json()
}

export default async function SearchPage({ params }) {
  const search = params.searchText;

  const res = await getData(search)

  const data = res.results;

  return (
    <div>
      {data ?
        (<Results data={data} />) :
        (<h1 className="text-center pt-6">No results found . . .</h1>)}
    </div>
  )
}
