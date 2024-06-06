import Topo from "@/components/Topo";
import { use, useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    alert("O valor do contador foi alterado!");
  }, [count]);

  function aumentar() {
    setCount(count + 1);
  }

  return (
    <>
      <Topo />
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-center text-zinc-700 mb-2">
          UseEffect
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-xl md:text-2xl font-bold text-center text-zinc-700">
          Contador: {count}
        </h1>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={aumentar}
          >
            Aumentar
          </button>
        </div>
      </div>
    </>
  );
}
