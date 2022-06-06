import {connect} from 'react-redux';
import Login from '../components/Login';
import { fetchList } from '../redux/actions';

const mapStateToProps = ({businesses}) => {
    return {
        businesses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchList: () => dispatch(fetchList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)