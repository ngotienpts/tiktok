import { useEffect, useState, useRef } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItems from '~/components/AccountItems';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [searchValue]);
    const inpuRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inpuRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChangeInput = (e) => {
        // kiểm tra xem ký tự đầu tiên nhập vào có phải là dấu cách hay ko?
        if (e.target.value.startsWith(' ')) {
            // đưa con trỏ xuống cuối khi input đã có ký tự nhưng người dùng lại để dấu cách ở đầu
            if (searchValue !== '') {
                e.setSelectionRange(e.target.value.length, e.target.value.length, 0);
            }
            setSearchValue('');
        } else {
            setSearchValue(e.target.value);
        }
    };
    return (
        <div className={cx('search-wrapper')}>
            <TippyHeadless
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => {
                                return <AccountItems key={result.id} data={result} />;
                            })}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inpuRef}
                        type="text"
                        value={searchValue}
                        placeholder="Search acount and videos"
                        spellCheck={false}
                        onChange={(e) => handleChangeInput(e)}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('search-clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} className={cx('clear')} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}

                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>
            </TippyHeadless>
        </div>
    );
}

export default Search;
