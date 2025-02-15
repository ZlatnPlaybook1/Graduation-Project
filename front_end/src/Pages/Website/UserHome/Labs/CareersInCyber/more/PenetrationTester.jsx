const PenetrationTester = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h1 className="text-center text-primary mb-4">
          Who is a Penetration Tester? What do they do?
        </h1>
        <p className="lead text-center">
          Penetration Testers, also known as ethical hackers, simulate
          cyberattacks on systems, networks, and applications to identify
          security vulnerabilities before malicious hackers can exploit them.
        </p>
      </div>

      <div className="card mt-4 shadow-sm p-4">
        <h2 className="text-secondary">
          Penetration Tester Responsibilities and Duties
        </h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Conducting security assessments:</strong> Performing
            controlled cyberattacks to test security defenses.
          </li>
          <li className="list-group-item">
            <strong>Identifying vulnerabilities:</strong> Scanning and analyzing
            networks, applications, and systems for weaknesses.
          </li>
          <li className="list-group-item">
            <strong>Exploiting security flaws:</strong> Attempting to breach
            security defenses ethically to demonstrate risks.
          </li>
          <li className="list-group-item">
            <strong>Documenting findings:</strong> Writing detailed reports on
            vulnerabilities and recommendations for remediation.
          </li>
          <li className="list-group-item">
            <strong>Collaborating with security teams:</strong> Assisting
            organizations in strengthening security postures.
          </li>
        </ul>
      </div>

      <div className="card mt-4 shadow-sm p-4 bg-light">
        <h2 className="text-dark">
          Skills Needed to Become a Penetration Tester
        </h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Ethical Hacking and Exploitation Techniques
          </li>
          <li className="list-group-item">
            Network Security and Web Application Security
          </li>
          <li className="list-group-item">
            Scripting and Automation (Python, Bash, PowerShell)
          </li>
          <li className="list-group-item">
            Understanding of Operating Systems (Linux, Windows, macOS)
          </li>
          <li className="list-group-item">
            Social Engineering and Physical Security Testing
          </li>
        </ul>
      </div>

      <div className="card mt-4 shadow-sm p-4">
        <h2 className="text-success">Salary of a Penetration Tester</h2>
        <p>
          Penetration Testers earn competitive salaries, with the average annual
          wage in the U.S. being <strong>$110,000+</strong>. Other reports
          indicate:
        </p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            ZipRecruiter: <strong>$120,000</strong> annually (2023)
          </li>
          <li className="list-group-item">
            Glassdoor: <strong>$105,000</strong> annually (2023)
          </li>
        </ul>
      </div>

      <div className="card mt-4 shadow-sm p-4 bg-light">
        <h2 className="text-danger">Penetration Tester Certifications</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Certified Ethical Hacker (CEH)</li>
          <li className="list-group-item">
            Offensive Security Certified Professional (OSCP)
          </li>
          <li className="list-group-item">GIAC Penetration Tester (GPEN)</li>
          <li className="list-group-item">
            Licensed Penetration Tester (LPT) Master
          </li>
        </ul>
      </div>

      <div className="card mt-4 shadow-lg p-4">
        <h2 className="text-warning">Summing up the Penetration Tester Role</h2>
        <p>
          Penetration Testers are crucial for organizations to ensure security
          against cyber threats. They help organizations:
        </p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Identify vulnerabilities in networks, applications, and systems.
          </li>
          <li className="list-group-item">
            Test and strengthen security defenses.
          </li>
          <li className="list-group-item">
            Enhance cybersecurity strategies to prevent real-world attacks.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PenetrationTester;
