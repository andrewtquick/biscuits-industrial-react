import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
const Middlebar = () => {
    const {id} = useParams();
    const [ ship, getShips] = useState([]);
    useEffect(() => {
      const fetchShips = async () => {
        try {
          const res = await axios.get('http://localhost:8081/api/s/' + id);
          console.log(res)
          getShips(res.data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchShips();
    },[])
    return (
        <div className='col order-2'>
        Middle Section
      </div>
    )
}
export default Middlebar;