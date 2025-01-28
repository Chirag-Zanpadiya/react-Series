import { useState, useEffect } from "react";

// ye hooks basicallly particular currency ke liye api se data la kar dega
function useCurrencyInfo(fromCurrency, toCurrency) {
  // api call karna ni hai

  // by default agar api se response na aye toh empty chod do
  const [data, setData] = useState(null);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      // Fetch currency data directly from the new API
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@1/latest/v1/currencies/${fromCurrency}.json`
          );
          const json = await response.json();

          // Extract the rate from the new structure
          const rate = json[fromCurrency][toCurrency];
          if (rate) {
            setData(rate); // Update state with the relevant currency conversion rate
          } else {
            console.error(`Rate not found for: ${fromCurrency} to ${toCurrency}`);
            setData(null);
          }
        } catch (error) {
          console.error("Error fetching currency data:", error);
          setData(null);
        }
      };

      fetchData();
    }
  }, [fromCurrency, toCurrency]);

  return data;
}

export default useCurrencyInfo;
