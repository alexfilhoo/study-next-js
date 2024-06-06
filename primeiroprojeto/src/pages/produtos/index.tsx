import Card from "@/components/Card";
import Topo from "@/components/Topo";
import { useRouter } from "next/router";

const produtos = [
  { id: 1, produto: "Mouse", valor: 50, desconto: 10, disponivel: true },
  { id: 2, produto: "Teclado", valor: 70, desconto: 0, disponivel: false },
  { id: 3, produto: "Monitor", valor: 460, desconto: 5, disponivel: true },
  { id: 4, produto: "CPU", valor: 800, desconto: 0, disponivel: true },
];

function calcDesc(valor: number, desconto: number) {
  return valor - desconto;
}
function calcDesc2(valor: number, desconto: number) {
  return valor - desconto / 2;
}

export default function Produtos() {
  const router = useRouter();
  const params = router.query;
  console.log(params);
  return (
    <>
      <Topo />
      <div className="flex justify-center gap-3">
        {produtos.map((item) => {
          if (item.disponivel)
            return (
              <Card
                key={item.id}
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
