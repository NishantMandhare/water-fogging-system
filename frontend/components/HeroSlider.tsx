"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
    "/images/hero-restaurant.jpg",
    "/images/hero-farmhouse.jpg",
    "/images/hero-factory.jpg",
    "/images/hero-residential.jpg",
    "/images/hero-nozzle-closeup.jpg",
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0">
            {images.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={src}
                        alt="Mist cooling system in action"
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                </div>
            ))}
            <div className="absolute inset-0 bg-black/50" />
        </div>
    );
}