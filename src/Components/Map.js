// seoulMap.js
import * as d3 from "d3";
import * as topojson from 'topojson';
import {useEffect, useState} from "react";
import RadarChart from "./RadarChart";
import MapContainer from "./MapContainer";
import Rank from "./Rank";
import "../index.css"

function Map(){

    useEffect(() => {
        const seoulMap = require('../data/seoul_municipalities_topo_simple.json');
        console.log(seoulMap.objects.seoul_municipalities_geo)
        const geojson = topojson.feature(seoulMap, seoulMap.objects.seoul_municipalities_geo);
        const features = geojson.features;
        console.log(features);
        let width, height;
        height = 400;
        width = 400;
        var projection, path, svg, bounds, center, map;
        projection = d3.geoMercator().translate([width / 2, height / 2]);
        path = d3.geoPath().projection(projection);
        svg = d3.select("#seoul_map").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("top","-900px")
        map = svg.append("g").attr("id", "map"); 
        
        bounds = d3.geoBounds(geojson);
        center = d3.geoCentroid(geojson);

        var distance = d3.geoDistance(bounds[0], bounds[1]);
        var scale = height / distance / Math.sqrt(2) * 1.2;


        projection.scale(scale).center(center);

        map.selectAll("path")
            .data(features)
            .enter()
            .append("path")
            .attr("class", function(d) {console.log(d);
                return "municipality c " + d.properties.code;})
            .attr("d", path)
            .on("click", (d)=> {console.log(d.path[0].__data__.properties.name);});
        
        // List of groups (here I have one group per column)
        var allGroup = ['강남구', '강동구', '강북구','강서구','관악구','광진구','구로구','금천구','노원구',
        '도봉구','동대문구','동작구','마포구','서대문구','서초구','성동구','성북구','송파구','양천구',
        '영등포구','용산구','은평구','종로구','중구','중랑구']

        // add the options to the button
        d3.select("#selectButton")
            .selectAll('myOptions')
            .data(allGroup)
            .enter()
           .append('option')
            .text(function (d) { return d; }) // text showed in the menu
            .attr("value", function (d) { return d; }) // corresponding value returned by the button

        d3.select("#selectButton").on("change", function(d) {
            var selectedOption = d3.select(this).property("value")
            //console.log(selectedOption)
            send(selectedOption);
        });
    },[]);

    let state;
    
    function send(selectedOption){
        state={value :selectedOption}
        console.log(state);
    }

    const label ={ value : state};
    
    return <>
    
        <select id="selectButton" label={label} style={{float:"left"}}></select>
        <div style={{display:"flex"}}>
        <div id = "seoul_map"></div>
        <MapContainer />
        <Rank />
    </div>
    </>
    ////<h1 id="gu_name">&nbsp;&nbsp;서울의 안전지도</h1>
    
    //dropdown
    
 }

export default Map;
