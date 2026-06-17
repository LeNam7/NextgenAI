import AIEducationGreetingCharacter from "@/components/AIEducationGreetingCharacter";

export default function CharacterPreviewPage() {
  return (
    <div className="min-h-screen bg-[#fbfaf8] flex flex-col items-center justify-center gap-12 p-12">
      <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
        AI Greeting Character – Preview
      </h1>

      {/* Default size */}
      <div className="flex flex-wrap items-end justify-center gap-16">
        <div className="flex flex-col items-center gap-3">
          <AIEducationGreetingCharacter size={360} />
          <p className="text-xs font-mono text-slate-500">Size: 360px</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <AIEducationGreetingCharacter size={240} />
          <p className="text-xs font-mono text-slate-500">Size: 240px</p>
        </div>
      </div>

      <p className="text-sm text-slate-500 italic max-w-md text-center">
        Nhân vật theo phong cách monoline SaaS 2D, tỷ lệ cân đối, màu xanh dương chủ đạo và các chi tiết hạt dữ liệu chuyển động nhẹ nhàng.
      </p>
    </div>
  );
}
