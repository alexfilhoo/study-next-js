import Image from "next/image";
import Link from "next/link";

export default function Topo() {
  return (
    <>
      <ul className="flex flex-col justify-between items-center bg-zinc-300 h-auto p-5">
        <li>
          <Image
            src="/AF-logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </li>
        <ul className="flex flex-col">
          <li className="subtitle">Alex Filho</li>
          <li>Desenvolvedor</li>
        </ul>
        <ul>
          <li>
            <Link href={"/"}>Página Inicial</Link>
          </li>
          <li>
            <Link href={"/produtos/produtos"}>Produtos</Link>
          </li>
          <li>
            <Link href={"/teste/teste"}>Teste</Link>
          </li>
        </ul>
      </ul>
      <div></div>
    </>
  );
}
