import React from 'react'
import Link from 'next/link'

const Page = () => (
    <div>
        <h1>Notes page</h1>
        <Link href="/notes/[id]" as={`/notes/1`}>
            <a></a>
        </Link>
    </div>
)

export default Page