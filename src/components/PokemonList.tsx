"use client";
import { Pokemon } from "@/app/type/type";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../app/globals.css";
import Image from "next/image";

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
        <div key={value.id} className="border border-white h-60 w-60">
          <Image
            src={value.sprites.front_default}
            width={100}
            height={100}
            alt="pokemon-image"
          />

          <p>{value.korean_name}</p>
          <p>{value.id}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
