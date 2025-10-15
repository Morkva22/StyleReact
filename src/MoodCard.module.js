import React from 'react';

const MoodCardModule = ({ mood = 'Настрій не вказано', comment = '' }) => {
    const moodStyles = {
        happy: { backgroundColor: '#d4edda', padding: '15px', borderRadius: '8px', margin: '10px 0' },
        neutral: { backgroundColor: '#e9ecef', padding: '15px', borderRadius: '8px', margin: '10px 0' },
        sad: { backgroundColor: '#f8d7da', padding: '15px', borderRadius: '8px', margin: '10px 0' },
        default: { backgroundColor: '#f0f0f0', padding: '15px', borderRadius: '8px', margin: '10px 0' },
    };

    const getStyle = () => {
        if (mood === '😊') return moodStyles.happy;
        if (mood === '😐') return moodStyles.neutral;
        if (mood === '😞') return moodStyles.sad;
        return moodStyles.default;
    };

    return (
        <div style={getStyle()}>
            <h3>Ваш настрій сьогодні: {mood}</h3>
            {comment && <p>Коментар: {comment}</p>}
        </div>
    );
};

export default MoodCardModule;