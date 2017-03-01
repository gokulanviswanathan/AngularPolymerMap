import { EventEmitter, Output, Component } from "@angular/core";

@Component({
    selector: 'map-app',
    template: `
  <h3 class="mapHeading">Polymer and Angular (2) integration</h3>
  
  <div class = "mapContainerDiv" align="center">
    <google-map class = "googlMap" latitude={{lat}} longitude={{long}} disableDefaultUI>
        <google-map-marker latitude={{lat}} longitude={{long}} title={{title}} click-events="true" (google-map-marker-click)="clickedMarker()">
        </google-map-marker>
    </google-map>
  </div>
  
  <div align="center">
    <slist-button class = "switchButton" text="Toggle places" toggles (click)="switch()"></slist-button>
    <footer class="mapFooter">Please click on Toggle Places button to switch between Office and Home</footer>
  </div>
  `
})

export class MapApp {
    /*https://elements.polymer-project.org/elements/google-map*/
    lat: string;
    long: string;
    title: string;
    constructor() {
        this.lat = "10.819920"
        this.long = "78.686169"
        this.title = "MY_HOME";
    }

    clickedMarker() {
        this.switch();
    }

    switch() {
        if (this.title == "MY_HOME") {

            this.lat = "8.533297"
            this.long = "76.883397"
            this.title = "INFOSYS";
        }
        else {
            this.lat = "10.819920"
            this.long = "78.686169"
            this.title = "MY_HOME";
        }
    }
}