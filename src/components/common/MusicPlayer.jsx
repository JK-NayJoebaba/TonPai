// src/components/common/MusicPlayer.jsx
import React, { useRef, useEffect } from 'react';

const MusicPlayer = ({ isPlaying, onPlayPause }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play(); // Play audio when isPlaying is true
        } else {
            audioRef.current.pause(); // Pause audio when isPlaying is false
        }
    }, [isPlaying]);

    const handleTimeUpdate = () => {
        const progressBarInput = document.querySelector('.progress-bar input[type="range"]');
        const timeDisplay  = document.querySelector('.time-display');

        const currentTime = audioRef.current.currentTime;
        const maxDuration = audioRef.current.duration;

        if (timeDisplay) {
            const formattedCurrentTime = formatTime(Math.floor(currentTime));
            const formattedTotalTime = formatTime(Math.floor(maxDuration));
            timeDisplay.textContent = `${formattedCurrentTime}/${formattedTotalTime}`;
        }

        if (progressBarInput) {
            progressBarInput.value = currentTime / maxDuration * 100; // Calculate progress percentage
        }
    };

    return (
        <div className="music-player">
            <audio ref={audioRef} loop onTimeUpdate={handleTimeUpdate}> {/* Add `onTimeUpdate` prop */}
                <source src={require('../../assets/music/marr.mp3')} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
  }
  
export default MusicPlayer;
