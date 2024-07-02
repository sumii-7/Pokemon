"use client";
import { Pokemon } from "@/app/type/type";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../app/globals.css";
import Image from "next/image";
import Link from "next/link";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  useEffect(() => {
    const pokemons = async () => {
      try {
        const { data } = await axios.get<Pokemon[]>("/api/pokemons");
        console.log(data);
        setPokemonList(data);
      } catch (error) {
        console.log(error);
      }
    };
    pokemons();
  }, []);

  return (
    <div className=" flex justify-center flex-wrap gap-3">
      {pokemonList.map((value) => (
        <Link href={`/pokemonDetail/${value.id}`} key={value.id}>
          <div className="border border-white h-40 w-32 text-center">
            <p className="text-sm">Num.{value.id}</p>
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
