import {useState} from 'react'
import Card from "../Card/Card.jsx"

function Grid({ numOfCards }) {
    const [board, setboard] = useState(Array(numOfCards).fill(""))
    return (
        <>
            <div className="border border-orange-500">
                {board.map((val, idx) =>{ 
                    console.log('index',idx);
                    
                    return <Card key={idx} playerInput={""}/>
                })}
            </div>
        </>
    )
}

export default Grid;