import React, { useEffect, useState } from "react";
import { conexionAPI } from "../API/Conexion";
import { UserResponse, Species, Ability } from "../Interface/FormPoke";
import "../App.css"
import Poke from "./Poke";



const Pokedex = () => {

  const [pokem, setPokem] = useState<Species[]>([]);


  const getPokemon = async () => {



    try{
      const respuesta = await conexionAPI.get<UserResponse>("/ditto")
      console.log(respuesta.data.name)
      console.log(respuesta.data)

      setPokem(respuesta.data.forms)

    } 
    catch(err){
      console.log(err)
    }
  };

  useEffect(() => {
    getPokemon()
  }, []);

  return (
    <div className="flexContainerUsers">
    {pokem.map((user) => (
      <Poke user={user} key={user.name} />
    ))}
</div>


  )

};

export default Pokedex;
