'use client'

import { useState, ChangeEvent } from 'react'

export default function Home() {
    const [content, setContent] = useState<string>('')

    const handleClean = async () => {
        try {
            setContent(JSON.stringify(JSON.parse(content), null, 4))
        } catch (e) {}
    }

    return (
        <main className="h-screen relative">
            <textarea
            	className="w-full h-full outline-[0px] border-box p-[15px]"
                value={content}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
            />
            <button onClick={handleClean} className="fixed bottom-[10px] right-[10px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Clean</button>
        </main>
    )
}
