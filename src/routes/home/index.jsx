import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();

  const onHandleCLick = () => {
    navigate("/");
  };
  return (
    <div className="Home">
      <h2>Ciao questa è la homepage</h2>
      <button onClick={onHandleCLick}>Indietro</button>
    </div>
  );
}
