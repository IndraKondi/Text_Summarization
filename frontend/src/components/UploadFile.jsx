import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { fileEndPOint } from '@/utils/APIRoutes'
import axios from 'axios'
import { SyncLoader } from 'react-spinners'


const UploadFile = () => {
    const [isloading, setIsLoading] = useState(false);
    const [inputFile, setInputFile] = useState({
        file: ""
    })
    const [summary, setSummary] = useState("");

    const handleFileChange = (e) => {
        setInputFile({
            file: e.target.files[0]
        })
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        const formData = new FormData();
        formData.append('file', inputFile.file);
        try {
            setIsLoading(true);
            const res = await axios.post(fileEndPOint, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            if (res.data.success) {
                setSummary(res.data.summary);
            }
        }
        catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            {
                isloading ? (
                    <div className="fixed top-0 left-0 w-full h-full bg-[#ffffff85] bg-opacity-50 z-10 flex flex-col justify-center items-center">
                        <SyncLoader
                            color={'#2b3230'}
                            loading={true}
                            size={20}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                        <h1 className="text-xl font-semibold mt-6">Please wait...</h1>
                    </div>
                ) : null
            }
            <div className="h-screen flex flex-col bg-white">
                <div className='max-w-6xl flex flex-col items-center justify-center mx-auto my-10 gap-5'>
                    <h1 className='text-3xl font-bold text-center'>Upload your PDF File</h1>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col items-center justify-center'>
                        <Input onChange={handleFileChange} type="file" accept="application/pdf" className="my-5" />
                        <Button type="submit" className="my-5">Summarize the file</Button>
                    </form>
                </div>
                <div>
                    {
                        summary && <div className='max-w-6xl mx-auto my-10 p-5 bg-gray-100 border border-gray-300 rounded-lg shadow-md'>
                            <h2 className='text-2xl font-bold mb-3 text-center'>Summary</h2>
                            <div className='h-96 overflow-y-auto p-4 bg-white border border-gray-200 rounded-md'>
                                <p className='text-lg text-gray-700'>{summary}</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default UploadFile