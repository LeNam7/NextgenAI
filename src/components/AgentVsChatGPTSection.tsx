"use client";

import React, { useState, useEffect, useRef } from "react";
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

  // Matrix Rain background effect
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

      // Clear with trailing alpha to create fading rain effect
      ctx.fillStyle = "rgba(248, 250, 252, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        
        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;

        if (y > 0) {
          if (Math.random() > 0.98) {
            ctx.fillStyle = "rgba(224, 30, 90, 0.65)"; // Vibrant pink accent
          } else if (Math.random() > 0.95) {
            ctx.fillStyle = "rgba(217, 119, 6, 0.65)"; // Vibrant amber accent
          } else {
            ctx.fillStyle = "rgba(79, 70, 229, 0.35)"; // Darker Indigo-600 with 35% opacity for high contrast on light background
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
        iconColor: "text-indigo-600 border-indigo-100 bg-indigo-50/30",
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
        iconColor: "text-blue-600 border-blue-100 bg-blue-50/30",
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
        iconColor: "text-sky-600 border-sky-100 bg-sky-50/30",
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
        iconColor: "text-violet-600 border-violet-100 bg-violet-50/30",
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
        iconColor: "text-indigo-600 border-indigo-100 bg-indigo-50/30",
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
        iconColor: "text-blue-600 border-blue-100 bg-blue-50/30",
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
        iconColor: "text-sky-600 border-sky-100 bg-sky-50/30",
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
        iconColor: "text-violet-600 border-violet-100 bg-violet-50/30",
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

  // Adorable Canvas Drawings
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameId: number;
    let time = 0;
    const width = 450;
    const height = 280;

    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    canvas.style.width = "100%";
    canvas.style.maxWidth = `${width}px`;
    canvas.style.height = "auto";
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Cute Document drawing helper
    const drawCuteDocument = (cx: number, cy: number, angle: number, scale: number, eyesType: "happy" | "sad" | "neutral", blush: boolean) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      ctx.scale(scale, scale);

      // Paper shadow
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.beginPath();
      ctx.rect(-13, -17, 30, 40);
      ctx.fill();

      // Paper body
      ctx.fillStyle = "#ffffff";
      ctx.strokeStyle = "#cbd5e1";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(-15, -20);
      ctx.lineTo(7, -20);
      ctx.lineTo(15, -12);
      ctx.lineTo(15, 20);
      ctx.lineTo(-15, 20);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Folded corner
      ctx.fillStyle = "#f1f5f9";
      ctx.beginPath();
      ctx.moveTo(7, -20);
      ctx.lineTo(7, -12);
      ctx.lineTo(15, -12);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Content lines
      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(-9, 4);
      ctx.lineTo(9, 4);
      ctx.moveTo(-9, 10);
      ctx.lineTo(3, 10);
      ctx.stroke();

      // Face
      ctx.strokeStyle = "#1e293b";
      ctx.lineWidth = 1.5;
      ctx.lineCap = "round";

      if (eyesType === "happy") {
        // Happy arch eyes
        ctx.beginPath();
        ctx.arc(-5, -6, 2, Math.PI, 0);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(5, -6, 2, Math.PI, 0);
        ctx.stroke();
      } else if (eyesType === "sad") {
        // Sad cross eyes > <
        ctx.beginPath();
        ctx.moveTo(-7, -8); ctx.lineTo(-3, -4);
        ctx.moveTo(-7, -4); ctx.lineTo(-3, -8);
        ctx.moveTo(3, -8); ctx.lineTo(7, -4);
        ctx.moveTo(3, -4); ctx.lineTo(7, -8);
        ctx.stroke();
      } else {
        // Dot eyes
        ctx.fillStyle = "#1e293b";
        ctx.beginPath();
        ctx.arc(-5, -6, 1.5, 0, Math.PI * 2);
        ctx.arc(5, -6, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Blushing cheeks
      if (blush) {
        ctx.fillStyle = "rgba(251, 113, 133, 0.4)";
        ctx.beginPath();
        ctx.arc(-8, -2, 2.5, 0, Math.PI * 2);
        ctx.arc(8, -2, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Mouth
      ctx.strokeStyle = "#1e293b";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      if (eyesType === "happy") {
        ctx.arc(0, -3, 2, 0, Math.PI); // smile
      } else if (eyesType === "sad") {
        ctx.arc(0, -1, 2, Math.PI, 0); // frown
      } else {
        ctx.moveTo(-2, -3); ctx.lineTo(2, -3); // straight line
      }
      ctx.stroke();

      ctx.restore();
    };

    // Cute Robot helper drawing function
    const drawCuteRobot = (rx: number, ry: number, timeVal: number, isHappy: boolean, scale: number = 1) => {
      ctx.save();
      ctx.translate(rx, ry);
      ctx.scale(scale, scale);
      
      const bob = Math.sin(timeVal * 2.5) * 3;
      ctx.translate(0, bob);

      // Antenna
      ctx.strokeStyle = "#4f46e5";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, -15);
      ctx.lineTo(0, -22);
      ctx.stroke();
      // Glowing bulb
      ctx.fillStyle = isHappy ? "#facc15" : "#9ca3af";
      ctx.beginPath();
      ctx.arc(0, -23, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Ears
      ctx.fillStyle = "#818cf8";
      ctx.fillRect(-14, -8, 3, 6);
      ctx.fillRect(11, -8, 3, 6);

      // Head/Body (Rounded display)
      ctx.fillStyle = "#6366f1";
      ctx.beginPath();
      // draw round rectangle body
      ctx.roundRect(-11, -13, 22, 22, 5);
      ctx.fill();

      // Screen Face
      ctx.fillStyle = "#1e1b4b";
      ctx.beginPath();
      ctx.roundRect(-8, -10, 16, 16, 3);
      ctx.fill();

      // Eyes (Big cute circles)
      ctx.fillStyle = isHappy ? "#38bdf8" : "#cbd5e1";
      // blink every few seconds
      const isBlink = (Math.floor(timeVal * 0.3) % 4 === 0) && ((timeVal * 10) % 25 < 2);
      if (isBlink) {
        ctx.strokeStyle = isHappy ? "#38bdf8" : "#cbd5e1";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(-6, -3); ctx.lineTo(-2, -3);
        ctx.moveTo(2, -3); ctx.lineTo(6, -3);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.arc(-4, -3, 2, 0, Math.PI * 2);
        ctx.arc(4, -3, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Blush inside screen
      if (isHappy) {
        ctx.fillStyle = "rgba(244, 63, 94, 0.4)";
        ctx.beginPath();
        ctx.arc(-5, 1, 1.5, 0, Math.PI * 2);
        ctx.arc(5, 1, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Mouth
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1;
      ctx.beginPath();
      if (isHappy) {
        ctx.arc(0, 1, 2.5, 0, Math.PI);
      } else {
        ctx.arc(0, 3, 1.5, Math.PI, 0);
      }
      ctx.stroke();

      // Arms
      ctx.strokeStyle = "#6366f1";
      ctx.lineWidth = 2.5;
      ctx.lineCap = "round";
      // Left arm
      ctx.beginPath();
      ctx.moveTo(-11, 1);
      ctx.lineTo(-17, 4 + Math.sin(timeVal * 2.5) * 1.5);
      ctx.stroke();
      // Right arm waving
      ctx.beginPath();
      ctx.moveTo(11, 1);
      if (isHappy) {
        ctx.lineTo(17, -4 + Math.sin(timeVal * 4) * 2.5);
      } else {
        ctx.lineTo(16, 5);
      }
      ctx.stroke();

      // Feet / base
      ctx.fillStyle = "#4f46e5";
      ctx.beginPath();
      ctx.roundRect(-8, 9, 16, 3, 1.5);
      ctx.fill();

      ctx.restore();
    };

    const draw = () => {
      // Background Grid paper style
      ctx.fillStyle = "#fafaf9"; // stone-50 warm cream
      ctx.fillRect(0, 0, width, height);

      // Grid Lines
      ctx.strokeStyle = "rgba(226, 232, 240, 0.5)";
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

      time += 0.05;

      // Draw middle divider
      ctx.strokeStyle = "rgba(203, 213, 225, 0.5)";
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(width / 2, 20);
      ctx.lineTo(width / 2, height - 20);
      ctx.stroke();
      ctx.setLineDash([]); // Reset line dash

      // Column Labels (Chatbot vs AI Agent)
      ctx.fillStyle = "#94a3b8";
      ctx.font = "bold 11px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Chatbot (Public)", width / 4, 25);

      ctx.fillStyle = "#6366f1";
      ctx.font = "bold 11px sans-serif";
      ctx.fillText("AI Agent (Private)", (3 * width) / 4, 25);

      if (activeIndex === 0) {
        // --- 1. SECURITY & DATA (Crying cloud vs Safe House) ---

        // LEFT (ChatGPT public leak)
        // Grumpy grey cloud
        ctx.save();
        ctx.translate(width / 4, 75);
        ctx.fillStyle = "#cbd5e1";
        ctx.strokeStyle = "#94a3b8";
        ctx.lineWidth = 1.5;
        // cloud path
        ctx.beginPath();
        ctx.arc(-15, 0, 14, 0, Math.PI * 2);
        ctx.arc(0, -8, 16, 0, Math.PI * 2);
        ctx.arc(15, 0, 14, 0, Math.PI * 2);
        ctx.arc(0, 8, 14, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Grumpy face
        ctx.strokeStyle = "#475569";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        // eyes - -
        ctx.moveTo(-7, -2); ctx.lineTo(-3, -2);
        ctx.moveTo(3, -2); ctx.lineTo(7, -2);
        ctx.stroke();
        // wavy mouth
        ctx.beginPath();
        ctx.moveTo(-2, 4);
        ctx.quadraticCurveTo(0, 2, 2, 4);
        ctx.stroke();
        ctx.restore();

        // Sad document floating towards cloud
        const docY = 175 - ((time * 15) % 100);
        const docAngle = Math.sin(time) * 0.15;
        drawCuteDocument(width / 4, docY, docAngle, 0.8, "sad", false);

        // Warning particles escaping cloud
        ctx.fillStyle = "rgba(239, 68, 68, 0.7)";
        ctx.beginPath();
        ctx.arc(width / 4 - 30 + Math.sin(time) * 10, 60 - Math.cos(time) * 5, 2, 0, Math.PI * 2);
        ctx.arc(width / 4 + 30 - Math.sin(time * 1.5) * 8, 70 + Math.sin(time) * 5, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // RIGHT (AI Agent Locked Safe Vault)
        const vaultX = (3 * width) / 4;
        const vaultY = 145;

        // Draw cute Safe House
        ctx.fillStyle = "#e6f4ea";
        ctx.strokeStyle = "#10b981";
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.rect(vaultX - 35, vaultY - 20, 70, 60);
        ctx.fill();
        ctx.stroke();

        // Safe House roof
        ctx.fillStyle = "#34a853";
        ctx.beginPath();
        ctx.moveTo(vaultX - 42, vaultY - 20);
        ctx.lineTo(vaultX, vaultY - 45);
        ctx.lineTo(vaultX + 42, vaultY - 20);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Smiling lock face on safe door
        ctx.fillStyle = "#fbbc05";
        ctx.beginPath();
        ctx.arc(vaultX, vaultY + 10, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        // lock eyes
        ctx.fillStyle = "#1e293b";
        ctx.beginPath();
        ctx.arc(vaultX - 3, vaultY + 8, 1, 0, Math.PI * 2);
        ctx.arc(vaultX + 3, vaultY + 8, 1, 0, Math.PI * 2);
        ctx.fill();
        // lock smile
        ctx.beginPath();
        ctx.arc(vaultX, vaultY + 10, 1.5, 0, Math.PI);
        ctx.stroke();

        // Happy document inside safe
        drawCuteDocument(vaultX, vaultY + 15 + Math.sin(time * 3) * 2, 0, 0.7, "happy", true);

        // Friendly shield rotate circle
        ctx.strokeStyle = "rgba(16, 185, 129, 0.35)";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(vaultX, vaultY + 5, 55, time, time + Math.PI * 1.5);
        ctx.stroke();

        // Tiny stars surrounding
        ctx.fillStyle = "#facc15";
        ctx.font = "14px sans-serif";
        ctx.fillText("★", vaultX + Math.sin(time) * 65, vaultY + 5 + Math.cos(time) * 65);
        ctx.fillText("★", vaultX - Math.sin(time + 1) * 65, vaultY + 5 - Math.cos(time + 1) * 65);

      } else if (activeIndex === 1) {
        // --- 2. AUTONOMY & TASKS (Manual Prompts Loop vs Autonomous Agentic Loop) ---

        // LEFT (ChatGPT - Manual Prompts Loop)
        const promptCycle = Math.floor(time * 0.3) % 3; // 0, 1, 2
        const isClickFrame = (time * 10) % 20 < 8; // blinking click indicator

        // Draw active manual step bubble
        ctx.fillStyle = "#ffffff";
        ctx.strokeStyle = "#cbd5e1";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.roundRect(width / 4 - 65, 86, 130, 36, 6);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#1e293b";
        ctx.font = "bold 10px sans-serif";
        if (promptCycle === 0) {
          ctx.fillText("Lần 1: 'Tìm tài liệu...'", width / 4, 102);
          ctx.fillStyle = "#64748b";
          ctx.font = "8px sans-serif";
          ctx.fillText("(User tự gõ & chờ)", width / 4, 114);
        } else if (promptCycle === 1) {
          ctx.fillText("Lần 2: 'Tổng hợp lại...'", width / 4, 102);
          ctx.fillStyle = "#64748b";
          ctx.font = "8px sans-serif";
          ctx.fillText("(User chép nội dung vào)", width / 4, 114);
        } else {
          ctx.fillText("Lần 3: 'Lọc & Báo cáo'", width / 4, 102);
          ctx.fillStyle = "#64748b";
          ctx.font = "8px sans-serif";
          ctx.fillText("(User tự tải file về)", width / 4, 114);
        }

        // Cartoon finger pointer pushing click button
        ctx.save();
        ctx.translate(width / 4, 175);
        ctx.fillStyle = isClickFrame ? "#3b82f6" : "#f1f5f9";
        ctx.strokeStyle = "#cbd5e1";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.roundRect(-42, -12, 84, 24, 6);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isClickFrame ? "#ffffff" : "#475569";
        ctx.font = "bold 10px sans-serif";
        ctx.fillText("GỬI LỆNH ↵", 0, 3);

        if (isClickFrame) {
          // click spark stars
          ctx.fillStyle = "#fbbf24";
          ctx.font = "8px sans-serif";
          ctx.fillText("✨", -32, -8);
          ctx.fillText("✨", 32, 8);
        }
        ctx.restore();

        // Label for ChatGPT
        ctx.fillStyle = "#94a3b8";
        ctx.font = "bold 9px sans-serif";
        ctx.fillText("PHẢI HỎI 3-4 LẦN THỦ CÔNG", width / 4, 215);

        // RIGHT (AI Agent - Autonomous Agentic Loop)
        const rx = (3 * width) / 4;
        const ry = 145;

        // Loop steps (Plan -> Search -> Process -> Reflect)
        const steps = [
          { name: "1. Lập Kế Hoạch 📋", x: rx - 48, y: ry - 40, color: "#dbeafe", stroke: "#2563eb" },
          { name: "2. Tìm Kiếm 🔍", x: rx + 48, y: ry - 40, color: "#e0f2fe", stroke: "#0284c7" },
          { name: "3. Đọc / Viết 📝", x: rx + 48, y: ry + 40, color: "#fef3c7", stroke: "#d97706" },
          { name: "4. Kiểm Tra 🧐", x: rx - 48, y: ry + 40, color: "#d1fae5", stroke: "#059669" }
        ];

        // Draw loop arrows connecting the steps in a circle
        ctx.strokeStyle = "rgba(99, 102, 241, 0.25)";
        ctx.lineWidth = 2.5;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(steps[0].x, steps[0].y);
        ctx.lineTo(steps[1].x, steps[1].y);
        ctx.lineTo(steps[2].x, steps[2].y);
        ctx.lineTo(steps[3].x, steps[3].y);
        ctx.closePath();
        ctx.stroke();
        ctx.setLineDash([]);

        // Determine current phase in the loop (4 steps loop)
        const activeCycle = (time * 0.35) % 4; // 0, 1, 2, 3
        const stepIdx = Math.floor(activeCycle);
        const subRatio = activeCycle % 1;

        // Draw steps
        steps.forEach((s, idx) => {
          const isActive = stepIdx === idx;
          ctx.fillStyle = isActive ? s.color : "#ffffff";
          ctx.strokeStyle = s.stroke;
          ctx.lineWidth = isActive ? 1.8 : 1.2;
          ctx.beginPath();
          ctx.roundRect(s.x - 51, s.y - 14, 102, 28, 6);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = isActive ? "#0f172a" : "#64748b";
          ctx.font = "bold 10px sans-serif";
          ctx.fillText(s.name, s.x, s.y + 4);
        });

        // Draw central Agent Robot
        drawCuteRobot(rx, ry, time, true, 0.95);

        // Draw active tool overlays next to the robot based on the step
        if (stepIdx === 0) {
          // lightbulb idea above robot
          ctx.fillStyle = "#fbbf24";
          ctx.font = "12px sans-serif";
          ctx.fillText("💡", rx, ry - 17);
        } else if (stepIdx === 1) {
          // magnifying glass
          ctx.fillStyle = "#38bdf8";
          ctx.font = "12px sans-serif";
          ctx.fillText("🔍", rx + 14, ry);
        } else if (stepIdx === 2) {
          // pencil writing on paper
          ctx.fillStyle = "#fb923c";
          ctx.font = "12px sans-serif";
          ctx.fillText("✏️", rx - 14, ry);
        } else if (stepIdx === 3) {
          // green checkmark reflection
          ctx.fillStyle = "#4ade80";
          ctx.font = "12px sans-serif";
          ctx.fillText("✅", rx, ry - 17);
        }

        // Draw a cute star moving along the loop path
        const currentStep = steps[stepIdx];
        const nextStep = steps[(stepIdx + 1) % 4];
        const starX = currentStep.x + (nextStep.x - currentStep.x) * subRatio;
        const starY = currentStep.y + (nextStep.y - currentStep.y) * subRatio;

        ctx.fillStyle = "#f59e0b";
        ctx.font = "9px sans-serif";
        ctx.fillText("⭐", starX - 4, starY + 3);

        // Done banner popping up at the end of cycle
        if (stepIdx === 3 && subRatio > 0.7) {
          ctx.fillStyle = "rgba(16, 185, 129, 0.95)";
          ctx.strokeStyle = "#10b981";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(rx - 48, ry - 34, 96, 18, 5);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = "#ffffff";
          ctx.font = "bold 9px sans-serif";
          ctx.fillText("HOÀN THÀNH! 🎉", rx, ry - 22);
        }

      } else if (activeIndex === 2) {
        // --- 3. SYSTEM CONNECTIONS (Broken Bridge vs Hand Holding Friends) ---

        // LEFT (Broken communication)
        // Sad school
        ctx.fillStyle = "#fee2e2";
        ctx.strokeStyle = "#f87171";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(8, 110, 56, 30, 4);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "#ef4444";
        ctx.font = "bold 10px sans-serif";
        ctx.fillText("TRƯỜNG", 36, 128);

        // Sad DB
        ctx.fillStyle = "#fee2e2";
        ctx.beginPath();
        ctx.roundRect(8, 180, 56, 30, 4);
        ctx.fill();
        ctx.stroke();
        ctx.fillText("DATA", 36, 198);

        // Grumpy Chatbot box on the other side
        ctx.fillStyle = "#f1f5f9";
        ctx.strokeStyle = "#cbd5e1";
        ctx.beginPath();
        ctx.roundRect(118, 128, 56, 44, 4);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "#64748b";
        ctx.font = "bold 10px sans-serif";
        ctx.fillText("Chatbot", 146, 154);

        // Broken wire lines with red X
        ctx.strokeStyle = "#ef4444";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(64, 125);
        ctx.lineTo(82, 142);
        ctx.moveTo(64, 190);
        ctx.lineTo(82, 160);
        ctx.stroke();

        ctx.fillStyle = "#ef4444";
        ctx.font = "bold 18px sans-serif";
        ctx.fillText("✕", 90, 154);

        // RIGHT (Hand holding connect network)
        const cx = (3 * width) / 4;
        const cy = 145;

        // Sub systems as smiling cute boxes
        const subSystems = [
          { name: "LMS 🏫", x: cx - 55, y: 80, color: "#dbeafe", stroke: "#2563eb" },
          { name: "Database 💾", x: cx + 55, y: 80, color: "#d1fae5", stroke: "#059669" },
          { name: "Email/Zalo 💬", x: cx, y: 210, color: "#fef3c7", stroke: "#d97706" }
        ];

        // Draw connections with cute pink heart packets
        ctx.strokeStyle = "rgba(99, 102, 241, 0.4)";
        ctx.lineWidth = 2.5;
        subSystems.forEach((sys) => {
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(sys.x, sys.y);
          ctx.stroke();

          // Float heart packet
          const ratio = (time * 0.4) % 1;
          const px = cx + (sys.x - cx) * ratio;
          const py = cy + (sys.y - cy) * ratio;
          
          ctx.fillStyle = "#ec4899"; // pink heart
          ctx.font = "9px sans-serif";
          ctx.fillText("❤️", px, py + 3);
        });

        // Draw central Cute Agent Robot
        drawCuteRobot(cx, cy, time, true, 1);

        // Draw smiling system nodes
        subSystems.forEach((sys) => {
          ctx.fillStyle = sys.color;
          ctx.strokeStyle = sys.stroke;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(sys.x - 46, sys.y - 14, 92, 28, 6);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = "#1e293b";
          ctx.font = "bold 10px sans-serif";
          ctx.fillText(sys.name, sys.x, sys.y + 4);
        });

      } else {
        // --- 4. DYNAMIC AI ROUTER ANIMATION ---

        // LEFT (Rigid locked model)
        ctx.fillStyle = "#f1f5f9";
        ctx.strokeStyle = "#94a3b8";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(width / 4 - 40, 96, 80, 68, 6);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#475569";
        ctx.font = "bold 10px sans-serif";
        ctx.fillText("Chỉ được dùng", width / 4, 118);
        ctx.fillText("GPT-4o", width / 4, 134);

        // Locked padlock
        ctx.fillStyle = "#ef4444";
        ctx.font = "14px sans-serif";
        ctx.fillText("😡", width / 4, 152);

        // RIGHT (Cute Router Hub)
        const rx = (3 * width) / 4;
        const ry = 135;

        // Model endpoints
        const models = [
          { name: "Claude 3.5 📙", x: rx - 55, y: ry + 65, color: "#ffedd5", stroke: "#ea580c" },
          { name: "DeepSeek 📘", x: rx + 55, y: ry + 65, color: "#ecfeff", stroke: "#0891b2" },
          { name: "GPT-4o 📗", x: rx, y: ry - 55, color: "#e6f4ea", stroke: "#10b981" }
        ];

        // Draw connections
        ctx.strokeStyle = "rgba(99, 102, 241, 0.3)";
        ctx.lineWidth = 2;
        models.forEach((m) => {
          ctx.beginPath();
          ctx.moveTo(rx, ry);
          ctx.lineTo(m.x, m.y);
          ctx.stroke();
        });

        // Cute Router Machine
        ctx.fillStyle = "#818cf8";
        ctx.strokeStyle = "#4f46e5";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(rx - 25, ry - 16, 50, 32, 6);
        ctx.fill();
        ctx.stroke();

        // Router display screen
        ctx.fillStyle = "#1e1b4b";
        ctx.beginPath();
        ctx.roundRect(rx - 18, ry - 10, 36, 20, 3);
        ctx.fill();

        // Router smiley face
        ctx.fillStyle = "#38bdf8";
        ctx.beginPath();
        ctx.arc(rx - 6, ry - 2, 1.5, 0, Math.PI * 2);
        ctx.arc(rx + 6, ry - 2, 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(rx, ry + 1, 2.5, 0, Math.PI);
        ctx.stroke();

        // Router blinking antennas
        ctx.strokeStyle = "#4f46e5";
        ctx.beginPath();
        ctx.moveTo(rx - 15, ry - 16);
        ctx.lineTo(rx - 22, ry - 28);
        ctx.moveTo(rx + 15, ry - 16);
        ctx.lineTo(rx + 22, ry - 28);
        ctx.stroke();

        ctx.fillStyle = (time * 10) % 20 < 10 ? "#34a853" : "#fbbc05";
        ctx.beginPath();
        ctx.arc(rx - 22, ry - 28, 2.5, 0, Math.PI * 2);
        ctx.arc(rx + 22, ry - 28, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Label above Router
        ctx.fillStyle = "#4f46e5";
        ctx.font = "bold 9px sans-serif";
        ctx.fillText("ROUTER", rx, ry - 20);

        // Animation of incoming tasks and routing
        const cycle = (time * 0.45) % 3; // 0, 1, 2
        const taskIdx = Math.floor(cycle);
        const ratio = cycle % 1; // 0.0 to 1.0

        const tasks = [
          { name: "Lập Luận", targetIdx: 0, desc: "Gửi sang Claude" },
          { name: "Dịch Thuật", targetIdx: 1, desc: "DeepSeek (Tiết kiệm 95%)" },
          { name: "Hỏi Đáp", targetIdx: 2, desc: "Gửi sang GPT-4o" }
        ];

        const activeTask = tasks[taskIdx];
        const targetModel = models[activeTask.targetIdx];

        // Packet coordinates
        let px = rx;
        let py = ry;
        let showPacket = true;
        let phase = "incoming";

        if (ratio < 0.35) {
          const tVal = ratio / 0.35;
          px = (rx - 78) + 78 * tVal;
          py = (ry - 50) + 50 * tVal;
          phase = "incoming";
        } else if (ratio < 0.75) {
          const tVal = (ratio - 0.35) / 0.40;
          px = rx + (targetModel.x - rx) * tVal;
          py = ry + (targetModel.y - ry) * tVal;
          phase = "routing";
        } else {
          px = targetModel.x;
          py = targetModel.y;
          phase = "done";
          showPacket = false;
        }

        // Draw incoming source node (Yêu cầu)
        ctx.fillStyle = "#e2e8f0";
        ctx.strokeStyle = "#cbd5e1";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.roundRect(rx - 110, ry - 64, 64, 22, 4);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "#1e293b";
        ctx.font = "bold 9px sans-serif";
        ctx.fillText("Yêu cầu 💬", rx - 78, ry - 50);

        // Draw packet bubble
        if (showPacket) {
          ctx.fillStyle = "#fef3c7";
          ctx.strokeStyle = "#f59e0b";
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.roundRect(px - 28, py - 11, 56, 20, 4);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = "#b45309";
          ctx.font = "bold 9px sans-serif";
          ctx.fillText(activeTask.name, px, py + 2);
        }

        // Draw Target models
        models.forEach((m, idx) => {
          const isActive = (phase === "routing" || phase === "done") && activeTask.targetIdx === idx;
          ctx.fillStyle = isActive ? m.color : "#ffffff";
          ctx.strokeStyle = m.stroke;
          ctx.lineWidth = isActive ? 1.8 : 1.2;
          ctx.beginPath();
          ctx.roundRect(m.x - 45, m.y - 14, 90, 28, 5);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = "#1e293b";
          ctx.font = "bold 9px sans-serif";
          ctx.fillText(m.name, m.x, m.y + 4);

          // Success speech bubbles on completion
          if (phase === "done" && activeTask.targetIdx === idx) {
            ctx.fillStyle = "#ffffff";
            ctx.strokeStyle = "#10b981";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.roundRect(m.x - 65, m.y - 36, 130, 18, 4);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = "#047857";
            ctx.font = "bold 9px sans-serif";
            ctx.fillText(activeTask.desc, m.x, m.y - 24);
          }
        });
      }

      frameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [activeIndex]);

  return (
    <section id="so-sanh-ai" className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Matrix data rain effect */}
      <canvas ref={rainCanvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-35 pointer-events-none"></div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/[0.04] rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.04] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Intro Hero Style) */}
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

          {/* Intro CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#lien-he"
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-white rounded-xl bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-500/10 active:scale-98 transition-all gap-2 cursor-pointer"
            >
              <span>{t({ vi: "Tư vấn Giải pháp AI Agent", en: "Get AI Agent Consultation" })}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#so-sanh-ai"
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-slate-700 hover:text-slate-900 rounded-xl bg-white border border-slate-200 hover:border-slate-300 active:scale-98 transition-all hover:bg-slate-50"
            >
              {t({ vi: "So sánh tính năng trực quan", en: "Compare Features" })}
            </a>
          </div>
        </div>

        {/* Main Split-Pane Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden flex flex-col">
          
          <div className="flex flex-col lg:flex-row items-stretch min-h-[500px]">
            
            {/* Left Block: AI Agent Flagship (Slanted chevron style) */}
            <div className="w-full lg:w-[58%] bg-gradient-to-br from-blue-600 to-indigo-750 text-white p-8 sm:p-12 lg:pr-20 relative overflow-hidden flex flex-col justify-between z-10 lg:clip-chevron">
              {/* Decorative light reflection */}
              <div className="absolute top-0 right-0 w-40 h-full bg-white/5 skew-x-12 transform translate-x-20 pointer-events-none"></div>
              
              <div>
                {/* Badge/Tag */}
                <div className="mb-6">
                  <span className="inline-block px-4 py-1 text-xs font-black uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full shadow-sm">
                    {t({ vi: "GIẢI PHÁP TỐI ƯU", en: "OPTIMIZED SOLUTION" })}
                  </span>
                </div>
                
                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white mb-6">
                  {t({ vi: "AI AGENT", en: "AI AGENT" })}
                  <br />
                  <span className="text-amber-300 drop-shadow-sm font-black">
                    {activeRow.title.toUpperCase()}
                  </span>
                </h2>

                {/* Details/Description with arrow icon */}
                <div className="space-y-5 my-6 max-w-lg">
                  <div className="flex items-start gap-3">
                    <span className="text-amber-400 font-extrabold text-lg mt-0.5 select-none animate-pulse">❯</span>
                    <div>
                      <p className="text-xs font-black text-slate-200 uppercase tracking-wider">
                        {t({ vi: "Trạng thái:", en: "Status:" })} {activeRow.agent.status}
                      </p>
                      <p className="text-base text-white/95 leading-relaxed font-semibold mt-1">
                        {activeRow.agent.text}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                    <span className="text-amber-400 font-extrabold text-lg mt-0.5 select-none">❯</span>
                    <div>
                      <p className="text-xs font-black text-slate-200 uppercase tracking-wider">
                        {t({ vi: "Giải pháp thực tế:", en: "Real-world solution:" })}
                      </p>
                      <p className="text-sm text-slate-200/90 leading-relaxed font-medium mt-1">
                        {activeRow.analogyVi.split(" vs. ")[0]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Button */}
              <div className="pt-4">
                <a
                  href="#lien-he"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-black text-amber-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-355 rounded-full shadow-lg shadow-orange-500/20 hover:scale-[1.02] active:scale-98 transition-all gap-2"
                >
                  <span>{t({ vi: "Đăng ký tư vấn ngay", en: "Consult Solution Now" })}</span>
                  <ArrowRight className="w-4 h-4 font-bold" />
                </a>
              </div>
            </div>

            {/* Right Block: Chatbot Public & Live Interactive Canvas */}
            <div className="w-full lg:w-[42%] p-8 sm:p-12 lg:pl-16 flex flex-col justify-between bg-slate-50 relative min-h-[480px]">
              
              {/* Chatbot Warning Card */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                    Chatbot (Public)
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-600 font-black">
                    <X className="w-3 h-3 stroke-[3]" />
                    <span>{activeRow.chatgpt.status}</span>
                  </span>
                </div>
                
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {activeRow.chatgpt.text}
                </p>
                
                <div className="text-xs text-slate-500 font-bold flex items-center gap-2 pt-2">
                  <span className="font-mono text-[10px] text-slate-400 uppercase">Đặc điểm:</span>
                  <span className="text-rose-600 px-2 py-0.5 rounded bg-rose-50 border border-rose-100/50">
                    {activeRow.analogyVi.split(" vs. ")[1]}
                  </span>
                </div>
              </div>

              {/* Live Canvas Monitor Wrapper with badge on top */}
              <div className="mt-8 space-y-3">
                <div className="flex justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-150 text-[9px] font-mono font-bold text-indigo-650 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping"></span>
                    <span>LIVE_MONITOR: STEP_0{activeIndex + 1}</span>
                  </span>
                </div>
                
                {/* Fixed aspect ratio container to prevent stretching and misalignment */}
                <div className="w-full aspect-[450/280] max-w-[450px] mx-auto border border-slate-200/80 rounded-2xl bg-white relative overflow-hidden shadow-sm hover:border-indigo-300 transition-all duration-300 group">
                  <canvas ref={canvasRef} className="absolute inset-0 w-full h-full rounded-2xl" />
                  <div className="absolute bottom-2.5 right-2.5 bg-slate-900/5 border border-slate-900/10 rounded-lg px-2 py-0.5 text-[8px] font-mono font-bold text-slate-600 animate-pulse z-10">
                    • RUNNING
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom part: Horizontal Segmented Numbered Tabs */}
          <div className="w-full border-t border-slate-200 bg-slate-100/40 flex flex-col md:flex-row overflow-hidden">
            {currentData.map((row, index) => {
              const isActive = activeIndex === index;
              const numStr = `0${index + 1}`;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex-1 p-5 flex items-center gap-4 transition-all duration-300 text-left border-b md:border-b-0 md:border-r border-slate-200 last:border-none relative cursor-pointer group ${
                    isActive
                      ? "bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black shadow-inner z-20 scale-y-[1.01]"
                      : "hover:bg-slate-100/80 text-slate-700 bg-white"
                  }`}
                >
                  <span className={`text-3xl sm:text-4xl font-extrabold leading-none transition-opacity duration-300 ${
                    isActive ? "text-slate-950/20" : "text-slate-300 group-hover:text-slate-400"
                  }`}>
                    {numStr}
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className={`text-[9px] uppercase font-extrabold tracking-wider ${
                      isActive ? "text-slate-950/70" : "text-indigo-600/70"
                    }`}>
                      {t({ vi: "Khía cạnh", en: "Dimension" })} {numStr}
                    </span>
                    <span className={`text-xs sm:text-sm font-black truncate ${
                      isActive ? "text-slate-950" : "text-slate-800"
                    }`}>
                      {row.title}
                    </span>
                  </div>
                  {isActive && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-amber-600"></div>
                  )}
                </button>
              );
            })}
          </div>

        </div>

        {/* Full-width Analogy Banner */}
        <div className="max-w-4xl mx-auto p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100/50 flex items-start gap-4 mt-12 hover:bg-indigo-50/70 transition-colors">
          <HelpCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5 animate-bounce-slow" />
          <div className="space-y-1.5">
            <h4 className="text-xs sm:text-sm font-extrabold text-indigo-950">
              {t({ vi: "Cách ví von dễ hiểu cho người không chuyên:", en: "Simple Non-Tech Analogy:" })}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
