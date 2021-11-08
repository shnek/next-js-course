import React from 'react'
import Link from 'next/link'

const Page = () => {
    const notes = new Array(15).fill().map((e,i) => ({id: i, title: `Note: ${i}`}))

    return (
    <div>
        <h1>Notes page</h1>
        {notes.map(note => (
            <div>
                <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
                    <a>
                        {note.title}
                    </a>
                </Link>
            </div>
        ))}
    </div>
    )
}

export default Page