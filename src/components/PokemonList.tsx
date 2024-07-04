"use client";
import { Pokemon } from "@/app/type/type";
import axios from "axios";
import "../app/globals.css";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

const PokemonList = () => {
  const { data: pokemonList, isLoading } = useQuery({
    queryKey: ["pokemons"],
    queryFn: async () => {
      const { data: pokemonList } = await axios.get<Pokemon[]>("/api/pokemons");
      return pokemonList;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>
    );
  }

  return (
    <div className=" flex justify-center flex-wrap gap-3 w-4/5 mx-auto">
      {pokemonList?.map((value) => (
        <Link href={`/pokemonDetail/${value.id}`} key={value.id}>
          <div className="border border-white h-40 w-32 text-center hover:border-red-500">
            <p className="text-sm mt-1">Num.{value.id}</p>
            <Image
              src={value.sprites.front_default}
              width={100}
              height={100}
              alt="pokemon-image"
              className="mx-auto"
            />
            <p>{value.korean_name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PokemonList;
