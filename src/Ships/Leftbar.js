import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
const Leftbar = () => {
    const {id} = useParams();
    const [ ship, getShips] = useState([]);
    useEffect(() => {
      const fetchShips = async () => {
        try {
          const res = await axios.get('http://localhost:8081/api/s/' + id);
          getShips(res.data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchShips();
    },[])
    return (
        <div className='col-md-3 leftNav'>
            <div className='ship'>
              {ship.map(ship=>(
                <div className='ship'>
                <a href={`https://wiki.eveuniversity.org/${ship.typeName}`} target="__blank">
                <input type="image" class="media-object" target="__blank" src={`https://image.testeveonline.com/Render/${ship.typeID}_512.png`} style={{maxWidth:"100%", maxHeight:"100%"}} alt='Ship Image goes Here, Mail SkippTekk or tweet @XGKIPPY for a fix'></input>
                </a>
              <h4 className="media-heading">Default values of the ship.</h4>
              <p>Ship Capacitor:  {ship.capacity} MW </p>
              <p>Ship Mass: {ship.mass}</p>
              <p>Ship Volume: {ship.volume}</p>
              <p>Group ID: {ship.groupID}</p>
              <p>Race BROKEN on faction: </p>
              </div>
              ))}
            </div>
        </div>
    )
}
export default Leftbar;