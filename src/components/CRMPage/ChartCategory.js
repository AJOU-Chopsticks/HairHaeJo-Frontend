import React from "react";
import { AiOutlineBarChart, AiOutlineLineChart } from "react-icons/ai";

function ChartCategory(props) {
  return (
    <ul className="flex flex-row justify-center mt-12 md:mt-24 w-full gap-4">
      <li className="w-12">
        <input
          type="radio"
          id="bar"
          name="barChart"
          value="bar"
          className="hidden peer"
          checked={props.chartType === "bar"}
          onChange={(e) => props.setChartType(e.target.value)}
        />
        <label
          htmlFor="bar"
          className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="w-full flex flex-row justify-center text-md text-center font-medium text-gray-900 dark:text-white">
            <AiOutlineBarChart className="text-2xl" />
          </div>
        </label>
      </li>
      <li className="w-12">
        <input
          type="radio"
          id="line"
          name="lineChart"
          value="line"
          className="hidden peer"
          checked={props.chartType === "line"}
          onChange={(e) => props.setChartType(e.target.value)}
        />
        <label
          htmlFor="line"
          className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="w-full flex flex-row justify-center text-md text-center font-medium text-gray-900 dark:text-white">
            <AiOutlineLineChart className="text-2xl" />
          </div>
        </label>
      </li>
    </ul>
  );
}

export default ChartCategory;
