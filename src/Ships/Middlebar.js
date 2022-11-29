import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { render } from "@testing-library/react";

const Middlebar = () => {
    const {id} = useParams();
    const [ ship, getShips] = useState([]);
    useEffect(() => {
      const fetchShips = async () => {
        try {
          const res = await axios.get('http://localhost:8081/api/s/' + id);
          getShips(res.data);
        } catch (error) {
          console.log(error);
          return 
        }
      }
      fetchShips();
    },[])
    const [ build, getBuild] = useState([]);
    useEffect(() => {
      const fetchShips = async () => {
        let apiRes = 'All done';
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
                    <div className="BPONumber">
                            <legend>What's your ME BPO number</legend>
                            <select className="forum-select" id="BPO">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>                            
                            </select>
                    </div>
                    <div className="ShipCount">
                        <legend>How many ships being built?</legend>
                        <select className="forum-select" id="ShipCount">
                            
                        </select>
                    </div>
                    <div className="Location">
                        <legend>Select your Location</legend>
                        <select className="forum-select" id="BPO">
                            <option value="Highsec">Highsec</option>
                            <option value="Lowsec">Lowsec</option>
                            <option value="Null/WormHole">Null/WormHole</option>
                        </select>
                    </div>
                    <div className="Station">
                        <legend>Select your Station</legend>
                        <select>
                            <option value="Athanor">Athanor</option>
                            <option value="Tatara">Tatara</option>
                            <option value="Raitaru">Raitaru</option>
                            <option value="Azbel">Azbel</option>
                            <option value="Sotiyo">Sotiyo</option>
                            <option value="Astrahus">Astrahus</option>
                            <option value="Fortizar">Fortizar</option>
                            <option value="Keepstar">Keepstar</option>
                        </select>
                    </div>
                    <div className="Rig">
                        <legend>What's the Rig?</legend>
                        <select>
                            <option value="0">0%</option>
                            <option value="1">5%</option>
                            <option value="2">10%</option>
                            <option value="3">15%</option>
                        </select>
                    </div>
                    <div className="OreBonus">
                        <legend>Ore Bonus</legend>
                        <select>
                            <option value="0">0%</option>
                            <option value="1">5%</option>
                            <option value="2">10%</option>
                            <option value="3">15%</option>
                        </select>
                    </div>
                    <div className="Minerals">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Minerals</th>
                                    <th>Citadel</th>
                                    <th>Engineering</th>
                                    <th>Refining</th>
                                </tr>
                            </tbody>
                        </table>
                            {build.map(build=>(
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <td><input type="image" src={`https://images.evetech.net/types/${build.materialTypeID}/icon`} alt="It broke. i needs fix Ships/Middlebar"></input>{build.typeName}</td>
                                            <td>{build.quantity}</td>
                                            <td>{build.quantity}</td>
                                            <td>{build.quantity}</td>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    <tr>
                                        <td colspan="4">
                                        <table class="table mb-0">
                                            Stuff under
                                        </table>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            ))}
                    </div>
              </div>
              ))}
            </div>
      </div>
    )
}
export default Middlebar;