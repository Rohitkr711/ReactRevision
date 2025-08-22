import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { fetchCoinDataById } from "../../Services/fetchCoinDataById";
import { CurrencyStore } from "../../CurrencyStore/CurrencyStore";
import CustomPageLoader from "../../Components/PageLoader/CustomPageLoader";
import coinInfoContainer from "../../Components/CoinDetailInfo/CoinDetailInfoContainer";
import CoinDetailInfoContainer from "../../Components/CoinDetailInfo/CoinDetailInfoContainer";

function CoinDetails() {
  console.log("CoinDetails Mounted");
  

  const {currency}=CurrencyStore();
  const { coinId } = useParams();
  const { data: coin, isLoading, isError, error,status } = useQuery({
    queryKey: ['coin', coinId,currency],
    queryFn: () => fetchCoinDataById(coinId,currency),
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  })

  if (isError) {

    return (<div className="text-white">Error: {error.message}</div>)
  }

  if (isLoading) {
    return (<div>Data Loading...</div>)
  }
  if(status=='pending'){
    return (<div>You're offline</div>)
  }
  if(status=='paused'){
    return (<div>data fetching paused</div>)
  }

  return (
    <>
      {coin && (<div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-r-1">
          <img
            src={coin?.image?.large}
            alt={coin?.name}
            className="h-52 mb-5"
          />

          <h1 className="text-4xl font-bold mb-5">
            {coin?.name}
          </h1>

          <p className="w-full px-6 py-4 text-justify">
            {coin?.description?.en}
          </p>


          <div className="w-full flex flex-col md:flex-row md:justify-around">
            <div className="flex items-center mb-4 md:mb-0">
              <h2
                className="text-xl font-bold">
                Rank
              </h2>
              <span
                className="ml-3 text-xl">
                {coin?.market_cap_rank}
              </span>
            </div>

            <div className="flex items-center mb-4 md:mb-0">
              <h2 className="text-xl text-yellow-400 font-bold"> Current Price</h2>
              <span className="ml-3 text-xl">
                {coin?.market_data?.current_price?.[currency]}
                -{currency=='inr'?'INR':"USD"}
              </span>
            </div>
          </div>

        </div>

        <div className="md:w-2/3 w-full p-6">
          <CoinDetailInfoContainer coinId={coinId}/>
        </div>
      </div>)
      }
    </>
  )
}

export default CoinDetails;