'use client';

import React, { useRef, useCallback } from 'react';
import styles from './WeeklyDoseCarousel.module.css';

export type DoseItem = {
    id: string;
    title: string;
    thumbnailUrl: string;
    href: string;
    subtitle?: string;
    featured?: boolean;
};

type Props = {
    items: DoseItem[];
    onSelect?: (item: DoseItem) => void;
    onViewAll?: () => void;
    className?: string;
};

export default function WeeklyDoseCarousel({
    items,
    onSelect,
    onViewAll,
    className = ''
}: Props) {
    const trackRef = useRef<HTMLDivElement>(null);

    const scrollByCard = useCallback((direction: 'prev' | 'next') => {
        const track = trackRef.current;
        if (!track) return;

        const card = track.querySelector<HTMLDivElement>('[data-card]');
        const cardWidth = card ? card.offsetWidth + 24 : 304; // Include gap
        const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;

        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }, []);

    const handleCardKeyDown = useCallback((
        e: React.KeyboardEvent,
        item: DoseItem
    ) => {
        switch (e.key) {
            case 'Enter':
            case ' ':
                e.preventDefault();
                onSelect?.(item);
                break;
            case 'ArrowRight':
                e.preventDefault();
                scrollByCard('next');
                break;
            case 'ArrowLeft':
                e.preventDefault();
                scrollByCard('prev');
                break;
        }
    }, [onSelect, scrollByCard]);

    return (
        <section
            aria-label="Latest content"
            className={`${styles.section} ${className}`}
        >
            {/* Header */}
            <div className={styles.header}>
                <h2 className={styles.title}>Latest Content</h2>
                <button
                    type="button"
                    onClick={onViewAll}
                    className={styles.viewAllBtn}
                    aria-label="View all content"
                >
                    View All <span aria-hidden>→</span>
                </button>
            </div>

            {/* Carousel */}
            <div className={styles.carouselWrapper}>
                {/* Previous Button */}
                <button
                    type="button"
                    onClick={() => scrollByCard('prev')}
                    className={styles.navPrev}
                    aria-label="Previous"
                >
                    <svg
                        className={styles.navIcon}
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                    >
                        <path
                            d="M15 6l-6 6 6 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                {/* Next Button */}
                <button
                    type="button"
                    onClick={() => scrollByCard('next')}
                    className={styles.navNext}
                    aria-label="Next"
                >
                    <svg
                        className={styles.navIcon}
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                    >
                        <path
                            d="M9 6l6 6-6 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                {/* Card Track */}
                <div
                    ref={trackRef}
                    role="list"
                    className={styles.track}
                >
                    {items.map((item) => (
                        <div
                            key={item.id}
                            role="listitem"
                            data-card
                            tabIndex={0}
                            className={`${styles.card} ${item.featured ? styles.cardFeatured : ''}`}
                            aria-label={`${item.title}${item.featured ? ' (featured)' : ''}`}
                            onClick={() => onSelect?.(item)}
                            onKeyDown={(e) => handleCardKeyDown(e, item)}
                        >
                            {/* Thumbnail */}
                            <div className={styles.thumbnail}>
                                <img
                                    src={item.thumbnailUrl}
                                    alt={`${item.title} thumbnail`}
                                    className={styles.thumbnailImg}
                                    loading="lazy"
                                />
                                {/* Play Badge */}
                                <div className={styles.playBadge}>
                                    <svg
                                        className={styles.playIcon}
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden
                                    >
                                        <path d="M8 5v14l11-7-11-7z" />
                                    </svg>
                                    <span className={styles.playText}>
                                        {item.subtitle || 'Tap to watch'}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className={styles.cardContent}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    {item.featured && (
                                        <span className={styles.featuredTag}>Featured</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
