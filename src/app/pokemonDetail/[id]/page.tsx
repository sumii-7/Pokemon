import React from "react";
async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/pokemons/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const PokemonDetail = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const data = await getData(id);
  return <div className="text-white">{data.id}</div>;
};

export default PokemonDetail;
