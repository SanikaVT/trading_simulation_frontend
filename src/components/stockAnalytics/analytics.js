
import React, { useEffect } from 'react';
import * as d3 from 'd3';
import data from './AAPL_Yearly_HistoricalData.csv';
import data1 from './APPL_half_yearly_HistoricalData.csv';
import "./analytics.css";


   function LineChart(props) {
      const { width, height } = props;
   
      useEffect(() => {
         document.body.style.overflow = "hidden";
        drawChart();   
      });
      function drawChart() {
      
        var svg = d3.select("#container")
                  .append("svg")
                  .attr("width", width)
                  .attr("height", height)
                  .attr("transform","translate(130,-50)")
                  
          svg.append('rect')
             .attr("width" , 620)
             .attr("height", 340)
             .attr("fill", "white")
             .attr("x", 170)
             .attr("y", 80)
             .attr("stroke","lightgrey")
    
          svg.append('rect')
             .attr("width", 153)
             .attr("height", 400)
             .attr("fill", "white")
             .attr("x", 10)
             .attr("y", 80)
             .attr("stroke","lightgrey")
    
          svg.append('text')
             .attr('x',15)
             .attr('y',55)
             .attr('fill','black')
             .attr('font-family','Times New Roman')
             .attr('font-size','15px')
             .attr('font-weight',"bold")
             .text('Apple Inc. Common')
          
          svg.append('text')
             .attr('x',15)
             .attr('y',70)
             .attr('fill','black')
             .attr('font-family','Calibri')
             .attr('font-size','12px')
             .text('Sector: Information Technology')
    
          svg.append("line")
             .attr("x1", 15)
             .attr("x2", 789)
             .attr("y1", 75)
             .attr("y2", 75)
             .attr("stroke", "black")
    
          svg.append('text')
             .attr('x',15)
             .attr('y',100)
             .attr('fill','black')
             .attr('font-family','Times New Roman')
             .attr('font-size','15px')
             .attr('font-weight',"bold")
             .text('148.84$')
          
          svg.append('text')
             .attr('x',15)
             .attr('y',120)
             .attr('fill','red')
             .attr('font-family','Times New Roman')
             .attr('font-size','14px')
             .attr('font-weight',"bold")
             .text('-80(-0.53%)')
         
       function makegraph1(){
          var margin = {top: 20, right: 20, bottom: 50, left: 100},
               width = 800 - margin.left - margin.right,
               height = 550 - margin.top - margin.bottom,
               g = svg.append("g").attr("transform", "translate(" + 200 + "," + 95+ ")"); 
          
               svg.attr("width", width + margin.left + margin.right)
               .attr("height", height + margin.top + margin.bottom)
               .call(responsivefy)
               .append("g")
               .attr("transform",
                     "translate(" + margin.left + "," + margin.top + ")");
    
           
           d3.csv(data).then(function(data) {
             var parseDate = d3.timeParse("%d-%m-%Y");
             data.forEach(d=>{
                d.Date = parseDate(d.Date);
                d.Percentage = +d.Percentage;
            });
    
            var x = d3.scaleTime().domain(d3.extent(data, function(d){
             return d.Date
          })).range([0, width-100]);
          var y = d3.scaleLinear().domain([0, 200]).range([height-200, 0]);
          
            var valueline = d3.area()
            .x( d=>x(d.Date) )
            .y0(height-200)	
            .y1( d=>y(d.Percentage) )
          
            svg.append("linearGradient")				
            .attr("id", "area-gradient")			
            .attr("gradientUnits", "userSpaceOnUse")	
            .attr("x1", 0).attr("y1", y(0))			
            .attr("x2", 0).attr("y2", y(1000))		
          .selectAll("stop")						
            .data([								
              {offset: "0%", color: "white"},		
              {offset: "10%", color: "rgb(9, 141, 77)"},	
              {offset: "45%", color: "rgb(9, 141, 77)"},		
              {offset: "55%", color: "rgb(9, 141, 77)"},		
              {offset: "60%", color: "rgb(9, 141, 77)"},	
              {offset: "100%", color: "rgb(9, 141, 77)"}	
            ])					
          .enter().append("stop")			
            .attr("offset", function(d) { return d.offset; })	
            .attr("stop-color", function(d) { return d.color; });
    
          var first = g.append('path')
             .datum(data)
             .attr("class","area")
             .attr("id","graph1")
             .attr('d',valueline);
           
          var xAxis = d3.axisBottom(x).tickFormat(d3.timeFormat("%Y")).tickSize(0);
             // Add the x Axis
          var putAxis = g.append("g")
             .attr("class","axisc")
             .attr("transform", "translate(0,280)")
             .attr("id","graph1")
             .call(xAxis)
             
             putAxis.selectAll("text")	
                .style("text-anchor", "end")
                .attr("dx", "-.8em")
                .attr("dy", ".15em")
                .attr("transform", function(d) {
                    return "rotate(-90)" 
                    })
             putAxis.select(".domain").remove()
           
             // Add the y Axis
          var gYAxis= d3.axisLeft()
             .scale(y)
             .tickSize(0)
             .tickFormat(function(d){
                return "$" + d;
             });
          
             g.append("g").attr("class","axisc").attr("id","graph1").call(gYAxis).select(".domain").remove();
    
           });
          }
          //d3.select(window).on('resize', makegraph1());
          makegraph1();
          function makegraph2(){
             var margin = {top: 20, right: 20, bottom: 50, left: 100},
                  width = 800 - margin.left - margin.right,
                  height = 550 - margin.top - margin.bottom,
                  g = svg.append("g").attr("transform", "translate(" + 200 + "," + 125+ ")"); 
             
                  svg.attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                  .call(responsivefy)
                .append("g")
                  .attr("transform",
                        "translate(" + margin.left + "," + margin.top + ")");
              
              d3.csv(data1).then(function(data) {
                  
                var parseDate = d3.timeParse("%d-%m-%Y");
                data.forEach(d=>{
                   d.Date = parseDate(d.Date);
                   d.Percentage = +d.Percentage;
                   console.log(d.Percentage)
               });
       
               var x = d3.scaleTime().domain(d3.extent(data, function(d){
                return d.Date
             })).range([0, width-100]);
             var y = d3.scaleLinear().domain([0, 200]).range([height-200, 0]);
             
               var valueline = d3.area()
               .x( d=>x(d.Date) )
               .y0(height-200)	
               .y1( d=>y(d.Percentage) )
             
               svg.append("linearGradient")				
               .attr("id", "area-gradient")			
               .attr("gradientUnits", "userSpaceOnUse")	
               .attr("x1", 0).attr("y1", y(0))			
               .attr("x2", 0).attr("y2", y(1000))		
             .selectAll("stop")						
               .data([								
                 {offset: "0%", color: "white"},		
                 {offset: "10%", color: "rgb(9, 141, 77)"},	
                 {offset: "45%", color: "rgb(9, 141, 77)"},		
                 {offset: "55%", color: "rgb(9, 141, 77)"},		
                 {offset: "60%", color: "rgb(9, 141, 77)"},	
                 {offset: "100%", color: "rgb(9, 141, 77)"}	
               ])					
             .enter().append("stop")			
               .attr("offset", function(d) { return d.offset; })	
               .attr("stop-color", function(d) { return d.color; });
       
             var second = g.append('path')
                .datum(data)
                .attr("class","area")
                .attr("id","line1")
                .attr('d',valueline)
                .attr('id',"graph2");
              
             var xAxis = d3.axisBottom(x).tickFormat(d3.timeFormat("%b %Y")).tickSize(0);
                // Add the x Axis
             var putAxis = g.append("g")
                .attr("class","axisc")
                .attr("transform", "translate(0,288)")
                .attr("id","graph2")
                .call(xAxis)
                
                putAxis.selectAll("text")	
                   .style("text-anchor", "end")
                   .attr("dx", "-.8em")
                   .attr("dy", ".15em")
                   .attr("transform", function(d) {
                       return "rotate(0)" 
                       })
                putAxis.select(".domain").remove()
              
                // Add the y Axis
             var gYAxis= d3.axisLeft()
                .scale(y)
                .tickSize(0)
                .tickFormat(function(d){
                   return "$" + d;
                });
             
                g.append("g").attr("class","axisc").attr("id","graph2").call(gYAxis).select(".domain").remove();
       
              });
             }
             function responsivefy(svg) {
                 
                 // Container is the DOM element, svg is appended.
                 // Then we measure the container and find its
                 // aspect ratio.
                 const container = d3.select(svg.node().parentNode),
                     width = parseInt(svg.style('width'), 10),
                     height = parseInt(svg.style('height'), 10),
                     aspect = width / height;
                      
                 // Add viewBox attribute to set the value to initial size
                 // add preserveAspectRatio attribute to specify how to scale
                 // and call resize so that svg resizes on page load
                 svg.attr('viewBox', `0 0 ${width+100} ${height+200}`).
                 attr('preserveAspectRatio', 'xMinYMid').
                 call(resize);
                  
                 d3.select(window).on('resize.' + container.attr('id'), resize);
       
                 function resize() {
                     const targetWidth = parseInt(container.style('width'));
                     svg.attr('width', targetWidth-20);
                     svg.attr('height', Math.round(targetWidth / aspect)-20);
                 }
             }
    
          svg.append('rect')
             .attr("width", 75)
             .attr("height", 25)
             .attr("fill", "black")
             .attr("x", 15)
             .attr("y", 130)
             .attr("cursor", "pointer")
       
          svg.append('text')
             .attr('x',33)
             .attr('y',145)
             .attr('fill','white')
             .attr('font-family','sans-serif')
             .attr('font-size','12px')
             .attr('font-weight','bold')
             .attr("cursor", "pointer")
             .text('Trade')
          
          var rect1 = svg.append('rect')
             .attr("width", 305)
             .attr("height", 25)
             .attr("fill", "black")
             .attr("x", 175)
             .attr("y", 430)
             .attr("id","rect1")
             .attr("cursor", "pointer")
    
             rect1.on("click", function(){
                d3.selectAll("#graph2").remove()
                if(d3.selectAll("#rect2").attr("fill") == "rgb(9, 141, 77)"){
                   d3.selectAll("#rect2").attr("fill", "black")
                }
                  window.addEventListener('resize', makegraph1());
                //d3.select(window).on('resize', makegraph1());
                d3.selectAll("#rect1").attr("fill", "rgb(9, 141, 77)")
                d3.selectAll("#text1").attr("fill", "white")
             });
             rect1.on("mouseover", function(){
                if(d3.selectAll("#rect1").attr('fill') != "rgb(9, 141, 77)"){
                d3.select(this).attr("fill", "grey");
                d3.selectAll("#text1").attr("fill", "black")
                }
             })
             rect1.on("mouseout", function(){
                if(d3.selectAll("#rect1").attr('fill') != "rgb(9, 141, 77)"){
                   d3.select("#text1").attr("fill", "white");
                   d3.selectAll("#rect1").attr("fill", "black")
                }
             })
             
          
          var text1 = svg.append('text')
             .attr('x',303)
             .attr('y',445)
             .attr('fill','white')
             .attr('font-family','sans-serif')
             .attr('font-size','12px')
             .attr('font-weight','bold')
             .attr("cursor", "pointer")
             .attr("id","text1")
             .text('Yearly')
             
             text1.on("click", function(){
                d3.selectAll("#graph2").remove()
                if(d3.selectAll("#rect2").attr("fill") == "rgb(9, 141, 77)"){
                   d3.selectAll("#rect2").attr("fill", "black")
                }
                window.addEventListener('resize', makegraph1());
                //d3.select(window).on('resize', );
                d3.selectAll("#rect1").attr("fill", "rgb(9, 141, 77)")
                d3.selectAll("#text1").attr("fill", "white")
             });
             text1.on("mouseover", function(){
                d3.selectAll("#rect1").attr("fill", "grey")
                d3.select(this).attr("fill", "black");
             })
             text1.on("mouseout", function(){
                console.log(d3.selectAll("#rect1").attr('fill'))
                if(d3.selectAll("#rect1").attr('fill') != "rgb(9, 141, 77)"){
                   d3.select(this).attr("fill", "white");
                   d3.selectAll("#rect1").attr("fill", "black")
                }
                
             })
    
             var rect2 = svg.append('rect')
             .attr("width",305)
             .attr("height", 25)
             .attr("fill", "black")
             .attr("x", 482)
             .attr("y", 430)
             .attr("id","rect2")
             .attr("cursor", "pointer")
    
             rect2.on("click", function(){
                d3.selectAll("#graph1").remove()
                if(d3.selectAll("#rect1").attr("fill") == "rgb(9, 141, 77)"){
                   d3.selectAll("#rect1").attr("fill", "black")
                }
                makegraph2();
                d3.selectAll("#rect2").attr("fill", "rgb(9, 141, 77)")
                d3.selectAll("#text2").attr("fill", "white")
             });
             rect2.on("mouseover", function(){
                if(d3.selectAll("#rect2").attr('fill') != "rgb(9, 141, 77)"){
                d3.select(this).attr("fill", "grey");
                d3.selectAll("#text2").attr("fill", "black")
                }
             })
             rect2.on("mouseout", function(){
                if(d3.selectAll("#rect2").attr('fill') != "rgb(9, 141, 77)"){
                   d3.select("#text2").attr("fill", "white");
                   d3.selectAll("#rect2").attr("fill", "black")
                }
             })
             
          
          var text2 = svg.append('text')
             .attr('x',597)
             .attr('y',445)
             .attr('fill','white')
             .attr('font-family','sans-serif')
             .attr('font-size','12px')
             .attr('font-weight','bold')
             .attr("cursor", "pointer")
             .attr("id","text2")
             .text('Half Yearly')
             
             text2.on("click", function(){
                d3.selectAll("#graph1").remove()
                if(d3.selectAll("#rect1").attr("fill") == "rgb(9, 141, 77)"){
                   d3.selectAll("#rect1").attr("fill", "black")
                }
                makegraph2();
                d3.selectAll("#rect2").attr("fill", "rgb(9, 141, 77)")
                d3.selectAll("#text2").attr("fill", "white")
             });
             text2.on("mouseover", function(){
                d3.selectAll("#rect2").attr("fill", "grey")
                d3.select(this).attr("fill", "black");
             })
             text2.on("mouseout", function(){
                if(d3.selectAll("#rect2").attr('fill') != "rgb(9, 141, 77)"){
                   d3.select(this).attr("fill", "white");
                   d3.selectAll("#rect2").attr("fill", "black")
                }
                
             })
      }
      
      return <div id="container" />;
    
}


export default LineChart;