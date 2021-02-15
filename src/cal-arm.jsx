import React from "react";

class CalArm extends React.Component{

    constructor(props) {
        super(props);

    }


render()
    {

        return (

            <div className="full-screen">

                    <video src="/eft_back.mp4" autoPlay muted loop>
                    </video>


                <div className="centered">
                    <a href="/root">
                        <img src="https://upload.wikimedia.org/wikipedia/ru/7/7a/Escape_from_Tarkov_logo.png" className="main-page-buttons" alt="Logo"/>
                    </a>


                </div>

            </div>
        );
    }

}

export default CalArm;