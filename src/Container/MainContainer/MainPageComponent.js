import React from "react";
import HomePageComponent from "../../Components/Contents/HomePageComponent/HomePageComponent";
import {
    FORM, FORMS_LIST,
    HOME,
    PSYCHOLOGIST,
    PUBLICATIONS,
    PUBLICATIONS_PUBLICATION,
    WORK_WITH_WEBSITE
} from "../../Controller/types/RouteTypes";
import classes from "./MainPageStyle.module.scss";
import MainMenuComponent from "../../Components/Menu/MainMenuComponent/MainMenuComponent";
import FooterComponent from "../../Components/Footer/FooterComponent";
import PublicationsPageComponent from "../../Components/Contents/PublicationsPageComponent/PublicationsPageComponent";
import PublicationMoreInfoComponent
    from "../../Components/Contents/PublicationsPageComponent/PublicationMoreInfo/PublicationMoreInfoComponent";
import FormPageComponent from "../../Components/Contents/FormPageComponent/FormPageComponent";
import FormsComponent from "../../Components/Contents/FormPageComponent/FormsList/FormsComponent";
import PsychologistPageComponent from "../../Components/Contents/PsychologistPageComponent/PsychologistPageComponent";
import WorkWithWebsitePageComponent
    from "../../Components/Contents/WorkWithWebsitePageComponent/WorkWithWebsitePageComponent";

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
                this.content = <PsychologistPageComponent/>;
                break;
            case PUBLICATIONS:
                this.content = <PublicationsPageComponent/>
                break;
            case FORM:
                this.content = <FormPageComponent/>;
                break;
            case FORMS_LIST:
                this.content = <FormsComponent/>;
                break
            case WORK_WITH_WEBSITE:
                this.content = <WorkWithWebsitePageComponent/>;
                break;
            case PUBLICATIONS_PUBLICATION:
                this.content = <PublicationMoreInfoComponent/>;
                break;
            default:
                this.content = 'None';
                break;
        }
        return (
            <div className={classes.main_wrapper}>
                <MainMenuComponent/>
                {this.content}
                <FooterComponent/>
            </div>
        );
    }
}

export default MainPageComponent;