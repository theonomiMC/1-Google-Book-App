// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case "ADD_BOOK_TO_FAVORITES":
            return {
                ...state,
                favorites: [action.payload, ...state.favorites],
            };
        case "REMOVE_BOOK_FROM_FAVORITES":
            return {
                ...state,
                favorites: state.favorites.filter(
                    book => book.id !== action.payload
                )
            };
        default:
            return state;
    }
};