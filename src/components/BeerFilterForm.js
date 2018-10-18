import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import ParamEnum from './ParamEnum';
import Requester from './Requester';

function GetSelectList(onChangeFunc, item) {
    const isDisabled = item.value === '';
    const selected = item.added;
    const select = (
        <select disabled={isDisabled} value={selected} onChange={onChangeFunc}>
            <option value={ParamEnum.ValueNone} disabled hidden>Choose option</option>
            <option value={ParamEnum.ValueLower}>Lower</option>
            <option value={ParamEnum.ValueGreater}>Greater</option>
        </select>
    )
    return select;
}

@inject('mainStore')
@observer
class BeerFilterForm extends Component {
    constructor(props) {
        super(props)

        this.store = this.props.mainStore;

        this.changeSelected = (item) => {
            this.store.changeSelectedItem(item.shift());
        }

        this.Sendrequest = () => {
            const requester = new Requester().requester;
            requester(1, this.store.requestObject, this.store.loadItems);
            this.store.resetPageNumber();
            this.store.clearFields();
        }
        this.getRandomBeer = () => {
            const request = new Requester().getRandomBeer;
            request(this.changeSelected);
        }
    }

    render() {
        const request = this.store.requestObject;
        return (
            <div style={{ display: 'inline-block', position: 'absolute', width: '28vw', top: '2vh' }}>
                <input value={request.ABV.value} onChange={this.store.changeABVValue} 
                    style={{ width: '18vw' }} placeholder={'ABV'} />
                {GetSelectList(this.store.changeABVOption, request.ABV)}

                <input value={request.IBU.value} onChange={this.store.changeIBUValue}
                    style={{ width: '18vw' }} placeholder={'IBU'} />
                {GetSelectList(this.store.changeIBUOption, request.IBU)}

                <input value={request.EBC.value} onChange={this.store.changeEBCValue}
                    style={{ width: '18vw' }} placeholder={'EBC'} />
                {GetSelectList(this.store.changeEBCOption, request.EBC)}

                <input value={request.beerName.value} onChange={this.store.changeBeerName}
                    style={{ width: '18vw' }} placeholder={'Beer name'} />
                <input value={request.yeast.value} onChange={this.store.changeYeastValue}
                    style={{ width: '18vw' }} placeholder={'Yeast'} />
                <input value={request.brewed.value} onChange={this.store.changeBrewedDate}
                    style={{ width: '18vw' }} placeholder={'Brewed date (mm-yyyy)'} />
                {GetSelectList(this.store.changeBrewedOption, request.brewed)}

                <input value={request.hops.value} onChange={this.store.changeHopsValue}
                    style={{ width: '18vw' }} placeholder={'Hops'} />
                <input value={request.malt.value} onChange={this.store.changeMaltValue}
                    style={{ width: '18vw' }} placeholder={'Malt'} />
                <input value={request.food.value} onChange={this.store.changeFoodValue}
                    style={{ width: '18vw' }} placeholder={'Food'} />
                <br />
                <button onClick={this.Sendrequest}>Find beer</button>
                <br />
                <button onClick={this.getRandomBeer}>Get random beer</button>
            </div>
        )
    }
}

export default BeerFilterForm;