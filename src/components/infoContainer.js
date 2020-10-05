import React from "react"
import { lang_en } from "./languages.js"


class InfoContainer extends React.Component {

    constructor() {

        super()
        this.state = {
            myLang: "lang_en"
        }
    }

    render() {

        return(
            <div className="Info">
                <p>
                    {lang_en.info}
                </p>
            </div>
        )
    }
}

export default InfoContainer