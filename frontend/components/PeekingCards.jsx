"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const allImages = [
    { src: "/images/hero-restaurant.jpg", label: "Restaurants" },
    { src: "/images/hero-farmhouse.jpg", label: "Farmhouses" },
    { src: "/images/hero-factory.jpg", label: "Factories" },
    { src: "/images/hero-residential.jpg", label: "Homes" },
    { src: "/images/hero-nozzle-closeup.jpg", label: "Equipment" },
];

export default function PeekingCards() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setOffset((prev) => (prev + 1) % allImages.length);
        }, 3000); // dar 3 second la pudhchi image
        return () => clearInterval(timer);
    }, []);

    // 4 cards, each showing a different image from the rotating pool
    const visibleCards = [0, 1, 2, 3].map(
        (i) => allImages[(offset + i) % allImages.length]
    );

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 translate-y-16">
            {visibleCards.map((card, index) => (
                <div
                    key={index}
                    className="relative h-40 md:h-56 rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10"
                >
                    <div
                        key={card.src}
                        className="absolute inset-0 transition-opacity duration-1000 opacity-100 animate-fadeIn"
                    >
                        <Image
                            src={card.src}
                            alt={card.label}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <p className="absolute bottom-3 left-3 font-semibold text-sm">
                            {card.label}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}