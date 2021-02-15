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


render()
    {

        return (


            <>
                <div className="page-blocks">

                    <div className="first-block">
                        <button onClick={e=>{this.handleSecondClick(e); this.setState({first: "AN"})} }>AN/PVS-14 Night Vision Monocular</button>
                        <button onClick={e=>{this.handleSecondClick(e); this.setState({first: "PNV10"})}}>PNV-10T Night Vision</button>
                        <button onClick={e=>{this.handleSecondClick(e); this.setState({first: "N15"})}}>Armasight N-15 Night Vision</button>
                        <button onClick={e=>{this.handleSecondClick(e); this.setState({first: "GPNV"})}}>GPNVG-18 Night Vision</button>
                        <a>............................................</a>
                        <button onClick={e=>{this.handleSecondClick(e); this.setState({first: "T7"})}}>T-7 Thermal Goggles with Night Vision Mounts</button>
                    </div>

                    <div className="second-block" id="second-block">
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "PK6"})}}>Belomo PK-06 reflex sight</button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "T1"})}}>Aimpoint Micro T-1 reflex sight</button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "FF3"})}}>	Burris FastFire 3 Reflex Sight</button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "DP"})}}>Leupold DeltaPoint Reflex Sight</button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "RMR"})}}>Trijicon RMR</button>
                        <button onClick={e=>{this.handleThirdClick(e); this.setState({second: "R4"})}}>	Sig Sauer Romeo 4 reflex sight	</button>
                      </div>

                    <div className="third-block" id="third-block">
                        <div className="third-block title">
                            <h1>{this.state.first}</h1>
                            <h1>{this.state.second}</h1>
                        </div>
                        <div className="third-block gif-block">
                            <img src={'/' + this.state.first + this.state.second + '1.jpg'} className="third-block gif-block pic" alt="Left Pic"/>
                            <img src={'/' + this.state.first + this.state.second + '2.jpg'} className="third-block gif-block  pic" alt="Right Pic"/>
                        </div>
                    </div>

                </div>
    </>
        );
    }

}

export default SightsNVD;