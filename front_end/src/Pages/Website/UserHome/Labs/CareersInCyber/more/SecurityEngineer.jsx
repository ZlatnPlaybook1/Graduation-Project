import { useState } from "react";

const SecurityEngineer = () => {
    return (
        <div className="container mt-5">
            <div className="card shadow-lg p-4">
                <h1 className="text-center text-primary mb-4">Who is a Security Engineer? What do they do?</h1>
                <p className="lead text-center">
                    Security engineers are responsible for designing, implementing, and maintaining security systems to protect an organization's IT infrastructure. They develop security measures to safeguard against cyber threats and ensure system resilience.
                </p>
            </div>

            <div className="card mt-4 shadow-sm p-4">
                <h2 className="text-secondary">Security Engineer Responsibilities and Duties</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Developing security systems:</strong> Designing and implementing security protocols to protect networks and data.</li>
                    <li className="list-group-item"><strong>Monitoring for threats:</strong> Continuously assessing security systems for vulnerabilities and threats.</li>
                    <li className="list-group-item"><strong>Performing penetration testing:</strong> Conducting simulated attacks to test the resilience of security measures.</li>
                    <li className="list-group-item"><strong>Responding to security incidents:</strong> Investigating breaches and mitigating potential risks.</li>
                    <li className="list-group-item"><strong>Collaborating with IT teams:</strong> Working with developers and administrators to ensure security best practices.</li>
                </ul>
            </div>

            <div className="card mt-4 shadow-sm p-4 bg-light">
                <h2 className="text-dark">Skills Needed to Become a Security Engineer</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Network Security</li>
                    <li className="list-group-item">Programming (Python, C, Java)</li>
                    <li className="list-group-item">Cryptography</li>
                    <li className="list-group-item">Penetration Testing</li>
                    <li className="list-group-item">Incident Response</li>
                    <li className="list-group-item">Cloud Security</li>
                    <li className="list-group-item">Soft skills: Communication, Problem-Solving, Analytical Thinking</li>
                </ul>
            </div>

            <div className="card mt-4 shadow-sm p-4">
                <h2 className="text-success">Salary of a Security Engineer</h2>
                <p>
                    Security engineers earn competitive salaries, with the average annual wage in the U.S. being <strong>$110,000+</strong>. Other reports indicate:
                </p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">ZipRecruiter: <strong>$120,000</strong> annually (2023)</li>
                    <li className="list-group-item">Glassdoor: <strong>$105,000</strong> annually (2023)</li>
                </ul>
            </div>

            <div className="card mt-4 shadow-sm p-4 bg-light">
                <h2 className="text-danger">Security Engineer Certifications</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Certified Information Systems Security Professional (CISSP)</li>
                    <li className="list-group-item">Certified Ethical Hacker (CEH)</li>
                    <li className="list-group-item">Offensive Security Certified Professional (OSCP)</li>
                    <li className="list-group-item">CompTIA Security+</li>
                </ul>
            </div>

            <div className="card mt-4 shadow-lg p-4">
                <h2 className="text-warning">Summing up the Security Engineer Role</h2>
                <p>
                    Security engineers play a crucial role in safeguarding an organization’s IT environment. Their expertise helps businesses:
                </p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Develop and implement strong security measures.</li>
                    <li className="list-group-item">Detect and respond to cyber threats efficiently.</li>
                    <li className="list-group-item">Ensure compliance with industry security standards.</li>
                </ul>
            </div>
        </div>
    );
};

export default SecurityEngineer;
