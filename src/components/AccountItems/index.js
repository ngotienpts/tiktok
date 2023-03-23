import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './AccountItems.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItems({ data }) {
    return (
        <Link to={`/@/${data.nickname}`} className={cx('wrapper')}>
            <Image src={data.avatar} alt={data.full_name} className={cx('avatar')} />

            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    {data.nickname}
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />}
                </h4>
                <p className={cx('user-name')}>{data.full_name}</p>
            </div>
        </Link>
    );
}
AccountItems.propsTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItems;
