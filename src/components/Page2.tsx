import * as React from 'react';
import { Link } from 'react-router-dom'

export class Page2 extends React.Component<{}, {}> {
    constructor(props:  Readonly<{}>) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>HI HOLT FROM PAGE 2</h1>
                <Link id="header-title" to="/">BACK TO HOMEPAGE</Link>
            </div>
        )
    }
}