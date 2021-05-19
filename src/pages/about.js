import React from 'react';

const About = () => {
    return (
        <>
        <div
            style={{
                justifyContent: 'Right',
                alignItems: 'Right',
                height: '100vh'
            }}
            >
                <p>Since 2011 we have worked with clients to help them achieve their very best selves. Through fitness, nutrition, and coaching our goal is to help improve the world one individual at a time! Do you want to be better? We can help you overcome the challenges that come along with living healthier, being active, and while truly treating yourself to the flavor and zest of life!</p>
                <h1>"Live Better, Be Better"</h1>
                <div class="grid-container">Meet Your Trainers
                    <div 
                        class="grid-item" 
                        id="t1"
                    >Jason Aprea
                    </div>
                    <div 
                        class="grid-item" 
                        id="t2"
                    >Emily Aprea
                    </div>
                </div>
                
        </div>
        
        </>
    );
};

export default About;