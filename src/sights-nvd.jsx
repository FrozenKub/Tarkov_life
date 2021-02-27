import React from "react";

class SightsNVD extends React.Component{

    constructor(props) {
        super(props);

        this.state = {first: "", second: ""}
        this.imgline1= JSON.stringify("/" + this.state.first + this.state.second + "1.jpg");
    }

    handleSecondClick(e)
    {
        e.preventDefault();
            document.getElementById("second-block").style.display = "grid";
            document.getElementById("second-third-block").style.display = "grid";
    }

    handleThirdClick(e)
    {
        e.preventDefault();
            document.getElementById("third-block").style.display = "flex";
    }


    enlargeImg1() {

        let img1 = document.getElementById("LP");
        let img2 = document.getElementById("RP");

        if (img1.style.transform == "translate(0px, 50%) scale(1.5)")
        {
            img1.style.transform = "scale(1) translate(0, 0) ";
            img1.style.transition = "transform 0.25s ease";
        }
        else
        {
            img2.style.transform = "scale(1) translate(0, 0) ";
            img2.style.transition = "transform 0.25s ease";
            img2.style.zIndex = "0";
            img1.style.zIndex = "1";
            img1.style.transform = "translate(0, 50%) scale(1.5)";
            img1.style.transition = "transform 0.25s ease";
        }
    }



    enlargeImg2() {

        let img2 = document.getElementById("RP");

        if (img2.style.transform == "translate(0px, -50%) scale(1.5)")
        {
            img2.style.transform = "scale(1) translate(0, 0) ";
            img2.style.transition = "transform 0.25s ease";
            img2.style.zIndex = "0";
        }
        else
        {
            let img1 = document.getElementById("LP");
            img1.style.transform = "scale(1) translate(0, 0) ";
            img1.style.transition = "transform 0.25s ease";
            img1.style.zIndex = "0";
            img2.style.zIndex = "1";
            img2.style.transform = "translate(0, -50%) scale(1.5)";
            img2.style.transition = "transform 0.25s ease";
        }
    }



    render()
    {

        return (

<div>


<div className="flex-wrapper">
                <a href="https://www.instagram.com/tarkov_life/" target="_blank">
                    <img src="/log.png" className="root-button" alt="Logo"/>
                </a>

                <div className="page-blocks">

                    <div className="first-block" id="first-block">

                        <a>NIGHT VISION DEVICES</a>
                        <button onClick={e=>{this.handleSecondClick(e); this.setState({first: "AN"})} }>PSV-14<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/25/PVS-14_Icon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleSecondClick(e); this.setState({first: "PNV10"})}}>PNV-10T<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e8/PNV10TIcon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleSecondClick(e); this.setState({first: "N15"})}}>N-15<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/f3/Armasightn15icon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleSecondClick(e); this.setState({first: "GPNV"})}}>GPNVG-18<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/a0/Gpnvgicon.png" className="small-pic"/></button>
                        <br/><br/>
                        <a>THERMAL VISION DEVICES</a>
                        <button onClick={e=>{this.handleSecondClick(e); this.setState({first: "T7"})}}>T-7<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/d5/T-7_Icon.PNG" className="small-pic"/></button>
                    </div>

                    <div className="second-third" id="second-third-block">
                    <div className="second-block" id="second-block">
                        <a>COMPACT REFLEX SIGHTS</a>
                        <br/>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "PK6"})}}>PK-06<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/62/Pk-06icon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "T1"})}}>T-1<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/20/T-1icon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "FF3"})}}>FF3<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/0c/Ff3icon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "DP"})}}>DP<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/75/Dpicon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "RMR"})}}>RMR<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/bd/Rmricon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "R4"})}}>Romeo 4<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/ca/Sig_Sauer_Romeo_4_reflex_sight_icon.png" className="small-pic"/></button>
                        <br/><br/>
                        <a>ASSAULT SCOPES</a>
                        <br/>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "DR1"})}}>DR1/4x<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/aa/SpectreDR_Icon.gif" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "HAMR"})}}>HAMR<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/33/Hamricon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "PRISM"})}}>Prism 2.5x<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/a0/Primary_Arms_Compact_prism_scope_2.5x_icon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "BRAVO4"})}}>BRAVO4<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e9/Bravo4icon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "TA11D"})}}>TA11D<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/b4/Acogicon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "TA01NSN"})}}>TA01NSN<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/67/Trijicon_ACOG_TA01NSN_4x32_scope_icon.gif" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "PS320"})}}>PS320 1x/6x<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/c2/Valday_PS-320_icon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "MONSTR"})}}>Monstr. 2x32<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/21/Monstrum2x32_Icon.png" className="small-pic"/></button>
                        <br/><br/>
                        <a>SPECIAL SCOPES</a>
                        <br/>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "VULCAN"})}}>Vulcan MG 3.5x<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/a4/Vulcan_MG_night_scope_3.5x_Icon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "REAP"})}}>REAP-IR<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/1d/Thermalicon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "NSPU"})}}>NSPU-M<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/19/Nspu-micon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "RS32"})}}>RS-32<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/94/FLIR_RS-32_Icon.png" className="small-pic"/></button>

                    </div>

                    <div className="third-block" id="third-block">
                        <div className="third-block title">
                            <h1>{this.state.first}</h1>
                            <h1>{this.state.second}</h1>
                        </div>
                        <div className="third-block gif-block">
                            <img src={'/' + this.state.first + this.state.second + '1.jpg'} onClick={this.enlargeImg1} className="third-block gif-block pic" alt="Left Pic" id="LP"/>
                            <img src={'/' + this.state.first + this.state.second + '2.jpg'} onClick={this.enlargeImg2} className="third-block gif-block  pic" alt="Right Pic" id="RP"/>
                        </div>
                    </div>

                    </div>

                </div>

                <div className="full-screen">
                    <div className="footer">
                        <a>Associated with Tarkov.Life</a>
                        <a>Developed by FrozenKub</a>
                    </div>

                    <img src="/back.png" alt="Left Pic"/>
                </div>
</div>
</div>
        );
    }

}

export default SightsNVD;