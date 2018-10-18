import ValueParam from './ParamEnum';

class RequestObject {
    constructor(){
        this.ABV = { value: '', added: ValueParam.ValueNone} ;
        this.IBU = { value: '', added: ValueParam.ValueNone} ;
        this.EBC = { value: '', added: ValueParam.ValueNone} ;
        this.beerName = { value: '', added: ValueParam.NoValue} ;
        this.yeast = { value: '', added: ValueParam.NoValue} ;
        this.brewed = { value: '', added: ValueParam.ValueNone} ;
        this.hops = { value: '', added: ValueParam.NoValue} ;
        this.malt = { value: '', added: ValueParam.NoValue} ;
        this.food = { value: '', added: ValueParam.NoValue} ;
    }
}

export default RequestObject;