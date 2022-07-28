import React from "react";
const Card = ({ pokemon, loading,infoPokemon}) => {
   // console.log(pokemon);
    return (
        <>
        {
            loading ? <h1>Loading...</h1> :
                pokemon.map((item ,key) => {
                    return (
                        <>
                        <div className="card" key={key} onClick={()=>infoPokemon(item)}>
                            <h2>{item.key}</h2>
                            <img src={item.sprites.front_default} alt="" />
                            <h2>{item.name}</h2>
                        </div>
                        </>
                    )
                })
        }

        </>
    )
}
export default Card;