import React from "react";

class Menu extends React.Component{

    constructor(props) {
        super(props);

    }


render()
    {

        return (
<>
            <div className="full-screen">

                    <video src="/eft_back.mp4" autoPlay muted loop>
                    </video>

            </div>

            <div className="centered">

                <img src="/log.png" className="main-page-logo" alt="Logo"/>

                <div className="main-page-menu">

                    <a href="/caliber-armor">
                        <img className="main-page-buttons"
                             src="https://i.redd.it/9yhj1lqzy6541.png" alt="button" />
                    </a>

                    <a href="/sights-nvd">
                        <img className="main-page-buttons"
                             src="https://forum.escapefromtarkov.com/uploads/monthly_2019_04/532535045_EscapeFromTarkovScreenshot2019_04.08-08_49_29_42.png.9b95c49431e8988e7052f623dc76b960.png" alt="button" />
                    </a>
                </div>
            </div>
</>
        );
    }

}

export default Menu;