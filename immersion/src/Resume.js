import React from 'react';
import './Resume.css'; // Import the CSS file for styling

const Education = () => (
    <div>
        <h2>EDUCATION</h2>
        <p>
            Bachelor of Science, Computer Science | University of Washington-Seattle
            <br />
            Expected June 2024
        </p>
        <p>
            Relevant Coursework: Foundations of Computing I-II, Software Design and Implementation, Data Structures and Parallelism, The Hardware Software Interface, System and Software Tools, Intro to Web Development, Intro to Systems, Design, and Technology
        </p>
    </div>
);

const Skills = () => (
    <div>
        <h2>SKILLS</h2>
        <h3>Programming Languages</h3>
        <p>Java, Python, JavaScript, HTML/CSS, C</p>
        <h3>Tools/Frameworks</h3>
        <p>React, Node.js, Jupyter Notebook, Visual Studio Code, IntelliJ, TensorFlow, SQL, 3D Slicer, MacOS, Command-Line tools, Linux, Azure, RESTAPIs</p>
    </div>
);

const Experience = () => (
    <div>
        <h2>EXPERIENCE</h2>
        <h3>Machine Learning Intern</h3>
        <p>June 2022 - August 2022</p>
        <p>Radlink Digital Radiography, Los Angeles, CA</p>
        <ul>
            <li>
                Part of a team developing a computer vision model that generates 3D hip/ankle models for intra-operative use.
                Built with Python, Jupyter Notebook, and TensorFlow.
            </li>
            <li>
                Achieved 50% speed-up for 3D-model generations through a nearest neighbor post-processing algorithm.
            </li>
            <li>
                Doubled functional test set by hand-modeling cases using 3D Slicer. Improved modeling techniques and trained a co-worker, decreasing test case generation time by half.
            </li>
        </ul>

        <h3>Teaching Assistant</h3>
        <p>April 2022 - June 2022</p>
        <p>University of Washington, Seattle, WA</p>
        <ul>
            <li>
                One of 12 TAs for Introduction to Web Development. Co-led 2 weekly quiz sections and weekly office hours.
            </li>
            <li>
                Taught 20+ students the basics of full-stack web development, SQL, Node.js, and other industry standards.
            </li>
            <li>
                Effectively communicated to students 2-3 concepts weekly and demonstrated debugging techniques.
            </li>
            <li>
                Graded 10+ assignments per week practicing quick, efficient code review.
            </li>
        </ul>
    </div>
);

const Projects = () => (
    <div>
        <h2>PROJECTS</h2>

        <h3>Campus Path Finder</h3>
        <ul>
            <li>
                Class project for Software Design and Implementation.
            </li>
            <li>
                Full-stack application that finds the fastest path on the UW campus using Dijkstra’s Algorithm with 100% accuracy.
            </li>
            <li>
                Created a GUI using React and Typescript. Implemented a Graph data structure, Spark server, and Dijkstra’s algorithm in Java.
            </li>
        </ul>

        <h3><a href="https://maxbeard.pythonanywhere.com">Trending Topic Webpage</a></h3>
        <ul>
            <li>
                Built a website to compile information on trending topics using 3 different APIs.
            </li>
            <li>
                End-to-end project utilizing Python, Flask, and HTML. Currently hosted by Python Anywhere.
            </li>
            <li>
                Fetches information from the NYTimes API, Twitter API, and Pytrends API to dynamically generate relevant information.
            </li>
        </ul>
        <h3>Hive Mind</h3>
        <ul>
            <li>
                Human Computer Interaction team project that prototyped a hardware/software platform to provide analytical insights for beekeepers
            </li>
            <li>
                10 week design challenge that required problem setting, research, and iterative design
            </li>
            <li>
                Accomplished 3 interviews with local, 5 user tests, and a hardware and software prototype. Finished project on <a href="https://www.figma.com/file/qqV6NtrJevYqQxZRkVeOL4/Hive-Mind%3A-CSE-440-Final-Project?type=design&node-id=17%3A2&t=biLuJQc0gftbW882-1">Figma</a>
            </li>
        </ul>
        <h3>Chassis Engineer</h3>
        <ul>
            <li>
                Chassis engineer for UWashington Formula Motorsports during Sophomore year. Built many friendships as well as a highly performing F1 car.
            </li>
            <li>
                Designed and manufactured carbon fiber components. Integrated feedback from peers through 2 rounds of design reviews.
            </li>
            <li>
                Achieved a 15% greater strength to weight ratio by analyzing results of stress tests.
            </li>
        </ul>

    </div>
);

const Resume = () => (
    <div className="resume-container">
        <h1>Max Beard</h1>
        <p className="contact-info">
            Seattle ⋄ +1(217) 414-1490 ⋄ maxbeard@uw.edu ⋄ linkedin.com/max-beard ⋄ maxbeard.pythonanywhere.com/
        </p>

        <Education />
        <Skills />
        <Experience />
        <Projects />
    </div>
);

export default Resume;
