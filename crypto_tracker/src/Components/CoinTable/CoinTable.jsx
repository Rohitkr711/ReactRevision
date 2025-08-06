import { useState } from "react";
import { fetchCoinData } from "../../Services/fetchCoinData.js";
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useContext } from "react";
import { CurrencyContext } from "../../Context/CurrencyContext.js";

function Coindata() {

  const{currency}=useContext(CurrencyContext);
  
  const [pageNo, setPageNo] = useState(1);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['coins', pageNo, currency],
    queryFn: () => fetchCoinData(pageNo, currency),
    // retry: 2,
    // retryDelay: 1000,
    // placeholderData:keepPreviousData
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  if (isLoading) {

    return <div>Loading...</div>
  }
  if (isError) {
    return <div className="text-white">Error: {error.message}</div>
  }

  return (
    <>
      <div className="my-5 flex flex-col items-center justify-center gap-5 w-[90vw] mx-auto h-full">
        <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center">
          <div className="basis-[35%] bg-amber-700">Coin</div>
          <div className="basis-[25%] bg-amber-50">Price- {currency}</div>
          <div className="basis-[20%] bg-blue-600">24h change</div>
          <div className="basis-[20%] bg-emerald-500">Market Cap</div>
        </div>

        <div className="flex flex-col w-[90vw] mx-auto border-4 border-amber-700">
          {isLoading && <div>Loading...</div>}
          {data && data.map((coin) => {
            return (
              <div key={coin.id} className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between border-2 border-white">
                <div className="flex items-center justify-start gap-3 basis-[35%]">
                  <div className="w-[5rem] h-[5rem]">
                    <img src={coin.image} className="w-full h-full" alt="" />
                  </div>

                  <div className="flex flex-col">
                    <div className="text-3xl">{coin.name}</div>
                    <div className="text-xl">{coin.symbol}</div>
                  </div>

                </div>

                <div className="basis-[25%]">{coin.high_24h}</div>
                <div className="basis-[20%]">{coin.price_change_24h}</div>
                <div className="basis-[20%]">{coin.current_price}</div>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center items-center gap-4">
          <button
            disabled={pageNo===1}
            onClick={()=> setPageNo(pageNo-1)}
            className="btn btn-primary btn-wide text-white text-2xl"
          >
            Prev
          </button>
          <button
            onClick={()=> setPageNo(pageNo + 1)}
            className="btn btn-secondary btn-wide text-white text-2xl"
          >
            Next
          </button>
          </div>
      </div>
    </>
  )
}

export default Coindata;