import { useNavigate } from "react-router";
import level1 from "../../assets/Images/img1.png";
import level2 from "../../assets/Images/img2.png";
import level3 from "../../assets/Images/img3.png";
import level4 from "../../assets/Images/img4.png";
import level5 from "../../assets/Images/img5.png";
import level6 from "../../assets/Images/img6.png";
import level7 from "../../assets/Images/img7.png";
import looserImage from "../../assets/Images/img8.png";
import wonImage from "../../assets/Images/imgwon.png";

function Hangman({ step, isWin, AttemptLeft }) {

    console.log("Won?", isWin);
    console.log("Attempts left :", AttemptLeft);
    console.log('Total Steps', step);

    const images = [level1, level2, level3, level4, level5, level6, level7, looserImage];


    return (
        <>
            <div>
                {isWin && (<img src={wonImage} alt="Winner" />)}
                {!isWin && AttemptLeft === 0 && (<img src={looserImage} alt="Looser" />)}
                {!isWin && AttemptLeft !== 0 && (<img src={images[step]} alt="stepImages" />)}
            </div>
        </>
    )
}

export default Hangman;
