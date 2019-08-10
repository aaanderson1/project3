import "./Jumbotron.css";
import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Section, Button } from "react-materialize";


function Parallaxrender() {
	return (

	<Section>

  <Section className="parallax"><button className="waves-effect waves-teal btn-flat createapartyBTN">Create a Party</button> <button className="waves-effect waves-teal btn-flat guestBTN">I'm a Guest</button></Section>
  
 
  </Section>

	)
  }

export default Parallaxrender;