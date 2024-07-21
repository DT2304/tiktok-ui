import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faSignOut, faUser
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import routesConfig from "~/config/route";
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },

            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    }
];

function Header() {

    const currentUser = true


    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@hoaaa'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true
        },

    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img src={images.logo} alt='TikTok' /></Link>
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy

                                delay={[0, 200]} content='Upload video' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy

                                delay={[0, 200]} content='Message' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy

                                delay={[0, 200]} content='Inbox' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>




                        </>
                    ) : (
                        <>
                            <Button text >UpLoad</Button>
                            <Button primary >
                                Log in
                            </Button>
                        </>
                    )
                    }

                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt='Nguyen Van A'
                                src='https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-1/448015509_122098006532362871_1400127749413300740_n.jpg?stp=c78.0.200.200a_dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHKnEGHPh35pmPnELMw_BltDsvrWvHkyRUOy-ta8eTJFbxStre79XUy_jtcDRe4CjMvHFYl3zhy1OBdiPwYzf4e&_nc_ohc=mLtUTSpEzSsQ7kNvgELQv6F&_nc_ht=scontent.fdad3-5.fna&oh=00_AYBObcVpzfp7wU5CYV5xHdB3YGNaxnKyrTJW52mhNqKEtg&oe=66A2B2BA'
                            // fallback='https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/449197197_1471938820348167_4653558590119717655_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=inNepD6NVf8Q7kNvgEJi69D&_nc_ht=scontent.fdad3-4.fna&oh=00_AYCWOvS-WBEsVJJfQLgE5nuJabHHcrDK98N0DxhYcRZh2A&oe=6696CDD6'
                            />
                        ) : (

                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>

            </div>
        </header>
    )
}

export default Header;