import Mock from "../mock";

const database = {
  information: {
    name: "Jon Gregis",
    aboutContent:
      "A full-stack engineer based in Austin TX. I have a passion for creativity and love jumping into a new technology.",
    age: 31,
    phone: "",
    nationality: "American",
    language: "English",
    email: "",
    address: "Austin, TX",
    freelanceStatus: "Available",
    socialLinks: {
      facebook: "",
      twitter: "",
      pinterest: "",
      behance: "",
      linkedin: "https://www.linkedin.com/in/jonathan-gregis/",
      dribbble: "",
      github: "https://github.com/jongregis",
    },
    brandImage: "/images/Jonathon_Raw2-Edit.jpg",
    aboutImage: "/images/Jonathon_Raw2-Edit.jpg",
    aboutImageLg: "/images/Jonathon_Raw2-Edit.jpg",
    cvfile: "/files/resume.pdf",
  },
  services: [
    {
      title: "Software Automation",
      icon: "code",
      details:
        "Want to streamline how your company operates? Let me help design custom automation software for your business today.",
    },
    {
      title: "Web Development",
      icon: "color-pallet",
      details:
        "If you need anything from a landing page to a full stack site, I can help in building your next project.",
    },
    {
      title: "Mobile Application",
      icon: "mobile",
      details:
        "Want your existing site more mobile friendly? Have a cool mobile app idea? Using React Native, I can create you a mobile app for both Android and IOS.",
    },
  ],
  reviews: [
    {
      id: 1,
      content:
        "I needed a website for my plumbing business and didnt know where to start. I was introduced to Jon by a friend and couldnt be happier with the results.",
      author: {
        name: "Phil Zuck ",
        designation: "Client",
      },
    },
  ],
  skills: [
    {
      title: "Python",
      value: 80,
    },
    {
      title: "Django",
      value: 70,
    },
    {
      title: "Golang",
      value: 50,
    },
    {
      title: "Javascript",
      value: 80,
    },
    {
      title: "React",
      value: 80,
    },
    {
      title: "AWS",
      value: 70,
    },
    {
      title: "C#/.NET",
      value: 10,
    },
    {
      title: "API Development",
      value: 80,
    },
    {
      title: "Java",
      value: 35,
    },
    {
      title: "Jenkins",
      value: 80,
    },
  ],
  portfolioCategories: [
    {
      id: 1,
      title: "React",
      imageUrl: "/images/react-logo.svg",
      url: "/portfolios/react",
    },
    {
      id: 2,
      title: "Javascript",
      imageUrl: "/images/javascript-logo.png",
    },
    {
      id: 3,
      title: "Python",
      imageUrl: "/images/python-logo.png",
      url: "/portfolios/python",
    },
    {
      id: 4,
      title: "Wordpress",
      imageUrl: "/images/WordPress-logo.png",
      url: "/portfolios/wordpress",
    },
  ],
  portfolioReact: [
    {
      id: 1,
      title: "Cryptofuse",
      subtitle: "Cryptocurrency Mutual Fund",
      imageUrl: "/images/cryptofuse2.png",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: "https://cryptofuse-react.herokuapp.com/",
    },
  ],
  portfolioPython: [
    {
      id: 1,
      title: "Billing Department Automation",
      subtitle: "Python Automation",
      imageUrl: "/images/github-logo.svg",
      largeImageUrl: ["/images/github-logo.sv"],
      url: "https://github.com/jongregis/Job-Automation",
    },
  ],
  portfolioJavascript: [
    {
      id: 1,
      title: "Phil's Plumbing",
      subtitle: "Business Website for Plumbing Company.",
      imageUrl: "/images/phils.png",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg",
      ],
      url: "http://www.philsplumbing.net/home.html",
    },
  ],
  portfolioWordpress: [
    {
      id: 1,
      title: "Remedies 4U",
      subtitle: "CBD E-Commerce Website",
      imageUrl: "/images/remedies.svg",
      url: "https://remedies4u.co.uk",
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "Cryptofuse",
      subtitle: "Cryptocurrency Mutual Fund",
      imageUrl: "/images/cryptofuse2.png",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: "https://cryptofuse-react.herokuapp.com/",
    },
    {
      id: 2,
      title: "Phil's Plumbing",
      subtitle: "Business Website for Plumbing Company.",
      imageUrl: "/images/phils.png",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg",
      ],
      url: "http://www.philsplumbing.net/home.html",
    },
    {
      id: 3,
      title: "Remedies 4U",
      subtitle: "CBD E-Commerce Website",
      imageUrl: "/images/remedies.svg",
      url: "https://remedies4u.co.uk",
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2020 - Present",
        position: "Software Engineer II",
        company: "Spectrum Enterprise",
        details:
          "Working on the SEFA (Spectrum Enterprise Fulfillment Automation) Circuit Design team building the new platform that apps are built on for order and fulfillment.",
      },
      {
        id: 2,
        year: "2014 - Present",
        position: "Software Developer",
        company: "Education Consulting Associates (ECA)",
        details:
          "Design and develop ADA compliant, high converting WordPress and HTML landing pages, HTML email marketing campaigns. Build out the billing/invoicing automation software which tracks student progression through their course and invoices each school independently with custom generated PDF’s. Creating the REST APIin Go to be used and scaled for other schools to use and integrate their data into.",
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2019 - Jan 2020",
        graduation: "Software Engineer",
        university: "Austin Coding Academy",
        details:
          "Full-Stack engineering in Javascript, focusing on the (MERN) stack.",
      },
      {
        id: 2,
        year: "2007 - 2011",
        graduation: "Bachelor of Science",
        university: "Temple University",
        details: "Business Marketing",
      },
    ],
  },
  blogs: [
    // {
    //   id: 1,
    //   title: "Markdown & Html supported blog.",
    //   featuredImage: "/images/blog-image-1.jpg",
    //   filesource: "../../blog/markdown-html-supported-blog.md",
    //   createDay: "20",
    //   createMonth: "February",
    //   createYear: "2020"
    // }
  ],
  contactInfo: {
    phoneNumbers: ["+1 (717)-781-4823"],
    emailAddress: ["jon.gregis@gmail.com"],
    address: "Austin, TX",
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/portfolioCategories").reply((config) => {
  const response = database.portfolioCategories;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});

Mock.onGet("/api/portfolioReact").reply((config) => {
  const response = database.portfolioReact;
  return [200, response];
});

Mock.onGet("/api/portfolioPython").reply((config) => {
  const response = database.portfolioPython;
  return [200, response];
});

Mock.onGet("/api/portfolioJavascript").reply((config) => {
  const response = database.portfolioJavascript;
  return [200, response];
});

Mock.onGet("/api/portfolioWordpress").reply((config) => {
  const response = database.portfolioWordpress;
  return [200, response];
});
