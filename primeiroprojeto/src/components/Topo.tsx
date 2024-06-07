import Image from "next/image";
import Link from "next/link";

export default function Topo() {
  return (
    <>
      <ul className="flex justify-between items-center bg-zinc-300 h-auto p-5">
        <li>
          <Image
            src="/AF-logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </li>
        <ul className="flex gap-2">
          <li>
            <Link href={"/"}>Página Inicial</Link>
          </li>
          <li>
            <Link
              href={{
                pathname: "/produtos",
                query: { nome: "Alex" },
              }}
            >
              Produtos
            </Link>
          </li>
          <li>
            <Link href={"/usestate"}>UseState</Link>
          </li>
          <li>
            <Link href={"/inputs"}>Inputs</Link>
          </li>
          <li>
            <Link href={"/useeffect"}>UseEffect</Link>
          </li>
          <li>
            <Link href={"/react-select"}>React Select</Link>
          </li>
          <li>
            <Link href={"/fetch"}>Fetch</Link>
          </li>
        </ul>
      </ul>
      <div></div>
    </>
  );
}
