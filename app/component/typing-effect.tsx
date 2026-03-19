'use client'

import React, { useEffect, useState } from 'react'

interface TypingEffectCommandProps {
    text: string
    speed?: number
    onDone?: () => void
}

export default function TypingEffectCommand({
    text,
    speed = 50,
    onDone,
}: TypingEffectCommandProps) {
    const [displayedText, setDisplayedText] = useState('')
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index >= text.length) {
            onDone?.()
            return
        }

        const timeout = setTimeout(() => {
            setDisplayedText((prev) => prev + text[index])
            setIndex((prev) => prev + 1)
        }, speed)

        return () => clearTimeout(timeout)
    }, [index, text, speed, onDone])

    return (
        <div className="text-green-800 font-mono">
            <span>{'> '}</span>
            <code
                className="text-green-500"
                style={{
                    textShadow: `
                    0 0 1px #22c55e,
                    0 0 4px #22c55e,
                    0 0 2px #16a34a
                    `,
                }}
            >
                {displayedText}
            </code>
            {index < text.length && <span className="animate-pulse">_</span>}
        </div>
    )
}