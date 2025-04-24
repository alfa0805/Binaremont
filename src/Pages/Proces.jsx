import React, { useState } from "react";

const Calculator = ({ t }) => {
  const [rooms, setRooms] = useState(1);
  const [area, setArea] = useState(50);
  const [type, setType] = useState("econom");
  const [price, setPrice] = useState(0);

  const prices = {
    econom: 100,
    standard: 150,
    premium: 200,
  };

  const calculate = () => {
    const basePrice = prices[type];
    const total = area * basePrice;
    setPrice(total);
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{t("calculatorTitle")}</h2>

      <div className="mb-3">
        <label className="block font-medium mb-1">{t("rooms")}</label>
        <input
          type="number"
          min={1}
          value={rooms}
          onChange={(e) => setRooms(+e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-3">
        <label className="block font-medium mb-1">{t("area")}</label>
        <input
          type="number"
          min={1}
          value={area}
          onChange={(e) => setArea(+e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-3">
        <label className="block font-medium mb-1">{t("type")}</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="econom">{t("econom")}</option>
          <option value="standard">{t("standard")}</option>
          <option value="premium">{t("premium")}</option>
        </select>
      </div>

      <button
        onClick={calculate}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {t("calculate")}
      </button>

      {price > 0 && (
        <div className="mt-4 text-lg font-semibold text-green-600">
          {t("total")}: {price.toLocaleString()} so‘m
        </div>
      )}
    </div>
  );
};

export default Calculator;
