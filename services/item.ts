import api from "./api"

export const getPersonage = async (id: number) => { 
  const response = await api.get<any>(`${id}`) 
  const result = {
    id: response.data.id,
    image: response.data.sprites.other["official-artwork"].front_default, 
    name: response.data.name,
    hp: response.data.stats.find(stat => stat.stat.name === "hp").base_stat,
    weight: response.data.weight,
    height: response.data.height,
    types: response.data.types.map((item: any) => item.type.name),
    abilities: response.data.abilities.map((item: any) => item.ability.name)
  } 
  return result
}