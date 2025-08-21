import { useState } from "react";
import { fetchCoinsData } from "../../Services/fetchCoinsData.js";
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useContext } from "react";
// import { CurrencyContext } from "../../Context/CurrencyContext.js";
import { CurrencyStore } from "../../CurrencyStore/CurrencyStore.js";
import { useNavigate } from "react-router";
import { BulletList } from 'react-content-loader';

function Coindata() {

  const navigate = useNavigate();
    
  function handleCoinDetail(coinId){
      navigate(`/details/${coinId}`)
  }

  // const{currency}=useContext(CurrencyContext);
  const {currency}=CurrencyStore();
  
  const [pageNo, setPageNo] = useState(1);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['coins', pageNo, currency],
    queryFn: () => fetchCoinsData(pageNo, currency),
    // retry: 2,
    // retryDelay: 1000,
    // placeholderData:keepPreviousData
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  if (isLoading) {

    return (<BulletList />)
  }
  if (isError) {
    return <div className="text-white">Error: {error.message}</div>
  }

  return (
    <>
      <div className="my-5 flex flex-col items-center justify-center gap-5 w-[90vw] mx-auto h-full">
        <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center">
          <div className="basis-[35%]">Coin</div>
          <div className="basis-[25%]">Price- {currency}</div>
          <div className="basis-[20%]">24h change</div>
          <div className="basis-[20%]">Market Cap</div>
        </div>

        <div className="flex flex-col w-[90vw] mx-auto">
          {isLoading && <div>Loading...</div>}
          {data && data.map((coin) => {
            return (
              <div onClick={()=>handleCoinDetail(coin.id)} key={coin.id} className=" w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between hover:bg-gray-800 cursor-pointer">
                <div className="flex items-center justify-start gap-3 basis-[35%]">
                  <div className="w-[5rem] h-[5rem]">
                    <img src={coin.image} className="w-full h-full" alt={coin.name} loading="lazy" />
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