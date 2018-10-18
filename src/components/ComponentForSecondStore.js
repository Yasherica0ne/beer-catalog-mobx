import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('secondStore')
@observer
export class ComponentForSecondStore extends React.Component {
    componentDidMount() {
        setTimeout(
            () => this.props.secondStore.loadBeers(),
            1000,
        )
    }

    render() {
        const store = this.props.secondStore;

        return (
            <React.Fragment>
                <h1>Beers </h1>

                {
                    store.isLoading ?
                        <p> LOADING... </p> :
                        store.beers.map(beer => (
                            <React.Fragment key={beer.id}>
                                <p>
                                    #{beer.id}  {beer.name}
                                </p>
                            </ React.Fragment>
                        ))
                }
            </React.Fragment>
        );
    }
}
