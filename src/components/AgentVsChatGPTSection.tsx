"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { 
  ShieldCheck, 
  Cpu, 
  GitMerge, 
  Sliders, 
  Check, 
  X, 
  Sparkles, 
  ArrowRight,
  HelpCircle
} from "lucide-react";

export default function AgentVsChatGPTSection() {
  const { language, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rainCanvasRef = useRef<HTMLCanvasElement>(null);

  // Matrix Rain background effect (light beige theme matching the website background)
  useEffect(() => {
    const canvas = rainCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || 900;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // AI binary data characters
    const alphabet = "0101010101010101NEXTGENAI";
    const fontSize = 14;
    const columns = Math.ceil(canvas.width / fontSize);

    const rainDrops = Array(columns).fill(1).map(() => Math.floor(Math.random() * -50));

    let lastTime = 0;
    const fps = 15; // Slow down rain speed
    const interval = 1000 / fps;

    const draw = (timestamp: number = 0) => {
      animationFrameId = requestAnimationFrame(draw);

      const elapsed = timestamp - lastTime;
      if (elapsed < interval) return;
      lastTime = timestamp - (elapsed % interval);

      // Clear with trailing alpha to create fading rain effect on light background
      ctx.fillStyle = "rgba(251, 250, 248, 0.07)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        
        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;

        if (y > 0) {
          if (Math.random() > 0.98) {
            ctx.fillStyle = "rgba(244, 63, 94, 0.8)"; // Pink accent
          } else if (Math.random() > 0.95) {
            ctx.fillStyle = "rgba(245, 158, 11, 0.8)"; // Amber accent
          } else {
            ctx.fillStyle = "rgba(37, 99, 235, 0.45)"; // Rich blue rain matching main site theme
          }
          ctx.fillText(text, x, y);
        }

        if (y > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }

        rainDrops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const simplifiedData = {
    vi: [
      {
        icon: <ShieldCheck className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />,
        iconColor: "text-blue-400 border-blue-950 bg-blue-950/30",
        title: "Bảo mật & Dữ liệu",
        subtitle: "Bảo vệ thông tin của bạn",
        analogyVi: "Két sắt riêng vs. Bưu thiếp công cộng",
        chatgpt: {
          status: "Rủi ro rò rỉ",
          text: "Dữ liệu được gửi lên đám mây công cộng của OpenAI và có thể dùng để huấn luyện AI của họ. Giống như gửi thư mật bằng bưu thiếp công khai.",
          isGood: false,
        },
        agent: {
          status: "An toàn tuyệt đối",
          text: "Dữ liệu nằm trọn vẹn trong máy chủ riêng của bạn, tuyệt đối không rò rỉ ra ngoài. Giống như cất tài liệu quan trọng vào két sắt gia đình.",
          isGood: true,
        }
      },
      {
        icon: <Cpu className="w-5 h-5 transition-transform duration-500 group-hover:rotate-180" />,
        iconColor: "text-indigo-400 border-indigo-955 bg-indigo-955/30",
        title: "Khả năng Tự động hóa",
        subtitle: "Mức độ tự động hoàn thành công việc",
        analogyVi: "Tự chạy từ A-Z vs. Chỉ làm khi được hỏi",
        chatgpt: {
          status: "Bị động, làm thủ công",
          text: "Chỉ trả lời khi nhận lệnh. Bạn phải tự làm mọi bước: chép dữ liệu, gõ lệnh tiếp theo, tự tổng hợp kết quả thủ công.",
          isGood: false,
        },
        agent: {
          status: "Tự chủ & Tự lập kế hoạch",
          text: "Chỉ cần ra lệnh một lần, AI tự động chia nhỏ công việc, sử dụng các công cụ để tự tìm kiếm, đọc file, viết báo cáo đến khi hoàn thành.",
          isGood: true,
        }
      },
      {
        icon: <GitMerge className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />,
        iconColor: "text-sky-400 border-sky-955 bg-sky-955/30",
        title: "Kết nối hệ thống",
        subtitle: "Khả năng liên kết với phần mềm sẵn có",
        analogyVi: "Kết nối trực tiếp vs. Hoạt động cô lập",
        chatgpt: {
          status: "Hoạt động cô lập",
          text: "Chạy độc lập trên trang web của OpenAI. Không kết nối trực tiếp với phần mềm trường học (LMS), cơ sở dữ liệu hay tin nhắn tự động.",
          isGood: false,
        },
        agent: {
          status: "Tích hợp không giới hạn",
          text: "Tích hợp sâu vào hệ thống quản lý học sinh (LMS), tự động cập nhật bảng điểm, gửi Email/Zalo thông báo kết quả cho phụ huynh.",
          isGood: true,
        }
      },
      {
        icon: <Sliders className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" />,
        iconColor: "text-violet-400 border-violet-955 bg-violet-955/30",
        title: "Tùy chọn Model AI",
        subtitle: "Lựa chọn bộ não AI tối ưu nhất",
        analogyVi: "Kết hợp nhiều bộ não vs. Bị khóa cứng 1 model",
        chatgpt: {
          status: "Khóa chặt Model",
          text: "Chỉ được sử dụng một mô hình duy nhất do hãng cung cấp (như GPT-4o). Không thể tùy ý kết hợp các model mạnh của hãng khác hay chạy model offline.",
          isGood: false,
        },
        agent: {
          status: "Tự do kết nối mọi Model",
          text: "Tự do lựa chọn và tích hợp các bộ não AI mạnh nhất (Claude 3.5, DeepSeek R1, GPT-4o, Gemini) hoặc cài đặt các model offline bảo mật 100% để tối ưu hóa chi phí.",
          isGood: true,
        }
      }
    ],
    en: [
      {
        icon: <ShieldCheck className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />,
        iconColor: "text-blue-400 border-blue-950 bg-blue-950/30",
        title: "Data Security",
        subtitle: "Information protection",
        analogyVi: "Private Vault vs. Public Postcard",
        chatgpt: {
          status: "Leak Risk",
          text: "Data is sent to public clouds, potentially used for AI training. Like sending a secret letter on an open postcard.",
          isGood: false,
        },
        agent: {
          status: "100% Secure",
          text: "Data stays inside your private servers. Zero leakage. Like locking your papers in a private home vault.",
          isGood: true,
        }
      },
      {
        icon: <Cpu className="w-5 h-5 transition-transform duration-500 group-hover:rotate-180" />,
        iconColor: "text-indigo-400 border-indigo-955 bg-indigo-955/30",
        title: "Autonomy & Tasks",
        subtitle: "How tasks are completed",
        analogyVi: "Runs A-to-Z vs. Q&A Only",
        chatgpt: {
          status: "Passive & Manual",
          text: "Only responds when prompted. You must manually copy-paste data, prompt step-by-step, and wait for each answer.",
          isGood: false,
        },
        agent: {
          status: "Self-Planning & Proactive",
          text: "Give one goal, and the AI plans, searches, drafts, and completes the entire process autonomously without supervision.",
          isGood: true,
        }
      },
      {
        icon: <GitMerge className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />,
        iconColor: "text-sky-400 border-sky-955 bg-sky-955/30",
        title: "Connections",
        subtitle: "Linking with your software",
        analogyVi: "Seamless Integration vs. Isolated Sandbox",
        chatgpt: {
          status: "Isolated Sandbox",
          text: "Runs strictly within OpenAI web/app. Cannot directly interface with school LMS, CRM databases, or auto-reply channels.",
          isGood: false,
        },
        agent: {
          status: "Seamless Integration",
          text: "Integrates with student databases & LMS. Automatically fires Emails/Zalo alerts to parents when assignments are graded.",
          isGood: true,
        }
      },
      {
        icon: <Sliders className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" />,
        iconColor: "text-violet-400 border-violet-955 bg-violet-955/30",
        title: "AI Model Choices",
        subtitle: "Select the best AI brains",
        analogyVi: "Multi-Brain Hub vs. Single Model Lock-in",
        chatgpt: {
          status: "Locked to 1 Model",
          text: "Strictly limited to a single OpenAI model (like GPT-4o). Cannot switch to other powerful models or run secure local/offline models.",
          isGood: false,
        },
        agent: {
          status: "Unlimited Model Choices",
          text: "Freedom to connect and mix the world's best models (Claude 3.5, DeepSeek R1, GPT-4o, Gemini) or deploy offline models for 100% data privacy.",
          isGood: true,
        }
      }
    ]
  };

  const currentData = simplifiedData[language];
  const activeRow = currentData[activeIndex];

  // Sci-Fi HUD Canvas drawings (cyber telemetry console)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameId: number;
    let time = 0;
    const baseWidth = 450;
    const baseHeight = 280;
    const scaleFactor = 1.25; // 25% larger to make it super sharp and readable

    const width = baseWidth;
    const height = baseHeight;

    canvas.width = baseWidth * scaleFactor * window.devicePixelRatio;
    canvas.height = baseHeight * scaleFactor * window.devicePixelRatio;
    canvas.style.width = "100%";
    canvas.style.maxWidth = `${baseWidth * scaleFactor}px`;
    canvas.style.height = "auto";
    ctx.scale(window.devicePixelRatio * scaleFactor, window.devicePixelRatio * scaleFactor);

    // Safe rounded rect helper
    const drawRoundedRect = (x: number, y: number, w: number, h: number, r: number) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    };

    // Server rack tower drawing helper
    const drawServerNode = (cx: number, cy: number, timeVal: number, scale = 1) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(scale, scale);

      ctx.fillStyle = "#0c1328";
      ctx.strokeStyle = "#1e3a8a";
      ctx.lineWidth = 1.5;
      drawRoundedRect(-22, -35, 44, 70, 5);
      ctx.fill();
      ctx.stroke();

      for (let i = 0; i < 3; i++) {
        const yOffset = -22 + i * 22;
        ctx.fillStyle = "#080c18";
        ctx.strokeStyle = "#2563eb";
        ctx.lineWidth = 1;
        drawRoundedRect(-17, yOffset, 34, 16, 2);
        ctx.fill();
        ctx.stroke();

        ctx.strokeStyle = "rgba(37, 99, 235, 0.4)";
        ctx.beginPath();
        ctx.moveTo(-10, yOffset + 8);
        ctx.lineTo(5, yOffset + 8);
        ctx.stroke();

        const isBlinking = Math.sin(timeVal * 12 + i * 2) > 0;
        ctx.fillStyle = isBlinking ? "#10b981" : "#047857";
        ctx.beginPath();
        ctx.arc(10, yOffset + 8, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    const draw = () => {
      ctx.fillStyle = "#060814";
      ctx.fillRect(0, 0, width, height);

      // Cyber Grid overlay
      ctx.strokeStyle = "rgba(30, 96, 255, 0.04)";
      ctx.lineWidth = 1;
      for (let x = 20; x < width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 20; y < height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // HUD corner brackets
      ctx.strokeStyle = "rgba(59, 130, 246, 0.4)";
      ctx.lineWidth = 1.5;
      const bSize = 10;
      // top-left
      ctx.beginPath(); ctx.moveTo(12, 12 + bSize); ctx.lineTo(12, 12); ctx.lineTo(12 + bSize, 12); ctx.stroke();
      // top-right
      ctx.beginPath(); ctx.moveTo(width - 12, 12 + bSize); ctx.lineTo(width - 12, 12); ctx.lineTo(width - 12 - bSize, 12); ctx.stroke();
      // bottom-left
      ctx.beginPath(); ctx.moveTo(12, height - 12 - bSize); ctx.lineTo(12, height - 12); ctx.lineTo(12 + bSize, height - 12); ctx.stroke();
      // bottom-right
      ctx.beginPath(); ctx.moveTo(width - 12, height - 12 - bSize); ctx.lineTo(width - 12, height - 12); ctx.lineTo(width - 12 - bSize, height - 12); ctx.stroke();

      time += 0.05;

      // Laser divider
      ctx.strokeStyle = "rgba(30, 96, 255, 0.15)";
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      ctx.moveTo(width / 2, 20);
      ctx.lineTo(width / 2, height - 20);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = "rgba(148, 163, 184, 0.7)";
      ctx.font = "bold 10px monospace";
      ctx.textAlign = "center";
      ctx.fillText("[ PUBLIC_CHATBOT ]", width / 4, 30);

      ctx.fillStyle = "#60a5fa";
      ctx.font = "bold 10px monospace";
      ctx.fillText("[ NEXTGEN_AI_AGENT ]", (3 * width) / 4, 30);

      if (activeIndex === 0) {
        // SECURITY & DATA
        const lx = width / 4;
        const rx = (3 * width) / 4;
        const cy = 145;

        // LEFT: Public Cloud leaking data
        ctx.fillStyle = "#1e293b";
        ctx.strokeStyle = "#f87171";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(lx - 12, cy - 5, 12, 0, Math.PI * 2);
        ctx.arc(lx + 12, cy - 5, 12, 0, Math.PI * 2);
        ctx.arc(lx, cy - 12, 14, 0, Math.PI * 2);
        ctx.rect(lx - 18, cy - 10, 36, 18);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#ef4444";
        ctx.font = "9px monospace";
        ctx.fillText("PUBLIC_CLOUD", lx, cy + 20);

        ctx.fillStyle = "rgba(239, 68, 68, 0.7)";
        const leakCount = 4;
        for (let i = 0; i < leakCount; i++) {
          const flowAngle = (time * 1.5 + (i * Math.PI) / 2) % (Math.PI * 2);
          const px = lx + Math.cos(flowAngle) * 45;
          const py = cy + Math.sin(flowAngle) * 20 - 8;
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // RIGHT: Secure server vault
        drawServerNode(rx, cy, time);

        // Concentric rotating shields
        ctx.strokeStyle = "rgba(16, 185, 129, 0.5)";
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 8]);
        ctx.beginPath();
        ctx.arc(rx, cy, 46, time, time + Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = "rgba(16, 185, 129, 0.3)";
        ctx.beginPath();
        ctx.arc(rx, cy, 54, -time * 0.8, -time * 0.8 + Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = "#10b981";
        ctx.font = "bold 9px monospace";
        ctx.fillText("SECURE_VAULT", rx, cy + 50);

        ctx.fillStyle = "#10b981";
        ctx.font = "12px sans-serif";
        ctx.fillText("🔒", rx, cy - 44);

      } else if (activeIndex === 1) {
        // AUTONOMY
        const lx = width / 4;
        const rx = (3 * width) / 4;
        const cy = 145;

        // LEFT: manual typing prompt
        ctx.fillStyle = "#0c1328";
        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 1.2;
        drawRoundedRect(lx - 45, cy - 50, 90, 26, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#e2e8f0";
        ctx.font = "bold 9px monospace";
        ctx.fillText("USER_PROMPT", lx, cy - 34);

        const clickCycle = Math.floor(time * 0.35) % 3;
        ctx.fillStyle = "rgba(148, 163, 184, 0.15)";
        drawRoundedRect(lx - 45, cy - 10, 90, 48, 4);
        ctx.fill();

        ctx.fillStyle = "#f87171";
        ctx.font = "8px monospace";
        if (clickCycle === 0) {
          ctx.fillText("> Ask details...", lx, cy + 5);
          ctx.fillText("[Wait response]", lx, cy + 20);
        } else if (clickCycle === 1) {
          ctx.fillText("> Paste output...", lx, cy + 5);
          ctx.fillText("[Format output]", lx, cy + 20);
        } else {
          ctx.fillText("> Request log...", lx, cy + 5);
          ctx.fillText("[Confirm save]", lx, cy + 20);
        }

        if ((time * 10) % 20 < 10) {
          ctx.fillStyle = "#ef4444";
          ctx.fillRect(lx + 32, cy - 2, 4, 8);
        }

        // RIGHT: autonomous agent loop
        const nodeRadius = 35;
        const subNodes = [
          { name: "PLAN", angle: 0 },
          { name: "SEARCH", angle: Math.PI / 2 },
          { name: "WRITE", angle: Math.PI },
          { name: "VERIFY", angle: (3 * Math.PI) / 2 }
        ];

        ctx.fillStyle = "#1e293b";
        ctx.strokeStyle = "#3b82f6";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(rx, cy, 18, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#60a5fa";
        ctx.font = "bold 8px monospace";
        ctx.fillText("CORE", rx, cy + 3);

        ctx.strokeStyle = "rgba(59, 130, 246, 0.15)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(rx, cy, nodeRadius + 18, 0, Math.PI * 2);
        ctx.stroke();

        subNodes.forEach((s) => {
          const sx = rx + Math.cos(s.angle + time * 0.45) * (nodeRadius + 18);
          const sy = cy + Math.sin(s.angle + time * 0.45) * (nodeRadius + 18);

          ctx.fillStyle = "#0c1020";
          ctx.strokeStyle = "#2563eb";
          ctx.lineWidth = 1;
          drawRoundedRect(sx - 24, sy - 9, 48, 18, 3);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = "#93c5fd";
          ctx.font = "bold 7.5px monospace";
          ctx.fillText(s.name, sx, sy + 3);
        });

        const px = rx + Math.cos(time * 0.8) * (nodeRadius + 18);
        const py = cy + Math.sin(time * 0.8) * (nodeRadius + 18);
        ctx.fillStyle = "#38bdf8";
        ctx.beginPath();
        ctx.arc(px, py, 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#10b981";
        ctx.font = "bold 9px monospace";
        ctx.fillText("AUTONOMOUS_LOOP", rx, cy + 62);

      } else if (activeIndex === 2) {
        // SYSTEM CONNECTIONS
        const lx = width / 4;
        const rx = (3 * width) / 4;
        const cy = 145;

        const endpoints = [
          { name: "LMS_SCHOOL", y: cy - 42 },
          { name: "DATABASE", y: cy },
          { name: "API_ZALO", y: cy + 42 }
        ];

        // LEFT: Severed links
        ctx.fillStyle = "#1e293b";
        ctx.strokeStyle = "#94a3b8";
        ctx.lineWidth = 1.2;
        drawRoundedRect(lx - 45, cy - 14, 38, 28, 4);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "#94a3b8";
        ctx.font = "7px monospace";
        ctx.fillText("CHATBOT", lx - 26, cy + 2);

        endpoints.forEach((ep) => {
          ctx.fillStyle = "#1e293b";
          ctx.strokeStyle = "#cbd5e1";
          ctx.lineWidth = 1;
          drawRoundedRect(lx + 15, ep.y - 12, 44, 24, 3);
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = "#cbd5e1";
          ctx.font = "7px monospace";
          ctx.fillText(ep.name, lx + 37, ep.y + 3);

          ctx.strokeStyle = "#ef4444";
          ctx.lineWidth = 1.5;
          ctx.setLineDash([2, 3]);
          ctx.beginPath();
          ctx.moveTo(lx - 7, cy);
          ctx.lineTo(lx + 15, ep.y);
          ctx.stroke();
          ctx.setLineDash([]);

          ctx.fillStyle = "#ef4444";
          ctx.font = "bold 7px monospace";
          ctx.fillText("✕", lx + 4, ep.y + 3);
        });

        // RIGHT: Integrated Hub
        ctx.fillStyle = "#0c1328";
        ctx.strokeStyle = "#2563eb";
        ctx.lineWidth = 1.5;
        drawRoundedRect(rx - 48, cy - 14, 40, 28, 4);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "#60a5fa";
        ctx.font = "bold 7px monospace";
        ctx.fillText("AGENT_HUB", rx - 28, cy + 2);

        endpoints.forEach((ep) => {
          ctx.fillStyle = "#081020";
          ctx.strokeStyle = "#10b981";
          ctx.lineWidth = 1;
          drawRoundedRect(rx + 15, ep.y - 12, 44, 24, 3);
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = "#a7f3d0";
          ctx.font = "7px monospace";
          ctx.fillText(ep.name, rx + 37, ep.y + 3);

          ctx.strokeStyle = "rgba(16, 185, 129, 0.4)";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(rx - 8, cy);
          ctx.lineTo(rx + 15, ep.y);
          ctx.stroke();

          const ratio = (time * 0.4 + ep.y * 0.05) % 1;
          const px = (rx - 8) + (23) * ratio;
          const py = cy + (ep.y - cy) * ratio;

          ctx.fillStyle = "#10b981";
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.fillStyle = "#10b981";
        ctx.font = "bold 9px monospace";
        ctx.fillText("DIRECT_INTEGRATIONS", rx, cy + 62);

      } else {
        // MODEL HUB SELECTOR
        const lx = width / 4;
        const rx = (3 * width) / 4;
        const cy = 135;

        // LEFT: limited model
        ctx.fillStyle = "#111827";
        ctx.strokeStyle = "#ef4444";
        ctx.lineWidth = 1.5;
        drawRoundedRect(lx - 38, cy - 25, 76, 50, 5);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#fecaca";
        ctx.font = "bold 8px monospace";
        ctx.fillText("GPT-4o ONLY", lx, cy - 8);

        ctx.fillStyle = "#f87171";
        ctx.font = "7px monospace";
        ctx.fillText("[ LOCKED_CLOUD ]", lx, cy + 8);
        ctx.fillText("🔒", lx, cy + 18);

        // RIGHT: Multi-model router prism
        const targets = [
          { name: "CLAUDE_3.5", y: cy - 46, color: "#ea580c" },
          { name: "DEEPSEEK_R1", y: cy, color: "#2563eb" },
          { name: "GPT_4O_API", y: cy + 46, color: "#10b981" }
        ];

        ctx.save();
        ctx.translate(rx - 38, cy);
        ctx.rotate(time * 0.5);
        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(0, -14);
        ctx.lineTo(12, 8);
        ctx.lineTo(-12, 8);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();

        ctx.fillStyle = "#38bdf8";
        ctx.font = "bold 6.5px monospace";
        ctx.fillText("ROUTER", rx - 38, cy + 22);

        targets.forEach((tg) => {
          ctx.fillStyle = "#0c1020";
          ctx.strokeStyle = tg.color;
          ctx.lineWidth = 1;
          drawRoundedRect(rx + 14, tg.y - 12, 48, 24, 3);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = "#ffffff";
          ctx.font = "bold 7px monospace";
          ctx.fillText(tg.name, rx + 38, tg.y + 3);

          ctx.strokeStyle = "rgba(56, 189, 248, 0.25)";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(rx - 25, cy);
          ctx.lineTo(rx + 14, tg.y);
          ctx.stroke();
        });

        const cycle = (time * 0.45) % 3;
        const taskIdx = Math.floor(cycle);
        const subRatio = cycle % 1;

        let px = rx - 38;
        let py = cy;
        const targetModel = targets[taskIdx];

        if (subRatio < 0.3) {
          const tVal = subRatio / 0.3;
          px = (rx - 90) + 52 * tVal;
          py = cy;
        } else {
          const tVal = (subRatio - 0.3) / 0.7;
          px = (rx - 38) + 52 * tVal;
          py = cy + (targetModel.y - cy) * tVal;
        }

        ctx.fillStyle = "#1e293b";
        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 1;
        drawRoundedRect(rx - 110, cy - 12, 34, 24, 3);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "#38bdf8";
        ctx.font = "bold 7px monospace";
        ctx.fillText("JOB", rx - 93, cy + 3);

        if (subRatio < 0.95) {
          ctx.fillStyle = targetModel.color;
          ctx.beginPath();
          ctx.arc(px, py, 3.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = "#38bdf8";
        ctx.font = "bold 9px monospace";
        ctx.fillText("DYNAMIC_MODEL_ROUTING", rx, cy + 72);
      }

      frameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [activeIndex]);

  return (
    <section id="so-sanh-ai" className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-[#fbfaf8] to-[#ffffff] relative overflow-hidden">
      {/* Matrix data rain effect on light beige background */}
      <canvas ref={rainCanvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-80" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-35 pointer-events-none"></div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/[0.04] rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.04] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Original Light-Theme structure with optimized typography) */}
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
            <span>{t({ vi: "Trợ Lý AI Tự Hành & Tối Ưu Hóa Quy Trình Doanh Nghiệp", en: "Autonomous AI Assistant & Business Process Optimization" })}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            <span className="text-indigo-600">
              {t({ vi: "AI Agent", en: "AI Agent" })}
            </span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="text-slate-800">
                {t({ vi: "Phương Pháp Tối Ưu Hiệu Suất Cho Các Model AI", en: "The Ultimate Optimization for Enterprise AI Models" })}
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-indigo-500 rounded-full"></span>
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed tracking-wide font-medium">
            {t({
              vi: "Vượt trội hơn các chatbot hỏi đáp thông thường, giải pháp AI Agent tự hành từ NextgenAI giúp doanh nghiệp tự động hóa quy trình vận hành phức tạp, kết nối trực tiếp với hệ cơ sở tri thức nội bộ và tối ưu hóa hiệu năng các mô hình LLM với độ bảo mật dữ liệu tuyệt đối.",
              en: "Going beyond basic Q&A chatbots, NextgenAI's autonomous AI Agent solutions automate complex operational workflows, securely connect to your internal knowledge base, and maximize the efficiency of LLMs with enterprise-grade data security.",
            })}
          </p>


        </div>

        {/* Main Split-Pane Card (The technological deck, rewritten in dark cyber style) */}
        <div className="max-w-6xl mx-auto bg-[#0a0d18] rounded-3xl border border-slate-800/80 shadow-[0_0_50px_rgba(30,96,255,0.08)] overflow-hidden flex flex-col">
          
          <div className="flex flex-col lg:flex-row items-stretch min-h-[500px]">
            
            {/* Left Block: AI Agent Flagship (Modern Cyber Glassmorphic Panel) */}
            <div className="w-full lg:w-[50%] bg-gradient-to-br from-[#0c1630] via-[#090f20] to-[#040714] text-white p-8 sm:p-12 lg:pr-14 relative overflow-hidden flex flex-col justify-between z-10 lg:clip-chevron border-r border-slate-800/50">
              {/* Futuristic grid scanner overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none"></div>
              
              <div>
                {/* Badge/Tag */}
                <div className="mb-6">
                  <span className="inline-block px-4 py-1.5 text-sm font-black uppercase tracking-wider text-blue-400 bg-blue-950/60 border border-blue-800/40 rounded-full shadow-sm">
                    {t({ vi: "GIẢI PHÁP TỐI ƯU", en: "OPTIMIZED SOLUTION" })}
                  </span>
                </div>
                
                {/* Title */}
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6">
                  {t({ vi: "AI AGENT", en: "AI AGENT" })}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-black">
                    {activeRow.title.toUpperCase()}
                  </span>
                </h2>
 
                {/* Details/Description with arrow icon */}
                <div className="space-y-6 my-6 max-w-lg font-sans">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-extrabold text-xl mt-0.5 select-none">[&gt;]</span>
                    <div>
                      <p className="text-sm font-mono font-bold text-slate-400 uppercase tracking-wider">
                        {t({ vi: "Trạng thái:", en: "Status:" })} <span className="text-emerald-400 font-bold">{activeRow.agent.status.toUpperCase()}</span>
                      </p>
                      <p className="text-lg text-slate-100 leading-relaxed font-semibold mt-1">
                        {activeRow.agent.text}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 pt-4 border-t border-slate-850">
                    <span className="text-blue-400 font-extrabold text-xl mt-0.5 select-none">[&gt;]</span>
                    <div>
                      <p className="text-sm font-mono font-bold text-slate-400 uppercase tracking-wider">
                        {t({ vi: "Bản chất giải pháp:", en: "Nature of solution:" })}
                      </p>
                      <p className="text-[16px] text-slate-200 leading-relaxed font-semibold mt-1">
                        {activeRow.analogyVi.split(" vs. ")[0]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
 
              {/* Consultation Button */}
              <div className="pt-4">
                <Link
                  href="/quy-trinh-giai-phap"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-black text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg shadow-blue-500/25 hover:scale-[1.02] active:scale-98 transition-all gap-2 cursor-pointer"
                >
                  <span>{t({ vi: "Quy trình & Giải pháp", en: "Process & Solutions" })}</span>
                  <ArrowRight className="w-4 h-4 font-bold" />
                </Link>
              </div>
            </div>
 
            {/* Right Block: Chatbot Public & Live Interactive Canvas */}
            <div className="w-full lg:w-[50%] p-8 sm:p-12 lg:pl-14 flex flex-col justify-between bg-[#080a12] relative min-h-[480px]">
              
              {/* Chatbot Warning Card */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-bold uppercase text-slate-400 tracking-wider">
                    Chatbot (Public)
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-red-950/30 border border-red-800/40 text-red-400 font-bold">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                    <span>{activeRow.chatgpt.status}</span>
                  </span>
                </div>
                
                <p className="text-[15px] text-slate-300 leading-relaxed font-semibold">
                  {activeRow.chatgpt.text}
                </p>
                
                <div className="text-sm text-slate-400 font-bold flex items-center gap-2 pt-2">
                  <span className="font-mono text-xs text-slate-500 uppercase">Đặc điểm:</span>
                  <span className="text-red-400 px-2.5 py-1 rounded bg-red-950/20 border border-red-900/30 text-xs">
                    {activeRow.analogyVi.split(" vs. ")[1]}
                  </span>
                </div>
              </div>
 
              {/* Live Canvas Monitor Wrapper with badge on top */}
              <div className="mt-8 space-y-4">
                <div className="flex justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono font-bold text-blue-400 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
                    <span>SYSTEM_MONITOR: STEP_0{activeIndex + 1}</span>
                  </span>
                </div>
                
                {/* Cyber HUD Terminal box */}
                <div className="w-full aspect-[560/350] max-w-[560px] mx-auto border border-slate-800 rounded-2xl bg-[#060814] relative overflow-hidden shadow-inner group">
                  <canvas ref={canvasRef} className="absolute inset-0 w-full h-full rounded-2xl" />
                  
                  {/* Neon CRT Scanning Line overlay effect */}
                  <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none animate-scan-line"></div>
                  
                  <div className="absolute bottom-2.5 right-2.5 bg-slate-900/80 border border-slate-850 rounded-lg px-2.5 py-1 text-[10px] font-mono font-bold text-slate-500 animate-pulse z-10">
                    • HUD_STATUS: ACTIVE
                  </div>
                </div>
              </div>
 
            </div>
 
          </div>
 
          {/* Bottom part: Cyber Tab selectors */}
          <div className="w-full border-t border-slate-800 bg-[#070912] flex flex-col md:flex-row overflow-hidden">
            {currentData.map((row, index) => {
              const isActive = activeIndex === index;
              const numStr = `0${index + 1}`;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex-1 p-7 flex items-center gap-4 transition-all duration-300 text-left border-b md:border-b-0 md:border-r border-slate-850 last:border-none relative cursor-pointer group ${
                    isActive
                      ? "bg-gradient-to-b from-[#0c1530] to-[#080d1e] text-white font-extrabold shadow-inner z-20"
                      : "hover:bg-slate-900/40 text-slate-400 bg-[#070912]"
                  }`}
                >
                  <span className={`text-3xl sm:text-4xl font-extrabold leading-none transition-opacity duration-300 ${
                    isActive ? "text-blue-400/60" : "text-slate-700 group-hover:text-slate-500"
                  }`}>
                    {numStr}
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className={`text-[10px] uppercase font-mono font-bold tracking-wider ${
                      isActive ? "text-blue-400" : "text-slate-500"
                    }`}>
                      {t({ vi: "KHÍA CẠNH", en: "DIMENSION" })} {numStr}
                    </span>
                    <span className={`text-sm sm:text-base font-bold truncate ${
                      isActive ? "text-white" : "text-slate-400"
                    }`}>
                      {row.title}
                    </span>
                  </div>
                  {isActive && (
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-500"></div>
                  )}
                </button>
              );
            })}
          </div>
 
        </div>

        {/* Full-width Analogy Banner */}
        <div className="max-w-4xl mx-auto p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100/50 flex items-start gap-4 mt-12 hover:bg-indigo-50/70 transition-colors">
          <HelpCircle className="w-5 h-5 text-indigo-650 flex-shrink-0 mt-0.5 animate-bounce-slow" />
          <div className="space-y-1.5">
            <h4 className="text-xs sm:text-sm font-extrabold text-indigo-950">
              {t({ vi: "Cách ví von dễ hiểu cho người không chuyên:", en: "Simple Non-Tech Analogy:" })}
            </h4>
            <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
              {t({
                vi: "Chatbot giống như chiếc xe máy bạn phải tự lái (tốn công gõ phím, copy-paste liên tục), còn AI Agent giống như chiếc xe tự lái (bạn chỉ cần ra lệnh điểm đến, xe tự chạy và bạn chỉ việc nhận kết quả cuối cùng).",
                en: "Chatbot is like a manual motorcycle (requires your constant effort, typing, copy-pasting), while an AI Agent is like a self-driving taxi (just state the destination, it drives itself and you receive the final output)."
              })}
            </p>
          </div>
        </div>

        {/* Dynamic CTA Banner */}
        <div className="mt-16 p-8 md:p-10 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white relative overflow-hidden shadow-xl">
          {/* Decorative shapes */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                {t({ vi: "Bạn đã sẵn sàng sở hữu AI Agent của riêng mình?", en: "Ready to own your private AI Agent?" })}
              </h3>
              <p className="text-slate-350 text-sm sm:text-base leading-relaxed">
                {t({
                  vi: "Đừng để dữ liệu quý giá của bạn rời rạc trên Chatbot. Hãy thiết lập một hệ thống AI riêng hoạt động trên tri thức của bạn một cách bảo mật và thông minh.",
                  en: "Stop scattering your data on public Chatbots. Set up a private AI system that operates securely and intelligently on your own knowledge base.",
                })}
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#lien-he"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 text-sm font-extrabold shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <span>{t({ vi: "Tư vấn Giải pháp AI Agent", en: "Get AI Agent Consultation" })}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-indigo-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
