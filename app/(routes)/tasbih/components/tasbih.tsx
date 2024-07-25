"use client";

import React, { useEffect, useState } from "react";

const TasbihAnimation: React.FC = () => {
    const [totalBalls] = useState<number>(30);
    const [animationFrame, setAnimationFrame] = useState<number>(0);

    // Update the animation frame every few milliseconds to create smooth motion
    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationFrame(prevFrame => (prevFrame + 0.1) % totalBalls);
        }, 1000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, [totalBalls]);

    // Function to calculate ball position
    const calculatePosition = (index: number) => {
        const angle = (2 * Math.PI / totalBalls) * (index + animationFrame);
        const radius = 300; // Radius of the circle
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        return { x, y };
    };

    // Create ball styles alternating between 'bg-ball' and 'bg-ball-2'
    const ballStyles = Array.from({ length: totalBalls }, (_, index) =>
        index % 2 === 0 ? 'bg-ball bg-cover w-12 h-12' : 'bg-ball-2 bg-cover w-12 h-12'
    );

    const ballPositions = ballStyles.map((_, index) => calculatePosition(index));

    return (
        <div className="absolute top-32 left-12 right-12 sm:left-10  sm:right-10 md:left-0 md:right-0 lg:left-0 lg:right-0 bottom-0 flex justify-center items-center h-screen z-0 w-max sm:w-max md:w-full lg:w-full">
            <div className="relative w-[600px] h-[600px]">
                {/* SVG lines */}
                <svg
                    className="absolute inset-0 z-0" // Set z-index lower for SVG
                    viewBox="-300 -300 600 600" // Ensure SVG covers the full area
                    preserveAspectRatio="xMidYMid meet"
                >
                    {ballPositions.map((pos, index) => {
                        const nextPos = ballPositions[(index + 1) % totalBalls];
                        return (
                            <line
                                key={index}
                                x1={pos.x}
                                y1={pos.y}
                                x2={nextPos.x}
                                y2={nextPos.y}
                                stroke="black"
                                strokeWidth="2"
                            />
                        );
                    })}
                </svg>
                {/* Ball container */}
                <div className="absolute inset-0 z-10">
                    {ballPositions.map((pos, index) => (
                        <div
                            key={index}
                            className={ballStyles[index]} // Apply alternating styles
                            style={{
                                transform: `translate(${pos.x + 300 - 24}px, ${pos.y + 300 - 24}px)`, // Center balls
                                position: 'absolute',
                                transition: 'transform 0.1s linear' // Smooth transition
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TasbihAnimation;
