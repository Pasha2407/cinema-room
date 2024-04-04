const isMobile = window.innerWidth < 500;

export const filterSelectStyles = {
    container: provided => ({
        ...provided,
        width: '100%',
    }),
    control: (provided, state) => ({
        background: '#212121',
        borderRadius: '12px',
        padding: isMobile ? '2px 6px 2px 2px' : '5px 10px',
        fontSize: isMobile ? '10px' : '16px',
        border: state.isFocused ? '2px solid #be4040' : '2px solid #313131',
        display: "flex",
        transition: 'background 0.3s ease',
        "&:hover": {
            background: '#181818',
            cursor: 'pointer',
        }
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#be4040' : '#212121',
        fontSize: isMobile ? '10px' : '16px',
        transition: 'background 0.3s ease',
        "&:hover": {
            background: '#313131',
            cursor: 'pointer',
        }
    }),
    indicatorSeparator: provided => ({
        ...provided,
        display: 'none',
    }),
    dropdownIndicator: provided => ({
        ...provided,
        padding: '0',
        width: '20px',
        height: '20px',
    }),
    clearIndicator: provided => ({
        ...provided,
        padding: '0',
        width: '20px',
        height: '20px',
    }),
    menu: provided => ({
        ...provided,
        background: '#212121',
    }),
    menuList: provided => ({
        ...provided,
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
            width: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
            width: '8px',
            backgroundColor: '#414141',
        },
    }),
    singleValue: provided => ({
        ...provided,
        color: 'white',
        fontSize: isMobile ? '10px' : '16px',
    }),
};