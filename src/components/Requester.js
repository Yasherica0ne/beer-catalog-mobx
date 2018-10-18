import ParamEnum from './ParamEnum';

let queryString;

function GetParamValue(enumValue) {
    if (enumValue == ParamEnum.ValueGreater) return 'gt';
    else if (enumValue == ParamEnum.ValueLower) return 'lt';
    else return null;
}

function CreateParamVithAddedOption(item, paramName) {
    if (item.value) {
        const option = GetParamValue(item.added);
        if (!option) return;
        else {
            const param = `&${paramName}_${option}=${item.value}`;
            queryString += param;
        }
    }
}

function CreateParamForBrewedDate(item) {
    if (item.value) {
        debugger;
        let option = '';
        if (item.added == ParamEnum.ValueLower) {
            option = 'before';
        }
        else if (item.added == ParamEnum.ValueGreater) {
            option = 'after';
        }
        const param = `&brewed_${option}=${item.value}`;
        queryString += param;
    }
}

function CreateParam(item, paramName) {
    if (item.value) {
        const value = MakeSearchString(item.value);
        const param = `&${paramName}=${value}`;
        queryString += param;
    }
}

function SendRequest(queryString, func) {
    fetch(queryString)
        .then(response => response.json())
        .then(data => {
            func(data);
        })
}

function MakeSearchString(searchString) {
    const str = searchString.split(' ');
    const result = str.join('_');
    return result;
}

class Requester {
    constructor() {
        this.requester = (page, requestObject, loadItems) => {
            queryString = `https://api.punkapi.com/v2/beers?page=${page}`;

            CreateParamVithAddedOption(requestObject.ABV, 'abv');
            CreateParamVithAddedOption(requestObject.IBU, 'ibu');
            CreateParamVithAddedOption(requestObject.EBC, 'ebc');

            CreateParam(requestObject.beerName, 'beer_name');
            CreateParam(requestObject.yeast, 'yeast');

            CreateParamForBrewedDate(requestObject.brewed);

            CreateParam(requestObject.hops, 'hops');
            CreateParam(requestObject.malt, 'malt');
            CreateParam(requestObject.food, 'food');

            SendRequest(queryString, loadItems)
        }

        this.getRandomBeer = (changeSelected) => {
            SendRequest('https://api.punkapi.com/v2/beers/random', changeSelected);
        }
    }
}

export default Requester;