import Topo from "@/components/Topo";
import { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Topo />
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-zinc-700">
          Contador: {count}
        </h1>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => setCount(count - 1)}
          >
            Reduzir
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2"
            onClick={() => setCount(count + 1)}
          >
            Aumentar
          </button>
        </div>
      </div>
    </>
  );
}
