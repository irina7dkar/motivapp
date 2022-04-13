import React, {Component} from 'react';
import Typist from 'react-typist';

export default class Text extends Component {

    render() {
        return (
            <Typist key={this.props.id} className={this.props.class} cursor={{show:false}}>
                <h3  id={"main_texts"}>{this.props.text}</h3>
{/*
                <h4>{this.props.text[1]}</h4>*/}
            </Typist>
        );
    }
}