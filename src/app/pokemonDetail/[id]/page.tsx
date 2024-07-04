import Image from "next/image";
import Link from "next/link";
import React from "react";
async function getData(id: string) {
  const response = await fetch(`http://localhost:3000/api/pokemons/${id}`);

  return response.json();
}

const PokemonDetail = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const data = await getData(id);

  return (
    <div className="bg-white w-2/4 mx-auto text-center p-4 rounded-2xl">
      <Image
        src={data.sprites.front_default}
        width={150}
        height={150}
        alt="pokemon-image"
        className="mx-auto"
      />
      <p className="text-lg">이름: {data.korean_name}</p>
      <p>
        키: {data.height / 10}m
        <span className="ml-2">무게: {data.weight / 10}kg</span>
      </p>
      <div className="flex flex-row justify-center">
        <div className="flex flex-row items-center">
          타입:
          <div className="flex flex-row">
            {data.types.map((types, index) => (
              <div
                className="bg-orange-500 mx-1 text-white p-1 rounded"
                key={index}
              >
                {types.type.korean_name}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-row items-center">
            특성:
            {data.abilities.map((abilities, index) => (
              <div
                key={index}
                className="bg-green-500 mx-1 text-white p-1 rounded"
              >
                {abilities.ability.korean_name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="leading-8">
        {data.moves.map((value) => value.move.korean_name)}
      </div>
      <Link href="/">
        <button className="bg-blue-600 text-white p-1 px-3 rounded cursor-pointer">
          뒤로가기
        </button>
      </Link>
    </div>
  );
};

export default PokemonDetail;
