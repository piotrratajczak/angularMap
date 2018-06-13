import React, {Component} from 'react';
import { render } from "react-dom";
import { Map } from 'very-simple-react-map';

export default class ReactMap{

    static initialize(options:any):void{
      // render(<Map/>, document.getElementById('react-map'));
      //- do tego potrzebuje tsx, ale nie chce mi webpack chodzić, wiec robie js
      // zamiast jsx - spytaj o to Mateusza
      render(React.createElement(Map, {...options}), document.getElementById("react-map"));
    }

}
