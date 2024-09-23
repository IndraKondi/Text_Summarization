import React from 'react'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="h-screen flex justify-center items-center bg-white">
            <div className='max-w-2xl mx-auto my-5'>
                <div>
                    <h1 className='text-3xl font-bold text-center'>Text Summarization</h1>
                    <p className='text-center text-lg mt-5 text-muted-foreground'>Text Summarization is a process of shortening a text document with software, in order to create a summary with the major points of the original document. Technologies used in this project are React, Tailwind CSS, and Vite.</p>
                </div>
                <div className='flex items-center justify-center gap-5 my-10'>
                    <Button onClick={()=>navigate("/upload")}>Upload file</Button>
                    <Button onClick={()=>navigate("/manual")} variant="outline">Enter text manually</Button>
                </div>
            </div>
            <div className='max-w-7xl mx-auto my-5'>

            </div>
        </div>
    )
}

export default Home