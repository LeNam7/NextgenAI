"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Bot, Cpu, Database, Network, Key, Layers } from "lucide-react";

interface Node3D {
  x: number;
  y: number;
  z: number;
  px: number; // projected screen x
  py: number; // projected screen y
  label: string | null;
  iconIndex: number;
}

export default function InteractiveBrain3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();
  const [activeTech, setActiveTech] = useState<string>("RAG Core");

  const techInfo = {
    vi: {
      "RAG Core": "Tìm kiếm ngữ nghĩa trên cơ sở dữ liệu tri thức nội bộ bảo mật.",
      "AI Agent": "Tự động phân rã nhiệm vụ và lập kế hoạch thực hiện chuỗi công việc.",
      "LLM Router": "Phân tuyến thông minh sang model tối ưu nhất về chi phí & hiệu năng.",
      "Vector DB": "Lưu trữ vector hóa hàng triệu trang tài liệu để tra cứu tức thời.",
      "Secure API": "Cổng kết nối an toàn với hệ thống nội bộ LMS, ERP, CRM.",
      "Fine-Tuning": "Tinh chỉnh mô hình AI theo đúng phong cách và dữ liệu riêng biệt."
    },
    en: {
      "RAG Core": "Semantic search on secure internal knowledge databases.",
      "AI Agent": "Decomposes tasks and plans the execution of workflows autonomously.",
      "LLM Router": "Intelligently routes requests to the optimal model for cost & speed.",
      "Vector DB": "Stores vectorized representations of millions of pages for instant lookup.",
      "Secure API": "Secure connection gateway to internal LMS, ERP, and CRM systems.",
      "Fine-Tuning": "Fine-tunes the AI models to align with your domain-specific voice."
    }
  };

  const labels = ["RAG Core", "AI Agent", "LLM Router", "Vector DB", "Secure API", "Fine-Tuning"];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 500;
    let height = 500;

    const resize = () => {
      if (containerRef.current) {
        width = containerRef.current.clientWidth;
        height = containerRef.current.clientHeight || 450;
        canvas.width = width * window.devicePixelRatio;
        canvas.height = height * window.devicePixelRatio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    // Initialize 3D points
    const points: Node3D[] = [];
    const count = 55;
    const radiusScale = 140;

    for (let i = 0; i < count; i++) {
      // Golden spiral distribution on sphere for uniform look
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.sin(theta);
      const z = Math.cos(phi);

      // Assign label to 6 specific nodes, others get null
      let label: string | null = null;
      let iconIndex = -1;
      if (i < 6) {
        label = labels[i];
        iconIndex = i;
      }

      points.push({ x, y, z, px: 0, py: 0, label, iconIndex });
    }

    let angleX = 0.005;
    let angleY = 0.005;
    let targetSpeedX = 0.003;
    let targetSpeedY = 0.003;
    let currentSpeedX = 0.003;
    let currentSpeedY = 0.003;

    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;
      mouseX = x;
      mouseY = y;
      isHovering = true;

      // Rotate sphere based on mouse position
      targetSpeedY = x * 0.00003;
      targetSpeedX = -y * 0.00003;
    };

    const handleMouseLeave = () => {
      isHovering = false;
      targetSpeedX = 0.002;
      targetSpeedY = 0.002;
    };

    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Check if clicked near any labeled node
      for (const p of points) {
        if (p.label) {
          const dx = p.px - x;
          const dy = p.py - y;
          const dist = Math.sqrt(dx * dx + dx * dx);
          if (dx * dx + dy * dy < 400) {
            setActiveTech(p.label);
            break;
          }
        }
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("click", handleCanvasClick);

    const draw = () => {
      // Clear with very slight alpha to create motion trails in space
      ctx.fillStyle = "rgba(10, 15, 30, 1)"; // dark tech background
      ctx.fillRect(0, 0, width, height);

      // Draw cyber grid background inside container
      ctx.strokeStyle = "rgba(59, 130, 246, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Smooth speed interpolation
      currentSpeedX += (targetSpeedX - currentSpeedX) * 0.08;
      currentSpeedY += (targetSpeedY - currentSpeedY) * 0.08;

      angleX = currentSpeedX;
      angleY = currentSpeedY;

      // Rotate points in 3D
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      for (const p of points) {
        // Rotate Y axis
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.x * sinY + p.z * cosY;

        // Rotate X axis
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        p.x = x1;
        p.y = y2;
        p.z = z2;

        // Perspective Projection
        const fov = 350;
        const scale = fov / (fov + z2 * radiusScale);
        p.px = width / 2 + x1 * radiusScale * scale;
        p.py = height / 2 + y2 * radiusScale * scale;
      }

      // 1. Draw glowing background center glow (Core Engine)
      const grad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        2,
        width / 2,
        height / 2,
        150
      );
      grad.addColorStop(0, "rgba(79, 70, 229, 0.15)"); // indigo
      grad.addColorStop(0.5, "rgba(59, 130, 246, 0.05)"); // blue
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 150, 0, Math.PI * 2);
      ctx.fill();

      // 2. Draw connections (3D mesh lines)
      ctx.lineWidth = 0.75;
      const maxDistance = 0.45; // Normalized spherical distance threshold

      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];

          // Compute 3D distance between points
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            // Line opacity based on distance and average depth
            const avgDepth = (p1.z + p2.z) / 2; // -1 (closest) to 1 (furthest)
            const depthFactor = (1.2 - avgDepth) / 2; // scale to 0.1 - 1.1
            const distFactor = 1 - dist / maxDistance;
            const opacity = distFactor * depthFactor * 0.28;

            if (p1.label === activeTech || p2.label === activeTech) {
              // Highlight connections of active tech
              ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 2.8})`;
              ctx.lineWidth = 1.2;
            } else {
              // Normal connections
              ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
              ctx.lineWidth = 0.75;
            }

            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // 3. Draw nodes & labels
      for (const p of points) {
        // Size & opacity depend on depth
        const size = p.label ? 6 : 2.5;
        const avgDepth = p.z; // -1 to 1
        const depthFactor = (1.2 - avgDepth) / 2; // closer = larger/brighter
        const opacity = depthFactor * 0.9;

        ctx.beginPath();
        ctx.arc(p.px, p.py, size * (1.1 - avgDepth * 0.3), 0, Math.PI * 2);

        if (p.label) {
          const isActive = p.label === activeTech;
          
          if (isActive) {
            ctx.fillStyle = "#ffffff";
            ctx.shadowBlur = 15;
            ctx.shadowColor = "#6366f1";
            ctx.fill();
            ctx.shadowBlur = 0; // reset

            // Double outer pulse ring
            ctx.strokeStyle = "rgba(99, 102, 241, 0.8)";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(p.px, p.py, 12, 0, Math.PI * 2);
            ctx.stroke();
          } else {
            ctx.fillStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.fill();
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.5})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(p.px, p.py, 9, 0, Math.PI * 2);
            ctx.stroke();
          }

          // Draw rotating label text
          ctx.fillStyle = isActive ? "#ffffff" : `rgba(203, 213, 225, ${opacity})`;
          ctx.font = `bold ${isActive ? 12 : 11}px sans-serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          
          // Draw label background card
          const txtWidth = ctx.measureText(p.label).width;
          ctx.fillStyle = isActive ? "rgba(99, 102, 241, 0.9)" : "rgba(15, 23, 42, 0.75)";
          ctx.strokeStyle = isActive ? "#818cf8" : "rgba(59, 130, 246, 0.25)";
          ctx.lineWidth = 1;
          
          // Draw rounded rectangle
          const rx = p.px - txtWidth / 2 - 8;
          const ry = p.py - 24;
          const rw = txtWidth + 16;
          const rh = 18;
          const rr = 5;
          
          ctx.beginPath();
          ctx.moveTo(rx + rr, ry);
          ctx.lineTo(rx + rw - rr, ry);
          ctx.arcTo(rx + rw, ry, rx + rw, ry + rr, rr);
          ctx.lineTo(rx + rw, ry + rh - rr);
          ctx.arcTo(rx + rw, ry + rh, rx + rw - rr, ry + rh, rr);
          ctx.lineTo(rx + rr, ry + rh);
          ctx.arcTo(rx, ry + rh, rx, ry + rh - rr, rr);
          ctx.lineTo(rx, ry + rr);
          ctx.arcTo(rx, ry, rx + rr, ry, rr);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          // Write text
          ctx.fillStyle = "#ffffff";
          ctx.fillText(p.label, p.px, p.py - 15);
        } else {
          // Standard small dot node
          ctx.fillStyle = `rgba(59, 130, 246, ${opacity * 0.6})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("click", handleCanvasClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeTech]);

  const renderIcon = (tech: string) => {
    const cls = "w-5 h-5 text-indigo-400";
    switch (tech) {
      case "RAG Core":
        return <Database className={cls} />;
      case "AI Agent":
        return <Bot className={cls} />;
      case "LLM Router":
        return <Cpu className={cls} />;
      case "Vector DB":
        return <Layers className={cls} />;
      case "Secure API":
        return <Key className={cls} />;
      case "Fine-Tuning":
        return <Network className={cls} />;
      default:
        return <Bot className={cls} />;
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="w-full max-w-[480px] bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden flex flex-col justify-between"
      style={{ height: "480px" }}
    >
      {/* Scanning laser visual */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-indigo-500 to-blue-500 opacity-80 pointer-events-none animate-scan-line"></div>

      {/* Cyber Grid watermark */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none"></div>

      {/* Header Info */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-900 z-10 relative">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          <span className="ml-1 text-[11px] font-mono text-slate-400">3D Neural Visualizer v1.4</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping"></span>
          <span className="text-[10px] font-mono text-indigo-400 uppercase font-bold tracking-wider">Interactive 3D</span>
        </div>
      </div>

      {/* Interactive 3D Canvas */}
      <div className="flex-grow relative min-h-[260px] flex items-center justify-center cursor-pointer">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        
        {/* Helper instruction */}
        <div className="absolute bottom-2 left-0 right-0 text-center pointer-events-none">
          <span className="text-[9.5px] font-mono text-slate-500 tracking-wider">
            {t({ vi: "✦ Di chuột để xoay 3D | Click vào nhãn để chọn ✦", en: "✦ Hover to rotate 3D | Click labels to inspect ✦" })}
          </span>
        </div>
      </div>

      {/* Live Selected Tech Explainer widget */}
      <div className="mt-2 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 z-10 relative flex items-start gap-3 transition-all duration-300">
        <div className="p-2 rounded-xl bg-indigo-950/60 border border-indigo-850 flex-shrink-0 animate-pulse">
          {renderIcon(activeTech)}
        </div>
        <div className="space-y-0.5">
          <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
            <span>{activeTech}</span>
            <span className="px-1.5 py-0.2 text-[8px] font-mono bg-indigo-900/80 text-indigo-300 border border-indigo-800 rounded uppercase">Core Tech</span>
          </h4>
          <p className="text-[11px] text-slate-400 leading-normal">
            {techInfo[language][activeTech as keyof typeof techInfo["vi"]]}
          </p>
        </div>
      </div>
    </div>
  );
}
