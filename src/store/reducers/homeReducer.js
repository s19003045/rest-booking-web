import Act from "../action";

const initState = {
    /* search */
    searchValue: null,
    preSearchValue: null,
    startSearch: false,
    searchQuery: [],
    /* current result */
    curResult: null,
};

const homeReducer = (state = initState, action) => {
    switch (action.type) {
        case Act.SET_SEARCH_VALUE:
            return { ...state, searchValue: action.payload };
        case Act.SET_PRE_SEARCH_VALUE:
            return { ...state, preSearchValue: action.payload };
        /**/
        case Act.START_SEARCH:
            return {
                ...state,
                startSearch: action.payload,
            };
        case Act.PUSH_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: [...state.searchQuery, action.payload],
            };
        case Act.REMOVE_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: state.searchQuery.filter(
                    (query) => query !== action.payload
                ),
            };
        case Act.CLEAR_SEARCH_CACHE:
            return {
                ...state,
                searchQuery: searchInitState.searchQuery,
            };
        /**/
        case Act.SET_CUR_RESULT:
            return {
                ...state,
                curResult: action.payload,
            };
        default:
            return state;
    }
};

export default homeReducer;
