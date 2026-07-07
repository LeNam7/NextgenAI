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

export const menuItems: Record<"vi" | "en", MenuItem[]> = {
  vi: [
    { label: "Giải pháp AI", href: "#giai-phap" },
    { label: "Model AI", href: "#model-hub" },
    { label: "Giáo dục AI", href: "#giao-duc" },
    { label: "Quy trình", href: "#quy-trinh" },
    { label: "Case Study", href: "#case-study" },
    { label: "FAQ", href: "#faq" },
    { label: "Liên hệ", href: "#lien-he" },
  ],
  en: [
    { label: "AI Solutions", href: "#giai-phap" },
    { label: "AI Models", href: "#model-hub" },
    { label: "AI Education", href: "#giao-duc" },
    { label: "Process", href: "#quy-trinh" },
    { label: "Case Studies", href: "#case-study" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#lien-he" },
  ],
};

export const trustItems: Record<"vi" | "en", TrustItem[]> = {
  vi: [
    {
      title: "AI cá nhân theo nhu cầu",
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
  ],
  en: [
    {
      title: "Personalized AI",
      description: "Optimized for your specific data and private knowledge.",
    },
    {
      title: "Flexible Deployment",
      description: "Runs on secure Cloud or isolated Local infrastructure.",
    },
    {
      title: "Hands-on Education",
      description: "Standardized K-12 curriculum and professional teacher training.",
    },
    {
      title: "Real Partnership",
      description: "Surveying, measuring, and optimizing actual effectiveness.",
    },
  ],
};

export const painPoints: Record<"vi" | "en", PainPoint[]> = {
  vi: [
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
  ],
  en: [
    {
      title: "Fragmented AI Usage",
      description: "Basic Q&A without system integration for workflow automation.",
    },
    {
      title: "Difficult Model Choice",
      description: "Confused by hundreds of models, struggling to optimize cost & speed.",
    },
    {
      title: "Internal Data Leaks",
      description: "Risk of leaking sensitive data when using public AI models.",
    },
    {
      title: "No Standard Roadmap",
      description: "Students and teachers lost in tools without clear guidance.",
    },
  ],
};

export const solutionPillars: Record<"vi" | "en", SolutionPillar[]> = {
  vi: [
    {
      id: "ai-private",
      title: "Cài đặt & Tư vấn AI Cá nhân",
      description: "Thiết kế trợ lý AI cá nhân bảo mật, có khả năng tra cứu và làm việc trực tiếp trên tài liệu nội bộ.",
      tasks: [
        "Khảo sát hạ tầng & nhu cầu",
        "Thiết kế workflow bảo mật",
        "Cài đặt trợ lý Private AI",
        "Tích hợp RAG tài liệu",
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
        "Tư vấn tối ưu hiệu năng",
        "Tích hợp LLM văn bản",
        "Tích hợp Vision/Speech AI",
        "Triển khai Cloud hoặc Local",
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
        "Đào tạo giáo án AI giáo viên",
        "Giáo trình AI trực quan K-12",
        "Đào tạo đạo đức & bảo mật",
        "Hướng dẫn tư duy phản biện",
      ],
      useCases: [
        "Chương trình ngoại khóa CLB AI trường phổ thông",
        "Workshop chuyển đổi số giảng dạy cho giáo viên",
        "Trại hè công nghệ AI Bootcamp thực tế",
      ],
    },
  ],
  en: [
    {
      id: "ai-private",
      title: "Personal AI Deployment & Consulting",
      description: "Design secure personal AI assistants capable of searching and working directly on internal documents.",
      tasks: [
        "Assess infrastructure & needs",
        "Design secure workflows",
        "Install Private AI assistants",
        "Integrate document RAG",
      ],
      useCases: [
        "AI lesson planning and grading for teachers",
        "AI lookup for corporate internal procedures",
        "AI supporting students' 24/7 self-study",
      ],
    },
    {
      id: "ai-models",
      title: "AI Model Provisioning & Integration",
      description: "Connect specialized AI models optimized for accuracy, cost, speed, and data privacy.",
      tasks: [
        "Optimize cost & speed",
        "Integrate advanced LLMs",
        "Integrate Vision/Speech AI",
        "Deploy on Cloud or Local",
      ],
      useCases: [
        "Integrate AI into LMS/E-learning systems",
        "Automatic grading via photos of student work",
        "AI native English speaking tutor",
      ],
    },
    {
      id: "ai-education",
      title: "Hands-on AI Education & Training",
      description: "Build digital literacy (AI Literacy) to help teachers instruct better and students create safely with AI.",
      tasks: [
        "AI lesson design for teachers",
        "Visual K-12 AI curriculum",
        "Ethics & security training",
        "Critical thinking guidance",
      ],
      useCases: [
        "AI club extracurricular activities for K-12 schools",
        "Teacher workshops on digital teaching transformation",
        "Real-world tech AI Bootcamp summer camp",
      ],
    },
  ],
};

export const adaptiveSteps: Record<"vi" | "en", LearningStep[]> = {
  vi: [
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
  ],
  en: [
    {
      step: 1,
      title: "Input Assessment",
      description: "Take a quick test to measure current knowledge.",
    },
    {
      step: 2,
      title: "Locating Gaps",
      description: "AI identifies exactly where the student needs improvement.",
    },
    {
      step: 3,
      title: "Unique Path",
      description: "Automatically setup a personalized study plan.",
    },
    {
      step: 4,
      title: "Practice & Correction",
      description: "Do interactive exercises, receive detailed explanations from AI.",
    },
    {
      step: 5,
      title: "Visual Reports",
      description: "Monitor learning progress closely via dashboard.",
    },
  ],
};

export const modelHubRows: Record<"vi" | "en", ModelHubRow[]> = {
  vi: [
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
  ],
  en: [
    {
      need: "Secure internal document lookup",
      modelType: "Large Language Model (LLM) + RAG",
      example: "GPT-4o, Claude 3.5, DeepSeek-V3",
      deployment: "Cloud API / Private Server / Local",
    },
    {
      need: "Smart knowledge search",
      modelType: "Embedding & Rerank Models",
      example: "text-embedding-3, Cohere Embed",
      deployment: "Cloud API / Local Vector DB",
    },
    {
      need: "Scan grading & image recognition",
      modelType: "Vision-Language Model (VLM)",
      example: "GPT-4o-mini, Claude Sonnet, Qwen-VL",
      deployment: "Cloud API / On-Premise GPU",
    },
    {
      need: "Lecture recording & speaking practice",
      modelType: "Speech-to-Text & Text-to-Speech",
      example: "Whisper Large, ElevenLabs",
      deployment: "Cloud API / Local Server",
    },
    {
      need: "Coding & automated software engineering",
      modelType: "Code Generation Model",
      example: "DeepSeek-Coder, Qwen-Coder",
      deployment: "Web IDE / VS Code Extension",
    },
  ],
};

export const educationPrograms: Record<"vi" | "en", EducationProgram[]> = {
  vi: [
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
  ],
  en: [
    {
      id: "giao-vien",
      tabLabel: "For Teachers",
      title: "Teaching Competency in the AI Era",
      target: "Kindergarten to K-12 teachers, lecturers, and education managers.",
      objective: "Help teachers apply AI to reduce lesson prep & grading time by 50%.",
      duration: "6–12 sessions (or 2-day Workshop)",
      contents: [
        "Understand AI, LLMs, and technology limits.",
        "Use AI to draft lesson plans, exams, and grading rubrics.",
        "Design interactive learning activities assisted by AI.",
        "Rules of ethics and student data privacy when using AIGC.",
      ],
      activities: [
        "Practice prompt engineering for interdisciplinary lesson plans.",
        "Test co-teaching alongside an AI assistant.",
        "Set up an automated exam bank in 15 minutes.",
      ],
      deliverables: [
        "01 AI-integrated lesson plan validated.",
        "Handbook guide to 10+ AI tools.",
        "Certificate of completion from NextgenAI.",
      ],
    },
    {
      id: "cap-1",
      tabLabel: "Elementary",
      title: "Discover Magical AI",
      target: "Elementary school students (Grades 1 - 5).",
      objective: "Get familiar with AI visually via creative games, training logic and digital safety.",
      duration: "8–12 sessions (90 mins/session)",
      contents: [
        "What is AI around us? (robots, Siri, cameras).",
        "Teach computers to recognize images/sound via games.",
        "Create stories and drawings creatively with AI.",
        "Digital safety: Protect personal info online.",
      ],
      activities: [
        "Teach AI to recognize items via webcam (Teachable Machine).",
        "Solve logic puzzles to understand computer operations.",
        "Write creative stories with AI-illustrated pictures.",
      ],
      deliverables: [
        "01 Self-created digital comic book with AI.",
        "01 Simple drag-and-drop logic game.",
        "Poster message 'I use AI safely'.",
      ],
    },
    {
      id: "cap-2",
      tabLabel: "Middle School",
      title: "Master AI & Chatbots",
      target: "Middle school students (Grades 6 - 9).",
      objective: "Understand data and algorithms, practice Prompt Engineering to support learning.",
      duration: "12–16 sessions (90 mins/session)",
      contents: [
        "Working principles of basic Machine Learning.",
        "Effective Prompt techniques to solve homework.",
        "Design your own chatbot answering chosen topics.",
        "Critical thinking: Detect misinformation from AI.",
      ],
      activities: [
        "Train AI models to classify waste or emotions.",
        "Create a learning chatbot assistant running on a web platform.",
        "Compare answers of different AIs to find logical errors.",
      ],
      deliverables: [
        "01 Self-designed review chatbot assistant.",
        "01 Web-based image recognition ML project.",
        "Personal prompt library supporting self-study.",
      ],
    },
    {
      id: "cap-3",
      tabLabel: "High School",
      title: "AI Applications & Careers",
      target: "High school students (Grades 10 - 12).",
      objective: "Basic Python coding for AI, building RAG systems for learning and career orientation.",
      duration: "16–24 sessions (or project Bootcamp)",
      contents: [
        "Foundations: Machine Learning, Deep Learning, NLP, and Computer Vision.",
        "Basic Python programming for AI data processing.",
        "Build RAG assistant to search personal study materials.",
        "AI ethics: Academic integrity, copyright, and privacy.",
      ],
      activities: [
        "Analyze real study data using Python.",
        "Integrate RAG with high school exam textbook data.",
        "Debate the impact of AI on future careers.",
      ],
      deliverables: [
        "01 RAG learning assistant loaded with personal files.",
        "01 Mini-project in Python data analysis.",
        "Personal AI project portfolio for university admission.",
      ],
    },
  ],
};

export const workflowSteps: Record<"vi" | "en", WorkflowStep[]> = {
  vi: [
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
  ],
  en: [
    {
      step: 1,
      title: "Needs Survey",
      description: "Listen to real problems and clarify available data sources.",
    },
    {
      step: 2,
      title: "Solution Design",
      description: "Build AI system architecture and mock interaction workflows.",
    },
    {
      step: 3,
      title: "Model Selection",
      description: "Choose the optimal model for cost, speed, and security.",
    },
    {
      step: 4,
      title: "Prototype Installation",
      description: "Build a pilot version (MVP) for quick hands-on experience.",
    },
    {
      step: 5,
      title: "Real-world Testing",
      description: "Internal team testing and prompt/data tuning.",
    },
    {
      step: 6,
      title: "Operational Training",
      description: "Train on prompt writing and database updating.",
    },
    {
      step: 7,
      title: "Regular Optimization",
      description: "Measure metrics, optimize speed and operational cost.",
    },
  ],
};

export const caseStudies: Record<"vi" | "en", CaseStudyScenario[]> = {
  vi: [
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
  ],
  en: [
    {
      title: "AI Training & Digital Transformation in High School",
      targetAudience: "Public / Private High School",
      problem: "Teachers hesitate to use tech; students abuse AI to copy homework, hurting academic integrity.",
      solution: "Trained 60 teachers in AI Literacy, whitelisted AI tools, and launched STEM clubs.",
      outcome: "92% of teachers confidently use AI to prep; students use AI ethically under supervision.",
    },
    {
      title: "24/7 AI English Tutor Support",
      targetAudience: "Language Center with 1500 students",
      problem: "Students lack English communication environments; cost of hiring 1-1 foreign teachers is too high.",
      solution: "Integrated OpenAI voice API to create AI Tutor chatbots supporting students 24/7.",
      outcome: "Increased speaking time by 45%; operating costs extremely low (under $0.1/student/month).",
    },
    {
      title: "Enterprise Internal Knowledge Lookup System",
      targetAudience: "Pharmaceutical Enterprise (120 staff)",
      problem: "New employees take too much time looking up 500+ drug catalogs and complex sales workflows.",
      solution: "Deployed Private AI Assistant using RAG technology, loaded with secure internal documents.",
      outcome: "Reduced lookup time from 15 minutes to 5 seconds; cut repetitive support requests by 70%.",
    },
    {
      title: "AI assisted lesson prep & automatic grading",
      targetAudience: "Free-lance Literature & English test-prep teachers",
      problem: "Teachers overwhelmed grading 200+ essays/week, unable to write detailed comments for each student.",
      solution: "Configured grading assistants with MOET rubrics to automatically suggest grammar & styling fixes.",
      outcome: "Grading time reduced by 60%; students receive instant personalized detailed feedback.",
    },
  ],
};

export const faqItems: Record<"vi" | "en", FAQItem[]> = {
  vi: [
    {
      question: "AI cá nhân khác gì so với việc sử dụng ChatGPT Plus thông thường?",
      answer: "AI cá nhân hoạt động hoàn toàn trên dữ liệu tri thức nội bộ của bạn, cam kết bảo mật 100%, không chia sẻ dữ liệu huấn luyện và có thể tùy chỉnh sâu theo quy trình hoạt động của tổ chức.",
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
      question: "Chi phí triển khai giải pháp AI cá nhân được tính toán thế nào?",
      answer: "Chi phí dựa trên dung lượng cơ sở tri thức nạp vào, số lượng người dùng đồng thời và mô hình hạ tầng (Cloud API hay Server vật lý). Chúng tôi sẽ tư vấn phương án tối ưu nhất cho ngân sách.",
    },
    {
      question: "Học sinh cấp 1 tiếp cận AI có quá sớm hay không?",
      answer: "Không. Học sinh tiểu học chỉ học về 'AI Literacy' (nhận thức số) thông qua trò chơi logic và các bài học sử dụng thiết bị số an toàn, bảo vệ thông tin cá nhân dưới sự giám sát.",
    },
  ],
  en: [
    {
      question: "How is personal AI different from ChatGPT Plus?",
      answer: "Personal AI works entirely on your internal knowledge base, commits to 100% security, never shares training data, and can be deeply integrated into workflows.",
    },
    {
      question: "We don't have technical staff, can we operate it?",
      answer: "Yes. The chat interface is designed to be as simple as standard apps. NextgenAI handles deployment and ongoing maintenance.",
    },
    {
      question: "Is internal data secure when loaded into the AI system?",
      answer: "Yes. We support multi-layer security: enterprise APIs without logs, private Cloud, or offline On-Premise local servers.",
    },
    {
      question: "How is deployment cost calculated?",
      answer: "Based on knowledge base size, concurrent users, and infrastructure style. We will recommend the best option for your budget.",
    },
    {
      question: "Is it too early for elementary students to learn AI?",
      answer: "No. Elementary students only learn 'AI Literacy' through logic games and digital safety lessons, supervised at all times.",
    },
  ],
};

export const pricingPackages: Record<"vi" | "en", PricingPackage[]> = {
  vi: [
    {
      name: "Starter (Cá nhân & GV)",
      tagline: "Tối ưu hóa hiệu suất làm việc cá nhân bằng trợ lý AI cá nhân chuyên biệt.",
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
  ],
  en: [
    {
      name: "Starter (Individuals & Teachers)",
      tagline: "Optimize personal performance using a specialized AI assistant.",
      features: [
        "Consultation to choose suitable AI tools",
        "Design 1 personal AI Assistant (RAG under 100 pages)",
        "Connect chatbot via Telegram or Web Chat",
        "Train prompt engineering for lesson prep",
      ],
      ctaText: "Get Starter Consultation",
    },
    {
      name: "Growth (Centers & Enterprises)",
      tagline: "Optimal solution for SMEs and education centers to automate workflows.",
      features: [
        "In-depth survey & AI workflow design",
        "Deploy Private AI Assistant on secure Cloud",
        "RAG knowledge connection with unlimited files",
        "Technology transfer training for the whole team",
      ],
      ctaText: "Request Demo",
      isPopular: true,
    },
    {
      name: "Enterprise & School (Large Scale)",
      tagline: "Comprehensive system for large schools & enterprises needing absolute security.",
      features: [
        "Deploy On-Premise Local Server or Private Cloud",
        "Multi-layer security and data access control",
        "Customized AI Literacy curriculum by grade level",
        "24/7 technical support, maintenance, and model updates",
      ],
      ctaText: "Custom Design",
    },
  ],
};
