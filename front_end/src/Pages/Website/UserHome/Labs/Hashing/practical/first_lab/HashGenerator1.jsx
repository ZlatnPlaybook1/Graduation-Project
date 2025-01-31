import React, { useState } from "react";
import { MD5, SHA1, SHA256 } from "crypto-js";
const HashGenerator = () => {
  const [input, setInput] = useState("");
  const [hashes, setHashes] = useState({
    md5: "",
    sha1: "",
    sha256: "",
  });

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setHashes({
      md5: MD5(value).toString(),
      sha1: SHA1(value).toString(),
      sha256: SHA256(value).toString(),
    });
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">Hash Generator</h2>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter text to hash"
          value={input}
          onChange={handleInputChange}
        />
        <div>
          <p className="text-muted">
            MD5: <code>{hashes.md5}</code>
          </p>
          <p className="text-muted">
            SHA-1: <code>{hashes.sha1}</code>
          </p>
          <p className="text-muted">
            SHA-256: <code>{hashes.sha256}</code>
          </p>
        </div>
      </div>
    </div>
  );
};
export default HashGenerator;
