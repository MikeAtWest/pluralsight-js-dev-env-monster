import * as React from "react";

export default class TextInput extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <label htmlFor="name">{this.props.label}</label>
                <input
                    type="text"
                    name={this.props.name}
                    placeholder={this.props.name}
                    ref={this.props.name}
                    value={this.props.value}
                    onChange={(e) => this.props.onChange(e)}
                />            
            </div>
        );
    }
};
