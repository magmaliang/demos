import React, {Component} from 'React';


class Cmpa_1 extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return <div>Cmpa_1</div>
    }
}

const ICmp = (Wrapper) =>
    class WrapperComponent extends Component {
        componentDidMount() {
            console.log('HOC did mount')
        }

        componentWillUnmount() {
            console.log('HOC will unmount')
        }

        render() {
            if (this.props.extention_name) {
                return <Cmpa_1 {...this.props}/>;
            }
            return <Wrapper {...this.props}/>;
        }
    }


export default ICmp;