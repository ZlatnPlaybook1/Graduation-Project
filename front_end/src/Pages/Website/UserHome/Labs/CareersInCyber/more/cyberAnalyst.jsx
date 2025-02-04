import { useState } from "react";

const SecurityAnalyst = () => {
    return (
        <div className="container mt-5">
            <div className="card shadow-lg p-4">
                <h1 className="text-center text-primary mb-4">Who is a Security Analyst? What do they do?</h1>
                <p className="lead text-center">
                    Security analysts are experts who identify and fix problems within security systems by analyzing risks, vulnerabilities, threats, and incidents. They perform in-depth security assessments to recommend solutions for preventing cyberattacks.
                </p>
            </div>

            <div className="card mt-4 shadow-sm p-4">
                <h2 className="text-secondary">Security Analyst Responsibilities and Duties</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Securing the company’s assets:</strong> Protecting sensitive data, including customer and employee information.</li>
                    <li className="list-group-item"><strong>Overseeing the systems:</strong> Monitoring and ensuring systems are up to date with the latest security patches.</li>
                    <li className="list-group-item"><strong>Performing security assessments:</strong> Conducting vulnerability tests and risk analysis to detect weaknesses.</li>
                    <li className="list-group-item"><strong>Analyzing data breaches:</strong> Investigating incidents to determine the cause and strengthen security controls.</li>
                    <li className="list-group-item"><strong>Collaborating with third-party vendors:</strong> Ensuring compliance with security standards.</li>
                </ul>
            </div>

            <div className="card mt-4 shadow-sm p-4 bg-light">
                <h2 className="text-dark">Skills Needed to Become a Security Analyst</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Ethical hacking</li>
                    <li className="list-group-item">Data scripting (Python, PowerShell)</li>
                    <li className="list-group-item">Intrusion prevention and monitoring</li>
                    <li className="list-group-item">Incident response and management</li>
                    <li className="list-group-item">Computer forensics</li>
                    <li className="list-group-item">Reverse engineering and malware analysis</li>
                    <li className="list-group-item">Soft skills: Analytical thinking, problem-solving, communication</li>
                </ul>
            </div>

            <div className="card mt-4 shadow-sm p-4">
                <h2 className="text-success">Salary of a Security Analyst</h2>
                <p>
                    The median annual wage for Information Security Analysts was <strong>$102,600</strong> in May 2021. Other reports indicate:
                </p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">ZipRecruiter: <strong>$93,645</strong> annually (April 2023)</li>
                    <li className="list-group-item">Glassdoor: <strong>$78,213</strong> annually (April 2023)</li>
                </ul>
            </div>

            <div className="card mt-4 shadow-sm p-4 bg-light">
                <h2 className="text-danger">Security Analyst Certifications</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">CompTIA Cybersecurity Analyst (CySA+)</li>
                    <li className="list-group-item">CCIE Security by Cisco</li>
                    <li className="list-group-item">CISSP by ISC2</li>
                    <li className="list-group-item">GIAC Information Security Fundamentals (GISF)</li>
                </ul>
            </div>

            <div className="card mt-4 shadow-lg p-4">
                <h2 className="text-warning">Summing up the Security Analyst Role</h2>
                <p>
                    Companies should hire security analysts to protect their sensitive information and prevent cyberattacks. With the increasing frequency of cyber threats, having dedicated security analysts ensures the organization’s ability to:
                </p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Identify vulnerabilities in systems and applications.</li>
                    <li className="list-group-item">Detect and respond to security incidents efficiently.</li>
                    <li className="list-group-item">Stay ahead of emerging cybersecurity threats.</li>
                </ul>
            </div>
        </div>
    );
};

export default SecurityAnalyst;
