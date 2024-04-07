import { Project } from "@/types";

export const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    link: null,
    subLinks: [
      {
        name: "AOS",
        path: "/services/aos",
      },
      {
        name: "AOS-Compass",
        path: "/services/aos-compass",
      },
      {
        name: "Outcomes Assessment",
        path: "/services/outcomes-assessment",
      },
      {
        name: "Impact Assessment",
        path: "/services/impact-assessment",
      },
      {
        name: "Public Sector",
        path: "/services/public-sector",
      },
    ],
  },
  {
    name: "Industries",
    path: "/industries",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  // {
  //   name: "Feeds",
  //   path: "/feeds",
  // },
  {
    name: "Careers",
    path: "/careers",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

export const projects= [
  {
    image: "/images/projects/1.png",
    title: "Gold Mining Project",
  },
  {
    image: "/images/projects/2.png",
    title: "Transnational Oil and Gas Pipelines",
  },
  {
    image: "/images/projects/3.png",
    title: "Special Economic Zone",
  },
  {
    image: "/images/projects/4.png",
    title: "Hydropower Dam's ELCA & SLCA",
  },
  {
    image: "/images/projects/5.png",
    title: "Affordable Housing Development",
  },
  {
    image: "/images/projects/6.png",
    title: "Small-Scale Solar Farm Installation in Rural Area",
  },
  {
    image: "/images/projects/7.png",
    title:
      "Health Impact Assessment of Sanitation Improvements in a Refugee Camp",
  },
  {
    image: "/images/projects/8.png",
    title:
      "Faculty Capacity Building Program for Environmental and Climate Change Capacity Building Course in Bangladesh: Project Overview and Outcomes",
  },
];

export const eias = [
  {
    image: "/images/eia/1.png",
    title: "Screening",
    description:
      "GIA's AI tool simplifies project screenings, using data and regulations to determine if a full EIA is needed.",
  },
  {
    image: "/images/eia/2.png",
    title: "Scoping",
    description:
      "Our team pinpoints key environmental issues using advanced technology to map the project's baseline conditions.",
  },
  {
    image: "/images/eia/3.png",
    title: "Impact Assessment",
    description:
      "Through field studies, geospatial analysis and data, we assess your project's environmental effects, direct and indirect.",
  },
  {
    image: "/images/eia/4.png",
    title: "Mitigation",
    description:
      "We create strategies to minimize negative environmental impacts.",
  },
  {
    image: "/images/eia/5.png",
    title: "Environmental Management Plan",
    description:
      "We prepare a comprehensive plan for monitoring and compliance during project execution.",
  },
  {
    image: "/images/eia/6.png",
    title: "Public Consultation",
    description:
      "Combining satellite imagery, remote and field surveys, we ensure inclusive public participation.",
  },
  {
    image: "/images/eia/7.png",
    title: "Report & Submission",
    description:
      "Our team consolidates findings into a detailed EIA report, presented with dynamic data visualizations and stakeholder feedback.",
  },
  {
    image: "/images/eia/8.png",
    title: "3D Simulator",
    description:
      "GIA's interactive platform visualizes potential impacts early, guiding decisions before deep-dive EIAs.",
  },
];

export const sias = [
  {
    image: "/images/sia/1.png",
    title: "Social Baseline Data Collection",
    description:
      "We combine satellite imagery and advanced analytics to understand the project area's demographics, socioeconomic factors, and cultural dynamics.",
  },
  {
    image: "/images/sia/2.png",
    title: "Impact Prediction and Evaluation",
    description:
      "By synthesizing social baseline data with our Remote Sensing and GIS capabilities, we identify potential project impacts on communities, including livelihood changes, social inequality, and cultural heritage concerns.",
  },
  {
    image: "/images/sia/3.png",
    title: "Public Consultation",
    description:
      "We prioritize inclusive decision-making through tailored surveys, focus groups, and clear communication.",
  },
  {
    image: "/images/sia/4.png",
    title: "Mitigation and Management Measures",
    description:
      "We develop strategies to avoid or minimize negative social impacts, and create Resettlement Action Plans and Social Management Plans for comprehensive mitigation and monitoring.",
  },
  {
    image: "/images/sia/5.png",
    title: "Report & Submission",
    description:
      "Our team consolidates findings into a detailed SIA report, presented with dynamic data visualizations and stakeholder feedback.",
  },
];

export const hias = [
  {
    image: "/images/sia/1.png",
    title: "Health Baseline Data Collection",
    description:
      " Using GIS and public health knowledge, we map existing health conditions and determinants in the project area, providing a clear picture of the health context.",
  },
  {
    image: "/images/sia/2.png",
    title: "Impact Identification",
    description:
      "We leverage baseline data and Remote Sensing to assess potential project impacts on air quality, water quality, noise, and healthcare access.",
  },
  {
    image: "/images/sia/3.png",
    title: "Public Consultation",
    description:
      "We ensure clear communication with affected communities, health professionals, and relevant stakeholders throughout the HIA process.",
  },
  {
    image: "/images/sia/4.png",
    title: "Mitigation and Management Measures",
    description:
      "Based on our evaluation, we formulate strategies to minimize negative health impacts and maximize positive outcomes.",
  },
  {
    image: "/images/assessment/OA6.png",
    title: "Health Management Plan",
    description:
      "We create a detailed HMP outlining monitoring, reporting, and compliance requirements for health during project implementation.",
  },
  {
    image: "/images/sia/5.png",
    title: "Report & Submission",
    description:
      "Our team consolidates findings into a detailed HIA report, presented with dynamic data visualizations and stakeholder feedback",
  },
];

export const hiras = [
  {
    image: "/images/sia/1.png",
    title: "Baseline Conditions",
    description:
      "We collect and analyze data on existing human rights conditions in the project area. This detailed context provides a foundation for a comprehensive understanding of a project's potential human rights implications.",
  },
  {
    image: "/images/sia/2.png",
    title: "Impact Identification",
    description:
      "We identify potential human rights impacts, such as changes in access to resources, livelihoods, and impacts on vulnerable groups.",
  },
  {
    image: "/images/sia/3.png",
    title: "Public Consultation",
    description:
      "We encourage and facilitate communication with affected communities and stakeholders throughout the HRIA process. This ensures transparency and promotes an open dialogue about the project's potential human rights impacts.",
  },
  {
    image: "/images/sia/4.png",
    title: "Mitigation and Management Measures",
    description:
      "Informed by our impact evaluation, we develop strategies to prevent, minimize, or offset negative human rights impacts while promoting positive outcomes.",
  },
  {
    image: "/images/assessment/OA6.png",
    title: "Human Rights Management Plan",
    description:
      "We devise a Human Rights Management Plan outlining monitoring, reporting, and compliance measures concerning human rights impacts during project implementation.",
  },
  {
    image: "/images/sia/5.png",
    title: "Report & Submission",
    description:
      "Our team consolidates findings into a detailed HRIA report, presented with dynamic data visualizations and stakeholder feedback",
  },
];

export const outcomesAssessments = [
  {
    image: "/images/assessment/OA1.png",
    title: "Data Collection",
    description:
      "Utilizing a combination of satellite and on-the-ground data collection, enhanced with advanced analytics for tailored and precise outcome measurement.",
  },
  {
    image: "/images/assessment/OA2.png",
    title: "Digital Survey Deployment and Monitoring",
    description:
      "Developing and deploying standardized digital surveys on remote platforms with capabilities for real-time response monitoring.",
  },
  {
    image: "/images/assessment/OA3.png",
    title: "Imaging and Analytics",
    description:
      "Contracting high-resolution satellite imagery, supported by machine learning and algorithmic analysis to detect program-related environmental or infrastructural changes.",
  },
  {
    image: "/images/assessment/OA4.png",
    title: "Stakeholder Engagement",
    description:
      "Streamlining stakeholder engagement through precise identification and mapping, fostering effective collaborations and communications.",
  },
  {
    image: "/images/assessment/OA5.png",
    title: "Decision Analysis",
    description:
      "Analyzing data using Natural Language Processing (NLP) and classification algorithms, combined with Decision Analysis for systematic ranking of programs and aiding in impactful funding decisions.",
  },
  {
    image: "/images/assessment/OA6.png",
    title: "Ongoing Impact Evaluations",
    description:
      "Conducting baseline and continuous evaluations to assess social impact, advising on program scalability and sustainability, and providing strategic recommendations for funding allocation.",
  },
  {
    image: "/images/assessment/OA7.png",
    title: "Report & Submission",
    description:
      "Creating interactive and real-time dashboards to visualize data, making complex information accessible and understandable.",
  },
];

export const lcas = [
  {
    image: "/images/assessment/OA1.png",
    title: "Inventory Data",
    description:
      "Our experts collaborate with clients and stakeholders to gather comprehensive data on all inputs and outputs at every stage of a product or process's life cycle, ensuring accuracy and completeness.",
  },
  {
    image: "/images/lcia/2.png",
    title: "Impact Modeling",
    description:
      "Utilizing a combination of satellite and on-the-ground data collection, enhanced with advanced analytics for tailored and precise outcome measurement.",
  },
  {
    image: "/images/lcia/3.png",
    title: "Hotspot Identification",
    description: `We pinpoint critical "hotspots" within the life cycle – areas with significant environmental impact – prioritizing them for focused improvement efforts.`,
  },
  {
    image: "/images/lcia/4.png",
    title: "Scenario Analysis",
    description:
      "We develop and assess alternative scenarios exploring the environmental benefits of different design, production, or end-of-life options, informing crucial decision-making and product development choices.",
  },
  {
    image: "/images/lcia/5.png",
    title: "Life Cycle Cost Analysis",
    description:
      "We evaluate the economic costs and benefits associated with the product or process life cycle, including capital investments, operational expenses, and end-of-life costs.",
  },
  {
    image: "/images/sia/4.png",
    title: "Mitigation",
    description:
      "Building on identified hotspots and improvement opportunities, our team recommends and develops practical strategies to minimize environmental impacts, supporting clients in implementation and monitoring their effectiveness over time.",
  },
  {
    image: "/images/assessment/OA6.png",
    title: "Report & Submission",
    description:
      "We prepare detailed LCIA reports outlining methodology, results, and actionable recommendations for improvement.",
  },
];

export const services = [
  {
    image: "/images/assessment/10.png",
    title: "Environmental Impact Assessment",
    link: "/eia",
  },
  {
    image: "/images/assessment/15.png",
    title: "Social Impact Assessment",
    link: "/sia",
  },
  {
    image: "/images/assessment/14.png",
    title: "Health Impact Assessment",
    link: "/hia",
  },
  {
    image: "/images/assessment/13.png",
    title: "Human Rights Impact Assessment",
    link: "/hria",
  },
  {
    image: "/images/assessment/17.png",
    title: "Outcomes Assessment",
    link: "/services/outcomes-assessment",
  },
  {
    image: "/images/assessment/11.png",
    title: "Life Cycle Assessment",
    link: "/lca",
  },
];

export const aosData = [
  {
    image: "/images/aos-info/OUT1.png",
    title: "Anticipate Tomorrow, Act Today",
    description:
      "AI and ML are transforming assessment from reactive to proactive. With predictive analytics, we can foresee trends and outcomes, enabling organizations to strategize and act ahead of time, ensuring preparedness and adaptability in a fast-changing world.",
  },
  {
    image: "/images/aos-info/OUT2.png",
    title: "Precision in Every Decision",
    description:
      "The integration of AI eliminates biases and enhances accuracy in assessments. AI’s ability to process vast datasets with pinpoint precision ensures that every decision is data-driven, objective, and reliable.",
  },
  {
    image: "/images/aos-info/OUT3.png",
    title: "Every Assessment, Tailored and Relevant",
    description:
      "AI and ML are personalizing assessments like never before. By understanding the unique contexts and nuances of each project, AI tailors evaluations to deliver the most relevant and impactful insights, making every assessment personally significant.",
  },
  {
    image: "/images/aos-info/OUT4.png",
    title: "Evolving With Every Byte of Data",
    description:
      "AI in assessments isn't static; it's a continuously learning system. With each new piece of data, AI evolves, becoming more nuanced and insightful, ensuring that the assessments are not just up-to-date but also future-ready.",
  },
];

export const impactData = [
  {
    image: "/images/aos-impact-assessment/41.png",
    title: "Eco-Intelligent Assessments",
    description:
      "AI empowers environmental impact assessments by analyzing vast and complex ecological data sets. This leads to a comprehensive understanding of potential environmental impacts, facilitating more sustainable and eco-friendly decision-making processes.",
  },
  {
    image: "/images/aos-impact-assessment/42.png",
    title: "Deciphering the Social Fabric",
    description:
      "Ability to analyze social trends and community feedback transforms social impact assessments. It provides deeper insights into the societal consequences of projects, ensuring that the voices of affected communities are heard and considered.",
  },
  {
    image: "/images/aos-impact-assessment/43.png",
    title: "Forecasting Futures, Protecting Tomorrow",
    description:
      "Utilizing predictive models, AI forecasts the long-term environmental and social impacts of projects. This foresight is crucial in mitigating potential negative consequences and in strategizing for sustainable development.",
  },
  {
    image: "/images/aos-impact-assessment/44.png",
    title: "Dynamic Adaptation for Dynamic Environments",
    description:
      "Enables ongoing monitoring of environmental and social indicators, providing real-time data that can prompt immediate action and adaptation. This dynamic approach ensures that impact assessments are agile and responsive to changing conditions.",
  },
];

export const impactAssessments = [
  {
    image: "/images/aos-impact-assessment/1.png",
    title: "Impact Prediction",
  },
  {
    image: "/images/aos-impact-assessment/2.png",
    title: "Stakeholder Identification and Analysis",
  },
  {
    image: "/images/aos-impact-assessment/3.png",
    title: "Regulatory Compliance Scanning",
  },
  {
    image: "/images/aos-impact-assessment/4.png",
    title: "Interactive Stakeholder Engagement",
  },
  {
    image: "/images/aos-impact-assessment/5.png",
    title: "Real-Time Data Processing and Analysis",
  },
  {
    image: "/images/aos-impact-assessment/6.png",
    title: "Data and Analytic Tools Integration",
  },
  {
    image: "/images/aos-impact-assessment/7.png",
    title: "Public Participation, Mitigation, and Monitoring Tools Integration",
  },
  {
    image: "/images/aos-impact-assessment/8.png",
    title: "Dynamic Reporting and Visualization",
  },
];

export const outcomeData = [
  {
    image: "/images/aos-outcome-assessment/o41.png",
    title: "Unveiling Insights, Shaping Futures",
    description:
      "The power of AI and ML in outcomes assessment lies in its ability to uncover hidden insights from data. This enables organizations to not only measure but also understand the depth and breadth of their outcome, leading to more informed and strategic future actions.",
  },
  {
    image: "/images/aos-outcome-assessment/o42.png",
    title: "Tailored Assessments for Tailored Needs",
    description:
      "AI and ML revolutionize outcomes assessment by creating customized evaluation frameworks. This adaptability ensures that every assessment is meticulously aligned with specific program goals and objectives, providing truly relevant and actionable insights.",
  },
  {
    image: "/images/aos-outcome-assessment/o43.png",
    title: "Stay Agile, Stay Ahead",
    description:
      "Outcomes assessment becomes a real-time process. The ability to continuously monitor and adapt to new data ensures that assessments are always current, helping organizations to be agile and responsive to changing dynamics.",
  },
  {
    image: "/images/aos-outcome-assessment/o44.png",
    title: "Accuracy at the Heart of Assessment",
    description:
      "The precision of AOS in processing and analyzing complex data sets guarantees a level of accuracy and reliability previously unattainable. This precision is crucial in outcomes assessment, where every bit of data can influence key decisions and future strategies.",
  },
];

export const outcomeAssessments = [
  {
    image: "/images/aos-outcome-assessment/1.png",
    title: "Framework Tailoring",
  },
  {
    image: "/images/aos-outcome-assessment/2.png",
    title: "Measurement Metric Development",
  },
  {
    image: "/images/aos-outcome-assessment/3.png",
    title: "Team Building",
  },
  {
    image: "/images/aos-outcome-assessment/4.png",
    title: "Survey Instrument",
  },
  {
    image: "/images/aos-outcome-assessment/5.png",
    title: "Automated Data Analysis",
  },
  {
    image: "/images/aos-outcome-assessment/6.png",
    title: "Data and Analytic Tools Integration",
  },
  {
    image: "/images/aos-outcome-assessment/7.png",
    title: "Decision Analysis",
  },
  {
    image: "/images/aos-impact-assessment/8.png",
    title: "Dynamic Reporting and Visualization",
  },
];

export const feeds = [
  {
    id: "1",
    image:
      "https://notion-blog-wildcatco.vercel.app/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252F0043b5f6-684a-4d28-a54b-9f4dec8bf091%252Fdog.webp%3Ftable%3Dblock%26id%3De0a6af26-cc40-4d91-8311-fc8dbe3963c0%26cache%3Dv2&w=1920&q=75",
    title: "Lorem Ipsum is simply dummy text",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "2",
    image:
      "https://notion-blog-wildcatco.vercel.app/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252F146854f0-c8f3-4c9b-8c5a-02f2a6c1ac5f%252Fzetong-li-cn-CJo_9DQ0-unsplash.jpg%3Ftable%3Dblock%26id%3D23352c43-f2d0-4373-bffe-b768f180dabc%26cache%3Dv2&w=1920&q=75",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "3",
    image:
      "https://notion-blog-wildcatco.vercel.app/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252Fd7044472-93a6-4119-b073-24056b512d2d%252Fpramod-tiwari-xlJTrECgPHU-unsplash.jpg%3Ftable%3Dblock%26id%3D85c70a75-f976-4dc0-917b-cdf2e9cabd45%26cache%3Dv2&w=1920&q=75",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "4",
    image:
      "https://notion-blog-wildcatco.vercel.app/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252Fbb4251d2-2659-41fe-882c-ad945ff1e0a4%252Fpramod-tiwari-20m4jMrMrpQ-unsplash.jpg%3Ftable%3Dblock%26id%3D18d09417-3da5-4315-b0e5-4aa05ca56d36%26cache%3Dv2&w=1920&q=75",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "5",
    image:
      "https://notion-blog-wildcatco.vercel.app/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252F7a3de016-5b01-45e8-9883-df9d1b9689c5%252Fmarek-piwnicki-zIACshDV-YE-unsplash.jpg%3Ftable%3Dblock%26id%3D8fbf1334-984e-447f-95fa-3e1f8277ad99%26cache%3Dv2&w=1920&q=75",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "6",
    image:
      "https://notion-blog-wildcatco.vercel.app/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252F7e51c019-3609-48f7-9c38-5b96938084f0%252Fmarek-piwnicki-HKfVruX2frQ-unsplash.jpg%3Ftable%3Dblock%26id%3D4e669e49-0654-485d-8680-2843c4c7e964%26cache%3Dv2&w=1920&q=75",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "7",
    image:
      "https://notion-blog-wildcatco.vercel.app/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252F458d78d3-2b75-4ac1-a9b6-8373ef3110a5%252Fmarek-piwnicki-GV2YhjYpQZM-unsplash.jpg%3Ftable%3Dblock%26id%3D3caebeb5-9453-44ed-902a-7458f9bb52c7%26cache%3Dv2&w=1920&q=75",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "8",
    image:
      "https://notion-blog-wildcatco.vercel.app/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252Fe9cb322a-d2fb-4d09-9659-22cc1ec5fe5f%252Fmarcus-ganahl-Ij0rz4XHxu8-unsplash.jpg%3Ftable%3Dblock%26id%3D01f4a4ef-0541-459b-ba07-55012ef2d809%26cache%3Dv2&w=1920&q=75",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

export const industryServices = [
  {
    image: "/images/industries/1.png",
    title: "Environmental Impact Assessment",
    description:
      "<p>-Our comprehensive assessments provide actionable insights into your mining or metal operations' potential environmental implications.</p><p>-We evaluate potential risks to air, water, land, and biodiversity.</p><p>-We propose mitigation strategies to minimize environmental impact and ensure compliance with regulations.</p>",
  },
  {
    image: "/images/industries/2.png",
    title: "Social Impact Assessment",
    description:
      "<p>We assess the potential social impacts of your projects on local communities, including:</p> <br /> <p>-Resettlement and land acquisition</p><p>-Cultural heritage</p><p>Livelihoods and economic development</p> <p>-Community health and safety</p>",
  },
  {
    image: "/images/industries/3.png",
    title: "Health Impact Assessment",
    description:
      "<p>We conduct health impact assessments to understand the potential impacts of your projects on the physical and mental health of local communities.</p>",
  },
  {
    image: "/images/industries/4.png",
    title: "Spatial Data Analysis",
    description:
      "We utilize cutting-edge technology to guide responsible mining practices, ensuring efficient mining and lasting environmental stewardship.</p>",
  },
  {
    image: "/images/industries/5.png",
    title: "Regulatory Compliance",
    description:
      "<p>We utilize cutting-edge technology to guide responsible mining practices, ensuring efficient mining and lasting environmental stewardship.</p>",
  },
  {
    image: "/images/industries/6.png",
    title: "Regulatory Compliance",
    description: "<p>We guide companies through their sustainability journey, identifying areas for improvement in energy efficiency, emissions reduction, and waste management.</p>",
  },
];
