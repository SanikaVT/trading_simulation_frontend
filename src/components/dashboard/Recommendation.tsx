import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import StockCard from "./StockCard";
import { StockSymbol } from "../../types/StockSymbol";
function Recommendation(props: any) {
  console.log(props.stocksData);
  return (
    <div style={{ padding: "2rem" }}>
      <h3 style={{ color: "black" }}>Recommeded Stocks</h3>

      <Splide
        options={{
          perPage: 5,
          arrow: "true",
          pagination: false,
          drag: "free",
          gap: "3rem",
        }}
      >
        {props.stocksData.map((stock: StockSymbol) => (
          <SplideSlide>
            <StockCard stock={stock} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Recommendation;
