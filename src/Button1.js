import React, {Component} from 'react';

class Button1 extends Component {
    
    constructor(props) {
        super(props)

        this.clickHandlerBlue=this.clickHandlerBlue.bind(this);
        this.clickHandlerRed=this.clickHandlerRed.bind(this);
        this.clickHandlerGreen=this.clickHandlerGreen.bind(this);
        this.clickHandlerWhite=this.clickHandlerWhite.bind(this);

        this.state = {color: null};
    }

    clickHandlerBlue() {
        this.setState({color: 'blue'})
    }

    clickHandlerRed() {
        this.setState({color: 'red'})
    }

    clickHandlerGreen() {
        this.setState({color: 'green'})
    }

    clickHandlerWhite() {
        this.setState({color: 'white'})
    }

    render() {
        return(
           <> 
               
               <div className={'container'} style={{backgroundColor: this.state.color}}>
                <button className={'blue'} onMouseEnter={this.clickHandlerBlue} onMouseLeave={this.clickHandlerWhite}>BLUE</button>
                <button className={'red'} onMouseEnter={this.clickHandlerRed} onMouseLeave={this.clickHandlerWhite}>RED</button>
                <button className={'green'} onMouseEnter={this.clickHandlerGreen} onMouseLeave={this.clickHandlerWhite}>GREEN</button>
               </div>
           </> 
        )
    }
}

export default Button1