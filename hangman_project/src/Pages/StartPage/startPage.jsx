import { Link, useNavigate } from "react-router";
import TextInputFormContainer from "../../Components/TextInputForm/textInputFormContainer";

function StartPage() {
    const navigate=useNavigate();

    function handleFormSubmit(){
      navigate("/play");
    }

  return (
    <>
    <div>startPage</div>
    <TextInputFormContainer onSubmit={handleFormSubmit}/>
    </>

  )
}

export default StartPage