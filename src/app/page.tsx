import Image from "next/image";
import Inputs from "./layout/inputs";
import Outputs from "./layout/outputs";
import Formulas from "./layout/formulas";
import { Icon } from '@iconify/react/dist/iconify.js';


export default function Home() {
  return (
    <main className="p-3 bg-gray-200">
      <div className="flex  items-center py-10 gap-10">
        <h3 className="text-3xl">Overhead Expense</h3>
        <div className=" border border-blue-600 text-blue-600 p-2 flex gap-2 w-fit items-center">
          <Icon icon="gridicons:calendar" />
          Jul 2024 - Jun 2028
        </div>
      </div>
        <div className="w-full grid lg:grid-cols-5 grid-cols-3 xbg-red-500 bg-white rounded min-h-[500px] h-[90vh] divide-x">
          <Inputs/>
          <Formulas/>
          <Outputs/>
        </div>
    </main>
  );
}
