// import { useState } from "react";
// import useCurrencyInfo from "./hooks/useCurrencyInfo";
// import { InputBox } from "./components";

// function App() {
//   const [amount, setAmount] = useState(0);
//   const [from, setFrom] = useState("usd");
//   const [to, setTo] = useState("inr");
//   const [convertedAmount, setConvertedAmount] = useState(0);

//   const currencyInfo = useCurrencyInfo(from);

//   const options = Object.keys(currencyInfo);

//   const swap = () => {
//     setFrom(to);
//     setTo(from);
//     setConvertedAmount(amount);
//     setAmount(convertedAmount);
//   };

//   const convert = () => {
//     setConvertedAmount(amount * currencyInfo[to]);
//   };

//   return (
//     <div
//       className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//       style={{
//         backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
//       }}
//     >
//       <div className="w-full">
//         <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               convert();
//             }}
//           >
//             <div className="w-full mb-1">
//               <InputBox
//                 label="From"
//                 amount={amount}
//                 currencyOptions={options}
//                 onCurrencyChange={(currency) => setAmount(amount)}
//                 selectCurrency={from}
//                 onAmountChange={(amount) => setAmount(amount)}
//               />
//             </div>
//             <div className="relative w-full h-0.5">
//               <button
//                 type="button"
//                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                 onClick={swap}
//               >
//                 swap
//               </button>
//             </div>
//             <div className="w-full mt-1 mb-4">
//               <InputBox
//                 label="To"
//                 amount={convertedAmount}
//                 currencyOptions={options}
//                 onCurrencyChange={(currency) => setTo(currency)}
//                 selectCurrency={from}
//                 amountDisable
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
//             >
//               Convert {from.toUpperCase()} to {to.toUpperCase()}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;




import { useState, useEffect } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Fetch currency info for the "from" currency
  const currencyInfo = useCurrencyInfo(from, to);

  // Check if currencyInfo is an object and not null/undefined before calling Object.keys
  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount); // Maintain converted amount after swap
    setAmount(convertedAmount); // Update amount with the converted value
  };

  const convert = () => {
    // Ensure the rate exists before performing the conversion
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]); // Convert based on rate from API
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert(); // Call the convert function on form submit
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)} // Corrected to set 'from' currency
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)} // Set the amount on change
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount} // Display the converted amount
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)} // Set 'to' currency
                selectCurrency={to} // Corrected to show the 'to' currency
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
