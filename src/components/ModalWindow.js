import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('mainStore')
@observer
class ModalWindow extends Component {
    constructor(props) {
        super(props);

        this.store = this.props.mainStore;

        this.modalClose = (event) => {
            if (event.target.id === 'environment' || event.target.id === 'ExitButton' || event.keyCode === 27) {
                this.store.changeSelectedItem(null);
            }
        }
    }
    componentDidMount() {
        window.addEventListener('keyup', this.modalClose, false);
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.modalClose, false);
    }

    render() {
        let selectedItem = this.store.selectedItem;
        if (!selectedItem) return null;

        const malts = selectedItem.ingredients.malt.map(malt => malt.name + ' ' + malt.amount.value + ' ' + malt.amount.unit);
        const hopses = selectedItem.ingredients.hops.map(hops => hops.name + ' ' + hops.amount.value + ' ' + hops.amount.unit);
        const mashTemps = selectedItem.method.mash_temp.map(mash => mash.temp.value + ' ' + mash.temp.unit + ' Duration: ' + mash.duration);
        const fermentations = selectedItem.method.fermentation.temp.value + ' ' + selectedItem.method.fermentation.temp.unit;

        return (
            <div onClick={this.modalClose} id={'environment'} style={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                width: '100vw',
                display: 'flex',
                position: 'fixed',
                zIndex: '10',
                top: '0',
                right: '0',
                left: '0',
                bottom: '0'
            }} >
                <img style={{ height: '70vh', display: 'inline-block', marginLeft: '5vw', marginTop: '15vh' }}
                    src={selectedItem.image_url} />
                <div style={{ display: 'inline', margin: 'auto 5vw auto 3vw', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                    <div>{`Name: ${selectedItem.name}`}</div>
                    <div>{`Description: ${selectedItem.description}`}</div>
                    <div>{`Tagline: ${selectedItem.tagline}`}</div>
                    <div>{`First brewed: ${selectedItem.first_brewed}`}</div>
                    <div>{`ABV: ${selectedItem.abv}`}</div>
                    <div>{`IBU: ${selectedItem.ibu}`}</div>
                    <div>{`EBC: ${selectedItem.ebc}`}</div>
                    <div>{`SRM: ${selectedItem.srm}`}</div>
                    <div>{`PH: ${selectedItem.ph}`}</div>
                    <div>{`Volume: ${selectedItem.volume.value} ${selectedItem.volume.unit}`}</div>
                    <div>{`Boil volume: ${selectedItem.boil_volume.value} ${selectedItem.boil_volume.unit}`}</div>
                    <div>{`Attenuation level: ${selectedItem.attenuation_level}`}</div>
                    <div>{`Malt: ${malts}`}</div>
                    <div>{`Hops: ${hopses}`}</div>
                    <div>{`Mash temp: ${mashTemps}`}</div>
                    <div>{`Fermentation: ${fermentations}`}</div>
                    <div>{`Yeast: ${selectedItem.ingredients.yeast}`}</div>
                    <div>{`Food pairing: ${selectedItem.food_pairing}`}</div>
                    <div>{`Brewers tips: ${selectedItem.brewers_tips}`}</div>
                    <div>{`Contributed by: ${selectedItem.contributed_by}`}</div>
                    <button onClick={this.modalClose} id={'ExitButton'}>OK</button>
                </div>
            </div>
        )
    }
}

export default ModalWindow;