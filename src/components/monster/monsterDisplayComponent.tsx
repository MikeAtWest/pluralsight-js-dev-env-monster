import * as React from "react";
import Monster from "./monster";

interface IProps extends React.Props<MonsterDisplay> {
    monster: Monster;
}

export default class MonsterDisplay extends React.Component<IProps, {}> {
    public render() {
        return (
            <div>
                <h1>{this.props.monster.name}</h1>
                <div><i>{this.props.monster.size}</i></div>
            </div>
        );
    }
};
