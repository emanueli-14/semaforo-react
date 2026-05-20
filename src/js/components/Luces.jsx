import React, { useState } from "react";


const Luces = () => {

    const [selected, setSelected] = useState("red")

    const cambiarColor = (color) => { 
        setSelected(color)
    }




    return (
        <main>
            <div className="palo-caja"></div>
            <div className="luces-caja">

                <div className={` red  ${selected == "red" ? "light-on" : ""} `}
                    onClick={() => cambiarColor("red")}>

                </div>
                <div className={` yellow  ${selected == "yellow" ? "light-on" : ""} `}
                    onClick={() => cambiarColor("yellow")}>
                </div>
                <div className={` green  ${selected == "green" ? "light-on" : ""} `}
                    onClick={() => cambiarColor("green")}>
                </div>

            </div>



        </main>

    )


}

export default Luces