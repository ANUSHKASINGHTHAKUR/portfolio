export const personalInfo = {
  name: "Anushka Singh",
  role: "Cybersecurity Enthusiast | Aspiring Penetration Tester",
  tagline: "Securing Digital Frontiers Through Vulnerability Assessment, Web Security & Ethical Hacking",
  shortBio: "I am a final-year B.Tech Computer Science Engineering student passionate about cybersecurity, ethical hacking, web application security, and penetration testing. I am continuously building practical skills through labs, projects, and hands-on security testing.",
  education: {
    degree: "B.Tech in Computer Science Engineering",
    status: "Final Year (Expected 2027)",
    institution: "Birla Institute of Applied Sciences",
    gpa: "7.5 / 10.0",
    schooling: [
      {
        level: "12th CBSE",
        score: "85%",
        school: "Sant Atulanand Convent School, Varanasi"
      },
      {
        level: "10th CBSE",
        score: "83%",
        school: "Beersheba Senior Secondary School, Haldwani"
      }
    ]
  },
  location: "India",
  careerGoals: ["Penetration Testing", "Web Application Security", "VAPT", "SOC Analysis", "Cybersecurity Engineering"],
  contact: {
    email: "anushkasinghthakur8656@gmail.com",
    phone: "+91 9258695425",
    linkedin: "https://linkedin.com/in/anushka-singh-cybersecurity", // Customizable
    github: "https://github.com/git-ANUSHKASINGHTHAKUR",
    location: "India",
    availability: "Available for Internships & Fresher Roles"
  },
  resumeUrl: "/resume/Anushka_Singh_Resume.pdf"
};

