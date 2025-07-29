import { Link, useNavigate } from "react-router";
import {useState} from 'react';
import TextInputFormContainer from "../../Components/TextInputForm/textInputFormContainer";

function StartPage() {
  const navigate = useNavigate();
  const [validInput, setValidInput] = useState(false)

  function handleFormSubmit(value) {
    if(value){

      navigate("/play", { state: { wordSelected: value } });
    }
    else{
      setValidInput(true);

    }

  }

  return (
    <>
    <div className="h-screen w-screen flex justify-center items-center bg-amber-100">

      <div className="startPage-container flex flex-col gap-10 h-1/2 w-1/3 bg-yellow-300 p-4 rounded-lg ">

        <div className="text-center text-4xl">Game Started</div>
        <div className="flex flex-col gap-10">
          <p className="text-center text-2xl">Player-1's Turn</p>
          <div className="form-container flex flex-col justify-center items-center w-full">
            {validInput && (<p className="text-red-500 font-medium">Please provide valid input</p>)}
            <TextInputFormContainer onSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default StartPage;