import React from "react"
import logo from "../images/GrinningGod_Black.png" // Tell webpack this JS file uses this image
console.log(logo) // /logo.84287d09.png
function LogoBar() {
    // Import result is the URL of your image
    return <img src={logo} alt="Logo" />
}
export default LogoBar