/**
 * Author: Sampada Thakkar
 * BannerID: B00893022
 * Email: sm223034@dal.ca
 */
import React, { useEffect, useState } from "react";
import {useLocation } from "react-router-dom";
import * as d3 from "d3";
import "./compare.css";
import BuyTradeModal from "../orders/BuyTradeModal";
import SellTradeModal from "../orders/SellTradeModal";
import axios from "axios";
function LineChart(props) {
   const location = useLocation();
   var data;
  const { width, height } = props;
  const stockData = {
    symbol: "APPL",
    currency: "USD",
    price: 261.74,
    previousClose: 259.45,
    open: 261.07,
    high: 263.31,
    low: 260.68,
  };
  const [openBuyModal, setOpenBuyModal] = useState(false);
  const [openSellModal, setOpenSellModal] = useState(false);

  const openBuyTradeModal = (event) => {
    setOpenBuyModal(true);
  };

  const openSellTradeModal = (event) => {
    setOpenSellModal(true);
  };
  var symbol = location.state.stock.symbol;
  useEffect(() => {
   //Getting the initial data
   axios
   .get(`/api/analytics`, {
      params: { Symbol: symbol },
    })
   .then(function(response) {
         data = response.data.analytics;
         drawChart();
   });
  }, []);
      function drawChart() {
         var clicked;
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
             .attr('font-size','15px')
             .attr('font-weight',"bold")
             .text(location.state.stock.name)
          
          svg.append('text')
             .attr('x',15)
             .attr('y',70)
             .attr('fill','black')
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
             .attr('font-size','15px')
             .attr('font-weight',"bold")
             .text('148.84 USD')
          
          svg.append('text')
             .attr('x',15)
             .attr('y',120)
             .attr('fill','red')
             .attr('font-size','14px')
             .attr('font-weight',"bold")
             .text('-80(-0.53%)')
        
    const allGroup = ["Compare","AAPL","AMD","BMWYY","CSCO","INFY","MSFT","QCOM","SBUX","TSLA"]
    d3.select("#selectButton")
      .selectAll('myOptions')
      .data(allGroup)
      .enter()
      .append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) // corresponding value returned by the button  

    var selectedOption;
    selectedOption = d3.select("#selectButton").property("value");
    window.addEventListener('resize', makegraph1(selectedOption));
    clicked = "yearly"
    d3.select("#selectButton").on("change", function(event,d){
        // recover the option that has been chosen
        console.log(clicked)
        selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
        d3.selectAll("#graph1").remove();
        d3.selectAll("#graph2").remove();
        if(clicked === "yearly"){window.addEventListener('resize', makegraph1(selectedOption));}
        else{window.addEventListener('resize', makegraph2(selectedOption));}
        
    })
       function makegraph1(selectedOption){
         console.log(selectedOption)
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
            var x;
            var y;
            axios
            .get(`/api/analytics`, {
               params: { Symbol: symbol },
             })
            .then(function(response) {
                  data = response.data.analytics;
            });
             var parseDate = d3.timeParse("%d-%m-%Y");
             data.forEach(d=>{
                d.Date = parseDate(d.Date);
                d.Percentage = +d.Percentage;
            });
            x = d3.scaleTime().domain(d3.extent(data, function(d){
                return d.Date
                })).range([0, width-100]);
            y = d3.scaleLinear().domain(d3.extent(data, function(d){
               return d.Percentage
               })).range([height-200, 0]);
          
            var valueline = d3.line()
            .x( d=>x(d.Date) )
            .y( d=>y(d.Percentage) )
    
          g.append('path')
             .datum(data)
             .attr("id","graph1")
             .attr("class","line")
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
    
        if(selectedOption !== "Compare"){
         axios
         .get(`/api/analytics`, {
               params: { Symbol: selectedOption },
            })
            .then(function(response) {
               data = response.data.analytics;
               var parseDate = d3.timeParse("%d-%m-%Y");
            data.forEach(d=>{
               d.Date = parseDate(d.Date);
               d.Percentage = +d.Percentage;
           });
           x = d3.scaleTime().domain(d3.extent(data, function(d){
            return d.Date
            })).range([0, width-100]);
        y = d3.scaleLinear().domain(d3.extent(data, function(d){
           return d.Percentage
           })).range([height-200, 0]);
           var valueline1 = d3.line()
           .x( d=>x(d.Date) )
           .y( d=>y(d.Percentage) )
   
         g.append('path')
            .datum(data)
            .attr("id","graph1")
            .attr("class","line2")
            .attr('d',valueline1);
          
            });
         }
            
        }
       //Handling half year analytics graph
        function makegraph2(selectedOption){
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
              var x;
              var y;
              axios
              .get(`/api/halfyearlyanalytics`, {
               params: { Symbol: symbol },
               })
            .then(function(response) {
                 data = response.data.analytics;
            });
                
                var parseDate = d3.timeParse("%d-%m-%Y");
                data.forEach(d=>{
                   d.Date = parseDate(d.Date);
                   d.Percentage = +d.Percentage;
               });
       
               x = d3.scaleTime().domain(d3.extent(data, function(d){
                return d.Date
             })).range([0, width-100]);
             y = d3.scaleLinear().domain(d3.extent(data, function(d){
               return d.Percentage
            })).range([height-200, 0]);
             
               var valueline = d3.line()
               .x( d=>x(d.Date) )
               .y( d=>y(d.Percentage) )
       
             g.append('path')
                .datum(data)
                .attr("class","line")
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
            // Checking which stock to compare with
              if(selectedOption !== "Compare"){
               axios
                  .get(`/api/halfyearlyanalytics`, {
                   params: { Symbol: selectedOption },
                })
               .then(function(response) {
                     data = response.data.analytics;
                     var parseDate = d3.timeParse("%d-%m-%Y");
                    data.forEach(d=>{
                       d.Date = parseDate(d.Date);
                       d.Percentage = +d.Percentage;
                   });
                   x = d3.scaleTime().domain(d3.extent(data, function(d){
                     return d.Date
                     })).range([0, width-100]);
                 y = d3.scaleLinear().domain(d3.extent(data, function(d){
                    return d.Percentage
                    })).range([height-200, 0]);
                    
                   var valueline1 = d3.line()
                   .x( d=>x(d.Date) )
                   .y( d=>y(d.Percentage) )
           
                 g.append('path')
                    .datum(data)
                    .attr("id","graph2")
                    .attr("class","line2")
                    .attr('d',valueline1);
                  
               });                    
              }
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
                 svg.attr('viewBox', `0 0 ${width+100} ${height+200}`)
                 .attr('preserveAspectRatio', 'xMinYMid')
                 .call(resize);
                  
                 d3.select(window).on('resize.' + container.attr('id'), resize);
       
                 function resize() {
                     const targetWidth = parseInt(container.style('width'));
                     svg.attr('width', targetWidth-20);
                     svg.attr('height', Math.round(targetWidth / aspect)-20);
                 }
             }
    
          svg.append('rect')
             .attr("width", 47)
             .attr("height", 28)
             .attr("fill", "rgb(76, 175, 80)")
             .attr("x", 15)
             .attr("y", 130)
             .attr("cursor", "pointer")
             .on('click', function(){openBuyTradeModal()});
       
          svg.append('text')
             .attr('x',27)
             .attr('y',147)
             .attr('fill','white')
             .attr('font-family','sans-serif')
             .attr('font-size','12px')
             .attr('font-weight','bold')
             .attr("cursor", "pointer")
             .text('Buy')
             .on('click', function(){openBuyTradeModal()})

             svg.append('rect')
             .attr("width", 47)
             .attr("height", 28)
             .attr("fill", "rgb(245, 87, 35)")
             .attr("x", 67)
             .attr("y", 130)
             .attr("cursor", "pointer")
             .on('click', function(){openSellTradeModal()});
       
          svg.append('text')
             .attr('x',80)
             .attr('y',147)
             .attr('fill','white')
             .attr('font-family','sans-serif')
             .attr('font-size','12px')
             .attr('font-weight','bold')
             .attr("cursor", "pointer")
             .text('Sell')
             .on('click', function(){openSellTradeModal()});
          
          var rect1 = svg.append('rect')
             .attr("width", 305)
             .attr("height", 25)
             .attr("class", "button")
             .attr("x", 175)
             .attr("y", 430)
             .attr("id","rect1")
             .attr("cursor", "pointer")
    
             rect1.on("click", function(){
               clicked = "yearly"
                d3.selectAll("#graph2").remove()
                if(d3.selectAll("#rect2").attr("fill") === "rgb(9, 141, 77)"){
                   d3.selectAll("#rect2").attr("fill", "black")
                }
                axios
                .get(`/api/analytics`, {
                   params: { Symbol: symbol },
                 })
                .then(function(response) {
                      data = response.data.analytics;
                      window.addEventListener('resize', makegraph1(selectedOption));
                });
                  
                d3.selectAll("#rect1").attr("fill", "rgb(9, 141, 77)")
                d3.selectAll("#text1").attr("fill", "white")
             });
             rect1.on("mouseover", function(){
                if(d3.selectAll("#rect1").attr('fill') !== "rgb(9, 141, 77)"){
                d3.select(this).attr("fill", "grey");
                d3.selectAll("#text1").attr("fill", "black")
                }
             })
             rect1.on("mouseout", function(){
                if(d3.selectAll("#rect1").attr('fill') !== "rgb(9, 141, 77)"){
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
               clicked = "yearly"
                d3.selectAll("#graph2").remove()
                if(d3.selectAll("#rect2").attr("fill") === "rgb(9, 141, 77)"){
                   d3.selectAll("#rect2").attr("fill", "black")
                }
                axios
                .get(`/api/analytics`, {
                   params: { Symbol: symbol },
                 })
                .then(function(response) {
                      data = response.data.analytics;
                      window.addEventListener('resize', makegraph1(selectedOption));
                });
                //d3.select(window).on('resize', );
                d3.selectAll("#rect1").attr("fill", "rgb(9, 141, 77)")
                d3.selectAll("#text1").attr("fill", "white")
             });
             text1.on("mouseover", function(){
                d3.selectAll("#rect1").attr("fill", "grey")
                d3.select(this).attr("fill", "black");
             })
             text1.on("mouseout", function(){
                if(d3.selectAll("#rect1").attr('fill') !== "rgb(9, 141, 77)"){
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
               clicked = "halfyearly"
                d3.selectAll("#graph1").remove()
                if(d3.selectAll("#rect1").attr("fill") === "rgb(9, 141, 77)"){
                   d3.selectAll("#rect1").attr("fill", "black")
                }
                axios
              .get(`/api/halfyearlyanalytics`, {
               params: { Symbol: symbol },
               })
            .then(function(response) {
                 data = response.data.analytics;
                 window.addEventListener('resize', makegraph2(selectedOption));
            });
                
                d3.selectAll("#rect2").attr("fill", "rgb(9, 141, 77)")
                d3.selectAll("#text2").attr("fill", "white")
             });
             rect2.on("mouseover", function(){
                if(d3.selectAll("#rect2").attr('fill') !== "rgb(9, 141, 77)"){
                d3.select(this).attr("fill", "grey");
                d3.selectAll("#text2").attr("fill", "black")
                }
             })
             rect2.on("mouseout", function(){
                if(d3.selectAll("#rect2").attr('fill') !== "rgb(9, 141, 77)"){
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
               clicked = "halfyearly"
                d3.selectAll("#graph1").remove()
                if(d3.selectAll("#rect1").attr("fill") === "rgb(9, 141, 77)"){
                   d3.selectAll("#rect1").attr("fill", "black")
                }
                axios
              .get(`/api/halfyearlyanalytics`, {
               params: { Symbol: symbol },
               })
            .then(function(response) {
                 data = response.data.analytics;
                 window.addEventListener('resize', makegraph2(selectedOption));
            });
                d3.selectAll("#rect2").attr("fill", "rgb(9, 141, 77)")
                d3.selectAll("#text2").attr("fill", "white")
             });
             text2.on("mouseover", function(){
                d3.selectAll("#rect2").attr("fill", "grey")
                d3.select(this).attr("fill", "black");
             })
             text2.on("mouseout", function(){
                if(d3.selectAll("#rect2").attr('fill') !== "rgb(9, 141, 77)"){
                   d3.select(this).attr("fill", "white");
                   d3.selectAll("#rect2").attr("fill", "black")
                }
                
             })
      

    svg
      .append("rect")
      .attr("width", 47)
      .attr("height", 28)
      .attr("fill", "rgb(76, 175, 80)")
      .attr("x", 15)
      .attr("y", 130)
      .attr("cursor", "pointer")
      .on("click", function() {
        openBuyTradeModal();
      });

    svg
      .append("text")
      .attr("x", 27)
      .attr("y", 147)
      .attr("fill", "white")
      .attr("font-family", "sans-serif")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .attr("cursor", "pointer")
      .text("Buy")
      .on("click", function() {
        openBuyTradeModal();
      });

    svg
      .append("rect")
      .attr("width", 47)
      .attr("height", 28)
      .attr("fill", "rgb(245, 87, 35)")
      .attr("x", 67)
      .attr("y", 130)
      .attr("cursor", "pointer")
      .on("click", function() {
        openSellTradeModal();
      });

    svg
      .append("text")
      .attr("x", 80)
      .attr("y", 147)
      .attr("fill", "white")
      .attr("font-family", "sans-serif")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .attr("cursor", "pointer")
      .text("Sell")
      .on("click", function() {
        openSellTradeModal();
      });
      
    }

   
//Calling Buy Trade and Sell Trade modal
    
  return (
    <>
      <BuyTradeModal
        openModal={openBuyModal}
        setOpenModal={setOpenBuyModal}
        stockData={stockData}
      />
      <SellTradeModal
        openModal={openSellModal}
        setOpenModal={setOpenSellModal}
        stockData={stockData}
      />
      <select id="selectButton" translate="80"></select>
      <div id="container"></div>
    </>
  );
  }
export default LineChart;
