import React, {Component} from "react";
import store from "store";

export default class CRUDService {

    create(dataFolder, data) {
        let storedData = store.get(dataFolder);
        if (storedData) {
            storedData.push(data);
        } else {
            storedData = [];
            storedData.push(data);
        }
        store.set([dataFolder], storedData);
    }
}