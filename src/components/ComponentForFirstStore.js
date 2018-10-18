import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('firstStore')
@observer
export class ComponentForFirstStore extends React.Component {
    render() {
        const store = this.props.firstStore;

        console.log('rerender component with @action');

        return (
            <React.Fragment>
                <h1>
                    {store.title}
                </h1>

                <p> date: {store.date} </p>

                <input 
                    onKeyUp={store.addCity}
                />

                {
                    store.list.map(city => (
                        <React.Fragment key={city} >
                            <p>
                                {city}

                                <button onClick={() => store.deleteCity(city)}>
                                    X
                                </button>
                            </p>
                        </React.Fragment>
                    ))
                }
            </React.Fragment>
        )
    }
}
