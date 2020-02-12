import * as React from 'react';
import { Link } from 'react-router-dom'

export class App extends React.Component<{}, {}> {
    constructor(props:  Readonly<{}>) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>HI HOLT</h1>
                <Link id="header-title" to="/page2">TO PAGE 2</Link>
            </div>
        )
    }
}