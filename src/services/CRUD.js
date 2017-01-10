import React, {Component} from "react";
import store from "store";

export default class CRUDService extends Component {

    constructor(props) {
        super();
    }

    create(dataFolder, data) {
        let dataLocation = store.get(dataFolder);
        if (dataLocation) {
            dataLocation.push(data);
        } else {
            dataLocation = [data];
        }
        store.set([dataLocation], dataFolder);
    }
}