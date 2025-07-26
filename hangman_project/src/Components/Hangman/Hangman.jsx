import level1 from "../../assets/Images/img1.png";
import level2 from "../../assets/Images/img2.png";
import level3 from "../../assets/Images/img3.png";
import level4 from "../../assets/Images/img4.png";
import level5 from "../../assets/Images/img5.png";
import level6 from "../../assets/Images/img6.png";
import level7 from "../../assets/Images/img7.png";
import level8 from "../../assets/Images/img8.png";
import wonImage from "../../assets/Images/imgwon.png";

function Hangman({step}) {

    const images = [level1, level2, level3, level4, level5, level6, level7, level8];
    const winner = wonImage;

    return (
        <>
            <div>
                <img src={`${step>=images.length-1? images[level8]:images[step]}`}/>
            </div>
        </>
    )
}

export default Hangman
