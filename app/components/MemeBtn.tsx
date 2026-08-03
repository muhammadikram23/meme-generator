'use client'

import Link from "next/link";

interface Meme {
  id: string;
  height: number;
  width: number;
  url: string;
  name: string;
  box_count: number;
}

interface MemeBtnProps {
    meme: Meme
}

const MemeBtn = ({meme}: MemeBtnProps) => {
    return (
        <Link href={{
            pathname: '/memes/${meme.id}',
            query: {
                url: meme.url,
                id: meme.id,
                box_count: meme.box_count,
            }
        }} className="cursor-pointer border-blue-600 text-blue-600">Use Template</Link>
    )

}

export default MemeBtn