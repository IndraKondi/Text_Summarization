import React, { useState } from 'react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { textEndPOint } from '@/utils/APIRoutes';
import { SyncLoader } from 'react-spinners';
import axios from 'axios';

const ManualText = () => {
    const [text, setText] = useState("");
    const [summary, setSummary] = useState("");
    const [isloading, setIsLoading] = useState(false);

    const changeTextHandler = (e) => {
        console.log(e.target.value);
        setText(e.target.value);
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            setIsLoading(true);
            const res = await axios.post(textEndPOint, { text: text });

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
        <div className='mb-96'>
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
                        <h1 className="text-xl font-semibold mt-6">Loading...</h1>
                    </div>
                ) : null
            }
            <div className="h-screen flex flex-col bg-white gap-32">
                <div className='w-full max-w-6xl flex flex-col mx-auto my-10 gap-5'>
                    <form onSubmit={handleSubmit}>
                        <Textarea onChange={changeTextHandler} placeholder="Type here.." className="w-full h-[170%]" />
                        <Button type="submit" className="my-5">Summarize the text</Button>
                    </form>
                </div>

                {
                    summary && (
                        <div className='max-w-6xl mx-auto my-10 p-5 bg-gray-100 border border-gray-300 rounded-lg shadow-md'>
                            <h2 className='text-2xl font-bold mb-3 text-center'>Summary</h2>
                            <div className='h-96 overflow-y-auto p-4 bg-white border border-gray-200 rounded-md'>
                                <p className='text-lg text-gray-700'>{summary}</p>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default ManualText