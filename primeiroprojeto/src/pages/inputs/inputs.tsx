import { useState } from "react";

export default function Inputs() {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [selected, setSelected] = useState<string>("");

  const options = ["Opção 1", "Opção 2", "Opção 3"];

  return (
    <>
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-center text-zinc-700 mb-2">
          Inputs
        </h1>
        <div className="flex flex-col justify-center items-center gap-2">
          <input
            type="text"
            placeholder="Digite seu nome"
            className="border-2 border-zinc-500 rounded px-2 py-1"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <div className="flex flex-col text-center gap-2">
            <label htmlFor="opcoes">Opções:</label>
            <select
              className="border-2 border-zinc-500 rounded px-2 py-1"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              name="opcoes"
            >
              <option value="main">Selecione uma opção</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="border-2 border-zinc-500 rounded px-2 py-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            className="border-2 border-zinc-500 rounded px-2 py-1"
          />
          <input
            type="number"
            placeholder="Digite sua idade"
            className="border-2 border-zinc-500 rounded px-2 py-1"
          />
          <input
            type="date"
            className="border-2 border-zinc-500 rounded px-2 py-1"
          />
          <input
            type="time"
            className="border-2 border-zinc-500 rounded px-2 py-1"
          />
          <input
            type="color"
            className="border-2 border-zinc-500 rounded px-2 py-1"
          />
          <input
            type="range"
            className="border-2 border-zinc-500 rounded px-2 py-1"
          />
          <input
            type="checkbox"
            className="border-2 border-zinc-500 rounded px-2 py-1"
          />
          <input
            type="radio"
            className="border-2 border-zinc-500 rounded px-2 py-1"
          />
          <input
            type="file"
            className="border-2 border-zinc-500 rounded px-2 py-1"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Enviar
          </button>
        </div>
      </div>
    </>
  );
}
