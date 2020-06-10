import React from 'react'

import { connect } from 'react-redux';

import { testAction } from '../../actions/testAction'

import './style.css'

const Master = ({fireEvent, ...rest}) => {
    const { trackerData } = rest

    const getLast2Weeks = () => {
        const dateRange = Array(14).fill().map((item, index) => {
            const date = new Date();
            date.setDate(date.getDate() - index-1);
            return <th>{`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</th>
        })

        return dateRange.reverse()
    }

    return (
        <div className="master">
           hello from master

            <button onClick={fireEvent}>Click me</button>

            <table>
                <thead>
                    <tr>
                        <th></th>
                        {getLast2Weeks().map(date => date)}

                        <th>Today</th>
                    </tr>
                </thead>
                <tbody>
                    {trackerData.items.map(item => {
                        return (
                            <tr>
                                <th>{item.name}</th>
                                { item.history.map(historyItem => {

                                    if (historyItem.completed) {
                                        return (
                                            <td className="l1"></td>
                                        )
                                    }

                                    return ( <td className="l0"></td> )
                                })}
                                <td><input type="checkbox" /></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    fireEvent: () => dispatch(testAction('yo yo yo'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Master);