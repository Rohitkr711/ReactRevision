import React from 'react'
import Accordian from '../Accordian/Accordian'

export default function Faq() {
    return (
        <>
            <div className='p-4 rounded bg-white grid divide-y'>
                <Accordian question="What is youe name?" answer="My name is Rohit Kr." />
                <Accordian question="Where are you from?" answer="I'm from Jamshedpur Jharkhand"/>
                <Accordian question="What's your Interest" answer="I'm interested in Computer Science"/>

            </div>
        </>
    )
}
