import * as React from "react";

import TextInput from "../common/textInputComponent";
import Monster from "./monster";

// interface IProps extends React.Props<MonsterEditor> {
//     monster: Monster;
//     onChange(event: any);
// }

export default class MonsterEditor extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1>Edit Monster</h1>
                <TextInput name="name" label="Name" value={this.props.monster.name} onChange={(e) => this.props.onChange(e)} />
                <br />

                <label htmlFor="size">Size</label>
                <select name="size" value={this.props.monster.size} onChange={(e) => this.props.onSizeChange(e)}>
                    <option value="Tiny">Tiny</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Huge">Huge</option>
                    <option value="Gargantuan">Gargantuan</option>
                </select>
            </div>
        );
    }
};
