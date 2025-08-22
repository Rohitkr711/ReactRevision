import { useQuery } from "@tanstack/react-query";
import CoinDetailInfo from "./CoinDetailInfo.jsx";
import { fetchCoinHistoryDataById } from "../../Services/fetchCoinHistoryDataById.js";
import { CurrencyStore } from "../../CurrencyStore/CurrencyStore.js";
import { useState } from "react";
import Alert from "../Alert/Alert.jsx";
import CustomPageLoader from "../PageLoader/CustomPageLoader.jsx";

function CoinDetailInfoContainer({ coinId }) {

  const { currency } = CurrencyStore()
  const [interval, setCoinDataInterval] = useState("daily");
  const [days, setDays] = useState(10);

  const { data: historicData, isLoading, isError, error } = useQuery({
    queryKey: ['coinHistoricData', coinId, interval, currency, days],
    queryFn: () => fetchCoinHistoryDataById(coinId, currency, days, interval),
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  if (isLoading) {
    return (<CustomPageLoader/>)
  }
  if (isError) {
    return (
      <>
        <Alert message="Error fetching detected" type="error" />
      </>
    )
  }

  return (
    <>
      <CoinDetailInfo
        historicData={historicData}
        setDays={setDays}
        setCoinDataInterval={setCoinDataInterval}
        days={days}
        currency={currency}
      />
    </>
  )
}

export default CoinDetailInfoContainer;