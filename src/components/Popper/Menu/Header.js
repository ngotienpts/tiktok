import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <div className={cx('sub-menu')}>
            <button className={cx('sub-menu__icon')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('sub-menu__heading')}>{title}</h4>
        </div>
    );
}

Header.propsTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};
export default Header;
