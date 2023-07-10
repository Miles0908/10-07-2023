import { useNavigate } from "react-router-dom"
export default function About(){
    const navigate = useNavigate();

    const onHandleClick =()=>{
        navigate("/welcome")
    }

    return <div className="About">
        
       <h2> Ciao sono la rotta about</h2>

        <button onClick={onHandleClick}> Torna alla home</button>
    </div>

}