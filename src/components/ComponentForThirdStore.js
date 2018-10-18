import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('thirdStore')
@observer
export class ComponentForThirdStore extends React.Component {
    render() {
        const store = this.props.thirdStore;

        return (
            <React.Fragment>
                <h1>
                    MobX Computed
                </h1>

                <button onClick={store.increase} >
                    change observable value
                </button>

                <button onClick={() => this.forceUpdate()}>
                    forceUpdate
                </button>

                {store.computedValue}
            </React.Fragment>
        );
    }
}
