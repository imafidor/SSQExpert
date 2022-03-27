import React, { PureComponent } from 'react'
import './QuestionnairePane.css'

class QuestionnairePane extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (<div className='pane'>{this.props.children}</div>
            
        )
    }
}

export default QuestionnairePane