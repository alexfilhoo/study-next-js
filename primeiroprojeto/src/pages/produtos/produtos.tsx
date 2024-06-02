import Card from "@/components/Card";
import Topo from "@/components/Topo";

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

export default function Produtos() {
  return (
    <>
      <Topo />
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
