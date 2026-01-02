'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import styles from './ReviewManager.module.css';

interface Comment {
    id: string;
    page: string;
    text: string;
    timestamp: number;
}

export default function ReviewManager() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const isReviewMode = searchParams.get('review') === 'true';

    const [isOpen, setIsOpen] = useState(false);
    const [comments, setComments] = useState<Comment[]>([]);
    const [currentNote, setCurrentNote] = useState('');
    const [view, setView] = useState<'edit' | 'summary'>('edit');

    // Load comments from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('site_review_comments');
        if (saved) {
            try {
                setComments(JSON.parse(saved));
            } catch (e) {
                console.error('Failed to parse saved comments', e);
            }
        }
    }, []);

    // Save comments to localStorage
    useEffect(() => {
        localStorage.setItem('site_review_comments', JSON.stringify(comments));
    }, [comments]);

    if (!isReviewMode) return null;

    const handleAddComment = () => {
        if (!currentNote.trim()) return;

        const newComment: Comment = {
            id: Math.random().toString(36).substr(2, 9),
            page: pathname,
            text: currentNote,
            timestamp: Date.now(),
        };

        setComments([...comments, newComment]);
        setCurrentNote('');
        alert('Progress saved! You can see all notes in the Summary view.');
    };

    const handleExport = () => {
        const exportText = comments
            .map(c => `Page: ${c.page}\nComment: ${c.text}\n---`)
            .join('\n\n');

        navigator.clipboard.writeText(exportText);
        alert('All feedback copied to clipboard in Markdown format!');
    };

    const currentPageComments = comments.filter(c => c.page === pathname);

    return (
        <div className={styles.overlay}>
            {!isOpen && (
                <button className={styles.trigger} onClick={() => setIsOpen(true)}>
                    <span>💬 Leave Feedback</span>
                    {comments.length > 0 && <span className={styles.badge}>{comments.length}</span>}
                </button>
            )}

            <div className={`${styles.drawer} ${!isOpen ? styles.drawerClosed : ''}`}>
                <div className={styles.header}>
                    <h2>Website Review</h2>
                    <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className={styles.buttonGroup}>
                    <button
                        className={view === 'edit' ? styles.btnPrimary : styles.btnSecondary}
                        onClick={() => setView('edit')}
                    >
                        Add Note
                    </button>
                    <button
                        className={view === 'summary' ? styles.btnPrimary : styles.btnSecondary}
                        onClick={() => setView('summary')}
                    >
                        Show All ({comments.length})
                    </button>
                </div>

                {view === 'edit' ? (
                    <>
                        <div className={styles.section}>
                            <span className={styles.label}>Current Page</span>
                            <div className={styles.pageInfo}>{pathname}</div>
                        </div>

                        <div className={styles.section}>
                            <span className={styles.label}>Your Revision Notes</span>
                            <textarea
                                className={styles.textarea}
                                placeholder="What should we change on this page? Be specific..."
                                value={currentNote}
                                onChange={(e) => setCurrentNote(e.target.value)}
                            />
                        </div>

                        <button className={styles.btnPrimary} onClick={handleAddComment}>
                            Save Note for this Page
                        </button>

                        {currentPageComments.length > 0 && (
                            <div className={styles.section}>
                                <span className={styles.label}>Existing Notes for this Page</span>
                                <div className={styles.summary}>
                                    {currentPageComments.map(c => (
                                        <div key={c.id} className={styles.commentItem}>
                                            <p className={styles.commentText}>{c.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <div className={styles.summary}>
                            {comments.length === 0 ? (
                                <p style={{ opacity: 0.5, textAlign: 'center', marginTop: '2rem' }}>No notes yet.</p>
                            ) : (
                                comments.map(c => (
                                    <div key={c.id} className={styles.commentItem}>
                                        <span className={styles.commentPage}>{c.page}</span>
                                        <p className={styles.commentText}>{c.text}</p>
                                    </div>
                                ))
                            )}
                        </div>
                        <button className={styles.btnPrimary} onClick={handleExport}>
                            Export All to Clipboard
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
