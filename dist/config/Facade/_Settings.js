"use strict";
class Settings {
    constructor() {
        this.port = process.env.PORT || '';
    }
    getPort() {
        return this.port;
    }
}
let settings = new Settings();
module.exports = {
    settings,
};
