import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { fetchCoinDataById } from "../../Services/fetchCoinDataById";
import { CurrencyStore } from "../../CurrencyStore/CurrencyStore";

function CoinDetails() {

  const {currency}=CurrencyStore();
  const { coinId } = useParams();
  const { data: coin, isLoading, isError, error } = useQuery({
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

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-1 border-blue-500">
          <img
            src={coin?.image?.large}
            alt={coin?.name}
            className="h-52 mb-5 border-1 border-blue-500"
          />

          <h1 className="text-4xl font-bold mb-5 border-1 border-red-500">
            {coin?.name}
          </h1>

          <p className="w-full px-6 py-4 text-justify border-1 border-green-500">
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
          coin Information
        </div>
      </div>
    </>
  )
}

export default CoinDetails;