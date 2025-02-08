import React, { useState } from "react";

function EditInfo() {
  const [exploit, setExploit] = useState("");

  const handleEmailUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = { email: formData.get("email") };
    const res = await fetch(
      "http://127.0.0.1:8080/api/clickJackLab1-edit-info",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data),
      }
    );
    if (res.ok) {
      alert("Email updated successfully");
    } else {
      alert("Error updating email");
    }
  };

  const handleExploitSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "http://127.0.0.1:8080/api/clickJackLab1-apply-exploit",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ exploitCode: exploit }),
      }
    );
    if (res.ok) {
      // Optionally redirect or display the injected page
      const html = await res.text();
      document.body.innerHTML = html;
    } else {
      alert("Error applying exploit");
    }
  };

  return (
    <div>
      <h1>Edit Info</h1>
      <form onSubmit={handleEmailUpdate}>
        <input type="email" name="email" placeholder="New Email" required />
        <br />
        <button type="submit">Update Email</button>
      </form>
      <hr />
      <h2>Exploit Panel</h2>
      <form onSubmit={handleExploitSubmit}>
        <textarea
          rows="10"
          cols="50"
          placeholder="Paste your HTML & CSS here"
          value={exploit}
          onChange={(e) => setExploit(e.target.value)}
        />
        <br />
        <button type="submit">Apply Exploit</button>
      </form>
    </div>
  );
}

export default EditInfo;
