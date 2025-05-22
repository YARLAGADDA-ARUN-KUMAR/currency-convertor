import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-full ">
            <label className="text-black/40 mb-2 block">{label}</label>
            <input
            type="number"
            className="outline-none w-30 bg-transparent p-1 rounded-md border-2 "
            placeholder="Amount"
            disabled = {amountDisabled}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>
        <div className="w-full flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">
            Currency Type
            </p>
            <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={selectedCurrency}
            onChange={(e) => {onCurrencyChange &&  onCurrencyChange(e.target.value)}}
            disabled={currencyDisabled}>
                {
                    currencyOptions.map( (currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))
                }
            </select>
        </div>
    </div>
  );
}

export default InputBox;
