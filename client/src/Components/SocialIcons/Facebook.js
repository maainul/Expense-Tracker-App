import React from 'react'

const Facebook = () => {
    return (
        <a href="/">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                    color: "white",
                    padding: "10px",
                    borderRadius: "5px",
                    background: "#324C81"
                }}
            >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        </a>
    )
}

export default Facebook