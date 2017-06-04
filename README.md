# React UI Library by San Yang
This is an internal project to build UI Webs/Apps.

Note: Please include bootraps css in your *index.html* 

    `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">`


>BUTTON

>DATE PICKER

>DIALOG

>DROPDOWN

>IMAGE

>LISTVIEW

>OVERLAY
1. Overview

    A component to show a dark overlay layer with opacity. 

2. *Props* list

    a. className

        type: (string) . Ex: 'overlay'

    b. onClick

        type: (function). Ex: () => {}

3. Usage

         import { Overlay } from 'sy_react_ui';
         import React from 'react';

         class ExampleOverlay extends React.Components {
             constructor(props){
                 super(props);
             }

             render(){
                return <Overlay onClick={this.onClick.bind(this)} />
             }

             onClick() {
                 console.log('onClick');
             }
         }


>PASSWORD FIELD

>SEARCH BOX 
1. Overview

    A component to search a string from a string array.

2. *Props* list

    a. onChange 

         type: (function) . Ex: (newValue) => {}
    
    b. onEnter

         type: (function) . Ex: (newValue) => {}

    c. intellisenseData

         type: (string[]) . Ex: ['Dog', 'Cat', 'Mouse', 'Chicken']

    d. className

         type: (string) . Ex: 'searchBox'

3. Usage

         import { SearchBox } from 'sy_react_ui';
         import React from 'react';

         class ExampleSearchBox extends React.Components {
             constructor(props){
                 super(props);


             }

             render(){
                var data = ['AAA','BBB','CCC','DDD','EEE'];
                return <SearchBox onEnter={this.onEnter.bind(this)}
                                  onChange={this.onChange.bind(this)
                                  intellisenseData={data}}   />
             }

             onEnter(value){
                 console.log(value);
             }

             onChange(value){
                 console.log(value);
             }
         }
         

>SIDEBAR MENU

>TEXT
1. Overview

    A popular component to display text. 

2. *Props* list

    a. text
    A string to show value of the component

        type: (string) . Ex: 'This is a text.'

    b. onClick

        type: (function). Ex: () => {}
    c. className

        type: (string). Ex:'text'

3. Usage

         import { Text } from 'sy_react_ui';
         import React from 'react';

         class ExampleText extends React.Components {
             constructor(props){
                 super(props);
             }

             render(){
                return <Text text="This is an example" onClick={this.onClick.bind(this)} />
             }

             onClick() {
                 console.log('onClick');
             }
         }





> TEXT INPUT