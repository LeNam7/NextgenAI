"use client";

import React from "react";

interface AIEducationGreetingCharacterProps {
  size?: number | string;
  className?: string;
  showSpeechBubble?: boolean;
}

export default function AIEducationGreetingCharacter({
  size = "100%",
  className = "",
  showSpeechBubble = true,
}: AIEducationGreetingCharacterProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: typeof size === "number" ? size : "auto" }}
    >
      <svg
        viewBox="0 0 320 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-full"
      >
        <style dangerouslySetInnerHTML={{ __html: `
          @media (prefers-reduced-motion: reduce) {
            .ai-wave, .ai-idle, .ai-blink, .ai-blink-right, .ai-particle-slow, .ai-particle-fast {
              animation: none !important;
              transform: none !important;
            }
          }
          @keyframes waveAction {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(14deg); }
          }
          @keyframes idleAction {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }
          @keyframes blinkAction {
            0%, 90%, 100% { transform: scaleY(1); }
            95% { transform: scaleY(0.1); }
          }
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
            50% { transform: translateY(-6px) rotate(5deg); opacity: 0.85; }
          }
          @keyframes floatFast {
            0%, 100% { transform: translateY(0px) scale(1); opacity: 0.5; }
            50% { transform: translateY(-8px) scale(1.08); opacity: 0.9; }
          }
          .ai-wave {
            animation: waveAction 2.8s ease-in-out infinite;
            transform-origin: 180px 125px;
          }
          .ai-idle {
            animation: idleAction 4s ease-in-out infinite;
          }
          .ai-blink {
            animation: blinkAction 5.5s ease-in-out infinite;
            transform-origin: 154px 76px;
          }
          .ai-blink-right {
            animation: blinkAction 5.5s ease-in-out 0.15s infinite;
            transform-origin: 166px 76px;
          }
          .ai-particle-slow {
            animation: floatSlow 4s ease-in-out infinite;
            transform-origin: center;
          }
          .ai-particle-fast {
            animation: floatFast 3s ease-in-out infinite;
            transform-origin: center;
          }
        `}} />

        {/* ── BACKGROUND ORBIT & ICONS ──────────────────────── */}
        <g id="backgroundIcons" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3">
          <circle cx="160" cy="160" r="110" />
        </g>

        {/* ── MAIN CHARACTER (Idle animated group) ──────────── */}
        <g id="character" className="ai-idle">
          
          {/* === LEGS (Adult proportions) === */}
          <g id="legs">
            {/* Left Leg */}
            <path
              d="M146 220 L146 320"
              stroke="#374151"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Right Leg */}
            <path
              d="M174 220 L174 320"
              stroke="#374151"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Left Shoe (Minimal clean SaaS style) */}
            <path
              d="M146 320 H136 C134 320 134 324 138 324 H148 C148 322 148 320 146 320Z"
              fill="#F3F4F6"
              stroke="#374151"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Right Shoe */}
            <path
              d="M174 320 H184 C186 320 186 324 182 324 H172 C172 322 172 320 174 320Z"
              fill="#F3F4F6"
              stroke="#374151"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </g>

          {/* === TORSO & BODY === */}
          <g id="body">
            {/* Pants / Waist */}
            <path
              d="M140 190 H180 V220 H140 Z"
              fill="#FFFFFF"
              stroke="#374151"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Shirt / Business casual top */}
            <path
              d="M140 120 L180 120 L183 190 L137 190 Z"
              fill="#FFFFFF"
              stroke="#374151"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Shirt placket line */}
            <line x1="160" y1="130" x2="160" y2="190" stroke="#E5E7EB" strokeWidth="1" />
            
            {/* Blue accent tie/lanyard - representative of AI Guide / Consultant badge */}
            <path
              d="M157 120 L163 120 L164 148 L160 156 L156 148 Z"
              fill="#3B82F6"
              stroke="#374151"
              strokeWidth="1.2"
            />
          </g>

          {/* === LEFT ARM (Resting naturally) === */}
          <g id="leftArm">
            {/* Sleeve */}
            <path
              d="M140 120 L128 140"
              stroke="#374151"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Arm line */}
            <path
              d="M128 140 Q122 165 125 190"
              fill="none"
              stroke="#374151"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Hand */}
            <circle cx="125" cy="194" r="3.5" fill="#FFFFFF" stroke="#374151" strokeWidth="1.2" />
          </g>

          {/* === WAVING ARM (Waving loop) === */}
          <g id="wavingArm" className="ai-wave">
            {/* Sleeve */}
            <path
              d="M180 120 L194 135"
              stroke="#374151"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Waving Forearm pointing upward */}
            <path
              d="M194 135 Q208 115 204 94"
              fill="none"
              stroke="#374151"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Hand waving */}
            <circle cx="203" cy="90" r="3.5" fill="#FFFFFF" stroke="#374151" strokeWidth="1.2" />
            
            {/* Waving fingers hint (SaaS monoline style) */}
            <path d="M201 84 V86 M205 83 V85 M208 85 V87" stroke="#374151" strokeWidth="1" strokeLinecap="round" />
          </g>

          {/* === HEAD & FACE === */}
          <g id="head">
            {/* Neck */}
            <line x1="157" y1="108" x2="157" y2="120" stroke="#374151" strokeWidth="1.2" />
            <line x1="163" y1="108" x2="163" y2="120" stroke="#374151" strokeWidth="1.2" />

            {/* Head oval shape (Proportional) */}
            <ellipse cx="160" cy="85" rx="15" ry="19" fill="#FFFFFF" stroke="#374151" strokeWidth="1.2" />

            {/* Expressive Hair line art */}
            <path
              d="M146 80 C146 65, 174 65, 174 80 C171 74, 149 74, 146 80Z"
              fill="#374151"
              stroke="#374151"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />

            {/* Eyes (Blinking monoline lines - no oversized circular eyes) */}
            <g id="eyes">
              <line
                className="ai-blink"
                x1="152"
                y1="82"
                x2="156"
                y2="82"
                stroke="#374151"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                className="ai-blink-right"
                x1="164"
                y1="82"
                x2="168"
                y2="82"
                stroke="#374151"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </g>

            {/* Clean Monoline Nose */}
            <path
              d="M159 86 Q160 88 161 86"
              fill="none"
              stroke="#374151"
              strokeWidth="1"
              strokeLinecap="round"
            />

            {/* Gentle Smile */}
            <path
              d="M155 93 Q160 97 165 93"
              fill="none"
              stroke="#374151"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </g>
        </g>

        {/* ── SPEECH BUBBLE (Clean corporate outline style) ──── */}
        {showSpeechBubble && (
          <g id="speechBubble" className="ai-particle-slow">
            {/* Bubble container */}
            <rect
              x="30"
              y="10"
              width="260"
              height="34"
              rx="8"
              fill="#FFFFFF"
              stroke="#DBEAFE"
              strokeWidth="1.5"
            />
            {/* Pointer tail pointing down towards character's head */}
            <path
              d="M155 44 L160 50 L165 44"
              fill="#FFFFFF"
              stroke="#DBEAFE"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Mask line to seamlessly merge tail with bubble border */}
            <line x1="156" y1="44" x2="164" y2="44" stroke="#FFFFFF" strokeWidth="2" />
            
            {/* Friendly Greeting Text */}
            <text
              x="160"
              y="31"
              textAnchor="middle"
              fill="#1E40AF"
              fontSize="10"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontWeight="600"
              letterSpacing="0.2"
            >
              Xin chào! Mình là AI Guide của NextgenAI 👋
            </text>
          </g>
        )}

        {/* ── AI FLOATING PARTICLES & DATA ──────────────────── */}
        <g id="aiParticles">
          {/* Chatbot Bubble icon particle */}
          <g className="ai-particle-slow" transform="translate(45, 120)">
            <rect x="0" y="0" width="22" height="15" rx="4" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1" />
            <path d="M4 15 L1 19 L7 15" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1" strokeLinejoin="round" />
            <circle cx="8" cy="7.5" r="1" fill="#3B82F6" />
            <circle cx="11" cy="7.5" r="1" fill="#3B82F6" />
            <circle cx="14" cy="7.5" r="1" fill="#3B82F6" />
          </g>

          {/* Sparkles particle top-right */}
          <g className="ai-particle-fast" transform="translate(240, 110)">
            <path
              d="M0 -6 L1.5 -1.5 L6 0 L1.5 1.5 L0 6 L-1.5 1.5 L-6 0 L-1.5 -1.5 Z"
              fill="#3B82F6"
            />
          </g>

          {/* Sparkles particle mid-left */}
          <g className="ai-particle-fast" transform="translate(60, 220)">
            <path
              d="M0 -4 L1 -1 L4 0 L1 1 L0 4 L-1 1 L-4 0 L-1 -1 Z"
              fill="#93C5FD"
            />
          </g>

          {/* Binary '0' mid-right */}
          <g className="ai-particle-slow" transform="translate(235, 180)">
            <text fill="#3B82F6" fontSize="10" fontFamily="monospace" fontWeight="bold">0</text>
          </g>

          {/* Binary '1' bottom-left */}
          <g className="ai-particle-slow" transform="translate(75, 290)">
            <text fill="#93C5FD" fontSize="10" fontFamily="monospace" fontWeight="bold">1</text>
          </g>

          {/* Data dot / Neural Node top-left */}
          <g className="ai-particle-fast" transform="translate(90, 150)">
            <circle cx="0" cy="0" r="3" fill="#3B82F6" />
            <circle cx="0" cy="0" r="6" stroke="#93C5FD" strokeWidth="0.8" opacity="0.5" />
          </g>

          {/* Data dot / Neural Node bottom-right */}
          <g className="ai-particle-fast" transform="translate(230, 260)">
            <circle cx="0" cy="0" r="3" fill="#93C5FD" />
            <line x1="0" y1="0" x2="15" y2="-10" stroke="#E5E7EB" strokeWidth="1" />
            <circle cx="15" cy="-10" r="2" fill="#E5E7EB" />
          </g>
        </g>
      </svg>
    </div>
  );
}
