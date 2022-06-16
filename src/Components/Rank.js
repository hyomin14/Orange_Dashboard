import { hierarchy } from "d3-hierarchy";
import React from "react";

function Rank() {
    return (
        <>
        <div style={{width:"400px", height:"400px", paddingTop:"70px",paddingLeft:"40px"}}>
            <h3> 면적 대비 안전시설 많은 순위 </h3>
            <ul style={{listStyle:"none", paddingLeft:"0px"}}>
                <li>1위 : 중랑구 </li>
                <li>2위 : 강남구</li>
                <li>3위 : 동작구</li>
            </ul>
            <h3> 면적 대비 안전시설 적은 순위 </h3>
            <ul style={{listStyle:"none", paddingLeft:"0px"}}>
                <li>1위 : 노원구 </li>
                <li>2위 : 서초구</li>
                <li>3위 : 강북구</li>
            </ul>
        </div>
        </>
    );
}

export default Rank;