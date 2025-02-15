const IncidentResponder = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h1 className="text-center text-primary mb-4">
          Who is an Incident Responder? What do they do?
        </h1>
        <p className="lead text-center">
          Incident responders are cybersecurity professionals who detect,
          investigate, and respond to security incidents. Their primary goal is
          to minimize damage and restore normal operations as quickly as
          possible.
        </p>
      </div>

      <div className="card mt-4 shadow-sm p-4">
        <h2 className="text-secondary">
          Incident Responder Responsibilities and Duties
        </h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Monitoring security events:</strong> Continuously analyzing
            logs and alerts for potential security breaches.
          </li>
          <li className="list-group-item">
            <strong>Investigating security incidents:</strong> Conducting
            forensic analysis to determine the root cause and scope of attacks.
          </li>
          <li className="list-group-item">
            <strong>Containing and mitigating threats:</strong> Implementing
            immediate response strategies to prevent further damage.
          </li>
          <li className="list-group-item">
            <strong>Developing incident response plans:</strong> Creating
            protocols to ensure a quick and efficient reaction to security
            threats.
          </li>
          <li className="list-group-item">
            <strong>Collaborating with cybersecurity teams:</strong> Working
            with security engineers, analysts, and management to improve
            defenses.
          </li>
        </ul>
      </div>

      <div className="card mt-4 shadow-sm p-4 bg-light">
        <h2 className="text-dark">
          Skills Needed to Become an Incident Responder
        </h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Threat Intelligence</li>
          <li className="list-group-item">Digital Forensics</li>
          <li className="list-group-item">Network Security</li>
          <li className="list-group-item">Malware Analysis</li>
          <li className="list-group-item">Intrusion Detection</li>
          <li className="list-group-item">Incident Handling</li>
          <li className="list-group-item">
            Soft skills: Communication, Problem-Solving, Attention to Detail
          </li>
        </ul>
      </div>

      <div className="card mt-4 shadow-sm p-4">
        <h2 className="text-success">Salary of an Incident Responder</h2>
        <p>
          Incident responders earn competitive salaries, with the average annual
          wage in the U.S. being <strong>$95,000+</strong>. Other reports
          indicate:
        </p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            ZipRecruiter: <strong>$100,000</strong> annually (2023)
          </li>
          <li className="list-group-item">
            Glassdoor: <strong>$90,000</strong> annually (2023)
          </li>
        </ul>
      </div>

      <div className="card mt-4 shadow-sm p-4 bg-light">
        <h2 className="text-danger">Incident Responder Certifications</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Certified Incident Handler (GCIH) by GIAC
          </li>
          <li className="list-group-item">
            Certified Information Systems Security Professional (CISSP)
          </li>
          <li className="list-group-item">Certified Ethical Hacker (CEH)</li>
          <li className="list-group-item">
            CompTIA Cybersecurity Analyst (CySA+)
          </li>
        </ul>
      </div>

      <div className="card mt-4 shadow-lg p-4">
        <h2 className="text-warning">Summing up the Incident Responder Role</h2>
        <p>
          Incident responders are critical in detecting and mitigating cyber
          threats. Their expertise helps businesses:
        </p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Quickly identify and contain security breaches.
          </li>
          <li className="list-group-item">
            Conduct forensic analysis to improve security defenses.
          </li>
          <li className="list-group-item">
            Enhance organizational preparedness against cyber threats.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IncidentResponder;
