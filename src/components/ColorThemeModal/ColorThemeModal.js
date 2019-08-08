
//sets up the reusable Jumbotron component

import { Modal, Button } from "react-materialize";
import "./ColorThemeModal.css";
import React from "react";

import "materialize-css/dist/css/materialize.min.css";




const trigger = <Button>Open Modal</Button>;

export default () => (
  <Modal header="Modal Header" trigger={trigger}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </Modal>
);





  