import React from "react";
import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <h2>
                &copy; {new Date().getFullYear()}
                <a href="https://github.com/dserin"> SRN </a>
            </h2>
        </div >

    )
}
export default Footer