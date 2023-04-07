import Link from 'next/link'
export default function MenuItem({ title, url, Icon }) {
    return (
        <div>
            <Link href={url} className='mx-4 lg:mx-6 hover:text-amber-600'>
                <Icon className="text-2xl sm:hidden mx-4" />
                <p className='hidden sm:inline my-2 text-sm'>{title}</p>
            </Link>
        </div>
    )
}
