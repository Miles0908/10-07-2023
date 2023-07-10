import { useNavigate } from "react-router-dom";

export default function Contacts() {
  const navigate = useNavigate();
  const onHandleCLick = () => {
    navigate("/welcome");
  };
  return (
    <div className="About">
      <h2> Ciao sono la sezione contatti</h2>
      <button onClick={onHandleCLick}>Torna alla home</button>
    </div>
  );
}
