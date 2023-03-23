import PropTypes from 'prop-types';
import Header from '../components/Header';
import './HeaderOnly.module.scss';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

HeaderOnly.propsTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnly;
