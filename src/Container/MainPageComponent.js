import React from "react";
import HomePageComponent from "../Components/Contents/HomePageComponent/HomePageComponent";
import {FORM, HOME, PSYCHOLOGIST, WORK_WITH_WEBSITE} from "../Controller/types/RouteTypes";

class MainPageComponent extends React.Component{
    constructor(props) {
        super(props);
        this.content = 'Null';
    }

    render() {

        switch (this.props.contentType){
            case HOME:
                this.content = <HomePageComponent/>;
                break;
            case PSYCHOLOGIST:
                this.content = <HomePageComponent/>;
                break;
            case FORM:
                this.content = <HomePageComponent/>;
                break;
            case WORK_WITH_WEBSITE:
                this.content = <HomePageComponent/>;
                break;
            default:
                this.content = 'None';
                break;
        }
        return (
            <div>
                {this.content}
            </div>
        );
    }
}

export default MainPageComponent;