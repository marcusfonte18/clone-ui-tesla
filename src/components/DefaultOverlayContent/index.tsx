import React from "react";

import { Container, Heading, Buttons } from "./styles";

interface Props {
  label: string;
  description: string;
}

const DefaultOverlayContent: React.FC<Props> = (label, description) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h1>{description}</h1>
      </Heading>

      <Buttons>
        <button>Custon Order</button>
        <button className="white">Existing Inventory</button>
      </Buttons>
    </Container>
  );
};

export default DefaultOverlayContent;
