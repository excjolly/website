import React, {useState} from 'react';
import { Button, Card, Col, Row, Accordion, Modal } from 'react-bootstrap';
import Plyr from 'plyr-react';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { Helmet } from 'react-helmet';
import Glide from 'components/carousel/Glide';
import Pricing from 'views/components/Pricing';
import BlogHome from 'views/components/BlogHome';     
import Clamp from 'components/clamp';
import { NavLink } from 'react-router-dom';
import ListBasicItems from 'views/components/ListBasicItems';
import PlayerBasic from 'views/components/PlayerBasic';
import { ThumbnailsIconContent } from 'views/components/ThumbnailsIconContent';
import { CtaTextAndButtonsSecond } from 'views/components/CtaTextAndButtons';
import LayoutsBasic from 'views/components/LayoutsBasic';
import { faqs } from 'data/faq';
import { blogs } from 'data/blogs';
import { programs } from 'data/programs';
import axios from "axios";
import { saveAs } from 'file-saver';
import fileDownload from 'js-file-download';
const PurePlyr = React.memo(() => {
  const videoSrc = {
    type: 'video',
    sources: [{ src: 'Dt8BdMDk9Ks', provider: 'youtube' }],
    poster: '/img/banner/Ai-02.png',
  };

  return <Plyr source={videoSrc} options={{}} />;
});
const PurePlyr1 = React.memo(() => {
  const videoSrc = {
    type: 'video',
    sources: [{ src: 'UvqD9K5DLDg', provider: 'youtube' }],
    poster: '/img/banner/Ai-02.png',
  };

  return <Plyr source={videoSrc} options={{}} />;
});
async function printTickets(title) {
  console.log('jjj');
  console.log(title);
  const { data } = await curriculumPdf(title)
  // const blob = new Blob([data], { type: 'application/pdf' })
  // saveAs(blob, "tickets.pdf")
}
async function curriculumPdf(title) {
  var course=title
  return axios.get('http://localhost:4000/download'+title, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data:title,
    responseType: 'arraybuffer'
  })
}
const CoursesDetail = (props) => {
  const [datascienceforit, setDatascienceforit] = useState("");
  const [industrystats, setIndustrystats] = useState("");
  const [projectstats, setProjectstatus] = useState("");
  var features=[];
  const industryStatus=(a,title)=>{
    if(a==1 && title=="Data Science for IT")
    setIndustrystats("<p>A data scientist within the IT sector commands a salary of up to ₹ 120,0000 per annum, to engage at the cutting edge of global technology solutions. </p><p>Another strong option is Machine Learning Engineer (₹ 670,000 per annum) or big data scientist (₹ 870,000 per annum). </p><p>Salary ranges can differ significantly depending on the job, industry, location, required experience, specific skills, education, and other factors.</p>");
    if(a==2 && title=="Data Science for IT")
    setIndustrystats("<p>Data Science with IT expertise is pivotal across all industries. As a Data Scientist with specialization in IT, you will have the opportunity to start as a Data Analyst, Data Scientist, Business analyst,  Data Engineer or Sr. Software Developer. </p><p>As you advance in your skills, you will be qualified for a range of senior IT-related professional positions including web developer/designer, cybersecurity analyst, software engineer or cloud architect and even a full stack Data Scientist!</p>");
    if(a==3 && title=="Data Science for IT")
    setIndustrystats("<p>Your skills as a Data Scientist within the IT sector remain constantly in huge demand by top recruitment firms such as Deloitte, PwC, Amazon, EY, Microsoft, Accenture, TCS and many more.</p>");
    if(a==4 && title=="Data Science for IT")
    setIndustrystats("<p>When you pass this course, you’ll be hired and paid a salary. Actually, students who have taken this certification course are currently working in top level companies, earning an average of ₹137,0000 per year!</p>");
    if(a==1 && title=="Data Science for Finance")
    setIndustrystats("<p>A data scientist within the Finance sector commands a salary of up to ₹ 500,000 per annum, to analysis financial reports and customer behavior to future stakeholders. Another strong option is Risk Analyst (₹ 952,000 per annum) who mitigate and analyse risks associated with new investments and make financial decisions with the help of  financial analyst (₹ 870,000 per annum).</p><p>  Salary ranges can differ significantly depending on the job, industry, location, required experience, specific skills, education, and other factors.</p>");
    if(a==2 && title=="Data Science for Finance")
    setIndustrystats("<p>In the financial services industry, one of the most coveted careers is that of the financial analyst. This is a niche that often leads to other career opportunities such as working on a risk management team, developing real-time applications, or analyzing consumer behavior in the marketplace.</p>");
    if(a==3 && title=="Data Science for Finance")
    setIndustrystats("<p>Your skills as a data scientist in the financial sector are highly sought by recruitment firms such as Bloomberg, JPMorgan, Citibank, VISA, Barclays and many more</p>");
    if(a==4 && title=="Data Science for Finance")
    setIndustrystats("<p>When you pass this course, you’ll be hired and paid a salary. Actually, students who have taken this certification course are currently working in top level companies — and they all make about ₹800,000 per year!</p>");
    if(a==1 && title=="Deep Learning")
    setIndustrystats("<p>A deep learning enginner within the AI domain commands a salary of up to ₹ 900,000 per annum,  Another strong option is Deep Learning Research Engineer (₹ 952,000 per annum) and deep learning  solution architect(₹ 870,000 per annum). </p><p>Salary ranges can differ significantly depending on the job, industry, location, required experience, specific skills, education, and other factors.</p>");
    if(a==2 && title=="Deep Learning")
    setIndustrystats("<p>Deep Learning Engineers can find jobs in cutting edge fields like autonomous vehicles, image processing, biomedical engineering. As you advance your career, you can opt for jobs such as Deep Learning Systems Developer, Deep Learning Research Engineer, Deep Learning Solutions Architect and many more jobs spread across various domains using artificial intelligence technologies.</p>");
    if(a==3 && title=="Deep Learning")
    setIndustrystats("<p>The latest and most greatest deep learning jobs are offered by top-tier companies such as NVDA, Amazon, Google, Microsoft, Netflix, Uber and many more</p>");
    if(a==4 && title=="Deep Learning")
    setIndustrystats("<p>When you pass this course, you’ll be hired and paid a salary. Actually, students who have taken this certification course are currently working in top level companies — and they all make about ₹96,0000 per year!</p>");
    if(a==1 && title=="Machine Learning With Python")
    setIndustrystats("<p>A machine learning expert within the data sciences commands a salary of up to ₹ 600,000 per annum, to build models. Another strong option is Machine-learning Enginner in a product based company (₹ 952,000 per annum) for designing the projects. Based on your skills in applied ML (NLP, CV, RL, Speech) , companies do offer a higher pay package of upto ₹ 1700000 per annum .  Salary ranges can differ significantly depending on the job, industry, location, required experience, specific skills, education, and other factors.</p>");
    if(a==2 && title=="Machine Learning With Python")
    setIndustrystats("<p>A machine learning expert with the necessary python skills is the most sought job in a wide variety of industries. They will find high demand for their services in the job market as a ML Engineer and ML Designer. As you advance in your career, you may move to higher roles such as NLP Scientist and BI Developer.</p>");
    if(a==3 && title=="Machine Learning With Python")
    setIndustrystats("<p>Startups, non-profits and large enterprises all over the world need talented, passionate machine learning experts!  Top-tier companies higher machine  learning experts are Amazon AWS, IBM, Uber, Netflix, JPMorgan and many more.</p>");
    if(a==4 && title=="Machine Learning With Python")
    setIndustrystats("<p>When you pass this course, you’ll be hired and paid a salary. Actually, students who have taken this certification course are currently working in top level companies — and they all make about ₹770,000 per year!</p>");
    if(a==1 && title=="Data Analysis")
    setIndustrystats("<p> An average entry Level Data Analyst/Scientist in India can make around ₹ 507,269 per annum.</p><p>A junior data analyst with the required skills can make around  ₹ 9,21,957 per annum wheras a senior data analyst with relevant years of experience can make  ₹ 18,21,795 per annum. Another strong option is chief data officer(₹ 952,000 per annum) and data analyst in Consulting who can make even  ₹ 23,21,495 per annum.  Salary ranges can differ significantly depending on the job, industry, location, required experience, specific skills, education, and other factors.</p>");
    if(a==2 && title=="Data Analysis")
    setIndustrystats("<p> Entry level job as a frontline Data Analyst or Associate will serve as the foundation for your career. As you advance in your career, you can progress to mid-level or senior data analyst or analytics manager role. Move into a specialist role such as financial analyst  or healthare data analyst etc.  Continue to climb the ladder within the data sciences and you can become a Chief Data Officer or Data Analyst Consultant</p>");
    if(a==3 && title=="Data Analysis")
    setIndustrystats("<p> A variety of data analyst roles are being offered by top-tier analytics companies such as Accenture, KPMG, Tech Mahindra, Genpact, NielsenIQ, Capgemini, BCG, TCS and many more.</p>");
    if(a==4 && title=="Data Analysis")
    setIndustrystats("<p> When you pass this course, you’ll be hired and paid a salary. Actually, students who have taken this certification course are currently working in top level companies — and they all make about ₹510,000 per year!</p>");
    if(a==1 && title=="Python Preparatory Course")
    setIndustrystats("<p> A Python Web Developer commands a salary of up to ₹ 800,000 per annum, to work on the build and implementation of new or amended websites. Another strong option is Data Scientist (₹ 700,000 per annum) or Machine Learning Engineer (₹ 670,000 per annum). </p>");
    if(a==2 && title=="Python Preparatory Course")
    setIndustrystats("<p> Python as a programming language is booming the industry and generating jobs in high demand as a Python developer and web developer. As you advance further in your skills, jobs such Data Scientist and Data Analyst become viable career paths. Advance your career and Climb up the ladder to further become a Sr.  Software Engineer or DevOps Engineer, one of the most in-demand skill sets today.</p>");
    if(a==3 && title=="Python Preparatory Course")
    setIndustrystats("<p> With Hiring Partners including Amazon, Genpact, TCS, IBM ,Spotify, Instagram, Reddit, Google, Bloomberg, this is the best place to start your Python career.</p>");
    if(a==4 && title=="Python Preparatory Course")
    setIndustrystats("<p> With Hiring Partners including Amazon, Genpact, TCS, IBM ,Spotify, Instagram, Reddit, Google, Bloomberg, this is the best place to start your Python career.</p>");
  }
  const projectStatus=(a,title)=>{
    if(a==1 && title=="Data Science for IT")
    setProjectstatus("<p>Fake news can be dangerous. Your challenge is to build a Fake News classifier by applying ML algorithms such as Passive Aggressive Classifier and determine the accuracy of our model.</p><p> You will be using various Python packages such as pandas, NumPy, and scikit-learn to determine the legitimacy of the information. With the help of this, you will be able to predict on the fly whether the information you acquired is authentic or not.</p>");
    if(a==2 && title=="Data Science for IT")
    setProjectstatus("<p>Global warming is influencing the climate pattern and leads to the change in food production. Unusual weather conditions and adaptation of technologies used in agriculture have a significant effect on the pattern of food production globally.</p><p> In this project you will analyze the factors that are causing these changes, study the data visualization techniques to explain the patterns across different geographical locations, and predict the future trends.")
    if(a==3 && title=="Data Science for IT")
    setProjectstatus("<p>Customer segmentation helps companies to market the products in each segment more fitting to each individual customer.</p><p> Build your clustering model using k-means clustering algorithms learned in machine learning. In this project, you will cluster the customers based on the features and their buying behaviour.</p><p> Use the Elbow method, Silhouette Analysis method and DBSCAN. Once you have created various segments among customers, this model could be used by businesses to advertise their products to each segment in a way which will grab their attention.</p>");
    if(a==4 && title=="Data Science for IT")
    setProjectstatus("<p>Early treatment of pathological changes in the blood vessels of the eye can help prevent eye disease from progressing to blindness. In this project, you will use Keras with TensorFlow backend to build a deep learning model for automatic diabetic retinopathy screening.</p><p> We will be using data that has been pre-processed to extract In this project, you will use Keras with TensorFlow backend to build a deep learning model for automatic diabetic retinopathy screening.</p><p> We will be using data that has been pre-processed to extract the most important features from retina images.</p>");
    if(a==1 && title=="Data Science for Finance")
    setProjectstatus("<p>In the past few decades banks have gathered plenty of information describing the default behavior of their customers. The goal of credit scoring is to quantify this relationship as precisely as possible to assist credit decisions, monitoring, and management.</p><p> Hence, scorecards are widely used in the financial industry to make decisions on grating credit, monitoring portfolio and calculating loss etc.</p><p> In this project, you will be working on the practical aspect of using scorecard models at banks. </p><p>You will be assessing the credit worthiness of customers using a German loan dataset by building a classification model using logistic regression, Random forest and Boosting to classify good or bad customers and score new customers in future.</p>");
    if(a==2 && title=="Data Science for Finance")
    setProjectstatus("<p>Due to a dynamic nature and liability to quick changes in the stock price, prediction of stock prices becomes a challenging task. </p><p>In this project, you will be using the traditional statistical models such as exponential smoothing and ARIMA to predict the stock prices using the financial dataset from Bloomberg, NSE, Reliance etc.</p><p> In the end, using innovative methods for forecasting the stock prices, you will be able to make highly informed business decisions.</p>");
    if(a==3 && title=="Data Science for Finance")
    setProjectstatus("<p>A portfolio optimization problem deals with the determination of different weights you should assign to assets in a portfolio, how much assets you should fold from different asset classes. </p><p>You have 1000 listed stocks, how would you find out the most listed and profitable stocks? In this project, you would be using an operation research algorithm to find out the optimal weight and best set of 20 stocks out of 1000. </p><p>If you are interested in finance, portfolio management and investment consultancy, then this is the right project for you.</p>");
    if(a==4 && title=="Data Science for Finance")
    setProjectstatus("<p>Revenue is the amount of money that a company receives from its normal business activities, usually from the sale of goods and services to customers. For this project, you will be using publicly available data with the help of open sources such as Bloomberg (for regions, sectors, securities), Yahoo Finance (for financial and operational metrics) and others and performing Multivariate Statistical analysis on the revenue data.</p><p> Build a regression model for a set of periods taking into consideration all of the factors affecting the revenue of the company.</p><p> This is a time series regression problem and the goal is to accurately predict future revenue of a company.</p>");
    if(a==1 && title=="Deep Learning")
    setProjectstatus("<p>The power of machine learning lies in its practical applicability — whether you’re interested in medicine or not, this hands-on project will teach computer vision and AI skills that are in demand worldwide. </p><p>Deep learning, nowadays,  is becoming a versatile, powerful tool for deriving valuable insights in areas of medicine that were previously inaccessible. </p><p>Training a computer to analyse skin cancer images with improved accuracy can help in early detection of skin cancer. In this project, you will build a neural network using Python’s Numpy to classify dermal cell images and detect skin cancer.</p>");
    if(a==2 && title=="Deep Learning")
    setProjectstatus("<p>When buying and selling cars, it can be a challenge to assign the correct price of cars. Understanding how car prices vary with different criteria can help us in negotiating a good deal. In this project, you will predict the price of a given car and get an accurate prediction.</p><p> This project provides some insights into the pricing trends of used vehicles and suggests variables to pay attention to when browsing the listings.</p>");
    if(a==3 && title=="Deep Learning")
    setProjectstatus("<p>The objective of the project is to build a model that could classify which digit is drawn by the user.</p><p> In this project, you will build and train a Convolutional Neural Network (CNN) in Keras from scratch to recognize MNIST digits.</p><p> At the end of this project, you will be able to build, compile, fit and evaluate a convolutional neural network trained on MNIST data set for handwritten digit recognition and then use it for real-time predictions using your own handwritten digits using computer vision.</p>");
    if(a==4 && title=="Deep Learning")
    setProjectstatus("<p> Image caption generator is one of the very interesting projects for deep learning and a computer vision enthusiast. </p><p>Build a deep learning model that converts the image into well formed sentences. In this project, you will generate image captions from a set of images.</p><p> Investigate social media activity on Instagram for hiking and climbing. Recommend remote, beautiful climbing and hiking locations based on real-time posting data from Instagram users.</p>");
    if(a==1 && title=="Machine Learning With Python")
    setProjectstatus("<p>Building a machine learning model to accurately predict if a loan applicant is going to pay off or default the loan would help banks avoid financial loss. </p><p>In this data science project, you will use historical data from past loans and build predictive models using machine learning algorithms.</p><p> You will be learning data procurement and pre-processing before applying machine learning algorithms such as Gradient boosting and XGBoost to calculate various metrics to identify the best model that predicts whether a customer is eligible for loan or not.</p><p> The implications of accurate prediction would be impacted on different groups of people across all sorts of businesses.</p>");
    if(a==2 && title=="Machine Learning With Python")
    setProjectstatus("<p>No one buys coffee without a good deal. That's why we're here to tell you that - Cafe's retail price optimization algorithm is going to be an awesome project. The retail price optimization attempts to determine the best price point at which to sell a product. </p><p> In this data science project, you will analyse sales data of Cafe and predict prices of their items using ML algorithms. </p><p>The key question is how much the customer is willing to pay, and how much they think it should cost whilst taking account of the competitors prices.</p>");
    if(a==3 && title=="Machine Learning With Python")
    setProjectstatus("<p>Due to the surge in orders at peak time, it's not easy for delivery app companies to deliver food timely.</p><p> It also makes calculating delivery charges a complicated task. How about allocating the drivers with the orders for delivery using machine learning techniques! In this supervised machine learning project, you will predict the availability of a driver in a specific area and allocate drivers the orders for delivery by using multi step time series forecasting analysis.</p><p> You will also use algorithms such as Random forest and techniques such as XGBoost for predicting online hours of a driver.</p>");
    if(a==4 && title=="Machine Learning With Python")
    setProjectstatus("<p>Build your machine learning skills. In this course, you will use a popular and effective machine learning algorithm—Locality Sensitive Hashing—to find similar users who clicked on the same ads. </p><p>You will learn how to build lookalike models for online ad targeting, then create an audience to reach potential customers that are like your current customers.</p><p> With these skills, you can boost your advertising efforts, drive more sales and improve click-through rates on your websites.</p>");
    if(a==1 && title=="Data Analysis")
    setProjectstatus("<p> It can be difficult to choose the best university to attend. We have a dataset that allows you to investigate a variety of elements that can assist you in making a decision among several possibilities.</p><p> You will analyse data for American colleges in this assignment; the data contains relevant information on the top 100 universities in the United States, as well as features such as student-to-faculty ratios, SAT scores, and acceptance rates, among other things.</p><p> Examine the data for patterns, trends, and abnormalities. Validate assumptions based on the facts and test hypotheses. Consider what challenges the data might be able to help you solve.</p>");
    if(a==2 && title=="Data Analysis")
    setProjectstatus("<p> This project aims to analyse the most recent COVID19 (Coronavirus disease) dataset provided by WHO in order to visualise the virus's spread across various countries, and see ee if there is any correlation between various factors such as economic growth, poverty rate, healthcare index, and other factors, and draw important conclusions from the analysis.</p><p> Follow the most recent coronavirus statistics by country or WHO area. Examine the data for trends, patterns, and abnormalities. Validate assumptions regarding the data and test hypotheses. </p><p>Consider and examine what problems you might be able to solve with the data.</p>");
    if(a==3 && title=="Data Analysis")
    setProjectstatus("<p> This data exploratory project could be very well-suited for our science enthusiasts. This large and rich dataset is a cumulative record of all observed Kepler objects of interest — basically, all of the approximately 10,000 exoplanet candidates Kepler space observatory has taken observations on. In this project, you will draw some relationships between the features, such as discovery time, size, transit duration and orbit parameters to find correlations amongst the various parameters.</p><p> Find out the features which are most essential for a planet to be categorised as a confirmed planetary candidate and not as a false-positive. </p><p>Furthermore, this project inspires you to have an idea of designing an instrument to detect the planet with regards to these features.</p>");
    if(a==4 && title=="Data Analysis")
    setProjectstatus("<p> Every state's population and demographics are managed by the United States Census Bureau. Analyze this whole census dataset of the 50 states to find out how dense they are, how diverse they are, and what other demographic factors influence them.</p><p> Learn about the demographics and trends in each of the United States' 50 states. This information can be used to create mapping charts and visualisations.</p>");
    if(a==1 && title=="Python Preparatory Course")
    setProjectstatus("<p> Aren’t we all tired of random pop-ups during site surfing? So, we can create website blockers for restraining pushy ads by creating this Python project. </p><p>Remember, in order to code this, you can add the sites you need to block by editing sites to block, change the host, or edit the time when you need to block the sites.</p>");
    if(a==2 && title=="Python Preparatory Course")
    setProjectstatus("<p> As the GIF market is getting bigger nowadays, it's important to catch up with the quality of the gif. In this project, you will be using python programming to convert any good quality video into gif.</p>");
    if(a==3 && title=="Python Preparatory Course")
    setProjectstatus("<p> Prepare a questionnaire for students and add 1 to their score for each correct answer. </p><p>Print the final score at the end of the quiz. This could be a fun project for shortlisting candidates for an interview or college admission or preparing a short questionnaire.</p>");
    if(a==4 && title=="Python Preparatory Course")
    setProjectstatus("<p> Ever played games with a computer that you developed on your own? You can develop the famous game of rock, paper, scissors using python programming at beginner level.</p><p> This game is to be played between the user and the computer. Keep a track of who wins by giving a final score to each of the players in the end!</p>");
  }
  const program1=(x)=>{
    if(x==1)
    setDatascienceforit("<p>Data Science is an emerging field where Statistics and Mathematics play a huge role. The demand is increasing in both fields but Data Science is shifting the market from IT. Data science extracts patterns and useful insights from data while IT develops efficient Software, architecture systems to get the work done in ease. Analytics, AI and Data Science are witnessing rapid growth in the IT sector. At its core, AI is built on data and analytics. This makes it a natural evolution for AI/ML-based automation processes.</p><p> The data analytics function has the freedom to make investments and a huge opportunity to create value. In the current business landscape, a sluggish response in AI or data science may mean your business failed to hold its ground or even worse, lost out on customers. As the companies are intensely looking to go into the AI way to ride the digital transformation wave, the Indian IT sector will continue to look up in the coming years.</p><p>  Even if there are any contractions, given the strong involvement of analytics and data science in IT, they will make up for it in the coming years if not months.</p>");
    if(x==2)
    setDatascienceforit("<p>This course is ideal if you are an engineer, software engineer, IT Specialist or any other aspiring or current IT professional looking to advance their career with Data Science. This course requires at least basic knowledge of math, data and computers existent in the IT industry.</p><p> We at Excelsior have designed the course as beginner friendly and also for the professionals who want to narrow the data Science into the IT Sector. Every class you take with Excelsior will be taught by an instructor who has been a great asset in this field. </p><p>Our experienced instructors have decades of experience helping clients around the world accelerate their business and careers, and will share first-hand knowledge to ensure your success.</p>");
    if(x==3)
    setDatascienceforit("<p>This course is Designed by the GetExcelsior to equip yourself with the Industry Demanded Skills in 2022. This program will give you practical data analytics and data science knowledge needed to succeed in the IT sector. Learn the concepts of data science and IT. Gain transferable skills in user research, user design, prototyping, building artefacts, product analytics, digital transformation, fundamental procedures and structures.</p><p> You will also learn Reconciliation And Introduction To Isda, Product Marketing And Gtm Strategy, Product Planning And Development, Tech 101 For Pms, Data Science For Product Management and Growth Product Management.</p><p> This program is designed by Excelsior covers the latest analytics, Visualization and machine learning concepts. These include topics like data science essentials, big data ecosystem, where data has its origins, the role of databases in storing and retrieving data at scale, statistical analysis basics, and designing experiments.</p><p> Upon completion of this program you will be prepared to take the roles of Business Analyst and Data Scientist. Tools covered: Python Programming</p><p>R Programming Language</p><p>Automation</p><p>Tableau</p><p>Keras</p><p>Spark</p><p>Microsoft Power BI (Business Intelligence)</p>");
    if(x==4)
    setDatascienceforit("<p>In recent times, there has been a clear growth of the AI market in the IT and technology sector, with Accenture remaining the major player in terms of revenue generated by implementing its AI capabilities. Other than that,  Capgemini, TCS, Wipro, Tech Mahindra and HCL are some of the companies who have a strong AI market share.</p><p> The AI capabilities in IT companies have also begun to grow and show up its significance in terms of revenue. The IT and technology sector has the highest share of the AI market at 36.2% in percentage share, and $2314.3Mn in terms of market value. </p><p>According to the U.S. Bureau of Labor Statistics, about 11.5 Million jobs will be created by 2026.</p>");
    
  }
  const program2=(x)=>{
    if(x==1)
    setDatascienceforit("<p>In a world where markets increasingly depend on data, this course will help you prepare to make better and faster decisions using Data Science in Finance</p><p>If you're looking for an exciting and flexible career, it’s time to consider a job in the field of data science. This booming professional area is experiencing major growth, thanks to recent advances in technology. According to Glassdoor, Data Scientist is one of the best jobs right now, with tremendous salary opportunities and job openings.</p><p>Data Science specialization in the Finance domain gives you knowledge about implementing data science models for Finance practices .Data Science in Finance sets a complete foundation for data science in businesses. You'll have hands-on learning experiences and gain both domain knowledge and technical expertise to be able to work on Finance projects, identifying problems and formulating algorithms with big data.</p><p>Excelsior’s Specialization in Data Science for Finance is a certification training program that teaches how to analyse data quickly and efficiently to gain an edge over other investment banking candidates. You need practical skills and analytical techniques for this career path. This Program is Designed in a way to learn quickly and more efficiently.</p>");
    if(x==2)
    setDatascienceforit("<p>At Excelsior we designed the course as Beginner friendly and also for the Professionals who want to narrow the data Science into Finance Sector. This career requires experience in technical skills, including math, statistics, or computers.</p><p>Every class you take with Excelsior will be taught by an instructor who has been a great asset in this field</p><p>Our experienced instructors have decades of experience helping clients around the world accelerate their business and careers, and will share first-hand knowledge to ensure your success.<b>Schedule your session with an expert Data Engineer to know more.</b></p>");
    if(x==3)
    setDatascienceforit("<p>This course is Designed by Excelsior to equip Yourself with the Industry Demanded Skills in 2022.This program will give you practical data analytics and data science knowledge needed to succeed in the world of finance. The courses cover the methods analysts use to extract information from data, build models, and make predictions based on those models</p><p>Introduction to Investment Banking</p><p>Cash Equities and Fixed income</p><p>Corporate Actions</p><p>Stock Borrow Lending</p><p>Trade Life Cycle</p><p>Risk Management and Regulatory Environment</p><p>These Concepts will be taught by our Experts in the field and you can become master at this field at the end of the course</p><p>Tools Covered</p><p>Python Programming</p><p>R Programming Language</p><p>Automation</p><p>Tableau</p><p>support vector machine</p><p>Microsoft Power BI (Business Intelligence)</p></p>");
    if(x==4)
    setDatascienceforit("<p>This course is designed by Excelsior to help you become an expert in Data Science, learn the core principles of data science, finance business and its processes. This specialization will give you a solid foundation and hands-on experience to work with huge datasets like data scientists/data engineers. Data science professionals are in demand in financial services and other industries, with a median base salary of $131,000.</p><p>According to a report, the market for data engineering professionals is expected to grow by 47% in the next 5 years.</p>");
    
  }
  const program3=(x)=>{
    if(x==1)
    setDatascienceforit("<p>Deep learning is driving breakthroughs in artificial intelligence that are changing our world. It is a subset of machine learning which is the science of getting computers to act without being explicitly programmed. This Specialization provides a case-based introduction to the exciting, high-demand field of deep learning. Infact, Deep learning is a self-learning system that executes the same functions as human neurons in a set of data.</p><p>Deep Learning is one of the most highly sought after skills in AI. Master Deep Learning, and Break into AI. This Specialization is a sequence of four courses that helps you develop deep learning expertise.</p><p>Unleash the power of deep learning in your sequence model with our Deep learning Course in 2022 at Excelsior.</p>");
    if(x==2)
    setDatascienceforit("<p>At Excelsior Deep Learning course is second-to-none, providing you with the opportunity to learn this important skill in the most optimal way possible: through hands-on exercises. We've already gone to great lengths to ensure the material is high quality and engaging, but it's our classes that give you the fully immersive experience. Each lesson is taught by instructors who are not only well versed in the topic, but experienced developers within their field as well. As a result, you won't just be learning from a 'pro' -- you'll also be learning from an Expert.</p><p>You must be well versed in Linear Algebra, Python, Probability and Calculus to swim along the course with ease. If not, we have courses that'll teach you python and others. Having Knowledge in Machine Learning and Data science is plus</p>");
    if(x==3)
    setDatascienceforit("<p>If you’re looking to learn more about deep learning, but you’re a beginner and don’t know where to start, this course will take you from zero to hero in no time! Excelsior’s cutting-edge curriculum, blended learning model, and thoughtful instructors combine to make an immersive, transformative experience.</p><p>This course will equip you with all the skills you need to become a deep learning expert. Image classification, data science, natural language processing, computer vision - you name it, you’ll be able to do it after this program.</p><p>Tools covered</p><p>Python</p><p>R</p><p>TensorFlow</p><p>condo</p><p>Keras</p><p>Tableau</p>");
    if(x==4)
    setDatascienceforit("<p>Deep Learning is a set of powerful tools that are used to solve artificial intelligence problems. With deep learning you can teach computers to understand images, text, sounds and more for classification, recommendation systems, computer vision, natural language processing and time series analysis. Deep learning is an upcoming trend in the field of artificial intelligence. Nowadays, Google, Facebook and many other companies are using this technique to make computers smart to do human-like works.</p><p>Currently Every Company and unicorn start-up’s hire Deep learning Engineer many think that only FAANG hires Deep learning Engineers, Now a days It’s in high demand because people with these skill sets are less in India so there is a huge scope in field.</p><p>The starting pay for Deep Learning Engineers in India can range anywhere between Rs. 3 – 15 LPA. Those who have Experience can even earn more than 40 LPA. At Getexcelsior we provide this Course with Less Cost and we help you to get placed in the top tier companies.</p>");
    
  }
  const program4=(x)=>{
    if(x==1)
    setDatascienceforit("<p>Machine learning is one of the most exciting and in-demand fields in tech today. If you’re looking for a course that will dive deep into this field, look no further than Excelsior ML Training with Python. With a wide range of courses to choose from, learn the basics of Machine Learning or take the training to become an expert. All courses are taught by our highly qualified instructors who are subject matter experts and have years of experience in the industry.</p><p>You will uncover the power of machine learning and learn how to successfully apply it with the new capabilities in Python. You will take a guided tour of many machine learning algorithms and implement them using scikit-learn, one of the most popular libraries for machine learning in Python.</p><p>In this course at Excelsior you will get a broad understanding of Machine Learning from the ground up including multiple different disciplines. We discuss topics such as how to build machine learning systems, supervised vs unsupervised learning, theory vs application, and natural language processing. At the end of this course you will have consolidated a tool box of machine learning techniques that can be applied in our daily life to solve problems and find missing insights.</p>");
    if(x==2)
    setDatascienceforit("<p>Machine learning is one of the most exciting and in-demand fields in tech today. If you’re looking for a course that will dive deep into this field, look no further than Excelsior ML Training with Python. With a wide range of courses to choose from, learn the basics of Machine Learning or take the training to become an expert. All courses are taught by our highly qualified instructors who are subject matter experts and have years of experience in the industry. Maths is very important in ML as most systems are just mathematical in nature. Such as numerical optimization is very much related to ML thus knowledge in engineering maths is very helpful but not necessary. Thus knowledge in Linear Algebra and Calculus makes your learning smooth and easy. Also if you should have some knowledge on Programming in Python and Probability. This Course is suitable for Students and professionals who want to Enter into the AI Field. </p>");
    if(x==3)
    setDatascienceforit("<p>Our Machine Learning with Python course at Excelsior will teach you everything you need to know about becoming a proficient ML engineer. You’ll learn how to build and fine-tune learning algorithms to solve real-life problems and improve your skills in big data processing, data visualization, machine learning, data mining, and natural language processing. The instructors are subject matter experts who are developers themselves and integrally involved in the development of the field. Whether you are just starting out or are looking to take your skills to the next level, this course will solidify and expand your knowledge, not only on machine learning with python, but on critical programming principles as well. We tackle complex topics and use realistic datasets that will prepare you to solve real-world problems using machine learning. This course introduces you to Machine Learning, Artificial Intelligence and its applications. You will learn about various Machine Learning algorithms by coding them in Python, R and Octave. We start with the basics and then quickly jump into TensorFlow, Keras and Scikit-Learn. This course helps you sort through the options, offering detailed descriptions of some of the most popular Python-based libraries and showing how each can be used to solve real-world problems. All in all, you will learn the tools such as TensorFlow, Shogun, R programming, Python, Keras, Scikit-Learn, Pattern, Theano, NLTK, Gensim, SciPy, Dask, Numba, HPAT, NumPy, Pandas.</p>");
    if(x==4)
    setDatascienceforit("<p>Machine Learning is an incredible new frontier in computing that helps machines gain access to data and use it to perform tasks and make decisions. In today’s date, the ML ecosystem has grown multiple folds and identified enough roles and responsibilities. The scope of the work each job role entails varies depending on the company type and size. The average salary for a Machine Learning Engineer is ₹8,50,000 per year in India. If you have gained some Experience in this field your salary may increase up to 40 LPA. According to Indeed, Machine Learning Engineer job openings grew 344% between 2016 to 2019 and have an average base salary of $146,085 globally.</p>");
    
  }
  const program5=(x)=>{
    if(x==1)
    setDatascienceforit("<p></p>");
    if(x==2)
    setDatascienceforit("<p></p>");
    if(x==3)
    setDatascienceforit("<p></p>");
    if(x==4)
    setDatascienceforit("<p></p>");
    
  }
  const program6=(x)=>{
    if(x==1)
    setDatascienceforit("<p>Learn Python from scratch with ease, whether you have no prior programming experience or have already studied other languages. This course includes everything you need to start building your applications</p><p></p><p></p><p>Python Foundational course is a course to learn the basic concepts of Python programming. At Excelsior we will help you to learn how to get started.</p><p></p><p>Python is a dynamic and versatile programming language. It’s considered to be one of the easiest programming languages to learn and read. Python was designed to be simple, flexible, and extensible.</p><p>Its design philosophy emphasizes code readability, and its syntax allows programmers to express concepts in fewer lines of code than would be possible in languages such as C++ or Java. Many Python developers also appreciate that Python's undisputed advantage is its huge library, as well as its extremely active developer community and the large number of applications already written in Python.</p><p>While learning Python, you will be able to build Web Applications, APIs, Mobile Applications, and much more using the extensive libraries it provides. There are special libraries for Machine learning and Pattern matching as well. More applications of Python lie in Web Developing, Machine Learning, Data Science, and Cybersecurity.</p>");
    if(x==2)
    setDatascienceforit("<p>If you have a basic computer knowledge and  want to learn Python Programming or are a newbie to programming, this course is appropriate for you! You will develop a strong understanding of the fundamentals of object-oriented programming and fluency in coding . Focusing on developing coding skills with Python and learning by actually writing complete programs - that's real training you are going to get. The training is practical; all instructions are step-by-step, task-based until you are comfortable and competent.</p><p>Schedule your session with an expert to know more about this course</p></p>");
    if(x==3)
    setDatascienceforit("<p>This course is designed to set you on a solid path towards being a successful Python Developer. The material you will cover in this course has been carefully chosen, validated with Python Experts, and designed to be immediately applied in the workplace. Our goal is for students to complete this program and feel able to build production-ready projects</p><p>Armed with a strong understanding of modern Python, you are ready to unleash the power of Python. The best</p><p> way to do this is using libraries that can be used from Python or from within your Python program.</p><p> This course will teach you the necessary libraries etc to use.</p>");
    if(x==4)
    setDatascienceforit("<p>Python is an in-demand language that can help you to increase your Career Growth Abruptly. So Whether you are a newbie or an experienced one you should Consider learning Python. Python is top level language to learn for 2022 according to the Survey of Stack Overflow.</p><p>All the Product Companies Including FAANG use python and Hire Python Developers massively. The average salary of entry-level Python Developers is Approximately ₹427,283. So it’s Worth learning Python!</p>");
    
  }
  programsData();
  
  
  const description = 'Elearning Portal Course Detail Page';
  const [verticallyCenteredScrollable, setVerticallyCenteredScrollable] = useState(false);
  const [Mentors1, setMentor1] = useState(false);
  const [Mentors2, setMentor2] = useState(false);
  const [Mentors3, setMentor3] = useState(false);
  const [Mentors4, setMentor4] = useState(false);
  const [currModal, setCurrModal] = useState(false);
  const [exampleModal, setExampleModal] = useState(false);
  const [programOverviewModal, setProgramOverviewModal] = useState(false);
  const [projectModal, setProjectModal] = useState(false);
  const [industryStatsModal, setIndustryStatsModal] = useState(false);
  const slug = window.location.pathname;
  const program = programs.find(p => {
    return '/programs/' + p.slug === slug;
  });
  const title = program.title;
 programFeatures();
  function  programFeatures(){
    
      if(program.title=='Data Science for IT')
      {
      features = ['Masterclass by Industry Experts','200+ Hours Live Sessions','Capstone and 15+ real life projects','60+ Industry oriented assessments','Flexible learning Schedule','Personalized Project feedback from Expert Professionals'];
      }
      if(program.title=='Data Science for Finance')
      {
      features = ['Masterclass by Industry Experts','200+ Hours Live Sessions','Capstone and 15+ real life projects','60+ Industry oriented assessments','Flexible learning Schedule','Personalized Project feedback from Expert Professionals'];
      }
      if(program.title=='Deep Learning')
      {
      features = ['Masterclass by Industry Experts','100+ Hours Live Sessions','Capstone and 15+ real life projects','60+ Industry oriented assessments','Flexible learning Schedule','Personalized Project feedback from Expert Professionals'];
      }
      if(program.title=='Machine Learning With Python')
      {
      features = ['Masterclass by Industry Experts','100+ Hours Live Sessions','Capstone and 15+ real life projects','30+ Industry oriented assessments','Flexible learning Schedule','Personalized Project feedback from Expert Professionals'];
      }
      if(program.title=='Data Analysis')
      {
      features = ['Masterclass by Industry Experts','200+ Hours Live Sessions','Capstone and 15+ real life projects','60+ Industry oriented assessments','Flexible learning Schedule','Personalized Project feedback from Expert Professionals'];
      }
      if(program.title=='Python Preparatory Course')
      {
      features = ['Masterclass by Industry Experts','42 Hours','Capstone and 15+ real life projects','60+ Industry oriented assessments','Flexible learning Schedule','Personalized Project feedback from Expert Professionals'];
      }
      
    }
 // const features = program.title;
 
function programsData(){
    axios
        .get("http://localhost:4000/all")
        .then(response => {
            this.setState({
                total:response.data.length,
               
            });
        })
        .catch(function(error) {
            console.log(error);
        });
    
}
  return (
    <>
      <HtmlHead title={title} description={description} />
      <Helmet>
        <link rel="canonical" href="/programs/program_name">
        </link>
      </Helmet>
      {/* Title and Top Buttons Start */}
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col className="col-auto mb-sm-0 me-auto">
            <h1 className="mb-0 pb-0 display-4">{program.title}</h1>
          </Col>
          {/* Title End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      <Row className="g-5 mb-3">
        <Col xxl="8" className="mb-0">
          {/* Preview Start */}
          <h2 className="small-title">Preview</h2>
          <Card className="mb-5">
          {program.title=="Data Science for IT"
          ?<img src="/img/banner/DataSciIT.webp" className="rounded"></img>
          :program.title=="Data Science for Finance"
          ?<img src="/img/banner/DataScienceforFinance.webp" className="rounded"></img>
          :program.title=="Deep Learning"
          ?<img src="/img/banner/DeepLearning.webp" className="rounded"></img>
          :program.title=="Machine Learning With Python"
          ?<img src="/img/banner/MachineLearning.webp" className="rounded"></img>
          :program.title=="Data Analysis"
          ?<img src="/img/banner/DataAnalytics.webp" className="rounded"></img>
          :program.title=="Python Preparatory Course"
          ?<img src="/img/banner/Python.webp" className="rounded"></img>
          :''
         }
          </Card>
          {/* Preview End */}
          
          <h2 className="small-title">Program Overview</h2>
          {/*Programs start */}
          {program.title=="Data Science for IT"
          ?<Row xxl="2" xs="1">
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <div className="mb-2">
                  <NavLink to="#" className="heading" onClick={() => {program1(1);setProgramOverviewModal(true)}}>
                  What is a Data Science for IT and what do they do?
                  </NavLink>
                </div>
                {/*<Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                   content goes here
                </Clamp> */}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <div className="mb-2">
                  <NavLink to="#" className="heading" onClick={() => {program1(2);setProgramOverviewModal(true)}}>
                  Who can enroll for this course and what are the prerequisites?
                  </NavLink>
                </div>
                {/*<Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                 content goes here 
                </Clamp>*/}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <div className="mb-2">
                  <NavLink to="#" className="heading" onClick={() => {program1(3);setProgramOverviewModal(true)}}>
                  What will you learn from this course?
                  </NavLink>
                </div>
                {/*<Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                 content goes here 
                </Clamp>*/}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <div className="mb-2">
                  <NavLink to="#" className="heading" onClick={() => {program1(4);setProgramOverviewModal(true)}}>
                  What’s the scope of this course?
                  </NavLink>
                </div>
                {/*<Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                 content goes here 
                </Clamp>*/}
              </Card.Body>
            </Card>
          </Col>
        </Row>
          :program.title=="Data Science for Finance"
          ?<Row xxl="2" xs="1">
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <div className="mb-2">
                  <NavLink to="#" className="heading" onClick={() => {program2(1);setProgramOverviewModal(true)}}>
                  What is a Data Science for Finance and what do they do?
                  </NavLink>
                </div>
                {/* <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                </Clamp> */}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <div className="mb-2">
                  <NavLink to="#" className="heading" onClick={() => {program2(2);setProgramOverviewModal(true)}}>
                  Who can enroll for this course and what are the prerequisites?
                  </NavLink>
                </div>
                {/* <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                </Clamp> */}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <div className="mb-2">
                  <NavLink to="#" className="heading" onClick={() => {program2(3);setProgramOverviewModal(true)}}>
                  What will you learn from this course?
                  </NavLink>
                </div>
                {/* <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                </Clamp> */}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <div className="mb-2">
                  <NavLink to="#" className="heading" onClick={() => {program2(4);setProgramOverviewModal(true)}}>
                  What’s the scope of this course?
                  </NavLink>
                </div>
                {/* <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                </Clamp> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
          :program.title=="Deep Learning"
          ?<Row xxl="2" xs="1">
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <div className="mb-2">
                  <NavLink to="#" className="heading" onClick={() => {program3(1);setProgramOverviewModal(true)}}>
                  What is a Deep Learning for Finance and what do they do?
                  </NavLink>
                </div>
                {/* <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                </Clamp> */}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <div className="mb-2">
                  <NavLink to="#" className="heading" onClick={() => {program3(2);setProgramOverviewModal(true)}}>
                  Who can enroll for this course and what are the prerequisites?
                  </NavLink>
                </div>
                {/* <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                </Clamp> */}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <div className="mb-2">
                  <NavLink to="#" className="heading" onClick={() => {program3(3);setProgramOverviewModal(true)}}>
                  What will you learn from this course?
                  </NavLink>
                </div>
                {/* <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                </Clamp> */}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <div className="mb-2">
                  <NavLink to="#" className="heading" onClick={() => {program3(4);setProgramOverviewModal(true)}}>
                  What’s the scope of this course?
                  </NavLink>
                </div>
                {/* <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                </Clamp> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
          :program.title=="Machine Learning With Python"
          ?<Row xxl="2" xs="1">
        <Col>
          <Card className="mb-2">
            <Card.Body>
              <div className="mb-2">
                <NavLink to="#" className="heading" onClick={() => {program4(1);setProgramOverviewModal(true)}}>
                What is a Machine Learning With Python for Finance and what do they do?
                </NavLink>
              </div>
              {/* <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
              </Clamp> */}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-2">
            <Card.Body>
              <div className="mb-2">
                <NavLink to="#" className="heading" onClick={() => {program4(2);setProgramOverviewModal(true)}}>
                Who can enroll for this course and what are the prerequisites?
                </NavLink>
              </div>
              {/* <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
              </Clamp> */}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-2">
            <Card.Body>
              <div className="mb-2">
                <NavLink to="#" className="heading" onClick={() => {program4(3);setProgramOverviewModal(true)}}>
                What will you learn from this course?
                </NavLink>
              </div>
              {/* <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
              </Clamp> */}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-2">
            <Card.Body>
              <div className="mb-2">
                <NavLink to="#" className="heading" onClick={() => {program4(4);setProgramOverviewModal(true)}}>
                What’s the scope of this course?
                </NavLink>
              </div>
              {/* <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
              </Clamp> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
          :program.title=="Data Analysis"
          ?<Row xxl="2" xs="1">
      <Col>
        <Card className="mb-2">
          <Card.Body>
            <div className="mb-2">
              <NavLink to="#" className="heading" onClick={() => {program5(1);setProgramOverviewModal(true)}}>
              What is a Data Analysis for Finance and what do they do?
              </NavLink>
            </div>
            {/* <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
            </Clamp> */}
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="mb-2">
          <Card.Body>
            <div className="mb-2">
              <NavLink to="#" className="heading" onClick={() => {program5(2);setProgramOverviewModal(true)}}>
              Who can enroll for this course and what are the prerequisites?
              </NavLink>
            </div>
            {/* <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
            </Clamp> */}
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="mb-2">
          <Card.Body>
            <div className="mb-2">
              <NavLink to="#" className="heading" onClick={() => {program5(3);setProgramOverviewModal(true)}}>
              What will you learn from this course?
              </NavLink>
            </div>
            {/* <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
            </Clamp> */}
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="mb-2">
          <Card.Body>
            <div className="mb-2">
              <NavLink to="#" className="heading" onClick={() => {program5(4);setProgramOverviewModal(true)}}>
              What’s the scope of this course?
              </NavLink>
            </div>
            {/* <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
            </Clamp> */}
          </Card.Body>
        </Card>
      </Col>
    </Row>
          :program.title=="Python Preparatory Course"
          ?<Row xxl="2" xs="1">
         <Col>
           <Card className="mb-2">
             <Card.Body>
               <div className="mb-2">
                 <NavLink to="#" className="heading" onClick={() => {program6(1);setProgramOverviewModal(true)}}>
                 What is a Python Preparatory Course for Finance and what do they do?
                 </NavLink>
               </div>
               {/* <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
               </Clamp> */}
             </Card.Body>
           </Card>
         </Col>
         <Col>
           <Card className="mb-2">
             <Card.Body>
               <div className="mb-2">
                 <NavLink to="#" className="heading" onClick={() => {program6(2);setProgramOverviewModal(true)}}>
                 Who can enroll for this course and what are the prerequisites?
                 </NavLink>
               </div>
               {/* <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
               </Clamp> */}
             </Card.Body>
           </Card>
         </Col>
         <Col>
           <Card className="mb-2">
             <Card.Body>
               <div className="mb-2">
                 <NavLink to="#" className="heading" onClick={() => {program6(3);setProgramOverviewModal(true)}}>
                 What will you learn from this course?
                 </NavLink>
               </div>
               {/* <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                </Clamp> */}
             </Card.Body>
           </Card>
         </Col>
         <Col>
           <Card className="mb-2">
             <Card.Body>
               <div className="mb-2">
                 <NavLink to="#" className="heading" onClick={() => {program6(4);setProgramOverviewModal(true)}}>
                 What’s the scope of this course?
                 </NavLink>
               </div>
               {/* <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
               </Clamp> */}
             </Card.Body>
           </Card>
         </Col>
          </Row>
          :program.title=="AI Product Manager"
          ?<Row xxl="2" xs="1">
         <Col>
           <Card className="mb-2">
             <Card.Body>
               <div className="mb-2">
                 <NavLink to="#" className="heading">
                 What is a AI Product Manager for Finance and what do they do?
                 </NavLink>
               </div>
               <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
               </Clamp>
             </Card.Body>
           </Card>
         </Col>
         <Col>
           <Card className="mb-2">
             <Card.Body>
               <div className="mb-2">
                 <NavLink to="#" className="heading">
                 Who can enroll for this course and what are the prerequisites?
                 </NavLink>
               </div>
               <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
               </Clamp>
             </Card.Body>
           </Card>
         </Col>
         <Col>
           <Card className="mb-2">
             <Card.Body>
               <div className="mb-2">
                 <NavLink to="#" className="heading">
                 What will you learn from this course?
                 </NavLink>
               </div>
               <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                     </Clamp>
             </Card.Body>
           </Card>
         </Col>
         <Col>
           <Card className="mb-2">
             <Card.Body>
               <div className="mb-2">
                 <NavLink to="#" className="heading">
                 What’s the scope of this course?
                 </NavLink>
               </div>
               <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
               </Clamp>
             </Card.Body>
           </Card>
         </Col>
          </Row>
          :program.title=="Data Engineer"
          ?<Row xxl="2" xs="1">
         <Col>
           <Card className="mb-2">
             <Card.Body>
               <div className="mb-2">
                 <NavLink to="#" className="heading">
                 What is a Data Engineer for Finance and what do they do?
                 </NavLink>
               </div>
               <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
               Data Engineers are building the backbone of the data revolution. Data engineers construct data pipelines to bring together information from different source systems, integrate, consolidate and clean the data, and structure it for use in Data analytics or operational applications. A data engineer work with tools like Apache Spark, Hadoop, Kafka to process multiple streams of big data. They must be fluent in SQL and NOSQL (MONGODB) and Python, as well as cloud technologies such as Amazon Redshift and Amazon Athena. The industry’s best practices for managing privacy and security are also essential knowledge for those who want to build robust data pipelines that protect customer data.
               </Clamp>
             </Card.Body>
           </Card>
         </Col>
         <Col>
           <Card className="mb-2">
             <Card.Body>
               <div className="mb-2">
                 <NavLink to="#" className="heading">
                 Who can enroll for this course and what are the prerequisites?
                 </NavLink>
               </div>
               <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
               We know you’re looking for a Data Engineering course that is both extensive and practical, which is exactly why we created Excelsior data engineering course. Regardless of whether you’re new to programming or have years of experience under your belt, this course will give you the skills you need to become a proficient data engineer. The courses are taught by our top-quality instructors who are not only subject matter experts, but developers in the field as well. Every class you take with Excelsior will be taught by an instructor who has contributed to Apache Spark, Apache Kafka, Hadoop, AWS Big Data services and many more projects that the big names are backing today.
Schedule your session with an expert Data Engineer to know more. 

               </Clamp>
             </Card.Body>
           </Card>
         </Col>
         <Col>
           <Card className="mb-2">
             <Card.Body>
               <div className="mb-2">
                 <NavLink to="#" className="heading">
                 What will you learn from this course?
                 </NavLink>
               </div>
               <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
               The Data Engineering Nanodegree program is comprised of content and curriculum to support 5 projects. We estimate that students can complete the program in 6 months working 10 hours per week.
This course provides a solid foundation and tactical insights into big data technologies: Apache Kafka, Hadoop, Spark, Data Lakes, NoSQL and AWS/EBS.
What you will learn
•        How to model and build databases and data warehouses
•        How to automate data pipelines
•        How to work with massive datasets with Spark on a cluster using AWS
•        How to design data models, build data warehouses and data lakes, automate data pipelines, and work with massive datasets.
Data Engineering is the foundation for the new world of Big Data. Enrol now to build production-ready data infrastructure, an essential skill for advancing your data career.
Tools covered
Hadoop
MapReduce
HIVE
PIG
Amazon DB2
Apache Spark
Kafka
Python Programming
SQL
PostgreSQL
MongoDB
Apache Spark
Apache Kafka
Amazon Redshift
Snowflake
Amazon Athena
Apache Airflow
Microsoft Power BI (Business Intelligence)
Tableau
MYSQL
SQL Server ETL (Extraction, Transformation, and Loading) 

                </Clamp>
             </Card.Body>
           </Card>
         </Col>
         <Col>
           <Card className="mb-2">
             <Card.Body>
               <div className="mb-2">
                 <NavLink to="#" className="heading">
                 What’s the scope of this course?
                 </NavLink>
               </div>
               <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
               According to a report, the market for data engineering professionals is expected to grow by 47% in the next 5 years. The Average Salary of a Data Engineer is around 13L per annum for 1-2 year experience Data Engineers. As businesses are expanding globally, they are also ramping up their big data and analytics operations, which means more jobs in this field. This can be a great career opportunity at this time as the demand for data science professionals is rising constantly.
               </Clamp>
             </Card.Body>
           </Card>
         </Col>
          </Row>
           :program.title=="Maths and Stats Preparatory course"
           ?<Row xxl="2" xs="1">
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <div className="mb-2">
                  <NavLink to="#" className="heading">
                  What is a Maths and Stats Preparatory course for Finance and what do they do?
                  </NavLink>
                </div>
                <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                </Clamp>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <div className="mb-2">
                  <NavLink to="#" className="heading">
                  Who can enroll for this course and what are the prerequisites?
                  </NavLink>
                </div>
                <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                </Clamp>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <div className="mb-2">
                  <NavLink to="#" className="heading">
                  What will you learn from this course?
                  </NavLink>
                </div>
                <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                      </Clamp>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <div className="mb-2">
                  <NavLink to="#" className="heading">
                  What’s the scope of this course?
                  </NavLink>
                </div>
                <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                </Clamp>
              </Card.Body>
            </Card>
          </Col>
           </Row>
           :program.title=="Business Analytics"
           ?<Row xxl="2" xs="1">
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <div className="mb-2">
                  <NavLink to="#" className="heading">
                  What is a Business Analytics course for Finance and what do they do?
                  </NavLink>
                </div>
                <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                Uncover the Business Analytics skills you need to make meaningful business decisions. The course explores how data can be used to understand customers and drive business growth.
                </Clamp>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <div className="mb-2">
                  <NavLink to="#" className="heading">
                  Who can enroll for this course and what are the prerequisites?
                  </NavLink>
                </div>
                <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                If you want a successful career in business, or if you already work in a corporate setting and want to learn how to improve your company’s performance, this course will help you reach your goals. No prior experience required.
                </Clamp>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <div className="mb-2">
                  <NavLink to="#" className="heading">
                  What will you learn from this course?
                  </NavLink>
                </div>
                <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                Develop real-world skills in data analysis, decision making, and prediction by exploring Excel data analytics tools and insights, plus predictive models for identification of trends and customer engagement. Enroll in the Business Analytics course today and go beyond spreadsheets and statistics to execute data-driven strategies that accelerate profits.
                      </Clamp>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <div className="mb-2">
                  <NavLink to="#" className="heading">
                  What’s the scope of this course?
                  </NavLink>
                </div>
                <Clamp tag="span" clamp="2" className="text-alternate mb-0 sh-5">
                Gain the fundamental knowledge of problem-solving skills to succeed in the business world. Learn how to interpret and make decisions based on real-world data in the four core business areas of marketing, human resources, finance, and operations. The program will help you master business analytics and qualify as an expert in your field.
                </Clamp>
              </Card.Body>
            </Card>
          </Col>
           </Row>
          :''
            }
          {/*Program  */}
        </Col>
        <Col xxl="4">
          {/* At a Glance Start  */}
          <h2 className="small-title">At a Glance</h2>
          <Card className="mb-5">
            <Card.Body>
              <Row className="g-0 align-items-center mb-3">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Duration</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">{program.duration}</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-3">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="presentation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Content</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">{program.content}</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-3">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="diploma" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Level</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">{program.level}</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-3">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="calendar" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Release</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">{program.release}</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-3">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="star" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Rating</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">{program.rating}</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="graduation" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Completed By</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">{program.completed_by}</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          {/* At a Glance End  */}

          {/* Tags Start */}          
          <h2 className="small-title">Curriculum</h2>
          <Card className="mb-5">
            <Card.Body>
              <div className="cta-3">Need more details?</div>
              <div className="text-muted mb-4">Cheesecake chocolate carrot cake pie lollipop lemon toffee lollipop. Oat cake pie cake cotton.</div>
              <Button variant="outline-primary" className="btn-icon btn-icon-start me-2" onClick={() => setCurrModal(true)}>
                <CsLineIcons icon="book-open" /> <span>View</span>
              </Button>
              <Button variant="outline-primary" className="btn-icon btn-icon-start">
                <CsLineIcons icon="file-text" /> <NavLink to='#'  target="_blank" 
                onClick={() => printTickets(program.title)}>Download</NavLink>
              </Button>
            </Card.Body>
          </Card>

          <h2 className="small-title">Download Brochure</h2>
          <Card className="mb-5">
            <Card.Body>
              <div className="cta-3">Need more details?</div>
              <div className="text-muted mb-4">Cheesecake chocolate carrot cake pie lollipop lemon toffee lollipop. Oat cake pie cake cotton.</div>
              <Button variant="outline-primary" className="btn-icon btn-icon-start">
                <CsLineIcons icon="file-text" /> <span>Docs</span>
              </Button>
            </Card.Body>
          </Card>
          {/* Tags End */}
        </Col>
      </Row>

      <Row className='mb-6' xxl="6" xs="1">
        <Col className="mb-0">
          <h2 className='small-title'> Features </h2>
          <ListBasicItems featureItem = {features}/>
        </Col>

        {/* <Col className="mb-3">
          <h2 className='small-title'> List </h2>
          <ListBasicItems featureItem = {features}/>
        </Col> */}

        <Col lg="8" className="mb-3">
          <h2 className="small-titldataParentToChild = {data}e">Industry Stats</h2>
          <Row xxl="2" xs="1">
            <Col xs="6" xl="4" className="sh-19">
              <Card className="h-100 hover-scale-up mb-2 cursor-pointer" id="introThird">
                <Card.Body className="text-center">
                  <h2 className="nav-link" onClick={() => {industryStatus(1,title);setIndustryStatsModal(true)}}>
                    {/* <CsLineIcons icon="cupcake" className="text-primary" /> */}
                    <p className="heading mt-3 text-body">Average Salaries and hike</p>
                    {/* <div className="text-extra-small fw-medium text-muted">14 PRODUCTS</div> */}
                  </h2>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19 mb-2">
              <Card className="h-100 hover-scale-up cursor-pointer">
                <Card.Body className="text-center">
                  <h2 className="nav-link" onClick={() => {industryStatus(2,title);setIndustryStatsModal(true)}}>
                    {/* <CsLineIcons icon="cupcake" className="text-primary" /> */}
                    <p className="heading mt-3 text-body">Career Path</p>
                    {/* <div className="text-extra-small fw-medium text-muted">14 PRODUCTS</div> */}
                  </h2>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19 mb-2">
              <Card className="h-100 hover-scale-up cursor-pointer">
                <Card.Body className="text-center">
                  <h2 className="nav-link" onClick={() =>{industryStatus(3,title); setIndustryStatsModal(true)}}>
                    {/* <CsLineIcons icon="cupcake" className="text-primary" /> */}
                    <p className="heading mt-3 text-body">Top Companies Hiring for this role</p>
                    {/* <div className="text-extra-small fw-medium text-muted">14 PRODUCTS</div> */}
                  </h2>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="6" xl="4" className="sh-19 mb-2">
              <Card className="h-100 hover-scale-up cursor-pointer">
                <Card.Body className="text-center">
                  <h2 className="nav-link" onClick={() =>{industryStatus(4,title); setIndustryStatsModal(true)}}>
                    {/* <CsLineIcons icon="cupcake" className="text-primary" /> */}
                    <p className="heading mt-3 text-body">Average Salaries of Excelsiorites</p>
                    {/* <div className="text-extra-small fw-medium text-muted">14 PRODUCTS</div> */}
                  </h2>
                </Card.Body>
              </Card>
            </Col>
            {/* <Col xs="6" xl="4" className="sh-19 mb-2">
              <Card className="h-100 hover-scale-up cursor-pointer">
                <Card.Body className="text-center">
                  <h2 className="nav-link" onClick={() =>{industryStatus(1); setIndustryStatsModal(true)}}>
                  <CsLineIcons icon="cupcake" className="text-primary" /> 
                    <p className="heading mt-3 text-body">Career Guidance</p>
                    {/* <div className="text-extra-small fw-medium text-muted">14 PRODUCTS</div> 
                  </h2>
                </Card.Body>
              </Card>
            </Col> */}
            {/* <Col xs="6" xl="4" className="sh-19 mb-2">
              <Card className="h-100 hover-scale-up cursor-pointer">
                <Card.Body className="text-center">
                  <h2 className="nav-link" onClick={() => setVerticallyCenteredScrollable(true)}>
                    <CsLineIcons icon="cupcake" className="text-primary" />
                    <p className="heading mt-3 text-body">Average Salaries of Excelsiorites</p>
                    <div className="text-extra-small fw-medium text-muted">14 PRODUCTS</div>
                  </h2>
                </Card.Body>
              </Card>
            </Col> */}
          </Row>
        </Col>
      </Row>

      <Row xs="1" xxl="2">
        <Col>
          <h2 className="small-title">Student Journey</h2>
          <Row className="mb-5">
            <Card>
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto" className="sw-5 d-flex flex-column justify-content-center align-items-center position-relative">
                  <div className="w-100 d-flex h-0" />
                  <div className="sw-5 sh-5 rounded-xl d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-5 sh-5 rounded-xl">
                      <div className="text-white d-flex justify-content-center align-items-center h-100">
                        <CsLineIcons icon="cupcake" />
                      </div>
                    </div>
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4 ps-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <Button variant="link" className="p-0 pt-0 heading text-start" onClick="">
                          Choose the Right Course
                        </Button>
                         {/* <div className="text-muted mt-0">
                         Click to see more
                        </div>  */}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-5 d-flex flex-column justify-content-center align-items-center position-relative">
                  <div className="w-100 d-flex h-0" />
                  <div className="sw-5 sh-5 rounded-xl d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-5 sh-5 rounded-xl">
                      <div className="text-white d-flex justify-content-center align-items-center h-100">
                        <CsLineIcons icon="pepper" />
                      </div>
                    </div>
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4 ps-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <Button variant="link" className="p-0 pt-0 heading text-start"  onClick="">
                          Scholarship Test
                        </Button>
                         {/* <div className="text-muted mt-0">
                         Click to see more
                        </div>  */}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-5 d-flex flex-column justify-content-center align-items-center position-relative">
                  <div className="w-100 d-flex h-0" />
                  <div className="sw-5 sh-5 rounded-xl d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-5 sh-5 rounded-xl">
                      <div className="text-white d-flex justify-content-center align-items-center h-100">
                        <CsLineIcons icon="pepper" />
                      </div>
                    </div>
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4 ps-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <Button variant="link" className="p-0 pt-0 heading text-start"  onClick="">
                          Learn & Projects
                        </Button>
                          {/* <div className="text-muted mt-0">
                         Click to see more
                        </div>  */}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-5 d-flex flex-column justify-content-center align-items-center position-relative">
                  <div className="w-100 d-flex h-0" />
                  <div className="sw-5 sh-5 rounded-xl d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-5 sh-5 rounded-xl">
                      <div className="text-white d-flex justify-content-center align-items-center h-100">
                        <CsLineIcons icon="pepper" />
                      </div>
                    </div>
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4 ps-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <Button variant="link" className="p-0 pt-0 heading text-start"  onClick="">
                          Interview preparation
                        </Button>
                         {/* <div className="text-muted mt-0">
                         Click to see more
                        </div>  */}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-5 d-flex flex-column justify-content-center align-items-center position-relative">
                  <div className="w-100 d-flex h-0" />
                  <div className="sw-5 sh-5 rounded-xl d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-5 sh-5 rounded-xl">
                      <div className="text-white d-flex justify-content-center align-items-center h-100">
                        <CsLineIcons icon="loaf" />
                      </div>
                    </div>
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative" />
                </Col>
                <Col className="ps-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <Button variant="link" className="p-0 pt-0 heading text-start"  onClick="">
                          Dream Job
                        </Button>
                         {/* <div className="text-muted mt-0">
                         Click to see more
                        </div>  */}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Col>

      <Col>
        <h2 className='small-title'>Start your journey now</h2>
        <Card body className="mb-5">
          <LayoutsBasic />
        </Card>
      </Col>

      </Row>
      <h2 className="small-title">Cta</h2>    
      <Row className="mb-5" xs="1" xxl="2">
        <Col className="mb-2"> <CtaTextAndButtonsSecond/> </Col>
        <Col> <CtaTextAndButtonsSecond/> </Col>
      </Row>
      <h2 className="small-title">Sample Projects</h2>
      <Row className="mb-5 row-cols-1 row-cols-md-4 g-1">
        <Col>
          <Card className="hover-scale-up h-100 cursor-pointer">
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto">
                  <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                    <CsLineIcons icon="laptop" className="text-primary" />
                  </div>
                </Col>
                <Col>
                  <div className="d-flex flex-column ps-card justify-content-start">
                    <div className="d-flex flex-column justify-content-center mb-2">
                      
                      
                      { program.title=='Data Science for IT'
                        ?<h2 className='text-primary heading' onClick={() => {projectStatus(1,title);setProjectModal(true)}}>Fake news detection</h2>
                        :program.title=='Data Science for Finance'
                        ?<h2 className='text-primary heading' onClick={() => {projectStatus(1,title);setProjectModal(true)}}>Build a credit Scorecard model</h2>
                        :program.title=='Deep Learning'
                        ?<h2 className='text-primary heading' onClick={() => {projectStatus(1,title);setProjectModal(true)}}>Skin cancer detection</h2>
                        :program.title=='Machine Learning With Python'
                        ?<h2 className='text-primary heading' onClick={() => {projectStatus(1,title);setProjectModal(true)}}>Loan eligibility prediction</h2>
                        :program.title=='Data Analysis'
                        ?<h2 className='text-primary heading' onClick={() => {projectStatus(1,title);setProjectModal(true)}}>American universities</h2>
                        :program.title=='Python Preparatory Course'
                        ?<h2 className='text-primary heading' onClick={() => {projectStatus(1,title);setProjectModal(true)}}>Website blocker</h2>
                        :''
                      }
                    </div>
                    {/* <div className="text-alternate">
                      Lollipop apple pie lollipop toffee croissant. Sugar plum fruitcake cotton candy lemon drops. Carrot cake fruitcake dragée pie cotton candy
                      sesame snaps lollipop croissant.
                    </div> */}
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="hover-scale-up h-100 cursor-pointer">
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto">
                  <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                    <CsLineIcons icon="laptop" className="text-primary" />
                  </div>
                </Col>
                <Col>
                  <div className="d-flex flex-column ps-card justify-content-start">
                    <div className="d-flex flex-column justify-content-center mb-2">
                      
                      { program.title=='Data Science for IT'
                        ?
                        <h2 className='text-primary heading' onClick={() => {projectStatus(2,title);setProjectModal(true)}}>Influence of global warming on food chain supply'</h2>
                        :program.title=='Data Science for Finance'
                        ?<h2 className='text-primary heading' onClick={() => {projectStatus(2,title);setProjectModal(true)}}>Stock price forecasting model</h2>
                        :program.title=='Deep Learning'
                        ?<h2 className='text-primary heading' onClick={() => {projectStatus(2,title);setProjectModal(true)}}>Car price prediction</h2>
                        :program.title=='Machine Learning With Python'
                        ?<h2 className='text-primary heading' onClick={() => {projectStatus(2,title);setProjectModal(true)}}>Cafe’s Retail Selling Price</h2>
                        :program.title=='Data Analysis'
                        ?<h2 className='text-primary heading' onClick={() => {projectStatus(2,title);setProjectModal(true)}}>COVID19 dataset analysis</h2>
                        :program.title=='Python Preparatory Course'
                        ?<h2 className='text-primary heading' onClick={() => {projectStatus(2,title);setProjectModal(true)}}>Video to GIF convertor</h2>
                        :''
                      }
                      
                    </div>
                    {/* <div className="text-alternate">
                      Lollipop apple pie lollipop toffee croissant. Sugar plum fruitcake cotton candy lemon drops. Carrot cake fruitcake dragée pie cotton candy
                      sesame snaps lollipop croissant.
                    </div> */}
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="hover-scale-up h-100 cursor-pointer">
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto">
                  <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                    <CsLineIcons icon="laptop" className="text-primary" />
                  </div>
                </Col>
                <Col>
                  <div className="d-flex flex-column ps-card justify-content-start">
                    <div className="d-flex flex-column justify-content-center mb-2">
                      
                        { program.title=='Data Science for IT'
                        ?<h2 className='text-primary heading' onClick={() => {projectStatus(3,title);setProjectModal(true)}}>Segmentation of customer groups</h2>
                        :program.title=='Data Science for Finance'
                        ?<h2 className='text-primary heading' onClick={() => {projectStatus(3,title);setProjectModal(true)}}>Portfolio Optimization Problem</h2>
                        :program.title=='Deep Learning'
                        ?<h2 className='text-primary heading' onClick={() => {projectStatus(3,title);setProjectModal(true)}}>Handwritten Digit Recognition</h2>
                        :program.title=='Machine Learning With Python'
                        ?<h2 className='text-primary heading' onClick={() => {projectStatus(3,title);setProjectModal(true)}}>Driver availability prediction</h2>
                        :program.title=='Data Analysis'
                        ?<h2 className='text-primary heading' onClick={() => {projectStatus(3,title);setProjectModal(true)}}>Exoplanet detection and confirmation</h2>
                        :program.title=='Python Preparatory Course'
                        ?<h2 className='text-primary heading' onClick={() => {projectStatus(3,title);setProjectModal(true)}}>Quiz game</h2>
                        :''
                      }
                    </div>
                    {/* <div className="text-alternate">
                      Lollipop apple pie lollipop toffee croissant. Sugar plum fruitcake cotton candy lemon drops. Carrot cake fruitcake dragée pie cotton candy
                      sesame snaps lollipop croissant.
                    </div> */}
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="hover-scale-up h-100 cursor-pointer">
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto">
                  <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                    <CsLineIcons icon="laptop" className="text-primary" />
                  </div>
                </Col>
                <Col>
                  <div className="d-flex flex-column ps-card justify-content-start">
                    <div className="d-flex flex-column justify-content-center mb-2">
                      
                      { program.title=='Data Science for IT'
                        ?<h2 className='text-primary heading' onClick={() => {projectStatus(4,title);setProjectModal(true)}}>Diabetic Retinopathy </h2>
                        :program.title=='Data Science for Finance'
                        ?<h2 className='text-primary heading' onClick={() => {projectStatus(4,title);setProjectModal(true)}}>Revenue Forecasting </h2>
                        :program.title=='Deep Learning'
                        ?<h2 className='text-primary heading' onClick={() => {projectStatus(4,title);setProjectModal(true)}}> Image Caption Generator Project </h2>
                        :program.title=='Machine Learning With Python'
                        ?<h2 className='text-primary heading' onClick={() => {projectStatus(4,title);setProjectModal(true)}}>Lookalike model building </h2>
                        :program.title=='Data Analysis'
                        ?<h2 className='text-primary heading' onClick={() => {projectStatus(4,title);setProjectModal(true)}}>US Census 2020 </h2>
                        :program.title=='Python Preparatory Course'
                        ?<h2 className='text-primary heading' onClick={() => {projectStatus(4,title);setProjectModal(true)}}>Rock, paper, scissors game </h2>
                        :''
                      }
                    </div>
                    {/* <div className="text-alternate">
                      Lollipop apple pie lollipop toffee croissant. Sugar plum fruitcake cotton candy lemon drops. Carrot cake fruitcake dragée pie cotton candy
                      sesame snaps lollipop croissant.
                    </div> */}
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className="small-title">Mentors</h2>
      <Row xxl="4" xs="1">
        <Col>
          <Card className="mb-5">
            <Card.Body>
              <div className="d-flex align-items-center flex-column mb-4">
                <div className="d-flex align-items-center flex-column">
                  <div className="sw-13 position-relative mb-3">
                    <img src="/img/profile/ShobhitGupta.webp" className="img-fluid rounded-xl" alt="thumb" />
                  </div>
                  <div className="h5 mb-0">Shobhit Gupta</div>
                  <div className="text-muted"> Software Development Engineer @Fampay</div>
                  {/* <div className="text-muted mb-3">
                    <CsLineIcons icon="pin" className="me-1" />
                    <span className="align-middle">Montreal, Canada</span>
                  </div> */}
                </div>
                <Button size='xl' onClick={() => setMentor1(true)}>About</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-5">
            <Card.Body>
              <div className="d-flex align-items-center flex-column mb-4">
                <div className="d-flex align-items-center flex-column">
                  <div className="sw-13 position-relative mb-3">
                    <img src="/img/profile/Rohini_Jain.webp" className="img-fluid rounded-xl" alt="thumb" />
                  </div>
                  <div className="h5 mb-0">Rohini Jain</div>
                  <div className="text-muted">Software Architect @CISCO</div>
                  {/* <div className="text-muted mb-3">
                    <CsLineIcons icon="pin" className="me-1" />
                    <span className="align-middle">Montreal, Canada</span>
                  </div> */}
                </div>
                <Button size='xl' onClick={() => setMentor2(true)}>About</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-5">
            <Card.Body>
              <div className="d-flex align-items-center flex-column mb-4">
                <div className="d-flex align-items-center flex-column">
                  <div className="sw-13 position-relative mb-3">
                    <img src="/img/profile/EshankAgarwal.webp" className="img-fluid rounded-xl" alt="thumb" />
                  </div>
                  <div className="h5 mb-0">Eshank Agarwal</div>
                  <div className="text-muted">CEO @Jishu Excellence Pvt Ltd</div>
                  {/* <div className="text-muted mb-3">
                    <CsLineIcons icon="pin" className="me-1" />
                    <span className="align-middle">Montreal, Canada</span>
                  </div> */}
                </div>
                <Button size='xl' onClick={() => setMentor4(true)}>About</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-5">
            <Card.Body>
              <div className="d-flex align-items-center flex-column mb-4">
                <div className="d-flex align-items-center flex-column">
                  <div className="sw-13 position-relative mb-3">
                    <img src="/img/profile/Saurabh_Daund.webp" className="img-fluid rounded-xl" alt="thumb" />
                  </div>
                  <div className="h5 mb-0">Saurabh Daund</div>
                  <div className="text-muted">Data Scientist @Mroads</div>
                  {/* <div className="text-muted mb-3">
                    <CsLineIcons icon="pin" className="me-1" />
                    <span className="align-middle">Montreal, Canada</span>
                  </div> */}
                </div>
                <Button size='xl' onClick={() => setMentor3(true)}>About</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-5">
            <Card.Body>
              <div className="d-flex align-items-center flex-column mb-4">
                <div className="d-flex align-items-center flex-column">
                  <div className="sw-13 position-relative mb-3">
                    <img src="/img/profile/Dr.NishaKatyal.webp" className="img-fluid rounded-xl" alt="thumb" />
                  </div>
                  <div className="h5 mb-0">Dr. Nisha Katyal</div>
                  <div className="text-muted">Data Science Content Strategist</div>
                  {/* <div className="text-muted mb-3">
                    <CsLineIcons icon="pin" className="me-1" />
                    <span className="align-middle">Montreal, Canada</span>
                  </div> */}
                </div>
                <Button size='xl' onClick={() => setVerticallyCenteredScrollable(true)}>About</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
       
      </Row>

      <h2 className='small-title'>Mentor Videos</h2>
      <Row className='mb-5' xs="1" xxl="2">
        <Col className="mb-2">
          <PurePlyr />
        </Col>
        <Col>
          <PurePlyr1 />
        </Col>
      </Row>

      <Row className="mb-5">
        <h2 className="small-title">Tools Covered</h2>
        <Glide
          noControls
          options={{
            gap: 0,
            rewind: false,
            type: 'carousel',
            autoplay: 3000,
            hoverpause: false,
            animationDuration: 3000,
            animationTimingFunc: 'linear',
            perView: 6,
            breakpoints: {
              400: { perView: 1 },
              600: { perView: 3 },
              1400: { perView: 4 },
              1600: { perView: 6 },
              1900: { perView: 6 },
              3840: { perView: 8 },
            },
        }}>
          {['Pandas', 'Python', 'NumPy', 'Scikit_Learn', 'SciPy', 'SQL','ApacheSpark','OpenCV','Matplotlib','Tensorflow','Tableau','Excel','PowerBI','Keras','MongoDB'].map((brand, i) => (
            <Glide.Item key={`flow.${i}`} style = {{ margin : "auto 0px", padding : "0px 0px 0px 0px"}}>
              <Col>
                <div className="card hover-img-scale-up">
                <img src={`/img/Toolscovered/${brand}.webp`} className="img-fluid grayscale opacity-75 d-flex align-self-center" alt="logo" />
                </div>
              </Col>
            </Glide.Item>
          ))}
        </Glide>
      </Row>

      <h2 className="small-title">Career Guidance</h2>
      <Row xxl="2" xs="1" className="mb-5">
      <Col className="mb-2">
        <Card className="mb-2 h-100">
          <Card.Body>
            <Row className="row g-0">
              <Col xs="auto">
                <div className="d-inline-block d-flex">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl">
                    <div className="text-white d-flex justify-content-center align-items-center h-100">
                      <CsLineIcons icon="radish" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="d-flex flex-column ps-5 h-100 justify-content-start">
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-column justify-content-center sh-6">
                      <NavLink to="#" className="heading">
                      Profile Building
                      </NavLink>
                    </div>
                  </div>
                  <div className="mb-n2">
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                        Excelsior’s industry experts are the ultimate resource for anyone looking to build their profile
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                        Resume Building
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                        LinkedIn Profile Building
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                        Github Building
                        </NavLink>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        </Col>
        <Col className="mb-2">
        <Card className="mb-2 h-100">
          <Card.Body>
            <Row className="row g-0">
              <Col xs="auto">
                <div className="d-inline-block d-flex">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl">
                    <div className="text-white d-flex justify-content-center align-items-center h-100">
                      <CsLineIcons icon="radish" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="d-flex flex-column ps-5 h-100 justify-content-start">
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-column justify-content-center sh-6">
                      <NavLink to="#" className="heading">
                      Expert Sessions
                      </NavLink>
                    </div>
                  </div>
                  <div className="mb-n2">
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                        Excelsior offer expert advice on softskills and HR topics
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                        Counselling Sessions with Real Data Science experts
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                        Prepare for HR Interviews
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                        Learn Interviewers Psychology
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                        Develop Soft-Skills
                        </NavLink>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        </Col>
        <Col className="mb-2">
        <Card className="mb-2 h-100">
          <Card.Body>
            <Row className="row g-0">
              <Col xs="auto">
                <div className="d-inline-block d-flex">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl">
                    <div className="text-white d-flex justify-content-center align-items-center h-100">
                      <CsLineIcons icon="radish" />
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="d-flex flex-column ps-5 h-100 justify-content-start">
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-column justify-content-center sh-6">
                      <NavLink to="#" className="heading">
                      Mock Interviews
                      </NavLink>
                    </div>
                  </div>
                  <div className="mb-n2">
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                        Get an upper hand in a data science job interview? Prepare for high pressure interview scenarios.
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                        Live Interview Simulations
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                        Expert Feedbacks
                        </NavLink>
                      </Col>
                    </Row>
                    <Row className="g-0 mb-2">
                      <Col xs="auto">
                        <div className="sw-3 me-1">
                          <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                        </div>
                      </Col>
                      <Col className="lh-1-25">
                        <NavLink to="#" className="alternate-link align-top">
                        Prepare for real high pressure scenarios
                        </NavLink>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        </Col>
      </Row>

      <Pricing/>

      {/* <Row className="mb-5">
        <h2 className="small-title">Videos</h2>
        <PlayerBasic/>
      </Row> */}

      {/* <Row>
        <h2 className="small-title">Testimonials</h2>
        <BlogHome/>
      </Row> */}

    
      <h2 className="small-title">Blogs</h2> 
      <ThumbnailsIconContent type="/knowledge-centre/blogs/" items={ blogs } />

      {/* <h2 className="small-title">Other Programs</h2>
      <ThumbnailsIconContent type="/programs/" items={ programs } /> */}




      <h2 className="small-title">Frequently Asked Questions</h2>
      <section className="scroll-section">
      
      {faqs.map((faq, i) => {
        return (
          <Card className="mb-2 p-2">
            <Accordion flush>
              <Accordion.Header as="div">{faq.title}</Accordion.Header> 
              <Accordion.Body>
                <Accordion flush>
                {faq.subFaqs.map((subFaq,j) => {
                  return (
                    <Accordion.Item eventKey={j}>
                      <Accordion.Header as="div">{subFaq.ques}</Accordion.Header>
                      <Accordion.Body>{subFaq.ans}</Accordion.Body>
                    </Accordion.Item>
                );})}
                </Accordion>
              </Accordion.Body>
            </Accordion>
          </Card>
        );
    })}
      
      </section>

      <Modal show={Mentors1} onHide={() => setMentor1(false)} scrollable centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>About Mentor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          Shobhit Gupta is a Engineer with 15+ years of Experience. He started as analyst at goldman sachs and worked from 2007 to 2010.
          Then in 2012 he was upscaled as a Software Development Engineer at Microsoft till 2013.
          </p>
          <p>
          In 2014, due to his preservance & remarkable work, he was offered an job as Software Development Engineer by Amazon.</p>
<p>Then he became a Principal Software Engineer Manager at Yahoo for the next 3 years.
He also did Engineering at  Essential and then Uber from the time period of 2017 to 2020.</p>
<p></p>
<p>One of his lastest endeavours are  working at WhatsApp till 2021.</p>
<p></p>
<p>Currently he's Engineering at FamPay.</p>
          
          <p>
          So, here is the question. If there was a person who worked with Microsoft, Facebook, Amazon, Uber and Yahoo just to name a few and then he started working in Fampay as an Engineering Manager. </p><p>What kind of guidance would you expect from such a person? Would you be interested in asking him how to crack the interviews for these companies? Would this be an opportunity that would be difficult to miss on?? We believe it is definitely worth your effort.</p><p>
 If you are someone aspiring to work in any of the large tech companies, or aspire to work in the startup world, his guidance would be invaluable.
          </p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setMentor1(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={Mentors2} onHide={() => setMentor2(false)} scrollable centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>About Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          In a world where its hard to hold on to a job due to high pressure and fast pace. Rohini has been excelling at one of the biggest companies of the world, CISCO for over 10 years.</p><p>
Rohini Jain is a technology enthusiast, an experienced Software Architect and a mother of a school-going kid and a baby daughter.  She has a wealth of experience to share with the students : ranging from her college days at MNNIT Allahabad, to her 4 years in industry at ST Ericsson, her MS degree from University of Texas and almost 11 years of work experience at world’s largest networking company Cisco.  Rohini leads a team of software developers and software test engineers who are responsible for implementing automation solutions to make the process of testing software more efficient.</p><p>
She can guide you through every step of your journey and help you land your dream job as well as excel in it.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setMentor2(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={Mentors3} onHide={() => setMentor3(false)} scrollable centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>About Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          Saurabh Daund is a well experienced data scientist with a demonstrated history of working in the higher education industry. Skilled in Machine Learning, Deep learning, NLP, neural networks, LSTM, Data Analytics etc.</p><p> Passionate to technology and machine learning. Saurabh has developed several projects combining machine learning with computer vision and natural language processing to develop smart applications.</p><p> Currently, Saurabh works as a Data Scientist at mroads. His expertise include Deep Learning and other Machine Learning Techniques.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setMentor3(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={Mentors4} onHide={() => setMentor4(false)} scrollable centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>About Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          Eshank Agarwal is a successful data scientist, entrepreneur, educator and investor. He has more than 8 years of experience in the field of data science, machine learning and business analytics. He has worked for many fortune companies, one of them being Tata Steel.</p><p>He is the founder and ceo of Jishu Excellence private limited which is a data science consultancy company. He has consulted many startups in their journey from ideation to fund raising and is also the venture partner and advisory board member of "Read my course".</p><p>

          </p><p>Eshank has done his masters in statistics from IIT, Kharagpur. He is one of the best mentor at Excelsior where he teaches data science, machine learning and artificial intelligence. His students have gone to become very successful.</p><p> His one student got placed in an MNC as a data scientist just after completing Excelsior's data science course while another went on to start his own startup after getting trained from Excelsior academy.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setMentor4(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/**industry stats Modal */}
      <Modal show={industryStatsModal} onHide={() => setIndustryStatsModal(false)}  scrollable centered>
        <Modal.Header closeButton>
          <Modal.Title>{program.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* <p>{datascienceforit}</p> */}
        <div dangerouslySetInnerHTML={{ __html: industrystats }} />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIndustryStatsModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/**industry stats Modal */}
      {/* Program Overview Modal */}
      <Modal show={programOverviewModal} onHide={() => setProgramOverviewModal(false)}  scrollable centered>
        <Modal.Header closeButton>
          <Modal.Title>{program.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* <p>{datascienceforit}</p> */}
        <div dangerouslySetInnerHTML={{ __html: datascienceforit }} />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setProgramOverviewModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Program Overview Modal */}
      {/* Project Modal */}
      <Modal show={projectModal} onHide={() => setProjectModal(false)}  scrollable centered>
        <Modal.Header closeButton>
          <Modal.Title>{program.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div dangerouslySetInnerHTML={{ __html: projectstats }} />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setProjectModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Project Modal */}



      <Modal show={exampleModal} onHide={() => setExampleModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Week 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="d-flex flex-column mb-n4 text-start align-items-start w-100">
            <div className="mb-4">
              <p className="text-small text-muted mb-2">OBJECTIVES</p>
              <ol className="ps-3 mb-0">
                <li className="mb-1">Sugar plum gummi bears jujubes.</li>
                <li className="mb-1">Liquorice caramels apple pie chupa chups bonbon.</li>
                <li className="mb-1">Muffin sweet tootsie roll tart.</li>
                <li className="mb-1">Gingerbread pudding chocolate.</li>
              </ol>
            </div>
            <div className="mb-4">
              <p className="text-small text-muted mb-2">ACTIVITIES</p>
              <p className="mb-0">
                Gummies sugar plum cake pie muffin danish bear claw bear claw jelly-o. Chocolate icing biscuit. Lollipop chocolate cake jujubes pastry
                ice cream pie cotton candy cotton candy toffee. Liquorice croissant cupcake macaroon liquorice.
              </p>
            </div>
            <div className="mb-4">
              <p className="text-small text-muted mb-2">ASSIGNMENTS</p>
              <p className="mb-0">
                Pudding marshmallow chocolate gingerbread carrot cake apple pie jelly marzipan macaroon. Tart gummies topping biscuit.
              </p>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setExampleModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>



      <Modal show={currModal} onHide={() => setCurrModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Curriculum</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Accordion defaultActiveKey="1" flush>
              <Accordion.Item eventKey="1">
                <Accordion.Header as="div">Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's
                  accordion body.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header as="div">Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's
                  accordion body. Let's imagine this being filled with some actual content.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header as="div">Accordion Item #3</Accordion.Header>
                <Accordion.Body>
                  Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's
                  accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first
                  glance, a bit more representative of how this would look in a real-world application.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setCurrModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CoursesDetail;