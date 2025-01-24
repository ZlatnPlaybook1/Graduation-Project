const courseData = [
  {
    id: 1,
    category: "Web Vulnerabilities",
    title: "SQL Injection",
    description:
      "Learn how attackers exploit vulnerabilities in web applications using SQL injection and understand the techniques to detect and prevent them.",
    topics: [
      "Retrieving hidden data",
      "SQL injection UNION attacks",
      "Finding columns with a useful data type",
      "Using a SQL injection UNION attack to retrieve interesting data",
    ],
    difficulty: "Easy",
    image: require("../assets/img/SQL_Injection/landing3.png"),
    link: "/sql_Injection",
  },
  {
    id: 2,
    category: "Web Vulnerabilities",
    title: "Cross-Site Scripting",
    description:
      "Learn the fundamentals of Cross-Site Scripting (XSS), one of the most common vulnerabilities in web applications.",
    topics: [
      "What is Cross-Site Scripting?",
      "Types of XSS",
      "Exploitation Techniques",
      "Mitigation Strategies",
    ],
    difficulty: "Easy",
    image: require("../assets/img/Cross_Site_Scripting/xss.jpeg.jpg"),
    link: "/xss",
  },
  {
    id: 3,
    category: "Web Vulnerabilities",
    title: "Cookies",
    description:
      "Understand the role of cookies in web security, how they are used, and the potential privacy concerns they introduce.",
    topics: [
      "What Are Cookies?",
      "What are Cookies Used For?",
      "Where are Cookies Stored?",
      "Cookies Manipulation",
    ],
    difficulty: "Easy",
    image: require("../assets/img/cookies/Cookies_transparent.png"),
    link: "/cookies",
  },
  {
    id: 4,
    category: "Web Vulnerabilities",
    title: "Access Control Vulnerabilities",
    description:
      "Learn how attackers exploit vulnerabilities in web applications to bypass access controls and understand the techniques to detect and prevent them.",
    topics: [
      "What are Access Control Vulnerabilities?",
      "Types of Access Control Flaws",
      "Exploitation Examples",
      "Mitigation Techniques",
    ],
    difficulty: "Easy",
    image: require("../assets/img/ACV/landing.jpeg"),
    link: "/AC_Vuln",
  },
  {
    id: 5,
    category: "Server-Side Exploits",
    title: "Unrestricted File Upload",
    description:
      "Understand the risks and exploitation of unrestricted file upload vulnerabilities, a critical security issue in web applications.",
    topics: [
      "What is Unrestricted File Upload?",
      "Why is it Dangerous?",
      "Attack Techniques",
      "Exploitation Scenarios",
    ],
    difficulty: "Easy",
    image: require("../assets/img/Unrestricted File Upload/card_image.png"),
    link: "/UnrestrictedFileUpload",
  },
  {
    id: 7,
    category: "Fundamentals",
    title: "Linux Fundamentals",
    description:
      "Build a solid foundation in Linux, the operating system at the core of many cybersecurity tools and infrastructures.",
    topics: [
      "Running Your First Few Commands",
      "Interacting with the Filesystem",
      "Searching for Files",
      "Introduction to Shell Operators",
    ],
    difficulty: "Easy",
    image: require("../assets/img/linux/linux_logo.png"),
    link: "/linux",
  },
  {
    id: 6,
    category: "Web Vulnerabilities",
    title: "Broken Authentication",
    description:
      "Learn how attackers exploit vulnerabilities in authentication mechanisms and understand how to secure them.",
    topics: [
      "Common Authentication Flaws",
      "Session Management Issues",
      "Mitigation Strategies",
      "Real-world Examples",
    ],
    difficulty: "Easy",
    image: require("../assets/img/Broken Authentication/card_image.png"),
    link: "/broken-auth",
  },
  {
    id: 7,
    category: "Web Vulnerabilities",
    title: "Business Logic Vulnerabilities",
    description:
      "Understand the risks and exploitation of unrestricted file upload vulnerabilities, a critical security issue in web applications. Learn how attackers can leverage this vulnerability to execute malicious code or compromise a server.",
    topics: [
      "What is Unrestricted File Upload?",
      "Why is it Dangerous?",
      "Attack Techniques",
      "Exploitation Scenarios",
    ],
    difficulty: "Easy",
    image: require("../assets/img/Unrestricted File Upload/card_image.png"),
    link: "/UnrestrictedFileUpload",
  },

  {
    id: 8,
    category: "Server-Side Exploits",
    title: "Path Traversal",
    description:
      "Learn how attackers exploit path traversal vulnerabilities to access unauthorized files on a server.",
    topics: [
      "Understanding Path Traversal",
      "Exploitation Examples",
      "Mitigation Strategies",
      "Real-world Case Studies",
    ],
    difficulty: "Easy",
    image: require("../assets/img/Path_Traversal/landing.jpeg"),
    link: "/Path_Traversal",
  },

  {
    id: 10,
    category: "Fundamentals",
    title: "Bash Scripting",
    description:
      "Master the basics of Bash scripting, a powerful tool for automating tasks and managing systems in cybersecurity environments.",
    topics: ["Simple Bash Scripts", "Variables", "Parameters", "Arrays"],
    difficulty: "Easy",
    image: require("../assets/img/bash/bash_course_logo.png"),
    link: "/bash-scripting",
  },
  {
    id: 11,
    category: "Specialized Topics",
    title: "Regex",
    description:
      "Explore the power of regular expressions for pattern matching and text manipulation in various contexts.",
    topics: [
      "Introduction to Regex",
      "Basic Syntax",
      "Advanced Techniques",
      "Practical Examples",
    ],
    difficulty: "Easy",
    image: require("../assets/img/Regex/landing.jpeg"),
    link: "/Regex",
  },
  {
    id: 12,
    category: "Specialized Topics",
    title: "API Hacking",
    description:
      "Understand the vulnerabilities and testing techniques for securing APIs in modern web applications.",
    topics: [
      "What is API Hacking?",
      "Common API Vulnerabilities",
      "Testing Tools and Techniques",
      "Case Studies",
    ],
    difficulty: "Easy",
    image: require("../assets/img/Api_Hacking/landing.png"),
    link: "/Api_Hacking",
  },
  {
    id: 13,
    category: "Specialized Topics",
    title: "Obfuscation",
    description:
      "Master the basics of obfuscation, a powerful technique for securing code and protecting intellectual property.",
    topics: [
      "What are Obfuscation & Deobfuscation?",
      "Why Use Obfuscation?",
      "JavaScript Obfuscation",
      "Deobfuscation Tools",
    ],
    difficulty: "Easy",
    image: require("../assets/img/Obfuscation/card_image.png"),
    link: "/obfuscation",
  },
  {
    id: 14,
    category: "Specialized Topics",
    title: "Clickjacking",
    description:
      "Learn how attackers exploit clickjacking vulnerabilities and understand the techniques to detect and prevent them.",
    topics: [
      "What is Clickjacking?",
      "Real-world Examples",
      "Detection Methods",
      "Prevention Strategies",
    ],
    difficulty: "Easy",
    image: require("../assets/img/Click_Jacking/landing.jpeg"),
    link: "/Click_Jacking",
  },
  // Temporary placeholder topics
  {
    id: 15,
    category: "Temporary Category",
    title: "Temporary Topic",
    description:
      "This is a temporary placeholder topic to meet the required number of 30 topics.",
    topics: [
      "Placeholder Topic 1",
      "Placeholder Topic 2",
      "Placeholder Topic 3",
      "Placeholder Topic 4",
    ],
    difficulty: "Medium",
    image: require("../assets/img/Lab2.jpg"),
    link: "/temp_topic_15",
  },
  {
    id: 16,
    category: "Temporary Category",
    title: "Temporary Topic",
    description:
      "This is a temporary placeholder topic to meet the required number of 30 topics.",
    topics: [
      "Placeholder Topic 1",
      "Placeholder Topic 2",
      "Placeholder Topic 3",
      "Placeholder Topic 4",
    ],
    difficulty: "Medium",
    image: require("../assets/img/Lab2.jpg"),
    link: "/temp_topic_16",
  },
  {
    id: 16,
    category: "Temporary Category",
    title: "Temporary Topic",
    description:
      "This is a temporary placeholder topic to meet the required number of 30 topics.",
    topics: [
      "Placeholder Topic 1",
      "Placeholder Topic 2",
      "Placeholder Topic 3",
      "Placeholder Topic 4",
    ],
    difficulty: "Medium",
    image: require("../assets/img/Lab2.jpg"),
    link: "/temp_topic_16",
  },
  // Repeat for remaining temporary topics until ID 30
  ...Array.from({ length: 14 }, (_, i) => ({
    id: 17 + i,
    category: "Temporary Category",
    title: `Temporary Topic ${17 + i}`,
    description:
      "This is a temporary placeholder topic to meet the required number of 30 topics.",
    topics: [
      "Placeholder Topic 1",
      "Placeholder Topic 2",
      "Placeholder Topic 3",
      "Placeholder Topic 4",
    ],
    difficulty: "Medium",
    image: require("../assets/img/Lab2.jpg"),
    link: `/temp_topic_${17 + i}`,
  })),
];

export default courseData;
