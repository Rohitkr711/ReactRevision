import { useLocation, useNavigate } from "react-router";

export default function GameEnd({ text }) {

    const navigate = useNavigate();
    const location = useLocation()
    const result = location.state?.gameResult;

    const playAgainHandler = function () {
        navigate('/');
    }

    return (
        <>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

                    <div className="bg-slate-100 text-black flex flex-col justify-center items-center gap-4 h-48 w-[450px] rounded-lg">
                        <div className="text-3xl">
                            <p>{text}</p>
                        </div>
                        <button
                            className="border p-2 rounded-md text-sm bg-green-600 font-bold text-white"
                            onClick={playAgainHandler}
                        >
                            Play again
                        </button>

                    </div>
                </div>
        </>
    )
}
