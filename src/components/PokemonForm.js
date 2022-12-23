import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ pokemon, setPokemon }) {
  const [formName, setFormName] = useState("");
  const [formHp, setFormHp] = useState("");
  const [formFront, setFormFront] = useState("");
  const [formBack, setFormBack] = useState("");

  const addPokemonToDatabase = () => {
    const data = {
      name: formName,
      hp: formHp,
      sprites: {
        front: formFront,
        back: formBack,
      },
    };
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setPokemon([...pokemon, data]);
  };

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          addPokemonToDatabase();
        }}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid
            onChange={(e) => setFormName(e.target.value)}
            value={formName}
            label="Name"
            placeholder="Name"
            name="name"
          />
          <Form.Input
            fluid
            onChange={(e) => setFormHp(e.target.value)}
            value={formHp}
            label="hp"
            placeholder="hp"
            name="hp"
          />
          <Form.Input
            fluid
            onChange={(e) => setFormFront(e.target.value)}
            value={formFront}
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            onChange={(e) => setFormBack(e.target.value)}
            value={formBack}
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
