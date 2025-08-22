import Alert from "../Alert/Alert";
import {Line} from "react-chartjs-2";
import Chart from "chart.js/auto";
import { ArcElement } from "chart.js";

function CoinDetailInfo({historicData,setDays,setCoinDataInterval, days, currency}) {

  Chart.register(ArcElement);

  if(!historicData){
    return (<Alert message="No data available" type="info"/>)
  }

  return (
    <div className="flex flex-col items-center justify-center mt-6 p-6 w-full md:w-3/4">

    <Line 
      data={{
        labels:historicData.prices.map(coinPrice => {
            let date = new Date(coinPrice[0]);
            let time = date.getHours()>12 ? `${date.getHours() - 12}:${date.getMinutes()} PM` : `${date.getHours()}:${date.getMinutes()} AM` ;

            return days===1 ? time : date.toLocaleDateString();
        }),
        datasets:[
          {
            label:`Price (past ${days} days) in ${currency.toUpperCase()}`,
            data: historicData.prices.map(coinPrice=>coinPrice[1]),
          },
        ],
      }}
      >
    </Line>

    </div>
  )
}

export default CoinDetailInfo;