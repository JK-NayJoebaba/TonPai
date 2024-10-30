import { _birthdayMessages, _messages } from "../src/assets/mock/mock";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { _giftSong } from "./assets/mock/mock";
import { useModal } from "./hooks/useModal";
import { Header, MessageSection } from "./components/ui";
import { MemoryZone } from "./components/common";
import MusicPlayer from "./components/common/MusicPlayer"; // Import the MusicPlayer
import { _LoveAlbums } from "./assets/mock/mock";

function App() {
    const [currentTime, setCurrentTime] = useState(0);
    const { isModalVisible, currentImage, closeModal } = useModal();
    const [isPlaying, setIsPlaying] = useState(false);

    const messageRef = useRef(null);
    const memoryZoneRef = useRef(null);

    const isInViewMessageRef = useInView(messageRef, {
        once: true,
        amount: 0.2,
    });
    const isInViewMemoryZoneRef = useInView(memoryZoneRef, {
        once: true,
        amount: 0.2,
    });

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
      };

    const handleSeek = (event) => {
        const newTime = event.target.value;
        setCurrentTime(newTime);
      };

    

    return (
        <div>
            <div className="aura" />
            <div className="flex justify-center h-auto overflow-y-auto aura">
                <div className="flex flex-col items-center max-w-[350px] py-12 gap-16 relative">
                    <Header
                        content={{
                            title: "สุขสันต์วันเกิด",
                            subtitle: "🎉Tonpai🎋",
                        }}
                    />
                    
                    <div className="AppSlideShow">
                        <section className="slideshow">
                            <div className="content">
                            <div className="slider-content">
                                <figure className="shadow">
                                <img src={_LoveAlbums[9]} alt="slide 1" />
                                </figure>
                                <figure className="shadow">
                                <img src={_LoveAlbums[10]} alt="slide 2" />
                                </figure>
                                <figure className="shadow">
                                <img src={_LoveAlbums[11]} alt="slide 3" />
                                </figure>
                                <figure className="shadow">
                                <img src={_LoveAlbums[12]} alt="slide 4" />
                                </figure>
                                <figure className="shadow">
                                <img src={_LoveAlbums[13]} alt="slide 5" />
                                </figure>
                                <figure className="shadow">
                                <img src={_LoveAlbums[14]} alt="slide 6" />
                                </figure>
                                <figure className="shadow">
                                <img src={_LoveAlbums[15]} alt="slide 7" />
                                </figure>
                                <figure className="shadow">
                                <img src={_LoveAlbums[16]} alt="slide 8" />
                                </figure>
                                <figure className="shadow">
                                <img src={_LoveAlbums[17]} alt="slide 9" />
                                </figure>
                            </div>
                            </div>
                        </section>
                    </div>

                    <div className="player">
                        <div className="song-info">
                            <img src={_giftSong} alt="Song Cover" />
                            <div className="song-details">
                                <p>ถ้าตลอดกาลมีจริง</p>
                                <p>ขอให้มันเกิดกับรักครั้งนี้</p>
                            </div>
                        </div>

                        <div className="progress-bar">
                            <input
                            type="range"
                            min="0"
                            max="100"
                            value={currentTime}
                            onChange={handleSeek}
                            />
                            <div className="time-display">
                                <span>{formatTime(currentTime)}</span>/<span>{formatTime(235)}</span>
                            </div>
                        </div>

                        <div className="controls">
                            
                            <button className="control-button"><i className="backward"></i></button>

                            <MusicPlayer isPlaying={isPlaying} />
                            <button className="control-button" onClick={handlePlayPause}>
                            {isPlaying ? <i className="pause"></i> : <i className="play"></i>}
                            </button>
                            
                            <button className="control-button"><i className="forward"></i></button>
                        </div>
                    </div>

                    <div className="TextMsg">
                        <MessageSection
                            data={_messages}
                            ref={messageRef}
                            isInView={isInViewMessageRef}
                        />
                        
                        <MemoryZone
                            ref={memoryZoneRef}
                            isInView={isInViewMemoryZoneRef}
                            data={
                                //ข้อความ section birthday
                                _birthdayMessages
                            }
                        />
                    </div>
                    
                </div>
                
            </div>

            {isModalVisible && (
                <div className="modal show" onClick={closeModal}>
                    <div className="modal-content">
                        {currentImage && (
                            <img
                                src={currentImage}
                                alt="Preview"
                                className="modal-image"
                            />
                        )}
                    </div>
                </div>
            )}

            
        </div>
    );
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
  }

export default App;
