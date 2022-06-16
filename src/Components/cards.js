import { useRef, useState } from "react";
import BarChart from "./BarChart";
import Gaugegraph from "./Gaugegraph";
import Map from "./Map";
import MapContainer from "./MapContainer";
import RadarChart from "./RadarChart";
import Rank from "./Rank";


const Cards = () => {
  /*
  const [inputs, setInputs]=useState({labelname:""})
  const {labelname}=inputs;
  const onChange=(e)=>{
    setInputs(e.target.value);
  }
  const [labels,setLabels]=useState([
    {labelname:"노원구"}
  ])

  const onCreate = () =>{
    const addLabel = labels.concat({labelname:inputs})
    setLabels(addLabel)
    setInputs({labelname:""})
    nameInput.current.focus();
  }
  const nameInput = useRef();
*/
  return ( //레이더차트 추가
    <div>

      <div className="cards">
        <div className="card1">
        <Map />
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <RadarChart/>
        </div>
      </div>
      <div className="card">
        <BarChart />
      </div>
    </div>
  );
};

export default Cards;
