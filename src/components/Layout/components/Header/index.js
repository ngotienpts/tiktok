import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import Search from '~/components/Layout/components/Search';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import {
    MailboxIcon,
    MessageIcon,
    LangIcon,
    QuestionIcon,
    KeyboardIcon,
    MoreIcon,
    ProfileIcon,
    CoinIcon,
    SettingIcon,
    LogoutIcon,
} from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LangIcon />,
        title: 'English',
        subMenu: {
            title: 'Language',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vi', title: 'Tiếng Việt' },
            ],
        },
    },
    {
        icon: <QuestionIcon />,
        title: 'Feedback and held',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboad shortcuts',
    },
];

const userMenu = [
    {
        icon: <ProfileIcon />,
        title: 'View profile',
        to: '/@abs-tt',
    },
    {
        icon: <CoinIcon />,
        title: 'Get coin',
        to: '/coin',
    },
    {
        icon: <SettingIcon />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <LogoutIcon />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];
function Header() {
    // handle logic
    const handleMenuChange = (menuItems) => {
        console.log(menuItems);
    };

    const currentUser = true;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img src={images.logo} alt="TikTok" />
                    </Link>
                </div>
                {/* search */}
                <Search />
                {/* search */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <div className={cx('current-user')}>
                                <Button outlineSecondary leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                    Upload
                                </Button>
                                <Tippy content="Message" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <MessageIcon />
                                    </button>
                                </Tippy>
                                <Tippy content="Mailbox" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <MailboxIcon />
                                    </button>
                                </Tippy>
                            </div>
                        </>
                    ) : (
                        <>
                            <Button outlineSecondary leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://i.pinimg.com/564x/01/8f/74/018f74c3f0191468445a0a395db6e2ec.jpg"
                                className={cx('avatar')}
                                alt="Avatar"
                                fallback="https://yt3.ggpht.com/UsflU74uvka_3sejOu3LUGwzOhHJV0eIYoWcvOfkOre_c12uIN4ys-QqRlAkbusEmbZjTA-b=s88-c-k-c0x00ffffff-no-rj"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <MoreIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
