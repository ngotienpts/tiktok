import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';

const cx = classNames.bind(styles);

function AccountItems() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://i.pinimg.com/564x/b1/91/f7/b191f77213d70ad6569a5e8bc24a2d84.jpg"
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
