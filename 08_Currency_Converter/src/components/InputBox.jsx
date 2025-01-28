// import React, { useId } from "react";

// function InputBox({
//   label,
//   amount,
//   onAmountChange, // methods
//   onCurrencyChange, // jab currency  ki state change ho likes usd to inr
//   currencyOptions = [], // dby defalut empty le liya hai
//   selectCurrency = "usd", // by defalut ek curreny duga
//   amountDisable = false, // use amy ko change kar sakata hai
//   currencyDisable = false,

//   className = "",
// }) {
//   const amountInputId = useId();
//   return (
//     <div className={`bg-white p-3 rounded-lg text-sm flex  ${className}`}>
//       <div className="w-1/2">
//         <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
//           {label}
//         </label>
//         <input
//           id={amountInputId}
//           className="outline-none w-full bg-transparent py-1.5"
//           type="number"
//           placeholder="Amount"
//           value={amount}
//           disabled={amountDisable}
//           onChange={(e) =>
//             onAmountChange && onAmountChange(Number(e.target.value))
//           }
//         />
//       </div>
//       <div className="w-1/2 flex flex-wrap justify-end text-right">
//         <p className="text-black/40 mb-2 w-full">Currency Type</p>
//         <select
//           value={selectCurrency} // by defalut value "usd hai"
//           onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
//           disabled={currencyDisable}
//           className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//         >
//           {currencyOptions.map((currency) => (
//             <option key={currency} value={currency}>
//               {currency}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }

// export default InputBox;




import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange, // Methods to update amount
  onCurrencyChange, // Method to update currency
  currencyOptions = [], // Default empty array
  selectCurrency = "usd", // Default to 'usd'
  amountDisable = false, // Option to disable amount input
  currencyDisable = false, // Option to disable currency select
  className = "", // Optional additional class names
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountDisable}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value)) // Update amount on change
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          value={selectCurrency} // Selected currency (default: 'usd')
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} // Update currency on change
          disabled={currencyDisable} // Disable currency select if needed
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        >
          {currencyOptions.length > 0 ? (
            currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))
          ) : (
            <option>No currencies available</option> // Fallback message
          )}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
