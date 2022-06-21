import React from "react";
import HomePageComponent from "../../Components/Contents/HomePageComponent/HomePageComponent";
import {
    EMPLOYEE_ACCOUNT,
    FORUM, FORUM_CATALOGS, FORUM_CHAT, FORUM_CREATING, CATALOGS_FORUMS_LIST, GALLERY, GALLERY_CATALOG_IMAGES,
    HOME,
    PSYCHOLOGIST, PSYCHOLOGIST_APPOINTMENT,
    PUBLICATIONS,
    PUBLICATIONS_PUBLICATION, USER, USER_ACCOUNT,
    WORK_WITH_WEBSITE
} from "../../Controller/types/RouteTypes";
import classes from "./MainPageStyle.module.scss";
import MainMenuComponent from "../../Components/Menu/MainMenuComponent/MainMenuComponent";
import FooterComponent from "../../Components/Footer/FooterComponent";
import PublicationsPageComponent from "../../Components/Contents/PublicationsPageComponent/PublicationsPageComponent";
import PublicationMoreInfoComponent
    from "../../Components/Contents/PublicationsPageComponent/PublicationMoreInfo/PublicationMoreInfoComponent";
import ForumPageComponent from "../../Components/Contents/ForumPageComponent/ForumPageComponent";
import ForumsComponent from "../../Components/Contents/ForumPageComponent/ForumsList/ForumsComponent";
import PsychologistPageComponent from "../../Components/Contents/PsychologistPageComponent/PsychologistPageComponent";
import WorkWithWebsitePageComponent
    from "../../Components/Contents/WorkWithWebsitePageComponent/WorkWithWebsitePageComponent";
import AppointmentComponent from "../../Components/Contents/PsychologistPageComponent/Appointment/AppointmentComponent";
import ForumChatComponent from "../../Components/Contents/ForumPageComponent/ForumChat/ForumChatComponent";
import UserAccountPage from "../../Components/Contents/UserPageComponent/userAccount/userAccountPage";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateNewForum from "../../Components/Contents/ForumPageComponent/CreateNewForum/CreateNewForum";
import RoleController from "../../Components/Contents/UserPageComponent/RoleController";
import EmployeeAccountPage from "../../Components/Contents/UserPageComponent/EmployeeAccount/EmployeeAccountPage";
import GalleryPage from "../../Components/Contents/GalleryPageComponent/GalleryPage";
import ForumCatalogs from "../../Components/Contents/ForumPageComponent/ForumCatalogs/ForumCatalogs";
import ImagesOfCatalog from "../../Components/Contents/GalleryPageComponent/ImageOfCatalog/ImagesOfCatalog";


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
            case PSYCHOLOGIST_APPOINTMENT:
                this.content = <AppointmentComponent/>;
                break;
            case PUBLICATIONS:
                this.content = <PublicationsPageComponent/>
                break;
            case GALLERY:
                this.content = <GalleryPage/>
                break;
            case GALLERY_CATALOG_IMAGES:
                this.content = <ImagesOfCatalog/>
                break;
            case FORUM:
                this.content = <ForumPageComponent/>;
                break;
            case FORUM_CATALOGS:
                this.content = <ForumCatalogs/>;
                break;
            case CATALOGS_FORUMS_LIST:
                this.content = <ForumsComponent/>;
                break
            case FORUM_CHAT:
                this.content = <ForumChatComponent/>;
                break;
            case FORUM_CREATING:
                this.content = <CreateNewForum/>
                break;
            case WORK_WITH_WEBSITE:
                this.content = <WorkWithWebsitePageComponent/>;
                break;
            case PUBLICATIONS_PUBLICATION:
                this.content = <PublicationMoreInfoComponent/>;
                break;
            case USER:
                this.content = <RoleController/>;
                break;
            case USER_ACCOUNT:
                this.content = <UserAccountPage/>;
                break;
            case EMPLOYEE_ACCOUNT:
                this.content = <EmployeeAccountPage/>;
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

                <ToastContainer
                    autoClose={15000}
                />
            </div>
        );
    }
}


export default MainPageComponent;