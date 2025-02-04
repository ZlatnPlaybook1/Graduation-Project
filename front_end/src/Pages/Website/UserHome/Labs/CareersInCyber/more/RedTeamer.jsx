import { useState } from "react";

const RedTeamer = () => {
    return (
        <div className="container mt-5">
            <div className="card shadow-lg p-4">
                <h1 className="text-center text-primary mb-4">Who is a Red Teamer? What do they do?</h1>
                <p className="lead text-center">
                    Red Teamers are cybersecurity professionals who simulate real-world attacks to test an organization's security defenses, uncover vulnerabilities, and improve overall resilience against cyber threats.
                </p>
            </div>

            <div className="card mt-4 shadow-sm p-4">
                <h2 className="text-secondary">Red Teamer Responsibilities and Duties</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Conducting advanced adversarial simulations:</strong> Emulating real-world attack techniques to test security postures.</li>
                    <li className="list-group-item"><strong>Performing covert operations:</strong> Testing physical, social engineering, and digital security defenses.</li>
                    <li className="list-group-item"><strong>Collaborating with Blue Teams:</strong> Assisting defensive teams in understanding weaknesses and improving security measures.</li>
                    <li className="list-group-item"><strong>Developing attack strategies:</strong> Researching and implementing new offensive security techniques.</li>
                    <li className="list-group-item"><strong>Documenting and reporting findings:</strong> Providing actionable recommendations to strengthen security defenses.</li>
                </ul>
            </div>

            <div className="card mt-4 shadow-sm p-4 bg-light">
                <h2 className="text-dark">Skills Needed to Become a Red Teamer</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Advanced Penetration Testing and Exploitation Techniques</li>
                    <li className="list-group-item">Social Engineering and Physical Security Testing</li>
                    <li className="list-group-item">Threat Intelligence and Attack Simulations</li>
                    <li className="list-group-item">Malware Development and Evasion Tactics</li>
                    <li className="list-group-item">Scripting and Automation (Python, PowerShell, Bash)</li>
                </ul>
            </div>

            <div className="card mt-4 shadow-sm p-4">
                <h2 className="text-success">Salary of a Red Teamer</h2>
                <p>
                    Red Teamers command high salaries due to their specialized skills, with the average annual wage in the U.S. being <strong>$120,000+</strong>. Other reports indicate:
                </p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">ZipRecruiter: <strong>$130,000</strong> annually (2023)</li>
                    <li className="list-group-item">Glassdoor: <strong>$115,000</strong> annually (2023)</li>
                </ul>
            </div>

            <div className="card mt-4 shadow-sm p-4 bg-light">
                <h2 className="text-danger">Red Teamer Certifications</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Certified Red Team Professional (CRTP)</li>
                    <li className="list-group-item">Offensive Security Certified Expert (OSCE)</li>
                    <li className="list-group-item">GIAC Red Team Professional (GRT)</li>
                    <li className="list-group-item">Certified Ethical Hacker (CEH) Master</li>
                </ul>
            </div>

            <div className="card mt-4 shadow-lg p-4">
                <h2 className="text-warning">Summing up the Red Teamer Role</h2>
                <p>
                    Red Teamers play a critical role in cybersecurity by proactively identifying and mitigating security risks. They help organizations:
                </p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Simulate real-world attacks to test security defenses.</li>
                    <li className="list-group-item">Enhance detection and response capabilities.</li>
                    <li className="list-group-item">Improve overall cybersecurity resilience.</li>
                </ul>
            </div>
        </div>
    );
};

export default RedTeamer;