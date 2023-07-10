import { useNavigate } from "react-router-dom";
import "../../styles/routes/locations.scss"
import {roomList} from "../../mocks/reservation"

export default function Locations() {

  const navigate = useNavigate();

  const onHandleCLick = () => {
    navigate("/welcome");
  };

  const onNavigateLocation= (id)=> navigate(`/Locations/${id}`)

  const onLocaRender = () => {
    return roomList?.map(({ name, imageLocation, id , location, price , rating, roomsAvailable }) => (
      <div className="Locations__RoomList"  onClick={()=>onNavigateLocation(id)}>
        <img className="Locations__Img" key={id} src={imageLocation} alt={name} />
        <h2>{name} </h2>
        <h3>Where: {location}</h3>
        <p className="Locations__price">{price}$</p>
        <p> {rating} ★</p>
        {roomsAvailable && (
         <div>
          <h4>Available rooms:</h4>
          <ul>
            {roomsAvailable.map(({type, price, quantity})=>(
              <li key={type}>
                Type : {type} , Price {price} , Quantity:{quantity}
              </li>
            ))}
          </ul>
         </div>
        )}
      
      </div>
    ));
  };

  return (
    <div className="Locations">
      <button className="Locations__btn" onClick={onHandleCLick}>Torna alla home</button>
      {roomList.length ? onLocaRender() : <p>Loading...</p>}
    </div>
  );
}
