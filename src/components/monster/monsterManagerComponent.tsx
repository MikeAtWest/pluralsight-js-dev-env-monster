import * as React from "react";
import Monster from "./monster";
import MonsterDisplay from "./monsterDisplayComponent";
import MonsterEditor from "./monsterEditorComponent";

// interface IState  {
//   monster: Monster;
// }

export default class MonsterManager extends React.Component<{}, any> {

  // public state: IState;

  constructor(props: any) {
    super(props);
    const initialMonster: Monster = new Monster("Ogre", "Large");
    this.state = { monster: initialMonster };
    this.setMonsterState = this.setMonsterState.bind(this);
  }

  public setMonsterState(event: React.KeyboardEvent<HTMLInputElement> ): void {
    const field = event.currentTarget.name;
    const value = event.currentTarget.value;
    this.state.monster[field] = value;
    console.log(value); // tslint:disable-line no-console
    return this.setState( { monster: this.state.monster });
  }

  public render() {
    return (
      <div>
        <MonsterEditor monster={this.state.monster} onChange={this.setMonsterState} />
        <MonsterDisplay monster={this.state.monster}  />
      </div>
    );
  }
};
