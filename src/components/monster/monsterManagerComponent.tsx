import * as React from "react";
import MonsterDisplay from "./monsterDisplayComponent";
import MonsterEditor from "./monsterEditorComponent";

interface IState {
  name: string;
  size: string;
}

export default class MonsterManager extends React.Component<{}, IState> {

  public state: IState;

  constructor() {
    super();
    this.state = { name: "Orc", size: "Medium" };
    this.setNameState = this.setNameState.bind(this);
  }

  public setNameState(event) {
    const value = event.target.value;
    this.state.name = value;
    console.log(value); // tslint:disable-line no-console
    return this.setState({ name: this.state.name, size: this.state.size });

  }

  public render() {
    return (
      <div>
        <MonsterEditor name={this.state.name} size={this.state.size} onChange={this.setNameState} />
        <MonsterDisplay name={this.state.name} size={this.state.size} />
      </div>
    );
  }
};
