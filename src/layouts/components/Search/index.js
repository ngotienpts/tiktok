import { useEffect, useState, useRef } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { useDebounce } from '~/hooks';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItems from '~/components/AccountItems';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import * as searchServices from '~/services/searchServies';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounced);
            setSearchResult(result);

            setLoading(false);
        };

        fetchApi();
    }, [debounced]);
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
        const seacrhValue = e.target.value;
        if (!seacrhValue.startsWith(' ')) {
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
                        onChange={handleChangeInput}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('search-clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} className={cx('clear')} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </TippyHeadless>
        </div>
    );
}

export default Search;
