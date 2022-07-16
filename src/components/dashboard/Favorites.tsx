/**
 * Author: Dharmik Hiteshkumar Soni
 * BannerID: B00867641
 * Email: dh657288@dal.ca
 */



/**
 * This component is responsible to render favorite stocks of the current user
 * This component will fetch the data from backend from the backend file
 */

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import StockCard from "./StockCard";
import { StockSymbol } from "../../types/StockSymbol";
import NoFavorite from "./NoFavorites";
function Favorites(props: any) {
  console.log(props);

  return (
    <div style={{ padding: "2rem" }}>
      <h3 style={{ color: "white" }}>Favorite Stocks</h3>
      <Splide
        options={{
          perPage: 5,
          arrow: true,
          pagination: false,
          drag: "free",
          gap: "3rem",
          autoplay: true,

          breakpoints: {
            623: {
              perPage: 1,
              perMove: 1,
            },
            935: {
              perPage: 2,
              perMove: 2,
            },
            1247: {
              perPage: 3,
              perMove: 3,
            },
            1250: {
              perPage: 4,
              perMove: 4,
            },
            1260: {
              perPage: 4,
              perMove: 4,
            },
          },
        }}
      >
        
       {/* Here the splide component is responsible for auto sliding */}
         
        {props.stocksData.length > 0 ? (
          props.stocksData.map((stock: StockSymbol) => (
            <SplideSlide>
              <StockCard
                stock={stock}
                fun={props.fun}
                delFav={props.delFavorite}
                fav={true}
              />
            </SplideSlide>
          ))
        ) : (
          <NoFavorite />
        )}
      </Splide>
    </div>
  );
}

export default Favorites;
