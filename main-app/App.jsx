import React from 'lib-app/react';
import Button from 'component-app/Button';
import Dialog from 'component-app/Dialog';
import ToolTip from 'component-app/ToolTip';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogVisible: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSwitchVisible = this.handleSwitchVisible.bind(this);
    }

    handleClick(ev) {
        console.log(ev);
        this.setState({
            dialogVisible: true,
        });
    }

    handleSwitchVisible(visible) {
        this.setState({
            dialogVisible: visible,
        });
    }

    render() {
        return (
            <div>
                <h1>AND UTILS</h1>
                <p>This will use Webpacks module federation plugin to host a series of webapps using the <strong>Micro-frontend
                    pattern</strong></p>
                <div style={{'border': 'solid 1pt blue'}}>
                    There are 3 projects in total that make up this page.<br/>
                    <p>The 2 boxes below are 2 separate apps combined into this app - <strong>main-app</strong></p>
                </div>

                <div style={{'border': 'solid 1pt black', 'margin-top': '30px'}}>
                    <p>
                        react、react-dom js files hosted on - <strong>lib-app</strong>
                    </p>
                </div>
                <div style={{'border': 'solid 1pt black', 'margin-top': '30px'}}>
                    <p>
                        components hosted on - <strong>component-app</strong>
                    </p>
                    <h4>Buttons:</h4>
                    <Button type="primary"/>
                    <Button type="warning"/>
                    <h4>Dialog:</h4>
                    <button onClick={this.handleClick}>click me to open Dialog</button>
                    <Dialog switchVisible={this.handleSwitchVisible} visible={this.state.dialogVisible}/>
                    <h4>hover me please!</h4>
                    <ToolTip content="hover me please" message="Hello,world!"/>
                </div>
            </div>
        );
    }
}
