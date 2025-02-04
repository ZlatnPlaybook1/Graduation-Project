import { useState } from "react";

const DigitalForensicsExaminer = () => {
    return (
        <div className="container mt-5">
            <div className="card shadow-lg p-4">
                <h1 className="text-center text-primary mb-4">Who is a Digital Forensics Examiner? What do they do?</h1>
                <p className="lead text-center">
                    Digital Forensics Examiners specialize in investigating cybercrimes by analyzing digital evidence. Their work is crucial in legal cases, corporate investigations, and cybersecurity incidents.
                </p>
            </div>

            <div className="card mt-4 shadow-sm p-4">
                <h2 className="text-secondary">Digital Forensics Examiner Responsibilities and Duties</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Collecting digital evidence:</strong> Acquiring and preserving electronic data from various sources.</li>
                    <li className="list-group-item"><strong>Analyzing compromised systems:</strong> Examining devices to identify the source and impact of cyber incidents.</li>
                    <li className="list-group-item"><strong>Recovering lost or deleted data:</strong> Using forensic tools to retrieve crucial digital information.</li>
                    <li className="list-group-item"><strong>Preparing forensic reports:</strong> Documenting findings for legal or corporate proceedings.</li>
                    <li className="list-group-item"><strong>Collaborating with law enforcement:</strong> Assisting agencies in cybercrime investigations.</li>
                </ul>
            </div>

            <div className="card mt-4 shadow-sm p-4 bg-light">
                <h2 className="text-dark">Skills Needed to Become a Digital Forensics Examiner</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Computer Forensics</li>
                    <li className="list-group-item">Network Security</li>
                    <li className="list-group-item">Malware Analysis</li>
                    <li className="list-group-item">Cryptography</li>
                    <li className="list-group-item">Incident Response</li>
                    <li className="list-group-item">Legal and Regulatory Knowledge</li>
                    <li className="list-group-item">Soft skills: Analytical Thinking, Attention to Detail, Problem-Solving</li>
                </ul>
            </div>

            <div className="card mt-4 shadow-sm p-4">
                <h2 className="text-success">Salary of a Digital Forensics Examiner</h2>
                <p>
                    Digital Forensics Examiners earn competitive salaries, with the average annual wage in the U.S. being <strong>$95,000+</strong>. Other reports indicate:
                </p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">ZipRecruiter: <strong>$98,000</strong> annually (2023)</li>
                    <li className="list-group-item">Glassdoor: <strong>$85,000</strong> annually (2023)</li>
                </ul>
            </div>

            <div className="card mt-4 shadow-sm p-4 bg-light">
                <h2 className="text-danger">Digital Forensics Examiner Certifications</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Certified Computer Examiner (CCE)</li>
                    <li className="list-group-item">GIAC Certified Forensic Examiner (GCFE)</li>
                    <li className="list-group-item">Certified Forensic Computer Examiner (CFCE)</li>
                    <li className="list-group-item">EnCase Certified Examiner (EnCE)</li>
                </ul>
            </div>

            <div className="card mt-4 shadow-lg p-4">
                <h2 className="text-warning">Summing up the Digital Forensics Examiner Role</h2>
                <p>
                    Digital Forensics Examiners play a vital role in cybercrime investigations, helping organizations and law enforcement:
                </p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Recover and analyze digital evidence.</li>
                    <li className="list-group-item">Identify and track cybercriminal activities.</li>
                    <li className="list-group-item">Ensure legal compliance in investigations.</li>
                </ul>
            </div>
        </div>
    );
};

export default DigitalForensicsExaminer;