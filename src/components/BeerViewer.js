import React, { Component } from 'react';
import BeerItem from './BeerItem';
import ModalWindow from './ModalWindow';
import Requester from './Requester';
import { inject, observer } from 'mobx-react';

@inject('mainStore')
@observer
class BeerViewer extends Component {
    constructor(props) {
        super(props);

        this.store = this.props.mainStore;

        const requester = new Requester().requester;
        requester(this.store.page, this.store.requestObject, this.store.loadItems);

        this.onNextPageButtonClick = () => {
            const requester = new Requester().requester;
            requester(this.store.page + 1, this.store.requestObject, this.store.loadItems);
            this.store.nextPage();
        }

        this.onPrevPageButtonClick = () => {
            if (this.store.page - 1 < 1) return;
            const requester = new Requester().requester;
            requester(this.store.page - 1, this.store.requestObject, this.store.loadItems);
            this.store.previousPage();
        }
    }

    render() {
        const itemsLength = this.store.beerItems.length;
        return (
            <div style={{ display: 'inline-block', width: '70vw' }} >
                {itemsLength !== 0 &&
                    <React.Fragment>
                        <ModalWindow />
                        {
                            this.store.beerItems.map(item => <BeerItem item={item} key={item.id} />)
                        }
                        <br />
                    </React.Fragment>
                }
                <div style={{ margin: '3vh 0 5vh 41vw' }}>
                    <button onClick={this.onPrevPageButtonClick} style={{ fontSize: '3vh' }}>Previous page</button>
                    <button onClick={this.onNextPageButtonClick} style={{ fontSize: '3vh' }}>Next page</button>
                </div>
            </div>
        )
    }
}

export default BeerViewer;