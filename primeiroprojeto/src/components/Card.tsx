interface CardProps {
  produto: string;
  valor: number;
  desconto: number;
  funcao: any;
}

export default function Card(props: CardProps) {
  return (
    <div
      className={`flex justify-center flex-col border-2 ${
        props.desconto > 0 ? "border-red-700" : "border-blue-700"
      } rounded-sm p-1`}
    >
      <p>Produto: {props.produto}</p>
      <p>Valor: R${props.valor}</p>
      {/*?(if ternário) se for usar o else : "" com alguma condição*/}
      {/*&& valida se a primeira condição é true, caso false segue a vida*/}
      {props.desconto > 0 && (
        <div>
          <p>Desconto: R${props.desconto}</p>
          <p>Valor de venda: R${props.funcao(props.valor, props.desconto)}</p>
        </div>
      )}
    </div>
  );
}
