import "../App.css"
import { Species, Sprites } from "../Interface/FormPoke";
interface UsuarioProps {
  user: Species;
}

const Poke = ( {user} : UsuarioProps) => {


  return (

    <div>
      <div className="userContainer">
        <span>{user.name}</span>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt="" />
        <span>{user.url}</span>

      </div>
    </div>

  );
};

export default Poke;
