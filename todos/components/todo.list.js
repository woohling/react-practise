/**
 * Created by EmmaWu on 2016/11/28.
 */
import React from 'react';

const todos = [
    {
        task: 'make react tutorial',
        isCompleted: false
    },
    {
        task: 'eat dinner',
        isCompleted: false
    }
];

export default class TodoList extends React.component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Actions</th>
                    </tr>
                </thead>
            </table>
        )
    }
}