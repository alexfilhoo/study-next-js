// import Image from "next/image";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
import Topo from "@/components/Topo";
import Card from "@/components/Card";

const nome = "Alex";
const profissao = "Desenvolvedor";
let idade = 23;

function texto() {
  return `Meu nome é ${nome} e tenho ${idade} anos e sou ${profissao}.`;
}

const produtos = [
  { produto: "Mouse", valor: 50, desconto: 10, disponivel: true },
  { produto: "Teclado", valor: 70, desconto: 0, disponivel: false },
  { produto: "Monitor", valor: 460, desconto: 5, disponivel: true },
  { produto: "CPU", valor: 800, desconto: 0, disponivel: true },
];

function calcDesc(valor: number, desconto: number) {
  return valor - desconto;
}
function calcDesc2(valor: number, desconto: number) {
  return valor - desconto / 2;
}

export default function Home() {
  return (
    <>
      <Topo />
      <div style={estilizaCss}>
        <p className="text-lg font-medium">{texto()}</p>
        <p style={{ color: "#f00", backgroundColor: "#bbb" }}>React</p>
      </div>
      <div className="flex justify-center gap-3">
        {produtos.map((item, index) => {
          if (item.disponivel)
            return (
              <Card
                key={index}
                produto={item.produto}
                valor={item.valor}
                desconto={item.desconto}
                funcao={item.desconto > 0 ? calcDesc : calcDesc2}
              />
            );
        })}
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
