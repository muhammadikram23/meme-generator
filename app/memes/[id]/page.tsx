'use client'
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import { useState } from "react";

const SingleMeme = () => {
    const searchParam = useSearchParams();

    const url = searchParam.get('url');
    const box_count = Number(searchParam.get('box_count'));
    const id = searchParam.get('id');

    const [textInputs, setTextInputs] = useState<string[]>([]);
    const [data, setData] = useState<any>('');
    const [loading, setLoading] = useState(false);

    function handleInputs(index: number, value: string) {
        const updatedInputs = [...textInputs];
        updatedInputs[index] = value;
        setTextInputs(updatedInputs);
    }

    const boxes: any = [];
    for (let i = 0; i < box_count; i++) {
        boxes.push(
            <div key={i}>
                <input
                    type="text"
                    id={`input${i}`}
                    placeholder="Enter message"
                    value={textInputs[i] || ''}
                    onChange={(e) => handleInputs(i, e.target.value)}
                    className="border-1 my-1 p-2 border-gray-300 rounded-xl w:auto h:auto w-full" />
            </div>
        );
    }

    const generateMeme = async () => {
        setLoading(true);
        try {
            const params = new URLSearchParams();
            params.append('template_id', id ?? '');
            params.append('username', 'MuhammadIkram2');
            params.append('password', '62zqWyFMj@8VzdA');

            for (let i = 0; i < box_count; i++) {
                params.append(`boxes[${i}][text]`, textInputs[i] || '');
            }

            const post = await fetch(`https://api.imgflip.com/caption_image?${params.toString()}`, {
                method: 'POST',
            });
            const result = await post.json();
            console.log(result);
            setData(result);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col justify-center">
            <Navbar />
            {!data ?
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
                    <div className="w-full max-w-sm bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col items-center gap-4">

                        {/* Title */}
                        <h2 className="text-lg font-semibold text-gray-800">
                            Single Meme
                        </h2>

                        {/* Meme Image Container */}
                        <div className="flex justify-center items-center w-full bg-gray-100 rounded-lg p-2 border border-gray-200">
                            <Image
                                src={url ?? ''}
                                width={200}
                                height={300}
                                alt="meme"
                                className="rounded object-contain max-h-[350px] w-full"
                            />
                        </div>

                        {/* Input Fields Container */}
                        <div className="w-full flex flex-col gap-3">
                            {boxes}
                        </div>

                        <div>
                            <button
                                className="border p-3 rounded-xl cursor-pointer border-blue-600 text-blue-600 hover:scale-105 disabled:opacity-50"
                                onClick={() => generateMeme()}
                                disabled={loading}
                            >
                                {loading ? 'Generating...' : 'Generate Meme'}
                            </button>
                        </div>

                    </div>
                </div>
                : <img src={data?.data?.url} alt="Meme generated" />}
        </div>
    );
}

export default SingleMeme;