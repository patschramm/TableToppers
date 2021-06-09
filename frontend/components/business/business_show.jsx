import React from 'react';


class BusinessShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.id);
    }

    render() { 
        return ( 
            <div className="business-wrapper">
                
            </div>
        );
    }
}
 
export default BusinessShow;