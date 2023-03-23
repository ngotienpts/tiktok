import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);
        // clean up function
        return () => clearTimeout(handler);
    }, [value]);

    return debouncedValue;
}
useDebounce.propsTypes = {
    value: PropTypes.string.isRequired,
    delay: PropTypes.number,
};
export default useDebounce;
