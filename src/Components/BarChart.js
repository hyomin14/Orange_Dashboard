import React, { useEffect } from "react";
import * as d3 from "d3";
import data from "../data/FiveMajorCrimes.csv";
import "../styles.css"

function BarChart(){
    /*
    useEffect(()=>{
        const margin = {top: 10, right: 30, bottom: 30, left: 70},
        width = 1200 - margin.left - margin.right,
        height = 850 - margin.top -margin.bottom;

        const svg = d3.select("#container")
                        .append("svg")
                            .attr("width", width + margin.left + margin.right)
                            .attr("height", height + margin.top +margin.bottom)
                        .append("g")
                            .attr("transform", `translate(${margin.left}, ${margin.top+margin.bottom})`);


        d3.csv(data).then(function(data){
            const allGrop = new Set(data.map(d=>d.year))
            console.log(allGrop)

            d3.select("#selectMenu").selectAll('myOptions').data(allGrop).enter()
                .append('option').text(function(d) {return d}).attr("value",function(d){return d})

            // 축 추가
            const x =d3.scaleLinear()
                .domain([0,d3.max(data, function(d) {return +d.sum})])
                .range([0,width-margin.left-margin.right])
            svg.append('g').call(d3.axisTop(x).ticks(10))

            const y=d3.scaleBand()
                .domain(d3.map(data,function(d) {return d.label}))
                .range([height-margin.top-margin.bottom,0]).padding(0.2)
            svg.append('g').call(d3.axisLeft(y))
            
            
            let tooltip = d3.select("#container")
                .append("g")
                .style("opacity", 0)
                .attr("class", "tooltip")
                .style("position","absolute")
                .style("background-color", "white")
                .style("box-shadow","4px 4px 10px rgba(0,0,0,0.4")
                .style("border-radius", "5px")
                .style("padding", "10px")
                .style("font-size","10px")
                .style("color","black")
                .style("font-weight","bold")
            

            const bar = svg.append('g').selectAll('rect')
                .data(data.filter(function(d){return d.year==="2020"}))
                .join('rect')
                .attr("x",x(0))
                .attr('y',d=>y(d.label))
                .attr('width',d=>x(+d.sum))
                .attr('height',y.bandwidth())
                .attr("fill","lightgray")
                .on("mouseover",function(event, d){
                    d3.select(this).transition().duration(50).attr("r",5)
                    tooltip.transition().duration(50).style("opacity",1).text("총 "+d.sum+"건")
                })
                .on("mousemove",function(event, d){
                    return tooltip.style("top",(event.y-10)+"px")
                        .style("left",(event.x+10)+"px")
                })
                .on("mouseleave",function(event, d){
                    d3.select(this).transition().duration(50).attr("r",5)
                    tooltip.transition().duration(50).style("opacity",0)
                })
                
            function update(selectedGroup){
                const dataFilter = data.filter(function(d){return d.year==selectedGroup})

                bar.data(dataFilter).transition().duration(1000)
                    .attr("x",x(0))
                    .attr('y',d=>y(d.label))
                    .attr('width',d=>x(+d.sum))
                    .attr('height',y.bandwidth())
                    .attr("fill","lightgray")
            }
            
            d3.select("#selectMenu").on("change",function(event,d){
                const selectedOption =d3.select(this).property("value")
                update(selectedOption)
            })
        })
    },[]);

    return(
        <>
        <div><select id="selectMenu"></select></div>
        <div id="container"></div>
        </>
    )
    */
    useEffect(()=>{
        const margin = {top: 10, right: 30, bottom: 30, left: 60},
        width = 1200 - margin.left - margin.right,
        height = 850 - margin.top -margin.bottom;
    

        const svg = d3.select("#container")
                        .append("svg")
                            .attr("width", width + margin.left + margin.right)
                            .attr("height", height + margin.top +margin.bottom)
                        .append("g")
                            .attr("transform", `translate(${margin.left}, ${margin.top+margin.bottom})`);
    
    
        d3.csv(data).then(function(data){
            const allGrop = new Set(data.map(d=>d.year))
            console.log(allGrop)
    
            d3.select("#selectMenu").selectAll('myOptions').data(allGrop).enter()
                .append('option').text(function(d) {return d}).attr("value",function(d){return d})
    
            // 축 추가
            const x =d3.scaleLinear()
                .domain([0,d3.max(data, function(d) {return +d.sum})])
                .range([0,width-margin.left-margin.right])
            svg.append('g').call(d3.axisTop(x).ticks(10)).style("font-size","12px") 
    
            const y=d3.scaleBand()
                .domain(d3.map(data,function(d) {return d.label}))
                .range([height-margin.top-margin.bottom,0]).padding(0.2)
            svg.append('g').call(d3.axisLeft(y)).style("font-size","12px")
            
            
            let tooltip = d3.select("#container")
                .append("g")
                .style("opacity", 0)
                .attr("class", "tooltip")
                .style("position","absolute")
                .style("background-color", "white")
                .style("box-shadow","4px 4px 10px rgba(0,0,0,0.4")
                .style("border-radius", "5px")
                .style("padding", "10px")
                .style("font-size","10px")
                .style("font-weight","bold")
            
    
            const bar = svg.append('g').selectAll('rect')
                .data(data.filter(function(d){return d.year==="2020"}))
    
                .join('rect')
                .attr("x",x(0))
                .attr('y',d=>y(d.label))
                .attr('width',d=>x(+d.sum))
                .attr('height',y.bandwidth())
                .attr("fill","lightgray")
                .on("mouseover",function(event, d){
                    d3.select(this).transition().duration(50).attr("r",5).style("fill","steelblue")
                    tooltip.transition().duration(50).style("opacity",1).text("총 "+d.sum+"건")
                    
                })
                .on("mousemove",function(event, d){
                    //const target=event.currentTarget;
                    return tooltip
                        .style("top",(event.y-10)+"px")
                        .style("left",(event.x+10)+"px")
                })
                .on("mouseleave",function(event, d){
                    d3.select(this).transition().duration(50).attr("r",5).style("fill","lightgray")
                    tooltip.transition().duration(50).style("opacity",0)
                })
    
                
            function update(selectedGroup){
                const dataFilter = data.filter(function(d){return d.year===selectedGroup})
                
                bar.data(dataFilter)
                    .transition().duration(1000)
                    .attr("x",x(0))
                    .attr('y',(d)=>y(d.label))
                    .attr('width',d=>x(+d.sum))
                    .attr('height',y.bandwidth())
                    .attr("fill","white")
            }
            
            d3.select("#selectMenu").on("change",function(event,d){
                const selectedOption =d3.select(this).property("value")
                console.log(selectedOption) //확인용
                update(selectedOption)
            })

        })
    },[]);
        return(
            <>
            <p id="barTitle">서울 5대 범죄 현황</p>
            <div id="yearSelect"><select id="selectMenu">연도 선택</select></div>
                <div id="container"></div>
            </>
        )
    
}
export default BarChart;