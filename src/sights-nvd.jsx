import React from "react";
import * as cn from 'classnames';

class SightsNVD extends React.Component{

    constructor(props) {
        super(props);

        this.state = {first: "", second: "", second_third: "second-third", second_block: "second-block", third_block: "third-block", second_pic: "second-pic", first_pic: "first-pic", update: "updated", menu: ""}
        this.imgline1= JSON.stringify("/" + this.state.first + this.state.second + "1.jpg");
    }

    handleSecondClick(e)
    {
        e.preventDefault();
        this.setState({second_third: "second-third-unhidden", second_block: "second-block-unhidden"})
    }

    handleThirdClick(e)
    {
        e.preventDefault();
        this.setState({third_block: "third-block-unhidden"})
    }

    enlargeImg1(e) {
        e.preventDefault();
        if (this.state.first_pic === "first-pic-upscaled" )
            this.setState({first_pic: "first-pic"})
        else this.setState({first_pic: "first-pic-upscaled"})
    }

    enlargeImg2(e) {
        e.preventDefault();
        if (this.state.second_pic === "second-pic-upscaled" )
            this.setState({second_pic: "second-pic"})
        else this.setState({second_pic: "second-pic-upscaled"})
    }

    handleOpen(e, menu)
    {
        if (document.getElementById(menu).style.display == "grid")
        {
            document.getElementById(menu+ "_BUT").style.color = "#777667";
            document.getElementById(menu+ "_BUT").style.backgroundColor = "#00000000";
            document.getElementById(menu).style.display = "none";
        }
        else
        {
            document.getElementById(menu+ "_BUT").style.color = "black";
            document.getElementById(menu+ "_BUT").style.backgroundColor = "#777667";
            document.getElementById(menu).style.display = "grid";
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
                                <button onClick={e=>{this.handleSecondClick(e); this.setState({first: "AN"})} }>PSV-14<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/25/PVS-14_Icon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleSecondClick(e); this.setState({first: "PNV10"})}}>PNV-10T<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e8/PNV10TIcon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleSecondClick(e); this.setState({first: "N15"})}}>N-15<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/f3/Armasightn15icon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleSecondClick(e); this.setState({first: "GPNV"})}}>GPNVG-18<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/a0/Gpnvgicon.png" className="small-pic"/></button>
                        </div>
                        <div className={this.state.second_third} id="second-third-block">
                        <div className={this.state.second_block} id="second-block">
                                <button className="lighter-button" id="CRS_BUT" onClick={e=>{this.handleOpen(e, "CRS");}}> COMPACT REFLEX SIGHTS</button>
                            <div id="CRS" className="menu-pop">
                                <button id="CRS" onClick={e=>{this.handleThirdClick(e); this.setState({second: "PK6"})}}>PK-06<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/62/Pk-06icon.png" className="small-pic"/></button>
                                <button id="CRS" onClick={e=>{this.handleThirdClick(e); this.setState({second: "T1"})}}>T-1<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/20/T-1icon.png" className="small-pic"/></button>
                                <button id="CRS" onClick={e=>{this.handleThirdClick(e); this.setState({second: "FF3"})}}>FF3<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/0c/Ff3icon.png" className="small-pic"/></button>
                                <button id="CRS" onClick={e=>{this.handleThirdClick(e); this.setState({second: "DP"})}}>DP<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/75/Dpicon.png" className="small-pic"/></button>
                                <button id="CRS" onClick={e=>{this.handleThirdClick(e); this.setState({second: "RMR"})}}>RMR<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/bd/Rmricon.png" className="small-pic"/></button>
                                <button id="CRS" onClick={e=>{this.handleThirdClick(e); this.setState({second: "R4"})}}>Romeo 4<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/ca/Sig_Sauer_Romeo_4_reflex_sight_icon.png" className="small-pic"/></button>
                            </div>


                            <button className="lighter-button" id="RS_BUT" onClick={e=>{this.handleOpen(e, "RS");}}>REFLEX SIGHTS</button>
                            <div id="RS" className="menu-pop">
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "COMP"})}}>COMP M4<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/74/Comp_M4_Icon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "EKP02"})}}>EKP-8-02<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/20/T-1icon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "EKP18"})}}>EKP-8-18<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/0c/Ff3icon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "553"})}}>553<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/75/Dpicon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "EXPS3"})}}>EXPS3<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/bd/Rmricon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "HHS1"})}}>HHS-1<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/ca/Sig_Sauer_Romeo_4_reflex_sight_icon.png" className="small-pic"/></button>

                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "XPS30"})}}>XPS3-0<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/74/Comp_M4_Icon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "XPS32"})}}>XPS3-2<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/20/T-1icon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "HS401G5"})}}>HS401G5<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/0c/Ff3icon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "OKP7"})}}>OKP-7<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/75/Dpicon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "OKP7D"})}}>OKP-7 Dov<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/bd/Rmricon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "P1X42"})}}>P1X42<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/ca/Sig_Sauer_Romeo_4_reflex_sight_icon.png" className="small-pic"/></button>

                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "1P87"})}}>1P87<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/74/Comp_M4_Icon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "UH1"})}}>UH-1<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/20/T-1icon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "MRS"})}}>MRS<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/0c/Ff3icon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "RING"})}}>Ring<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/75/Dpicon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "SRS02"})}}>SRS-02<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/bd/Rmricon.png" className="small-pic"/></button>
                            </div>

                                <button className="lighter-button" id="AS_BUT" onClick={e=>{this.handleOpen(e, "AS");}}> ASSAULT SCOPES</button>
                            <div id="AS" className="menu-pop">
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "DR1"})}}>DR1/4x<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/aa/SpectreDR_Icon.gif" className="small-pic"/></button>
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "HAMR"})}}>HAMR<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/33/Hamricon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "PRISM"})}}>Prism 2.5x<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/a0/Primary_Arms_Compact_prism_scope_2.5x_icon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "BRAVO4"})}}>BRAVO4<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e9/Bravo4icon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "TA11D"})}}>TA11D<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/b4/Acogicon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "TA01NSN"})}}>TA01NSN<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/67/Trijicon_ACOG_TA01NSN_4x32_scope_icon.gif" className="small-pic"/></button>
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "PS320"})}}>PS320 1x/6x<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/c2/Valday_PS-320_icon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "MONSTR"})}}>Monstr. 2x32<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/21/Monstrum2x32_Icon.png" className="small-pic"/></button>
                            </div>
                                <button className="lighter-button" id="SC_BUT" onClick={e=>{this.handleOpen(e, "SC");}}>SPECIAL SCOPES</button>
                            <div id="SC" className="menu-pop">
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "VULCAN"})}}>Vulcan MG 3.5x<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/a4/Vulcan_MG_night_scope_3.5x_Icon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "REAP"})}}>REAP-IR<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/1d/Thermalicon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "NSPU"})}}>NSPU-M<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/19/Nspu-micon.png" className="small-pic"/></button>
                                <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "RS32"})}}>RS-32<img src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/94/FLIR_RS-32_Icon.png" className="small-pic"/></button>
                            </div>
                        </div>

                        <div className={this.state.third_block} id="third-block">
                            <div className="third-block title">
                                <h1>{this.state.first}</h1>
                                <h1>{this.state.second}</h1>
                            </div>
                            <div className="third-block gif-block">
                                <img src={'/' + this.state.first + this.state.second + '1.jpg'} onClick={e=> this.enlargeImg1(e)} className={this.state.first_pic} alt="Left Pic" id="LP"/>
                                <img src={'/' + this.state.first + this.state.second + '2.jpg'} onClick={e=> this.enlargeImg2(e)} className={this.state.second_pic} alt="Right Pic" id="RP"/>
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