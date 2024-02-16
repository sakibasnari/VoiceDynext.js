import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceReg = () => {
  const [isListening, setIsListening] = useState(false);
  const { transcript, resetTranscript, browserSupportsSpeechRecognition, listening } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const startListening = () => {
    setIsListening(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
  };

  const handleClear = () => {
    resetTranscript();
  };

  const handleToggleListen = () => {
    if (listening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: 'auto' }}>
      <h2>Speech Recognition</h2>
      <p>Microphone: {isListening ? 'on' : 'off'}</p>
      <p>{listening ? 'Listening...' : 'Click "Start" to speak.'}</p>
      <button onClick={handleToggleListen}>
        {listening ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleClear}>Clear</button>
      <p style={{ marginTop: '20px', backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
        {transcript || 'No speech detected'}
      </p>
    </div>
  );
};

export default VoiceReg;
