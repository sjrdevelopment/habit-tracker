const getLast2Weeks = () => {
    const dateRange = Array(14).fill().map((item, index) => {
        const date = new Date();
        date.setDate(date.getDate() - index-1);

        return {
            date: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`,
            completed: true
        }
    })

    return dateRange.reverse()
}

const initialState = {
    items: [
        {
            name: 'test item 1',
            history: getLast2Weeks()
        },
        {
            name: 'test item 2',
            history: getLast2Weeks()
        },
        {
            name: 'test item 3',
            history: getLast2Weeks()
        }
    ]
}

// todo: read from cookie data

export default (state = {...initialState}, action) => {
    switch (action.type) {
        case 'TEST_ACTION':


            return {
                ...state,
                hello: action.payload,
            }
        default:
            return state
    }
}