export const testAction = (value) => dispatch => {

    dispatch({
        type: 'TEST_ACTION',
        payload: value,
    })
}