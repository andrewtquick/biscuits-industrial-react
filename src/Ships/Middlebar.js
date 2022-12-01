import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import BPO from "../components/BPO";
import BuildCount from "../components/BuildCount";
import Location from "../components/Location";
import Citadel from "../components/Citadel";
import CitadelRig from "../components/CitadelRig";
import OreBonus from "../components/OreBonus";

const Middlebar = () => {
    const {id} = useParams();
    const [ ship, getShips] = useState([]);
    useEffect(() => {
      const fetchShips = async () => {
        const apiRes = 'First fetch done'
        try {
          const res = await axios.get('http://localhost:8081/api/s/' + id);
          getShips(res.data);
        } catch (error) {
          console.log(error);
        } finally {
            console.log(apiRes)
        }
      }
      fetchShips();
    },[])
    const [ build, getBuild] = useState([]);
    useEffect(() => {
      const fetchShips = async () => {
        const apiRes = 'Second Fetch done';
        try {
          const res = await axios.get('http://localhost:8081/api/b/' + id);
          getBuild(res.data);
        } catch (error) {
          console.log(error);
        } finally {
            console.log(apiRes)
        }
      }
      fetchShips();
    },[])
    return (
        <div className='col-md-6 content'>
        <div className='ship'>
              {ship.map(ship=>(
                  <div className='ship'>
                    <link rel="shotcut icon" type="image/jpg" href={`https://images.evetech.net/types/${ship.typeID}/icon`}></link>
                    <div className="ShipName">
                    <h1>{ship.typeName} ID: {ship.typeID}</h1>
                    <p> Ship Tree location: will be at a later date.</p>
                    </div>
                    <BPO />
                    <BuildCount />
                    <Location />
                    <Citadel />
                    <CitadelRig />
                    <OreBonus />
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th><b>Minerals</b></th>
                                            <th><b>Structure</b></th>
                                        </tr>
                                    </thead>
                            {build.map(build=>(
                            <div className="table">
                                    <tbody>
                                        <tr>
                                            <td><input type="image" src={`https://images.evetech.net/types/${build.materialTypeID}/icon`} alt="It broke. i needs fix Ships/Middlebar"></input>{build.typeName}</td>
                                            <td>{build.quantity}</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                    <tr>
                                        <td colSpan="4">
                                        <table class="table-bordered mb-0">
                                            Stuff under
                                        </table>
                                        </td>
                                    </tr>
                                    </tbody>
                                    </div>
                                    ))}
                                </table>
              </div>
              ))}
            </div>
      </div>
    )
}
export default Middlebar;