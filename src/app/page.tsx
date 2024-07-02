import PokemonList from "@/components/PokemonList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold text-center my-8">포켓몬 도감</h1>
      <PokemonList />
    </div>
  );
}
