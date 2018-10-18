import { observable, action } from 'mobx';
import RequestObject from '../components/RequestObject';

function CloneObject(item) {
    const clone = Object.assign({}, item);
    return clone;
  }

export class MainStore {
    @observable selectedItem = null;
    @observable beerItems = [];
    @observable page = 1;
    @observable requestObject = new RequestObject();

    @action resetPageNumber = () => {
        this.page = 1;
    }

    @action nextPage = () => {

        this.page++;
    }

    @action previousPage = () => {
        this.page--;
    }

    @action loadItems = items => {
        this.beerItems = items;
    }

    @action changeSelectedItem = item => {
        this.selectedItem = item;
    }

    @action clearFields = () => {
        this.requestObject = new RequestObject();
    }

    @action changeABVValue = event => {
        debugger;
        this.requestObject.ABV.value = event.target.value;
        this.requestObject = CloneObject(this.requestObject);
    }

    @action changeIBUValue = event => {
        this.requestObject.IBU.value = event.target.value;
        this.requestObject = CloneObject(this.requestObject);
    }

    @action changeEBCValue = event => {
        this.requestObject.EBC.value = event.target.value;
        this.requestObject = CloneObject(this.requestObject);
    }

    @action changeABVOption = event => {
        this.requestObject.ABV.added = event.target.value;
        this.requestObject = CloneObject(this.requestObject);
    }

    @action changeIBUOption = event => {
        this.requestObject.IBU.added = event.target.value;
        this.requestObject = CloneObject(this.requestObject);
    }

    @action changeEBCOption = event => {
        this.requestObject.EBC.added = event.target.value;
        this.requestObject = CloneObject(this.requestObject);
    }

    @action changeBrewedOption = event => {
        this.requestObject.brewed.added = event.target.value;
        this.requestObject = CloneObject(this.requestObject);
    }
    
    @action changeBeerName = event => {
        this.requestObject.beerName.value = event.target.value;
        this.requestObject = CloneObject(this.requestObject);
    }

    @action changeYeastValue = event => {
        this.requestObject.yeast.value = event.target.value;
        this.requestObject = CloneObject(this.requestObject);
    }

    @action changeBrewedDate = event => {
        this.requestObject.brewed.value = event.target.value;
        this.requestObject = CloneObject(this.requestObject);
    }

    @action changeHopsValue = event => {
        this.requestObject.hops.value = event.target.value;
        this.requestObject = CloneObject(this.requestObject);
    }

    @action changeMaltValue = event => {
        this.requestObject.malt.value = event.target.value;
        this.requestObject = CloneObject(this.requestObject);
    }

    @action changeFoodValue = event => {
        this.requestObject.food.value = event.target.value;
        this.requestObject = CloneObject(this.requestObject);
    }
}

