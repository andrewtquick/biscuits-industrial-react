import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
const Rightbar = () => {
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
        <div className='col-md-3 reletedContent'>
            <div className='ship'>
              {ship.map(ship=>(
                <div className='ship'>
                    <b>Ship Description and Data</b>:<p></p>
                    {ship.description}
              </div>
              ))}
            </div>
        </div>
    )
}
export default Rightbar;