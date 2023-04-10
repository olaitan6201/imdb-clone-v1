import Link from "next/link";
import Card from "./Card";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

export default function DataItem({ id, title, path, overview, date, vote_count }) {
    return (
        <Card>
            <Link href={`/movie/${id}`}>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${path}`}
                    alt="Movie Image"
                    width={500} height={300}
                    className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
                    placeholder="blur"
                    blurDataURL="/spinner2.svg"
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                        width: 'auto', 
                    }}
                />
                <div className="p-2">
                    <p className="line-clamp-3 text-sm">{overview}</p>
                    <h2 className="truncate text-lg font-bold overline">{title}</h2>
                    <p className="flex items-center text-sm justify-between">
                        <span>{date}</span>
                        <span>
                            <FiThumbsUp className="h-5 mx-2" />
                            {vote_count}
                        </span>
                    </p>
                </div>
            </Link>
        </Card>
    )
}
