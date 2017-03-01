"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var MapApp = (function () {
    function MapApp() {
        this.lat = "10.819920";
        this.long = "78.686169";
        this.title = "MY_HOME";
    }
    MapApp.prototype.clickedMarker = function () {
        this.switch();
    };
    MapApp.prototype.switch = function () {
        if (this.title == "MY_HOME") {
            this.lat = "8.533297";
            this.long = "76.883397";
            this.title = "INFOSYS";
        }
        else {
            this.lat = "10.819920";
            this.long = "78.686169";
            this.title = "MY_HOME";
        }
    };
    return MapApp;
}());
MapApp = __decorate([
    core_1.Component({
        selector: 'map-app',
        template: "\n  <h3 class=\"mapHeading\">Polymer and Angular (2) integration</h3>\n  \n  <div class = \"mapContainerDiv\" align=\"center\">\n    <google-map class = \"googlMap\" latitude={{lat}} longitude={{long}} disableDefaultUI>\n        <google-map-marker latitude={{lat}} longitude={{long}} title={{title}} click-events=\"true\" (google-map-marker-click)=\"clickedMarker()\">\n        </google-map-marker>\n    </google-map>\n  </div>\n  \n  <div align=\"center\">\n    <slist-button class = \"switchButton\" text=\"Toggle places\" toggles (click)=\"switch()\"></slist-button>\n    <footer class=\"mapFooter\">Please click on Toggle Places button to switch between Office and Home</footer>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], MapApp);
exports.MapApp = MapApp;
//# sourceMappingURL=map.component.js.map