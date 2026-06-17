export interface MenuItem {
  label: string;
  href: string;
}

export interface TrustItem {
  title: string;
  description: string;
}

export interface PainPoint {
  title: string;
  description: string;
}

export interface SolutionPillar {
  id: string;
  title: string;
  description: string;
  tasks: string[];
  useCases: string[];
}

export interface LearningStep {
  step: number;
  title: string;
  description: string;
}

export interface ModelHubRow {
  need: string;
  modelType: string;
  example: string;
  deployment: string;
}

export interface EducationProgram {
  id: string;
  tabLabel: string;
  title: string;
  target: string;
  objective: string;
  duration: string;
  contents: string[];
  activities: string[];
  deliverables: string[];
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}

export interface CaseStudyScenario {
  title: string;
  targetAudience: string;
  problem: string;
  solution: string;
  outcome: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingPackage {
  name: string;
  tagline: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export const menuItems: MenuItem[] = [
  { label: "Giải pháp AI", href: "#giai-phap" },
  { label: "Model AI", href: "#model-hub" },
  { label: "Giáo dục AI", href: "#giao-duc" },
  { label: "Quy trình", href: "#quy-trinh" },
  { label: "Case Study", href: "#case-study" },
  { label: "FAQ", href: "#faq" },
  { label: "Liên hệ", href: "#lien-he" },
];

export const trustItems: TrustItem[] = [
  {
    title: "AI riêng theo nhu cầu",
    description: "Tối ưu hóa theo dữ liệu và tri thức đặc thù của bạn.",
  },
  {
    title: "Triển khai linh hoạt",
    description: "Chạy trên Cloud bảo mật hoặc hạ tầng Local biệt lập.",
  },
  {
    title: "Đào tạo thực chiến",
    description: "Chương trình chuẩn hóa K-12 và đào tạo giáo viên bài bản.",
  },
  {
    title: "Đồng hành thực tế",
    description: "Khảo sát, đo lường và tối ưu hóa hiệu quả thực tế.",
  },
];

export const painPoints: PainPoint[] = [
  {
    title: "Sử dụng AI rời rạc",
    description: "Hỏi đáp cơ bản, chưa liên kết hệ thống để tự động hóa công việc.",
  },
  {
    title: "Khó chọn lựa Model AI",
    description: "Hoang mang trước hàng trăm model, khó tối ưu chi phí và tốc độ.",
  },
  {
    title: "Rò rỉ dữ liệu nội bộ",
    description: "Nguy cơ lộ thông tin nhạy cảm khi dùng các AI công cộng.",
  },
  {
    title: "Thiếu lộ trình chuẩn",
    description: "Học sinh và giáo viên bơi giữa công cụ mà không có định hướng.",
  },
];

export const solutionPillars: SolutionPillar[] = [
  {
    id: "ai-private",
    title: "Cài đặt & Tư vấn AI Riêng biệt",
    description: "Thiết kế trợ lý AI riêng bảo mật, có khả năng tra cứu và làm việc trực tiếp trên tài liệu nội bộ.",
    tasks: [
      "Đánh giá nhu cầu và hạ tầng hiện tại",
      "Thiết kế sơ đồ workflow và phân quyền dữ liệu",
      "Cài đặt Chatbot / Assistant riêng biệt (Private AI)",
      "Tích hợp tài liệu nội bộ qua giải pháp RAG",
    ],
    useCases: [
      "AI soạn giáo án và chấm bài cho giáo viên",
      "AI tra cứu quy trình nội bộ doanh nghiệp",
      "AI hỗ trợ học sinh tự học 24/7",
    ],
  },
  {
    id: "ai-models",
    title: "Cung cấp & Tích hợp Model AI",
    description: "Kết nối các model AI chuyên biệt tối ưu nhất về độ chính xác, chi phí, tốc độ và bảo mật dữ liệu.",
    tasks: [
      "Tư vấn model theo chi phí và hiệu năng",
      "Tích hợp LLMs xử lý văn bản chuyên sâu",
      "Tích hợp Vision/Speech Models đa phương tiện",
      "Triển khai qua API Cloud hoặc Local Server",
    ],
    useCases: [
      "Tích hợp AI vào hệ thống LMS/E-learning",
      "Chấm bài tự động qua ảnh chụp bài làm",
      "Trợ lý luyện nói tiếng Anh giọng bản xứ",
    ],
  },
  {
    id: "ai-education",
    title: "Đào tạo & Giáo dục AI Thực chiến",
    description: "Xây dựng năng lực số (AI Literacy), giúp giáo viên giảng dạy tốt hơn và học sinh sáng tạo an toàn cùng AI.",
    tasks: [
      "Đào tạo giáo viên thiết kế giáo án bằng AI",
      "Giáo trình AI trực quan cho Cấp 1, 2, 3",
      "Đào tạo đạo đức AI và bảo mật thông tin",
      "Hướng dẫn tư duy phản biện khi sử dụng AI",
    ],
    useCases: [
      "Chương trình ngoại khóa CLB AI trường phổ thông",
      "Workshop chuyển đổi số giảng dạy cho giáo viên",
      "Trại hè công nghệ AI Bootcamp thực tế",
    ],
  },
];

export const adaptiveSteps: LearningStep[] = [
  {
    step: 1,
    title: "Đánh giá đầu vào",
    description: "Thực hiện bài test nhanh để đo lường kiến thức hiện tại.",
  },
  {
    step: 2,
    title: "Định vị lỗ hổng",
    description: "AI xác định chính xác phần kiến thức học sinh còn yếu.",
  },
  {
    step: 3,
    title: "Lộ trình độc bản",
    description: "Tự động thiết lập kế hoạch học tập cá nhân hóa phù hợp.",
  },
  {
    step: 4,
    title: "Luyện tập & Sửa sai",
    description: "Làm bài tập tương tác, nhận giải thích chi tiết từ AI.",
  },
  {
    step: 5,
    title: "Báo cáo trực quan",
    description: "Theo dõi tiến độ học tập sát sao qua dashboard.",
  },
];

export const modelHubRows: ModelHubRow[] = [
  {
    need: "Tra cứu tài liệu nội bộ bảo mật",
    modelType: "Large Language Model (LLM) + RAG",
    example: "GPT-4o, Claude 3.5, DeepSeek-V3",
    deployment: "Cloud API / Private Server / Local",
  },
  {
    need: "Tìm kiếm thông minh, tri thức",
    modelType: "Embedding & Rerank Models",
    example: "text-embedding-3, Cohere Embed",
    deployment: "Cloud API / Local Vector DB",
  },
  {
    need: "Chấm bài scan, nhận diện ảnh",
    modelType: "Vision-Language Model (VLM)",
    example: "GPT-4o-mini, Claude Sonnet, Qwen-VL",
    deployment: "Cloud API / On-Premise GPU",
  },
  {
    need: "Ghi âm bài giảng, luyện nói",
    modelType: "Speech-to-Text & Text-to-Speech",
    example: "Whisper Large, ElevenLabs",
    deployment: "Cloud API / Local Server",
  },
  {
    need: "Học lập trình, tự động hóa code",
    modelType: "Code Generation Model",
    example: "DeepSeek-Coder, Qwen-Coder",
    deployment: "Web IDE / VS Code Extension",
  },
];

export const educationPrograms: EducationProgram[] = [
  {
    id: "giao-vien",
    tabLabel: "Cho Giáo viên",
    title: "Năng lực Giảng dạy Thời đại AI",
    target: "Giáo viên mầm non đến THPT, giảng viên và quản lý giáo dục.",
    objective: "Giúp giáo viên ứng dụng AI giảm 50% thời gian soạn bài và chấm điểm hiệu quả.",
    duration: "6–12 buổi (hoặc Workshop 2 ngày)",
    contents: [
      "Hiểu bản chất AI, LLM và các giới hạn công nghệ.",
      "Dùng AI soạn giáo án, đề thi và thiết kế rubric đánh giá.",
      "Thiết kế hoạt động học tập tương tác có sự trợ giúp của AI.",
      "Quy tắc đạo đức, bảo mật thông tin học sinh khi dùng AIGC.",
    ],
    activities: [
      "Thực hành viết prompt soạn giáo án liên môn.",
      "Thử nghiệm dạy học song hành cùng trợ lý AI.",
      "Thiết lập ngân hàng đề thi tự động trong 15 phút.",
    ],
    deliverables: [
      "01 Bộ giáo án tích hợp AI đã thẩm định.",
      "Cẩm nang hướng dẫn sử dụng 10+ công cụ AI.",
      "Chứng nhận hoàn thành khóa học từ NextgenAI.",
    ],
  },
  {
    id: "cap-1",
    tabLabel: "Học sinh Cấp 1",
    title: "Khám phá AI Kỳ diệu",
    target: "Học sinh tiểu học (Lớp 1 - Lớp 5).",
    objective: "Làm quen với AI trực quan qua trò chơi sáng tạo, rèn luyện logic và an toàn số.",
    duration: "8–12 buổi (90 phút/buổi)",
    contents: [
      "AI quanh em là gì? (nhận diện qua robot, Siri, camera).",
      "Dạy máy tính nhận diện hình ảnh, âm thanh qua trò chơi.",
      "Tạo câu chuyện và vẽ tranh sáng tạo cùng AI.",
      "Bài học an toàn số: Bảo vệ thông tin cá nhân trên mạng.",
    ],
    activities: [
      "Dạy AI nhận diện đồ dùng qua webcam (Teachable Machine).",
      "Giải đố logic hiểu nguyên lý hoạt động của máy tính.",
      "Viết truyện sáng tạo có tranh minh họa bằng AI.",
    ],
    deliverables: [
      "01 Truyện tranh số tự sáng tác cùng AI.",
      "01 Trò chơi logic kéo thả đơn giản.",
      "Poster thông điệp 'Em sử dụng AI an toàn'.",
    ],
  },
  {
    id: "cap-2",
    tabLabel: "Học sinh Cấp 2",
    title: "Làm chủ AI & Chatbot",
    target: "Học sinh THCS (Lớp 6 - Lớp 9).",
    objective: "Hiểu cơ bản về dữ liệu và thuật toán, thực hành Prompt Engineering hỗ trợ học tập.",
    duration: "12–16 buổi (90 phút/buổi)",
    contents: [
      "Nguyên lý hoạt động của máy học (Machine Learning) cơ bản.",
      "Kỹ thuật đặt câu hỏi (Prompt) hiệu quả để giải bài tập.",
      "Tự thiết kế chatbot trả lời câu hỏi theo chủ đề tự chọn.",
      "Tư duy phản biện: Cách phát hiện thông tin sai lệch từ AI.",
    ],
    activities: [
      "Huấn luyện mô hình AI phân loại rác thải hoặc cảm xúc.",
      "Tạo trợ lý chatbot học tập chạy trên nền tảng web.",
      "So sánh câu trả lời của các AI để tìm lỗi sai logic.",
    ],
    deliverables: [
      "01 Chatbot trợ lý ôn tập bài học tự thiết kế.",
      "01 Dự án máy học nhận diện ảnh chạy trên web.",
      "Bộ prompt cá nhân hỗ trợ tự học các môn.",
    ],
  },
  {
    id: "cap-3",
    tabLabel: "Học sinh Cấp 3",
    title: "Ứng dụng AI & Hướng nghiệp",
    target: "Học sinh THPT (Lớp 10 - Lớp 12).",
    objective: "Lập trình Python cơ bản cho AI, xây dựng hệ thống RAG phục vụ học tập và định nghiệp.",
    duration: "16–24 buổi (hoặc Bootcamp dự án)",
    contents: [
      "Kiến thức nền tảng: Học máy, học sâu, NLP và Computer Vision.",
      "Lập trình Python cơ bản phục vụ xử lý dữ liệu AI.",
      "Xây dựng trợ lý RAG tra cứu tài liệu học tập cá nhân.",
      "Đạo đức AI: Liêm chính học thuật, bản quyền và bảo mật.",
    ],
    activities: [
      "Phân tích dữ liệu học tập thực tế bằng ngôn ngữ Python.",
      "Tích hợp RAG kết nối dữ liệu sách giáo khoa ôn thi THPT.",
      "Tranh luận về tác động của AI tới nghề nghiệp tương lai.",
    ],
    deliverables: [
      "01 Trợ lý học tập RAG nạp tài liệu cá nhân.",
      "01 Mini-project lập trình Python phân tích dữ liệu.",
      "Portfolio dự án AI cá nhân phục vụ xét tuyển đại học.",
    ],
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    step: 1,
    title: "Khảo sát nhu cầu",
    description: "Lắng nghe bài toán thực tế và làm rõ nguồn dữ liệu sẵn có.",
  },
  {
    step: 2,
    title: "Thiết kế giải pháp",
    description: "Xây dựng kiến trúc hệ thống AI và quy trình tương tác mẫu.",
  },
  {
    step: 3,
    title: "Lựa chọn model",
    description: "Chọn model tối ưu nhất về chi phí, tốc độ và chế độ bảo mật.",
  },
  {
    step: 4,
    title: "Cài đặt Prototype",
    description: "Xây dựng phiên bản thử nghiệm (MVP) để trải nghiệm nhanh.",
  },
  {
    step: 5,
    title: "Kiểm thử thực tế",
    description: "Đội ngũ dùng thử nội bộ và tinh chỉnh prompt/dữ liệu nạp.",
  },
  {
    step: 6,
    title: "Đào tạo vận hành",
    description: "Tập huấn cách viết prompt và cập nhật kiến thức cơ sở dữ liệu.",
  },
  {
    step: 7,
    title: "Tối ưu hóa định kỳ",
    description: "Đo lường chỉ số, tối ưu hóa tốc độ và chi phí vận hành.",
  },
];

export const caseStudies: CaseStudyScenario[] = [
  {
    title: "Đào tạo AI & Chuyển đổi số trường THPT",
    targetAudience: "Trường THPT công lập / tư thục",
    problem: "Giáo viên e ngại công nghệ, học sinh lạm dụng AI để chép bài tập làm mất tính công bằng học thuật.",
    solution: "Đào tạo AI Literacy cho 60 giáo viên, lập danh mục whitelist công cụ AI và triển khai CLB ngoại khóa STEM.",
    outcome: "92% giáo viên tự tin ứng dụng AI soạn bài; học sinh dùng AI đúng chuẩn đạo đức dưới sự kiểm soát.",
  },
  {
    title: "AI Tutor hỗ trợ học tiếng Anh 24/7",
    targetAudience: "Trung tâm Ngoại ngữ 1500 học viên",
    problem: "Học viên thiếu môi trường thực hành giao tiếp tiếng Anh; chi phí thuê giáo viên nước ngoài 1-1 quá lớn.",
    solution: "Tích hợp API giọng nói thời gian thực của OpenAI tạo chatbot AI Tutor hỗ trợ học viên tương tác 24/7.",
    outcome: "Tăng 45% thời gian luyện nói của học viên; chi phí vận hành cực thấp (dưới $0.1/học viên/tháng).",
  },
  {
    title: "Hệ thống Tra cứu Tri thức Nội bộ Doanh nghiệp",
    targetAudience: "Doanh nghiệp Dược phẩm (120 nhân sự)",
    problem: "Nhân viên mới mất nhiều thời gian tra cứu danh mục 500+ loại thuốc và quy trình bán hàng phức tạp.",
    solution: "Triển khai Private AI Assistant sử dụng công nghệ RAG, nạp toàn bộ tài liệu chuyên môn nội bộ bảo mật.",
    outcome: "Giảm thời gian tra cứu từ 15 phút xuống 5 giây; cắt giảm 70% yêu cầu hỗ trợ nghiệp vụ lặp lại.",
  },
  {
    title: "AI trợ giúp soạn bài & chấm bài tự động",
    targetAudience: "Giáo viên luyện thi tự do môn Ngữ Văn & Tiếng Anh",
    problem: "Giáo viên quá tải vì chấm hơn 200 bài luận/tuần, không thể viết nhận xét chi tiết cho từng học sinh.",
    solution: "Cấu hình trợ lý chấm bài nạp sẵn rubric Bộ Giáo dục để tự động đề xuất sửa lỗi ngữ pháp, ý tứ.",
    outcome: "Thời gian chấm bài giảm 60%; học sinh nhận phản hồi nhận xét chi tiết cá nhân hóa ngay lập tức.",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "AI riêng biệt khác gì so với việc sử dụng ChatGPT Plus thông thường?",
    answer: "AI riêng biệt hoạt động hoàn toàn trên dữ liệu tri thức nội bộ của bạn, cam kết bảo mật 100%, không chia sẻ dữ liệu huấn luyện và có thể tùy chỉnh sâu theo quy trình hoạt động của tổ chức.",
  },
  {
    question: "Tổ chức của chúng tôi không có nhân sự kỹ thuật, liệu có vận hành được không?",
    answer: "Được. Giao diện sử dụng được thiết kế đơn giản như khung Chat thông thường (Web/Zalo/Telegram). NextgenAI bàn giao trọn gói và đảm nhận toàn bộ khâu bảo trì, cập nhật định kỳ.",
  },
  {
    question: "Dữ liệu nội bộ khi nạp vào hệ thống AI có được bảo mật an toàn không?",
    answer: "Có. Chúng tôi hỗ trợ bảo mật đa tầng: chạy qua API doanh nghiệp không lưu nhật ký, triển khai trên Private Cloud riêng, hoặc cài đặt On-Premise (Local Server) nội bộ ngắt kết nối Internet.",
  },
  {
    question: "Chi phí triển khai giải pháp AI riêng được tính toán thế nào?",
    answer: "Chi phí dựa trên dung lượng cơ sở tri thức nạp vào, số lượng người dùng đồng thời và mô hình hạ tầng (Cloud API hay Server vật lý). Chúng tôi sẽ tư vấn phương án tối ưu nhất cho ngân sách.",
  },
  {
    question: "Học sinh cấp 1 tiếp cận AI có quá sớm hay không?",
    answer: "Không. Học sinh tiểu học chỉ học về 'AI Literacy' (nhận thức số) thông qua trò chơi logic và các bài học sử dụng thiết bị số an toàn, bảo vệ thông tin cá nhân dưới sự giám sát.",
  },
];

export const pricingPackages: PricingPackage[] = [
  {
    name: "Starter (Cá nhân & GV)",
    tagline: "Tối ưu hóa hiệu suất làm việc cá nhân bằng trợ lý AI riêng chuyên biệt.",
    features: [
      "Tư vấn lựa chọn công cụ AI phù hợp",
      "Thiết kế 01 Trợ lý AI cá nhân (RAG dưới 100 trang)",
      "Kết nối chatbot qua Telegram hoặc Web Chat",
      "Đào tạo kỹ năng viết prompt soạn bài giảng",
    ],
    ctaText: "Nhận tư vấn Starter",
  },
  {
    name: "Growth (Trung tâm & Doanh nghiệp)",
    tagline: "Giải pháp tối ưu cho doanh nghiệp vừa/nhỏ và trung tâm giáo dục tự động hóa quy trình.",
    features: [
      "Khảo sát & thiết kế workflow AI chuyên sâu",
      "Triển khai Private AI Assistant trên Cloud bảo mật",
      "Kết nối tri thức RAG không giới hạn tài liệu",
      "Đào tạo chuyển giao công nghệ cho toàn bộ đội ngũ",
    ],
    ctaText: "Yêu cầu Demo",
    isPopular: true,
  },
  {
    name: "Enterprise & School (Quy mô lớn)",
    tagline: "Hệ thống toàn diện cho trường học lớn và doanh nghiệp cần bảo mật tuyệt đối.",
    features: [
      "Triển khai Local Server (On-Premise) hoặc Private Cloud",
      "Hệ thống phân quyền dữ liệu và bảo mật đa lớp",
      "Giáo trình AI Literacy thiết kế riêng theo cấp học",
      "Cam kết bảo trì, hỗ trợ kỹ thuật 24/7 và cập nhật model",
    ],
    ctaText: "Thiết kế gói riêng",
  },
];
