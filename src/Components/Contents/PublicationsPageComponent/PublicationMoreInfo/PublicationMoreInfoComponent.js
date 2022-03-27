import React from "react";
import classes from "./PublicationMoreInfoStyle.module.scss";
import {useNavigate} from "react-router-dom";

function PublicationMoreInfoComponent(){

    const navigate = useNavigate();

    const goBack = (e)=> {
        e.preventDefault();
        navigate(-1);
    }
    return(
        <div className={classes.publication_more_wrapper}>
            <div className={classes.title_wrapper}>
                СТАТЬЯ
            </div>
            <div className={classes.context_wrapper}>
                <span>
                    Название статьи
                    <button onClick={goBack}>
                        {"<- назад"}
                    </button>
                </span>
                <div>
                    <p>
                        Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.

                        Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.
                        Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et pulvinar eget.

                        Consectetur feugiat quis hac enim nullam in enim. Tellus nisi dapibus libero rutrum vitae nisl, cursus in sed. Egestas mi ultricies et consectetur vel non. Augue enim enim, eget ut sit purus, justo nisl pharetra. Tincidunt leo aenean dui, varius metus, vel. Maecenas eu rhoncus, est nunc nisi volutpat, amet venenatis faucibus. Enim, vel nunc purus feugiat purus tincidunt neque. Massa ultricies faucibus pellentesque risus duis est.
                    </p>
                    <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default PublicationMoreInfoComponent;