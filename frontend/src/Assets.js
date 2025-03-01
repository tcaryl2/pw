import samsommer from "./images/samsommer.jpg";
import river from "./images/river.jpg";


import edData2 from "./images/edData2.png";
import amortization from "./images/amortizationMacro.png";
import pensions from "./images/lifespanPensions.png";
import sriLankaArticle from "./images/sriLanka2.png";
import rmt from "./images/rmt.png";
import cleardb from "./images/cleardb.png";

export const fin=1;

export const finHeader = [
    "Earnings Day Stock Analysis",
    "Theory of Present Value",
    "Amortization"
];
export const finBody = [
    "During 2023 I recorded stock price data for major companies listed on US stock exchanges immediately following the release of their quarterly earnings reports. By cross-referencing this data with EPS and Expected EPS, I sought to identify patterns in short-term stock price movements to test if the efficient markets hypothesis holds in the short run.",
    "A detailed explanation of the theory behind present value calculations with practical examples, including a simple Discounted Cash Flow analysis of Intel. Additionally includes a detailed explanation of why a robust banking system is necessary for discounting to function.",
    "A demonstration of Visual Basic and Excel Macros to automatically generate amortization schedules given a payback period and an interest rate."
];
export const finProjectList = [
    "finance/earnings",
    "finance/dcf",
    "finance/amortization"
];
export const finImgList =[
    edData2,
    samsommer,
    amortization
];

export const dsHeader = [
    "Google Data Analytics Certificate Case Study",
    "Machine Learning Analysis of Runner Injuries",
    "Cloud SQL Database",
    "Advanced SQL",
    "MERN API Development"
];
export const dsBody = [
    "My final case study for the Google Data Analytics Certificate. Also viewable on Kaggle.",
    "An applied machine learning project to predict injuries among competitive runners using data collected from the Danish National Team. This work includes [[bagging, boosting, logistic regression, svm, and other machine learning techniques]]]",
    "As part of my old website, I provisioned a small SQL database with CloudDB to store my primarily text-based work by topic. However, last November ClearDB announced that they would be discontuing their services so my cloud SQL database is no longer active. As I develop this website further I intend to use Digital Ocean to provision another article database later.",
    "An article explaining how to write SQL statements with joins, aggregations, subqueries, temporary tables, and indexing. This project summarizes my notes during my time learning SQl, using it to provision my old website with ClearDB, and queries I ran on Google Cloud and MySQL workbench.",
    "I built this website using the MERN stack to provide a balance between responsivenss and storage efficiency. I used the Express and Mongoose packages to create a database connection to my MongoDB free cluster to store and retrieve large assets for this website. The slides you see here are stored in my database, with smaller backups in my website's public folder."
];
export const dsProjectList = [
    "googledata",
    "runnerinjury",
    "cleardb",
    "advancedsql",
    "mern"
];
export const dsImgList =[
    samsommer,
    river,
    cleardb,
];
export const econHeader = [
    "Sri Lanka",
    "Pensions and Lifespan",
    "Ramanujan's Master Theorem",
    "Tableau Data Vis"
];
export const econBody = [
    "This project is a 10 page research paper on the recent economy of Sri Lanka. It explains the background of their 2019 economic crisis, how the crisis developed, and recent reforms. It lightly touches on developmental economics and favorably comments on the value of Sri Lanka's recent economic reforms, such as ensuring the independence of the Central Bank.",
    "A 27 page research paper on the sustainability of pension systems with the goal of indentifying the long-run tax rate needed to indefinitely fund these programs. I develop a simple model of optimal long-run tax rates needed to sustain national pension programs given sudden permanent increases in medical technology and lifespan.",
    "As part of my preparation for the 2023 William Lowell Putnam Mathematical Competition I studied advanced integration techniques, which included Ramanujan's Master Theorem. I applied the theorem to solve a previously unsolved integral involving finite sums and proved that as the number of terms approaches infinity the area under the curve simplifies to that of a triangle with area 1/2.",
    "Economic Growth by Country with Tableau"
];
export const econProjectList = [
    "srilanka",
    "pensions",
    "mathematics/rmt",
    "economicvisualization"
];
export const econImgList =[
    sriLankaArticle,
    pensions,
    rmt
];


export const terminal_one = [
   "frontend - node < npm run start __CFBundleIdentifier=com.apple.Terminal - 214 x 79",
    "Deployment successful!",
    "Thank you for visiting my website. I built it using the MERN stack to act as my portfolio repostitory.",
    "The full code for this site is available publicly on github. To view the code visit my git repository here:",
    "[temporary github url]"
]
export const terminal_two = [
    "ocean - Desktop 214 x 79",
    "Thank you for reading!",
    "Contact me if you need finance or data science work",
    "Vist my github and Kaggle to view the code behind my projects.",
    "[github url], [Kaggle profile url"
 ]