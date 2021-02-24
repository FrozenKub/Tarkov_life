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
            document.getElementById("second-block").style.display = "flex";
    }

    handleThirdClick(e)
    {
        e.preventDefault();
            document.getElementById("third-block").style.display = "flex";
    }


    enlargeImg1() {

        let img1 = document.getElementById("LP");

        // Set image size to 1.5 times original
        if (img1.style.transform == "translate(0px, 50%) scale(1.5)")
        {
            // Set image size to original
            img1.style.transform = "scale(1) translate(0, 0) ";
            img1.style.transition = "transform 0.25s ease";
            img1.style.zIndex = "0";
        }
        else
        {
            let img2 = document.getElementById("RP");
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
<div className="footer">
    <a>Associated with Tarkov.Life</a>
    <a>   </a>
    <a>Developed by FrozenKub</a>
</div>


<div className="flex-wrapper">
                <a href="https://www.instagram.com/tarkov_life/" target="_blank">
                    <img src="/log.png" className="root-button" alt="Logo"/>
                </a>

                <div className="page-blocks">

                    <div className="first-block" id="first-block">

                        <a>NIGHT VISION DEVICES</a>
                        <button onClick={e=>{this.handleSecondClick(e); this.setState({first: "AN"})} }>AN/PVS-14 Night Vision Monocular <img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/25/PVS-14_Icon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleSecondClick(e); this.setState({first: "PNV10"})}}>PNV-10T Night Vision<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e8/PNV10TIcon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleSecondClick(e); this.setState({first: "N15"})}}>Armasight N-15 Night Vision<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/f3/Armasightn15icon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleSecondClick(e); this.setState({first: "GPNV"})}}>GPNVG-18 Night Vision<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/a0/Gpnvgicon.png" className="small-pic"/></button>
                        <br/><br/>
                        <a>THERMAL VISION DEVICES</a>
                        <button onClick={e=>{this.handleSecondClick(e); this.setState({first: "T7"})}}>T-7 Thermal Goggles with Night Vision Mounts<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/d5/T-7_Icon.PNG" className="small-pic"/></button>
                    </div>

                    <div className="second-third">
                    <div className="second-block" id="second-block">
                        <a>COMPACT REFLEX SIGHTS</a>
                        <br/>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "PK6"})}}>Belomo PK-06 Reflex Sight<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/62/Pk-06icon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "T1"})}}>Aimpoint Micro T-1 Reflex Sight<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/20/T-1icon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "FF3"})}}>	Burris FastFire 3 Reflex Sight<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/0c/Ff3icon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "DP"})}}>Leupold DeltaPoint Reflex Sight<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/75/Dpicon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "RMR"})}}>Trijicon RMR<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/bd/Rmricon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "R4"})}}>	Sig Sauer Romeo 4 Reflex Sight<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/ca/Sig_Sauer_Romeo_4_reflex_sight_icon.png" className="small-pic"/></button>
                        <br/><br/>
                        <a>ASSAULT SCOPES</a>
                        <br/>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "DR1"})}}>ELCAN SpecterDR 1x/4x Scope<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/aa/SpectreDR_Icon.gif" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "HAMR"})}}>Leupold Mark 4 HAMR 4x24mm DeltaPoint hybrid assault Scope<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/33/Hamricon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "PRISM"})}}>Primary Arms Compact prism Scope 2.5x<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/a0/Primary_Arms_Compact_prism_scope_2.5x_icon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "BRAVO4"})}}>Sig BRAVO4 4X30 Scope<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e9/Bravo4icon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "TA11D"})}}>Trijicon ACOG 3.5x35 Scope<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/b4/Acogicon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "TA01NSN"})}}>Trijicon ACOG TA01NSN 4x32 Scope<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/67/Trijicon_ACOG_TA01NSN_4x32_scope_icon.gif" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "PS320"})}}>Valday PS-320 1x/6x Scope<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/c2/Valday_PS-320_icon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "MONSTR"})}}>Monstrum Compact prism Scope 2x32<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/21/Monstrum2x32_Icon.png" className="small-pic"/></button>
                        <br/><br/>
                        <a>SPECIAL SCOPES</a>
                        <br/>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "VULCAN"})}}>Vulcan MG night scope 3.5x<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/a4/Vulcan_MG_night_scope_3.5x_Icon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "REAP"})}}>Trijicon REAP-IR thermal riflescope<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/1d/Thermalicon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "NSPU"})}}>NSPU-M night Scope<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/19/Nspu-micon.png" className="small-pic"/></button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "RS32"})}}>FLIR RS-32 2.25-9x 35mm 60Hz thermal riflescope<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/94/FLIR_RS-32_Icon.png" className="small-pic"/></button>
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
                    <img src="/back.png" alt="Left Pic"/>
                </div>
</div>
</div>
        );
    }

}

export default SightsNVD;