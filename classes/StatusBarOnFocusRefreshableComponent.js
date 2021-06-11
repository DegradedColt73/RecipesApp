import { Component } from "react";

//class for Screen Components extension
export default class StatusBarOnFocusRefreshableComponent extends Component{
    constructor(props){
        super(props);
        const didFocusSubscribtion = this.props.navigation.addListener(
            'focus',
            payload => {
                this.forceUpdate();
            }
        )
    }
}