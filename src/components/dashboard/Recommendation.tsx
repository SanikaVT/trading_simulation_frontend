import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import StockCard from "./StockCard";
import { StockSymbol } from "../../types/StockSymbol";

function Recommendation(props: any) {
  return (
    <div style={{ padding: "2rem" }}>
      <h3 style={{ color: "white" }}>Recommeded Stocks</h3>
  
      <Splide
        options={{
          perPage: 5,
          autoplay:true,
          arrow: true,
          pagination: false,
          drag: "free",
          gap: "3rem",
          breakpoints:{
            623:{
              perPage:1,
              perMove:1,
            },
            935:{
              perPage:2,
              perMove:2
            },
            1247:{
              perPage:3,
              perMove:3
            },
            1250:{
              perPage:4,
              perMove:4,
            },
            120:{
              perPage:4,
              perMove:4,
            }
          }
        }}
      >
        {props.stocksData.map((stock: StockSymbol) => (
          <SplideSlide>
            <StockCard stock={stock} fun={props.fun} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Recommendation;
