import Icon from "../Icon/Icon";

function Card({ playerInput, cardIndex, onPlay, gameEnd }) {

    let IconName = ""
    if (playerInput == 'o' || playerInput == 'O')
        IconName = "circle"
    else if (playerInput == 'x' || playerInput == 'X')
        IconName = "cross"

    return (
        <>
            <div className="card border h-24 w-24 bg-yellow-500 flex justify-center items-center rounded-lg"
            onClick={()=>!gameEnd && playerInput=='' && onPlay(cardIndex)}
            
            >
                <Icon IconType={IconName} />
            </div>
        </>
    )
}

export default Card;