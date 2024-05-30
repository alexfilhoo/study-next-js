// import Image from "next/image";
import Topo from "@/components/Topo";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const nome = "Alex";
const profissao = "Desenvolvedor";
let idade = 23;

function texto() {
  return `Meu nome é ${nome} e tenho ${idade} anos e sou ${profissao}.`;
}

export default function Home() {
  return (
    <>
      <Topo />
      <div style={estilizaCss}>
        <p className="text-lg font-medium">{texto()}</p>
        <p style={{ color: "#f00", backgroundColor: "#bbb" }}>React</p>
      </div>
    </>
  );
}

const estilizaCss = {
  display: "flex",
  justifyContent: "center",
  alignItens: "center",
  color: "#f00",
  backgroundColor: "#bbb",
  fontSize: "16px",
};
