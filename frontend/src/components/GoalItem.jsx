import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';  // Import moment library
import { deleteGoal, updateGoal } from '../features/goals/goalSlice';

function GoalItem({ goal }) {
    const dispatch = useDispatch();
    const [updatedText, setUpdatedText] = useState(goal.text);

    const handleUpdate = () => {
        dispatch(updateGoal({ id: goal._id, goalData: { text: updatedText } }));
    };

    // Format the date using moment
    const formattedDate = moment(goal.createdAt).fromNow();

    return (
        <div className='goal'>
            <div className='goal-date'>
                {`Created ${formattedDate}`}
            </div>
            <input
                type="text"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
                className='goal-text-input'
            />
            <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
                X
            </button>
            <button onClick={handleUpdate} className='update-btn'>
                Update
            </button>
        </div>
    );
}

export default GoalItem;
