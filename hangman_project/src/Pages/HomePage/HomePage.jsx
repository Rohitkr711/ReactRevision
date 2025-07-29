import { useNavigate } from 'react-router';
import homePageImage from '../../assets/Images/homePageImage.png'

function HomePage() {

    const navigate=useNavigate()

    function handleOnClick(){
        navigate('/start')
    }

    return (
        <>
            <div className="home-page-conntainer h-screen w-screen flex flex-row justify-center items-center px-40 py-5 bg-slate-400">

                <div className="flex flex-col justify-around items-center h-full w-full bg-gradient-to-b from-yellow-500 to-indigo-200 rounded-l-lg">
                    <div className="upper-section flex flex-col justify-center items-center gap-8">
                        <h2 className="text-5xl text-white font-mono">Welcome to Hangman!</h2>
                        <button 
                        className="px-3 py-1 rounded-md font-semibold bg-green-400 hover:bg-green-500 border-2"
                        onClick={handleOnClick}
                        >Let's Start
                        </button>
                    </div>

                    <div className="lower-section p-3 font-serif bg-amber-300 rounded-md">
                        <h4>What is Hangman?</h4>
                        <div>
                            <ul className='text-sm'>
                                <li>1. It is a word guessing game</li>
                                <li>2. Player-1 will give the word to be guess</li>
                                <li>3. Player-2 will try to guess the real otherwise got hanged</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='h-full w-full'>
                    <div className='h-full '>
                        <img src={homePageImage} alt="HomePageImage" className='h-full w-full rounded-r-lg' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;
