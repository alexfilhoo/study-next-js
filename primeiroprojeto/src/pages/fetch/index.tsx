import Topo from "@/components/Topo";
import { useEffect, useState } from "react";

export default function Fetch() {
    const [pokemon, setPokemon] = useState<any>({});

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
            .then((response) => response.json())
            .then((data) => setPokemon(data))
            .catch((error) => console.error('Pokemons não', error));
    }, []);

    return (
        <>
            <Topo />
            <div>
                <h1>Fetch</h1>
            </div>
        </>
    );
}