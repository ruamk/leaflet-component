/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface LeafletMap {
    'className': string;
    'defaultPopup': string;
    'iconHeight': number;
    'iconUrl': string;
    'iconWidth': number;
    'latitude': number;
    'longitude': number;
    'mapId': string;
    'scale': number;
    'showDefaultMarker': boolean;
    'showScale': boolean;
    'tileLayer': string;
    'userIconHeight': number;
    'userIconUrl': string;
    'userIconWidth': number;
    'userLatitude': number;
    'userLongitude': number;
  }
  interface LeafletMapAttributes extends StencilHTMLAttributes {
    'className'?: string;
    'defaultPopup'?: string;
    'iconHeight'?: number;
    'iconUrl'?: string;
    'iconWidth'?: number;
    'latitude'?: number;
    'longitude'?: number;
    'mapId'?: string;
    'scale'?: number;
    'showDefaultMarker'?: boolean;
    'showScale'?: boolean;
    'tileLayer'?: string;
    'userIconHeight'?: number;
    'userIconUrl'?: string;
    'userIconWidth'?: number;
    'userLatitude'?: number;
    'userLongitude'?: number;
  }
}

declare global {
  interface StencilElementInterfaces {
    'LeafletMap': Components.LeafletMap;
  }

  interface StencilIntrinsicElements {
    'leaflet-map': Components.LeafletMapAttributes;
  }


  interface HTMLLeafletMapElement extends Components.LeafletMap, HTMLStencilElement {}
  var HTMLLeafletMapElement: {
    prototype: HTMLLeafletMapElement;
    new (): HTMLLeafletMapElement;
  };

  interface HTMLElementTagNameMap {
    'leaflet-map': HTMLLeafletMapElement
  }

  interface ElementTagNameMap {
    'leaflet-map': HTMLLeafletMapElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
