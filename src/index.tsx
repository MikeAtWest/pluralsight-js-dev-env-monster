import * as $ from "jquery";
import * as toastr from "toastr";
import { deleteUser, getUsers } from "./api/userApi";

import * as React from "react";
import * as ReactDOM from "react-dom";

import MonsterManager from "./components/monster/monsterManagerComponent";

import "../node_modules/toastr/build/toastr.css";
import "./index.css";

ReactDOM.render(
  <MonsterManager/>,
  document.getElementById("monster"),
);
