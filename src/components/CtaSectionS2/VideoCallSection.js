import React from 'react';

const VideoCallSection = () => {
    const phoneNumber = '0704076578'; // Replace with your WhatsApp phone number
    const message = 'I would like to connect for a video call regarding your services.';

    return (
        <div className="video-call-section">
            <h3>Connect with Our  Team via WhatsApp</h3>
            <p>If you have questions or need to discuss any of our services, you can easily connect with us through a WhatsApp video call.</p>
            <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="video-call-button"
            >
                Start WhatsApp Video Call
            </a>
        </div>
    );
};

export default VideoCallSection;
