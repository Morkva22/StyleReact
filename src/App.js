import React, { useState } from 'react';
import MoodCardModule from './MoodCard.module';

const MoodForm = () => {
    const [mood, setMood] = useState('Настрій не вказано');
    const [comment, setComment] = useState('');

    const handleMoodSelect = (selectedMood) => {
        setMood(selectedMood);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const formStyles = {
        container: { textAlign: 'center', padding: '20px', maxWidth: '400px', margin: '0 auto' },
        buttonContainer: { display: 'flex', justifyContent: 'center', gap: '10px', margin: '10px 0' },
        button: { padding: '10px 20px', fontSize: '18px', cursor: 'pointer', borderRadius: '5px', border: 'none' },
        input: { width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ccc' },
    };

    return (
        <div style={formStyles.container}>
            <h1>Як твій настрій сьогодні?</h1>
            <div style={formStyles.buttonContainer}>
                <button
                    style={{ ...formStyles.button, backgroundColor: mood === '😊' ? '#c3e6cb' : '#fff' }}
                    onClick={() => handleMoodSelect('😊')}
                >
                    😊
                </button>
                <button
                    style={{ ...formStyles.button, backgroundColor: mood === '😐' ? '#d6d8db' : '#fff' }}
                    onClick={() => handleMoodSelect('😐')}
                >
                    😐
                </button>
                <button
                    style={{ ...formStyles.button, backgroundColor: mood === '😞' ? '#f5c6cb' : '#fff' }}
                    onClick={() => handleMoodSelect('😞')}
                >
                    😞
                </button>
            </div>
            <input
                type="text"
                placeholder="Що вплинуло на твій настрій?"
                value={comment}
                onChange={handleCommentChange}
                style={formStyles.input}
            />
            <MoodCardModule mood={mood} comment={comment} />
        </div>
    );
};

export default MoodForm;