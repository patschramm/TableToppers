import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions'
import BusinessShow from './business_show'

const mSTP = ({ session, entities: { businesses } }, ownProps) => {
  return {
    business: businesses[ownProps.match.params.id],

  };
};

export default connect(mSTP, {fetchBusiness})(BusinessShow);

