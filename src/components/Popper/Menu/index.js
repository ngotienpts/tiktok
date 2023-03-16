import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import MenuItems from './MenuItems';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => {
            return <MenuItems key={index} data={item} />;
        });
    };
    return (
        <Tippy
            interactive
            delay={[0, 600]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
