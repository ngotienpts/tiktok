import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';

const cx = classNames.bind(styles);

function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fdd0c0deb03af5576ae12c894c3ab86d~c5_100x100.jpeg?x-expires=1678932000&x-signature=uBDWzUHOcgr9I%2BYETVHbNS40B9s%3D"
                alt="name"
                className={cx('avatar')}
            />

            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    abugm199
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </h4>
                <p className={cx('user-name')}>Abu</p>
            </div>
        </div>
    );
}

export default AccountItems;
