import * as React from "react";

interface IProps extends React.Props<MonsterDisplay> {
    name: string;
    size: string;
}

export default class MonsterDisplay extends React.Component<IProps, {}> {
    public render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <div><i>{this.props.size}</i></div>
            </div>
        );
    }
};
