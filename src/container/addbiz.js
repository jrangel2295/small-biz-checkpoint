import {connect} from 'react-redux';
import AddBiz from '../components/addbiz';
import { AddBiz, fetchList } from '../redux/actions';

const mapStateToProps = ({businesses}) => {
    return {
        businesses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddBiz: (body) => dispatch(AddBiz(body)),
        fetchList: () => dispatch(fetchList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBiz)