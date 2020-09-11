import React from "react"
import { tools } from "./languages.js"

class ToolsContainer extends React.Component {

    constructor() {
        super()
    }

    render() {

        const newTools = tools.map((element) => {
            console.log(element)
            return <li>{element}</li>
        })

        return(
            <div className="List">
                <h3>Tools</h3>
                <ul>
                    {newTools}
                </ul>
            </div>
        )
    }
}

export default ToolsContainer
