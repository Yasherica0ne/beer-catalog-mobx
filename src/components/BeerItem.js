import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('mainStore')
@observer
class BeerItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const store = this.props.mainStore;
        const item = this.props.item;
        return (
            <div onClick={() => store.changeSelectedItem(item)} style={{ display: 'inline-block', border: '1px solid gray', width: '17vw' }}>
                <div>{item.name}</div>
                <img style={{ width: '2.5vw', height: '8vw' }} src={item.image_url} />
                <div>{item.tagline}</div>
            </div>
        )
    }
}

export default BeerItem;