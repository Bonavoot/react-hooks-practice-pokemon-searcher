import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const { name, hp, sprites } = pokemon;
  const [side, setSide] = useState("front");

  return (
    <Card>
      <div
        onClick={() => (side === "front" ? setSide("back") : setSide("front"))}
      >
        <div className="image">
          <img src={sprites[side]} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