export const skillsData = [
  {
    category: "Cybersecurity & VAPT",
    icon: "ShieldAlert",
    description: "Core security testing, vulnerability assessment, and threat identification competencies.",
    skills: [
      { name: "Web Application Security", level: "Advanced", tag: "Core" },
      { name: "VAPT (Vuln Assessment & PenTesting)", level: "Intermediate", tag: "Core" },
      { name: "OWASP Top 10", level: "Advanced", tag: "Framework" },
      { name: "Ethical Hacking", level: "Intermediate", tag: "Methodology" },
      { name: "Vulnerability Assessment", level: "Advanced", tag: "Audit" },
      { name: "Incident Response", level: "Intermediate", tag: "SOC" },
      { name: "Risk Assessment & Auditing", level: "Intermediate", tag: "GRC" },
      { name: "Reconnaissance & Port Scanning", level: "Advanced", tag: "Network" }
    ]
  },
  {
    category: "Security Tools",
    icon: "Terminal",
    description: "Hands-on experience with industry-standard penetration testing and monitoring tools.",
    skills: [
      { name: "Burp Suite", level: "Advanced", tag: "Web Audit" },
      { name: "Nmap", level: "Advanced", tag: "Recon" },
      { name: "Wireshark", level: "Intermediate", tag: "Packet Sniffer" },
      { name: "OWASP ZAP", level: "Intermediate", tag: "DAST" },
      { name: "VirtualBox & VMware Workstation", level: "Advanced", tag: "Lab Setup" }
    ]
  },
  {
    category: "Programming & Scripting",
    icon: "Code",
    description: "Scripting languages for custom tool development, exploit writing, and security automation.",
    skills: [
      { name: "Python", level: "Advanced", tag: "Security Scripting" },
      { name: "Bash Scripting", level: "Intermediate", tag: "Linux Automation" },
      { name: "PowerShell", level: "Basic", tag: "Windows Shell" },
      { name: "SQL", level: "Intermediate", tag: "Databases & Injection" },
      { name: "JavaScript", level: "Intermediate", tag: "Frontend & XSS" },
      { name: "HTML & CSS", level: "Advanced", tag: "Web Markup" }
    ]
  },
  {
    category: "Networking & Protocols",
    icon: "Network",
    description: "Deep understanding of network layers, protocol mechanics, and traffic routing.",
    skills: [
      { name: "TCP/IP & OSI Model", level: "Advanced", tag: "Protocols" },
      { name: "DNS & DHCP", level: "Advanced", tag: "Services" },
      { name: "HTTP / HTTPS & SSL/TLS", level: "Advanced", tag: "Web Proto" },
      { name: "SSH & VPN", level: "Intermediate", tag: "Secure Tunneling" },
      { name: "Subnetting & Routing", level: "Intermediate", tag: "Architecture" },
      { name: "Firewalls & Access Control", level: "Intermediate", tag: "Defense" }
    ]
  },
  {
    category: "Operating Systems",
    icon: "Cpu",
    description: "Proficiency across penetration testing distributions and enterprise operating systems.",
    skills: [
      { name: "Kali Linux", level: "Advanced", tag: "Pentest Distro" },
      { name: "Ubuntu / General Linux", level: "Advanced", tag: "Server OS" },
      { name: "Windows / Windows Server", level: "Intermediate", tag: "Enterprise" }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    description: "Foundational knowledge of containerization, cloud infrastructure, and version control.",
    skills: [
      { name: "AWS (Amazon Web Services)", level: "Beginner", tag: "Cloud" },
      { name: "Docker", level: "Intermediate", tag: "Containers" },
      { name: "Git & GitHub", level: "Advanced", tag: "Version Control" },
      { name: "CI/CD Concepts", level: "Basic", tag: "DevSecOps" },
      { name: "Basic DevOps Practices", level: "Basic", tag: "Automation" }
    ]
  },
  {
    category: "Security Concepts",
    icon: "Lock",
    description: "Theoretical frameworks and security principles underlying modern cybersecurity.",
    skills: [
      { name: "CIA Triad", level: "Advanced", tag: "Foundations" },
      { name: "Cryptography & Hashing", level: "Intermediate", tag: "Data Security" },
      { name: "Digital Signatures & PKI", level: "Intermediate", tag: "Identity" },
      { name: "MFA & Authentication", level: "Advanced", tag: "IAM" },
      { name: "Threat Intelligence", level: "Basic", tag: "Recon" }
    ]
  }
];

export const projectsData = [
  {
    id: "port-scanner",
    title: "Python TCP Port Scanner",
    category: "Cybersecurity Tool",
    featured: true,
    isSecurityProject: true,
    status: "Completed",
    description: "A high-performance Python-based multi-port scanner designed to identify open TCP ports, running services, and active network hosts during reconnaissance.",
    longDescription: "Developed using Python's socket library to enable rapid network discovery and banner grabbing. Features multi-port targeting, configurable socket timeout handling, and detailed output classifying ports as open, closed, or filtered. Essential utility for initial VAPT reconnaissance phases.",
    technologies: ["Python", "Socket Programming", "TCP/IP", "Networking", "Port Scanning", "Reconnaissance"],
    keyFeatures: [
      "Multi-port asynchronous TCP connection probing",
      "Configurable timeout parameters to optimize scan speed and avoid network congestion",
      "Service banner identification for active services on open ports",
      "Structured terminal output highlighting open, closed, and filtered states",
      "Robust exception handling for unreachable hosts and connection drops"
    ],
    github: "https://github.com/git-ANUSHKASINGHTHAKUR/port-scanner",
    demo: null,
    metrics: "Scans 1000 standard ports in under 5 seconds with precise banner extraction"
  },
  {
    id: "password-strength-checker",
    title: "Password Security & Policy Evaluator",
    category: "Security Application",
    featured: true,
    isSecurityProject: true,
    status: "Completed",
    description: "An interactive security validation tool that analyzes password complexity against industry-standard security policies and common leak patterns.",
    longDescription: "Built with Python and Regex to evaluate authentication credentials. Checks length, character distribution (uppercase, lowercase, numbers, special characters), entropy, and common dictionary pattern matches. Provides users with real-time feedback and actionable remediation recommendations to mitigate brute-force attacks.",
    technologies: ["Python", "Regular Expressions (Regex)", "Password Security", "Authentication", "Input Validation"],
    keyFeatures: [
      "Regex-based pattern matching for character diversity analysis",
      "Check for dictionary words, sequential numbers, and repetitive character patterns",
      "Dynamic entropy score calculation and strength rating (Weak, Medium, Strong, Bulletproof)",
      "Real-time feedback engine suggesting precise improvements to elevate password hygiene",
      "Extensible policy rule configuration matching NIST password guidelines"
    ],
    github: "https://github.com/git-ANUSHKASINGHTHAKUR/password-strength-checker",
    demo: null,
    metrics: "Validates compliance against NIST SP 800-63B authentication guidelines"
  },
  {
    id: "students-counseling-app",
    title: "Students Counseling & Allocation System",
    category: "Full Stack Web App",
    featured: true,
    isSecurityProject: false,
    status: "Completed",
    description: "A comprehensive web application designed for student counseling, registration, rank-based branch allocation, payment processing, and offer letter generation.",
    longDescription: "Built with a modern MERN stack. Features multi-role authentication (Student & Admin), secure JWT token handling, dynamic merit rank calculation, college branch seat allocation algorithms, payment gateway integration, and automated PDF offer letter generation.",
    technologies: ["React", "Node.js", "Express.js", "Tailwind CSS", "MongoDB", "JWT Auth", "REST API"],
    keyFeatures: [
      "Student registration and multi-factor form authentication",
      "Academic marks management and automated rank calculation",
      "Merit-based branch and college seat allocation algorithm",
      "Integrated payment processing for application fees",
      "Automated PDF offer letter generation for allocated candidates",
      "Role-based administrative control panel"
    ],
    github: "https://github.com/git-ANUSHKASINGHTHAKUR/students-counseling-app",
    demo: "https://counseling-app-demo.example.com",
    metrics: "Handles thousands of student registrations with end-to-end data encryption"
  },
  {
    id: "ai-emotion-detector",
    title: "AI Multi-Modal Emotion Detector",
    category: "AI & Computer Vision",
    featured: false,
    isSecurityProject: false,
    status: "Completed",
    description: "An artificial intelligence system utilizing Computer Vision and Convolutional Neural Networks (CNN) to detect human emotions from text, images, and live video streams.",
    longDescription: "Combines OpenCV image processing with a trained CNN model and Gemini API integration. Captures real-time webcam feeds, isolates facial keypoints, and predicts emotional states (Happy, Sad, Angry, Neutral, Surprised) with high accuracy, while analyzing textual sentiment.",
    technologies: ["Python", "OpenCV", "CNN (Deep Learning)", "Gemini API", "NumPy", "TensorFlow"],
    keyFeatures: [
      "Real-time webcam video feed capture and facial bounding box detection",
      "Convolutional Neural Network classification of facial micro-expressions",
      "NLP text analysis powered by Gemini API for sentiment classification",
      "Live visual overlay dashboard displaying emotion probability metrics",
      "Multi-modal input support (Live Camera, Uploaded Image, Raw Text)"
    ],
    github: "https://github.com/git-ANUSHKASINGHTHAKUR/ai-emotion-detector",
    demo: null,
    metrics: "Achieves >90% accuracy in real-time facial emotion inference"
  },
  {
    id: "library-management-system",
    title: "Library Management & Book Tracking System",
    category: "Database Web Application",
    featured: false,
    isSecurityProject: false,
    status: "Completed",
    description: "A database-driven web application for managing library inventory, student membership records, book issuing, and automated return tracking.",
    longDescription: "Developed using vanilla frontend technologies (HTML, CSS, JavaScript) backed by a MySQL database architecture. Implemented parameterized queries to prevent SQL Injection and ensure integrity of student and book transaction records.",
    technologies: ["HTML5", "CSS3", "JavaScript", "MySQL", "PHP / Node Backend", "Relational DB"],
    keyFeatures: [
      "User authentication for students and library administration",
      "Comprehensive catalog search with category and availability filters",
      "Book issue transaction logging with due date calculation",
      "Return process tracking with automated fine calculation logic",
      "Student record management with active borrow history"
    ],
    github: "https://github.com/git-ANUSHKASINGHTHAKUR/library-management-system",
    demo: null,
    metrics: "Optimized relational database schema with indexed search queries"
  },
  
  // Future / Cybersecurity Lab Practice Placeholders
  {
    id: "web-vapt-lab",
    title: "Web Application VAPT Lab Practice",
    category: "Cybersecurity Lab",
    featured: false,
    isSecurityProject: true,
    status: "In Progress / Practical Lab",
    description: "Hands-on security audit and vulnerability assessment performed on vulnerable web environments like bWAPP, DVWA, and TryHackMe rooms.",
    longDescription: "Focused on practicing structured manual and automated VAPT methodologies. Conducting vulnerability scans, intercepting HTTP/HTTPS traffic via Burp Suite, verifying OWASP Top 10 vulnerabilities, and documenting remediation strategies in professional assessment reports.",
    technologies: ["Burp Suite", "bWAPP", "DVWA", "VAPT", "OWASP Top 10", "Web Security"],
    keyFeatures: [
      "Manual HTTP request manipulation and parameter tampering",
      "SQL Injection (SQLi) identification and manual payload validation",
      "Cross-Site Scripting (XSS) testing (Reflected, Stored, DOM)",
      "Broken Access Control and IDOR vulnerability exploitation",
      "Drafting formal VAPT findings and mitigation guidelines"
    ],
    github: "https://github.com/git-ANUSHKASINGHTHAKUR/web-vapt-lab-notes",
    demo: null,
    isPlaceholder: true
  },
  {
    id: "owasp-top-10-testing",
    title: "OWASP Top 10 Hands-on Security Testing",
    category: "Cybersecurity Lab",
    featured: false,
    isSecurityProject: true,
    status: "Lab Environment",
    description: "Systematic practical analysis of each vulnerability category in the OWASP Top 10 standard risk model.",
    longDescription: "Documenting proof-of-concept exploits and remediation recommendations for broken authentication, cryptographic failures, injection vulnerabilities, security misconfigurations, and vulnerable components.",
    technologies: ["OWASP Top 10", "OWASP ZAP", "Burp Suite", "Python", "Web Application Security"],
    keyFeatures: [
      "Authentication bypass & session management flaw testing",
      "Server-Side Request Forgery (SSRF) vector analysis",
      "Security misconfiguration checks on web servers and headers",
      "Detailed proof-of-concept (PoC) writeups for learning"
    ],
    github: "https://github.com/git-ANUSHKASINGHTHAKUR/owasp-top10-lab",
    demo: null,
    isPlaceholder: true
  },
  {
    id: "vulnerability-assessment-reports",
    title: "Vulnerability Assessment Reports Portfolio",
    category: "Cybersecurity Lab",
    featured: false,
    isSecurityProject: true,
    status: "Documentation Lab",
    description: "Sample industry-standard vulnerability assessment reports created following professional VAPT report structures.",
    longDescription: "Drafting comprehensive executive summaries, CVSS v3.1 severity score assignments, detailed reproduction steps, technical impact analyses, and developer-friendly remediation patches for discovered flaws.",
    technologies: ["CVSS Scoring", "VAPT Reporting", "Technical Writing", "Risk Assessment", "Security Auditing"],
    keyFeatures: [
      "Executive Summary suitable for C-level management",
      "CVSS v3.1 Base Metrics calculation for risk prioritization",
      "Step-by-step reproduction instructions with HTTP request/response proofs",
      "Remediation guidance aligned with secure coding standards"
    ],
    github: "https://github.com/git-ANUSHKASINGHTHAKUR/vapt-reports-portfolio",
    demo: null,
    isPlaceholder: true
  },
  {
    id: "bug-bounty-practice",
    title: "Bug Bounty Practice & Recon Notes",
    category: "Cybersecurity Lab",
    featured: false,
    isSecurityProject: true,
    status: "Active Learning",
    description: "Reconnaissance automation scripts and vulnerability discovery methodology notes on public target scope.",
    longDescription: "Practicing asset discovery, subdomain enumeration, content discovery, and parameter analysis using tools like Nmap, Sublist3r, ffuf, and Burp Suite in legal lab scope.",
    technologies: ["Subdomain Recon", "ffuf", "Nmap", "Burp Suite", "Content Discovery", "Bug Bounty Methodologies"],
    keyFeatures: [
      "Subdomain discovery and active host mapping scripts",
      "Directory and hidden endpoint brute-forcing workflows",
      "HTTP Header analysis for missing security controls",
      "Structured bug bounty methodology checklist"
    ],
    github: "https://github.com/git-ANUSHKASINGHTHAKUR/bug-bounty-recon-notes",
    demo: null,
    isPlaceholder: true
  },
  {
    id: "cybersecurity-home-lab",
    title: "Virtual Cybersecurity Home Lab Setup",
    category: "Cybersecurity Lab",
    featured: false,
    isSecurityProject: true,
    status: "Maintained Lab",
    description: "Isolated virtual network environment for attacking and defending vulnerable target systems.",
    longDescription: "Configured using VirtualBox and VMware Workstation. Hosts Kali Linux attack machine, Metasploitable2, Windows Target, and custom vulnerable Web Apps isolated behind virtual subnet routing.",
    technologies: ["VirtualBox", "VMware Workstation", "Kali Linux", "Host Isolation", "Network Subnetting"],
    keyFeatures: [
      "Isolated virtual NAT network setup preventing traffic leaks",
      "Pre-configured Kali Linux toolkit with custom scripts",
      "Target vulnerable VM deployment (Metasploitable, WebGoat)",
      "Traffic capturing setup via Wireshark on virtual adapters"
    ],
    github: "https://github.com/git-ANUSHKASINGHTHAKUR/cybersecurity-homelab-docs",
    demo: null,
    isPlaceholder: true
  }
];

export const certificationsData = [
  {
    id: "google-cybersecurity",
    title: "Google Cybersecurity Specialization",
    issuer: "Google (via Coursera)",
    date: "Completed 2024",
    status: "Verified Credential",
    badgeColor: "from-blue-500 to-emerald-500",
    description: "Comprehensive 8-course professional specialization covering cybersecurity foundations, risk management, Python for security automation, Linux CLI, SQL, networks, and SIEM security operations.",
    skillsCovered: ["Security Operations", "Linux", "SQL", "Python", "SIEM (Splunk)", "IDS/IPS", "Incident Response"],
    credentialUrl: "https://coursera.org/verify/professional-cert/google-cybersecurity-placeholder",
    verified: true
  },
  {
    id: "isc2-cc",
    title: "Certified in Cybersecurity (CC) Training",
    issuer: "ISC2 (via Coursera)",
    date: "Completed 2024",
    status: "Training Completed",
    badgeColor: "from-emerald-500 to-teal-500",
    description: "Official entry-level cybersecurity certification path covering Security Principles, Business Continuity (BCP), Disaster Recovery (DRP), Access Controls, Network Security, and Systems Operations.",
    skillsCovered: ["Security Principles", "Access Control", "Network Security", "Incident Handling", "BCP / DRP"],
    credentialUrl: "https://coursera.org/verify/isc2-cc-placeholder",
    verified: true
  },
  {
    id: "cisco-networking",
    title: "Cisco Networking Academy Certification",
    issuer: "Cisco",
    date: "Completed 2023",
    status: "Verified Credential",
    badgeColor: "from-cyan-500 to-blue-600",
    description: "Rigorous training in computer networking fundamentals, TCP/IP architecture, IP addressing & subnetting, routing protocols, switching, and network defense strategies.",
    skillsCovered: ["TCP/IP Architecture", "Subnetting", "Routing & Switching", "Network Security", "Packet Analysis"],
    credentialUrl: "https://netacad.com/verify/cisco-placeholder",
    verified: true
  },
  {
    id: "icdfa-forensics",
    title: "Digital Forensics & Cybersecurity Certificate",
    issuer: "ICDFA (Nigeria)",
    date: "Completed 2023",
    status: "Verified Credential",
    badgeColor: "from-purple-500 to-pink-500",
    description: "International cybersecurity and digital forensics training focusing on evidence collection, file system investigation, disk forensics concepts, and cyber threat analysis.",
    skillsCovered: ["Digital Forensics", "Evidence Handling", "File System Analysis", "Threat Analysis"],
    credentialUrl: "https://icdfa.org/verify/icdfa-placeholder",
    verified: true
  },
  {
    id: "freecodecamp-data-analysis",
    title: "Data Analysis with Python",
    issuer: "freeCodeCamp",
    date: "Completed 2023",
    status: "Verified Credential",
    badgeColor: "from-amber-500 to-orange-500",
    description: "Practical certification in analyzing complex datasets, numerical processing, and data visualization using NumPy, Pandas, Matplotlib, and Seaborn.",
    skillsCovered: ["Python", "Pandas", "NumPy", "Data Processing", "Log Analysis Skills"],
    credentialUrl: "https://freecodecamp.org/certification/anushka-singh/data-analysis-with-python",
    verified: true
  },
  {
    id: "freecodecamp-web-design",
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    date: "Completed 2023",
    status: "Verified Credential",
    badgeColor: "from-emerald-400 to-cyan-500",
    description: "300+ hours of hands-on web development covering semantic HTML5, modern CSS3 layout systems (Flexbox, Grid), web accessibility (ARIA), and responsive design principles.",
    skillsCovered: ["HTML5", "CSS3", "Responsive Design", "Flexbox & Grid", "DOM Structure"],
    credentialUrl: "https://freecodecamp.org/certification/anushka-singh/responsive-web-design",
    verified: true
  },
  {
    id: "freecodecamp-data-vis",
    title: "Data Visualization Certification",
    issuer: "freeCodeCamp",
    date: "Completed 2023",
    status: "Verified Credential",
    badgeColor: "from-indigo-500 to-purple-500",
    description: "Certification in building interactive charts, security metrics dashboards, and graphical data representations using JavaScript and data visualization libraries.",
    skillsCovered: ["JavaScript", "D3.js / SVG", "Data Visualization", "API Fetching"],
    credentialUrl: "https://freecodecamp.org/certification/anushka-singh/data-visualization",
    verified: true
  }
];

export const learningJourney = [
  {
    phase: "01",
    title: "Linux Fundamentals & CLI Mastery",
    icon: "Terminal",
    status: "Completed",
    period: "Phase 1",
    description: "Mastered Linux file system hierarchy, permissions, user management, bash scripting, process monitoring, and package management in Kali & Ubuntu.",
    highlights: ["File Permissions & Chmod", "Bash Shell Scripting", "Process Management", "Grep & Regex Tools"]
  },
  {
    phase: "02",
    title: "Networking & Protocol Mechanics",
    icon: "Network",
    status: "Completed",
    period: "Phase 2",
    description: "Deep dive into TCP/IP protocol suite, OSI 7-layer stack, DNS resolution, DHCP, subnets, packet flow analysis, and HTTP/HTTPS headers.",
    highlights: ["Wireshark Packet Analysis", "Subnetting & IP Routing", "HTTP Request/Response cycle", "Cisco NetAcad Certification"]
  },
  {
    phase: "03",
    title: "Python & Security Automation",
    icon: "Code",
    status: "Completed",
    period: "Phase 3",
    description: "Building security scripting capabilities in Python, socket programming, regular expressions, automated web scrapers, and network recon utilities.",
    highlights: ["Custom TCP Port Scanner", "Password Evaluator Tool", "Socket Programming", "Data Analysis with Python"]
  },
  {
    phase: "04",
    title: "Web Technologies & Architecture",
    icon: "Globe",
    status: "Completed",
    period: "Phase 4",
    description: "Understanding client-server architectures, RESTful APIs, database operations (SQL/MongoDB), authentication tokens (JWT), and modern web stacks.",
    highlights: ["React & Node.js Development", "SQL & Database Queries", "REST API Development", "Responsive Web Architecture"]
  },
  {
    phase: "05",
    title: "OWASP Top 10 & Web Security",
    icon: "ShieldAlert",
    status: "Completed",
    period: "Phase 5",
    description: "Studying critical web application risks: Broken Access Control, SQL Injection, XSS, SSRF, Insecure Deserialization, and Cryptographic Failures.",
    highlights: ["Injection Vulnerabilities", "Authentication Bypasses", "XSS & CSRF Mechanics", "Security Misconfigurations"]
  },
  {
    phase: "06",
    title: "Burp Suite & Dynamic Application Security",
    icon: "Activity",
    status: "Active Focus",
    period: "Phase 6",
    description: "Hands-on intercepting proxy workflows, payload crafting, Repeater and Intruder module usage, parameter tampering, and OWASP ZAP automated audits.",
    highlights: ["Burp Intercept Proxy", "Repeater & Intruder", "Automated Vulnerability Scans", "Parameter Tampering"]
  },
  {
    phase: "07",
    title: "Web Application Security & VAPT Methodology",
    icon: "Crosshair",
    status: "Active Focus",
    period: "Phase 7",
    description: "Executing structured Vulnerability Assessment and Penetration Testing (VAPT) workflows on vulnerable environments (bWAPP, DVWA, THM).",
    highlights: ["VAPT Reconnaissance", "Manual Exploit Validation", "CVSS Metric Scoring", "VAPT Report Writing"]
  },
  {
    phase: "08",
    title: "AWS & Cloud Infrastructure Security",
    icon: "Cloud",
    status: "In Progress",
    period: "Phase 8",
    description: "Exploring Amazon Web Services (AWS) core security concepts, IAM policies, S3 bucket security, security groups, and cloud attack vectors.",
    highlights: ["AWS IAM & Security Groups", "S3 Storage Bucket Policies", "Cloud Reconnaissance", "Basic AWS Architecture"]
  },
  {
    phase: "09",
    title: "Docker & Container Security / DevOps",
    icon: "Box",
    status: "In Progress",
    period: "Phase 9",
    description: "Understanding containerization with Docker, container isolation, environment variable security, and basic CI/CD pipeline integration.",
    highlights: ["Docker Container Deployment", "Image Vulnerability Scanning", "Basic CI/CD Pipeline Safety", "Virtualized Lab Orchestration"]
  },
  {
    phase: "10",
    title: "Advanced Penetration Testing & Certifications",
    icon: "Award",
    status: "Upcoming Goal",
    period: "Phase 10",
    description: "Pursuing advanced hands-on penetration testing certifications (such as EJPT / PNPT / OSCP), active Hack The Box / THM machine exploitation, and SOC analysis.",
    highlights: ["Active Directory Exploitation", "Privilege Escalation", "CTF Challenges", "Industry Professional Role"]
  }
];

export const labTools = [
  {
    name: "Kali Linux",
    category: "OS / Pentest Distro",
    level: "Primary OS",
    icon: "Terminal",
    purpose: "Primary distribution for security audits, reconnaissance, and penetration testing."
  },
  {
    name: "Burp Suite",
    category: "Web Security Proxy",
    level: "Advanced",
    icon: "ShieldAlert",
    purpose: "HTTP request interception, parameter manipulation, session analysis, and web flaw hunting."
  },
  {
    name: "Nmap",
    category: "Network Recon",
    level: "Advanced",
    icon: "Search",
    purpose: "Network discovery, host discovery, port scanning, OS detection, and NSE vulnerability scanning."
  },
  {
    name: "Wireshark",
    category: "Packet Analyzer",
    level: "Intermediate",
    icon: "Activity",
    purpose: "Deep packet inspection, network protocol analysis, and traffic troubleshooting."
  },
  {
    name: "OWASP ZAP",
    category: "DAST Scanner",
    level: "Intermediate",
    icon: "Cpu",
    purpose: "Automated vulnerability scanning and security auditing of web applications."
  },
  {
    name: "Docker",
    category: "Container Lab",
    level: "Intermediate",
    icon: "Box",
    purpose: "Deploying isolated vulnerable web apps and testing environments efficiently."
  },
  {
    name: "bWAPP & DVWA",
    category: "Vulnerable Apps",
    level: "Active Lab",
    icon: "Bug",
    purpose: "Practicing OWASP Top 10 vulnerabilities in legally sanctioned local environments."
  },
  {
    name: "TryHackMe",
    category: "Cyber Training",
    level: "Active Practitioner",
    icon: "Target",
    purpose: "Gamified security rooms covering Web Fundamentals, Pentesting, and Incident Response."
  },
  {
    name: "Hack The Box",
    category: "CTF & Labs",
    level: "Practitioner",
    icon: "Award",
    purpose: "Real-world vulnerable machine penetration testing and CTF challenge solving."
  },
  {
    name: "Git & GitHub",
    category: "Version Control",
    level: "Advanced",
    icon: "GitBranch",
    purpose: "Version controlling security scripts, lab documentation, and web app codebases."
  }
];

export const terminalCommands = {
  help: `Available commands:
  - whoami       : Display bio & career objectives
  - skills       : List technical cybersecurity & programming skills
  - projects     : View cybersecurity and web application projects
  - certs        : View earned certifications & credentials
  - nmap         : Run simulated Nmap security scan on local target
  - lab          : Show active cybersecurity home lab configuration
  - resume       : Get direct resume download link
  - contact      : Show contact email, phone, and social links
  - clear        : Clear the terminal screen`,

  whoami: `[USER]: Anushka Singh
[ROLE]: Cybersecurity Analyst | Aspiring Penetration Tester
[EDUCATION]: B.Tech CSE (Final Year), Birla Institute of Applied Sciences (GPA: 7.5/10.0)
[LOCATION]: India
[OBJECTIVE]: Seeking Cybersecurity Internships & Entry-Level VAPT / Web Security / SOC Roles.
[FOCUS]: Web Application VAPT, OWASP Top 10, Network Reconnaissance, Python Automation.`,

  skills: `=== TECHNICAL SKILLS SUMMARY ===
• Cybersecurity  : Web App Security, VAPT, OWASP Top 10, Ethical Hacking, Burp Suite, Nmap
• Programming    : Python, Bash Scripting, JavaScript, SQL, HTML/CSS
• Networking     : TCP/IP, OSI Model, DNS, DHCP, HTTP/HTTPS, SSH, Subnetting, Firewalls
• OS & Tools     : Kali Linux, Ubuntu Linux, Windows, VirtualBox, Wireshark, OWASP ZAP
• Cloud & DevOps : AWS (Basics), Docker, Git/GitHub, CI/CD Fundamentals`,

  projects: `=== FEATURED PROJECTS ===
1. [SEC] Python TCP Port Scanner
   Tech: Python, Socket Programming, TCP/IP
   Desc: Multi-port scanner with configurable timeout & banner extraction.

2. [SEC] Password Strength & Policy Evaluator
   Tech: Python, Regex, Authentication Guidelines
   Desc: Real-time password complexity & entropy evaluation tool.

3. [WEB] Students Counseling & Allocation System
   Tech: React, Node.js, Express, MongoDB, Tailwind CSS
   Desc: Full-stack MERN app with rank allocation & PDF offer generation.

4. [AI]  AI Multi-Modal Emotion Detector
   Tech: Python, OpenCV, CNN, Gemini API
   Desc: Real-time emotion detection from video/text/images.

5. [LAB] Web App VAPT & OWASP Top 10 Practice Labs
   Tech: Burp Suite, bWAPP, DVWA, TryHackMe
   Desc: Hands-on security auditing and vulnerability reproduction.`,

  certs: `=== CERTIFICATIONS & ACADEMIC CREDENTIALS ===
[1] Google Cybersecurity Specialization (Coursera / Google)
[2] Certified in Cybersecurity (CC) Training (ISC2)
[3] Cisco Networking Academy Certification (Cisco)
[4] Digital Forensics & Cybersecurity Certificate (ICDFA Nigeria)
[5] Data Analysis with Python (freeCodeCamp)
[6] Responsive Web Design (freeCodeCamp)
[7] Data Visualization (freeCodeCamp)`,

  nmap: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-09-20 17:55 IST
Nmap scan report for target.anushkasingh.sec (192.168.1.100)
Host is up (0.00042s latency).
Not shown: 996 closed tcp ports (reset)
PORT     STATE SERVICE       VERSION
22/tcp   open  ssh           OpenSSH 8.9p1 Ubuntu
80/tcp   open  http          nginx 1.18.0 (OWASP Audited)
443/tcp  open  ssl/https     nginx 1.18.0 (TLS v1.3 Secure)
3306/tcp open  mysql         MySQL 8.0.32 (Auth Protected)

Nmap done: 1 IP address (1 host up) scanned in 1.48 seconds.
[INFO] All targets passing baseline port security policy checks.`,

  lab: `=== ANUSHKA'S VIRTUAL CYBERSECURITY LAB ===
[HOST OS]     : Windows 11 Enterprise (Host Machine)
[HYPERVISOR]  : VirtualBox 7.0 & VMware Workstation Pro
[ATTACK VM]   : Kali Linux (Pre-configured with Burp Suite, Nmap, Wireshark, ZAP)
[TARGET VMS]  : Metasploitable 2, bWAPP container, DVWA Docker Instance
[NETWORKING]  : Isolated Virtual Host-Only Adapter (Subnet 192.168.56.0/24)
[PRACTICE]    : Active TryHackMe & Hack The Box machines`,

  resume: `[RESUME LINK]: /resume/Anushka_Singh_Resume.pdf
Status: Ready for immediate download. Click the "Download Resume" button in the UI or Navbar.`,

  contact: `=== CONTACT INFORMATION ===
• Email    : anushkasinghthakur8656@gmail.com
• Phone    : +91 9258695425
• Location : India
• GitHub   : https://github.com/git-ANUSHKASINGHTHAKUR
• LinkedIn : https://linkedin.com/in/anushka-singh-cybersecurity`
};
