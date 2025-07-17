import React, { useState } from 'react'

export default function Accordian({ question, answer }) {
    const [accordianOpen, setaccordianOpen] = useState(false);

    return (
        <>
            <div className='py-2 hover:bg-gray-100 ...'>
                <button
                    onClick={() => setaccordianOpen(!accordianOpen)}
                    className='w-full flex justify-between'
                >

                    <span className='text-lg'>{question}</span>
                    {/* {accordianOpen ? <span>-</span> : <span>+</span>} */}
                    <svg
                        className="fill-indigo-500 shrink-0 ml-8"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            y="7"
                            width="16"
                            height="2"
                            rx="1"
                            className={`transform origin-center transition duration-200 ease-out ${accordianOpen && "!rotate-180"
                                }`}
                        />
                        <rect
                            y="7"
                            width="16"
                            height="2"
                            rx="1"
                            className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordianOpen && "!rotate-180"
                                }`}
                        />
                    </svg>
                </button>

                <div
                    className={`grid transition-all overflow-hidden duration-300 ease-in-out text-slate-600 text-sm ${accordianOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr] "}`}>

                    <div className='overflow-hidden'>{answer}</div>
                </div>
            </div>
        </>
    )
}
