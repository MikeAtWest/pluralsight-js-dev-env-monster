import * as React from "react";

interface IProps extends React.Props<MonsterEditor> {
    name: string;
    size: string;
    onChange(event: any);
}

export default class MonsterEditor extends React.Component<IProps, {}> {
    public render() {
        return (
            <div>
                <h1>Edit Monster</h1>

                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="name" ref="name" value={this.props.name} onChange={this.props.onChange} />
                <br />
            </div>
        );
    }
};
