import React from "react";
import "../Page_Styles/Content.css";
import Header from "../../Header/Header";
import background from "../../assets/img/background.png";
import imagecourse from "../../assets/img/JWT attacks/course_image.png";
import Footer from "../../Footer/Footer";
import exampleImage1 from "../../assets/img/JWT attacks/image_1.webp";
import exampleImage2 from "../../assets/img/JWT attacks/image_2.webp";
import UseFaqSection from "../../UseFaqSection/UseFaqSection.jsx";
import LandingLab from "../../LandingLab/LandingLab.jsx";
export default function JWTAttacks() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  return (
    <>
      <Header />
      {/* Start Landing  */}
      <LandingLab
        background={background}
        imagecourse={imagecourse}
        courseTitle="JWT Attacks"
        courseDescription="Master the basics of JWT Attacks, a powerful technique for
                securing code and protecting intellectual property in
                cybersecurity environments."
        difficulty="Intermediate"
        duration="30 min"
        onSaveRoom={() => console.log("Room Saved!")}
        onLike={() => console.log("Liked!")}
        onDislike={() => console.log("Disliked!")}
      />
      {/* End Landing  */}
      {/* Start Course Content  */}
      <div className="course-labd">
        <div className="container" ref={faqSectionRef}>
          <div className="row">
            <div className="faq-section-labd">
              <dl className="section-text-labd">
                {/* Single FAQ Area  */}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 1</span> Introduction
                </dt>
                <dd className="fadeInUp faq-body-labd" id="border-left">
                  <h1>Welcome to JWT Attacks</h1>

                  <h2>What will you learn?</h2>
                  <ol>
                    <li>What are Obfuscation & Deobfuscation?</li>
                    <li>Why do we use Obfuscation?</li>
                    <li>Javascript Obfuscation </li>
                    <li>JS Deobfuscation Tools</li>
                  </ol>
                </dd>

                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 2</span> Token-Based Authentication
                </dt>
                <dd className="fadeInUp faq-body-labd" id="border-left">
                  <div className="subject-section">
                    <p>
                      <b>APIs</b> — those behind-the-scenes heroes of modern
                      tech — are like your favorite universal remote control.
                      They work across devices, apps, and platforms, saving
                      everyone from the chaos of having 10 different remotes (or
                      in this case, interfaces). Want a web app and a mobile app
                      talking to the same backend? <b>APIs</b> got you covered.
                      Want server-side security neatly wrapped up in one spot?{" "}
                      <b>APIs</b> again. They’re like the Swiss Army knives of
                      the digital world.
                    </p>
                    <p>
                      But wait — <b>cookies</b> weren’t invited to this party.
                      Why? Because
                      <b>APIs</b> aren’t picky eaters like browsers. They don’t
                      naturally gobble <b>cookies</b>, which made developers
                      scratch their heads and invent{" "}
                      <span>token-based session management</span>.
                    </p>
                  </div>
                  <div className="subject-section">
                    <h4>Tokens: The Shiny New Coins of the API Realm</h4>
                    <p>
                      <b>Tokens</b> are like those VIP wristbands you get at
                      exclusive events — proof you’re authenticated and ready to
                      access the cool stuff. Unlike <b>cookies</b>,{" "}
                      <b>tokens</b> don’t depend on browsers to manage them.
                      Instead, they chill in your LocalStorage until it’s time
                      to flash them at the gates (or, you know, the <b>APIs</b>
                      ). One of the fanciest <b>tokens</b> is the{" "}
                      <span>JSON Web Token (JWT)</span>, the Beyoncé of{" "}
                      <span>session management</span>, carried proudly in the{" "}
                      <code>Authorization: Bearer</code>
                      <span>header</span>.
                    </p>
                  </div>
                  <div className="subject-section">
                    <h4>The API Playground</h4>
                    <p>
                      Enter the <b>API</b> room, a sandbox where you’ll exploit{" "}
                      <b>APIs</b>
                      like a pro. No accounts or fancy tools needed — just a
                      <b>Python Flask API</b>, your wits, and a lot of{" "}
                      <b>cURL</b> commands. The mission? Crack open those{" "}
                      <b>API</b> endpoints, swipe some
                      <b>JWTs</b>, escalate privileges, and snatch those task
                      flags like a cybersecurity Indiana Jones.
                    </p>
                    <h2>Here's the Cheat Sheet:</h2>
                    <ol>
                      <li>
                        <div className="terminal-container">
                          <div className="terminal-content">
                            <div className="terminal-top">
                              <b>POST to Authenticate:</b>Send your credentials
                              (username: user, password: passwordX) to get a
                              shiny <b>JWT</b>.
                            </div>
                            <pre
                              className="terminal-codelanguage-shell-session"
                              tabIndex="0"
                            >
                              <code className="language-shell-session">
                                <span className="token command-c">
                                  <span className="token info punctuation">
                                    <span className="token user">
                                      curl -H 'Content-Type: application/json'
                                    </span>
                                  </span>
                                </span>
                                <span className="token command-c">
                                  <span className="token info punctuation">
                                    <span className="token user">
                                      -X POST -d{" "}
                                      {
                                        '{ "username" : "user", "password" : "passwordX" }'
                                      }
                                    </span>
                                  </span>
                                </span>
                                <span className="token command-c">
                                  <span className="token info punctuation">
                                    <span className="token user">
                                      http://10.10.242.49/api/v1.0/exampleX
                                    </span>
                                  </span>
                                </span>
                              </code>
                            </pre>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="terminal-container">
                          <div className="terminal-content">
                            <div className="terminal-top">
                              <b>GET to Verify:</b>Use the<b>JWT</b> to prove
                              your admin chops and grab that flag.
                            </div>
                            <pre
                              className="terminal-codelanguage-shell-session"
                              tabIndex="0"
                            >
                              <code className="language-shell-session">
                                <span className="token command-c">
                                  <span className="token info punctuation">
                                    <span className="token user">
                                      curl -H 'Authorization: Bearer [JWT
                                      token]'
                                    </span>
                                  </span>
                                </span>
                                <span className="token command-c">
                                  <span className="token info punctuation">
                                    <span className="token user">
                                      http://10.10.242.49/api/v1.0/example2?username=Y
                                    </span>
                                  </span>
                                </span>
                              </code>
                            </pre>
                          </div>
                        </div>
                        <p>
                          The ultimate goal? Level up from regular user to admin
                          superhero and unlock your prize. And yes, you’ll do
                          this for every example, because practice makes perfect
                          (and also gets you more flags).
                        </p>
                      </li>
                      <p className="note">
                        <b>Pro Tip:</b>Keep an eye on those permissions, and
                        don’t forget to replace placeholders like passwordX and{" "}
                        <code>[JWT token]</code>. <span>APIs</span> don’t
                        respond well to “close enough.”
                      </p>
                      <p>
                        So gear up, grab your tokens, and get ready to conquer
                        the <span>API</span> universe — one endpoint at a time.
                      </p>
                    </ol>
                  </div>
                </dd>

                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 3</span>JSON Web Tokens
                </dt>
                <dd className="fadeInUp faq-body-labd" id="border-left">
                  <div className="subject-section">
                    <img src={exampleImage1} alt="Example" />
                    <p>
                      Imagine you’re at an exclusive party. You flash a fancy
                      wristband at the bouncer, and they immediately know you’re
                      legit. That’s how <b>JSON Web Tokens (JWTs)</b> work in
                      the digital world — they’re self-contained tokens that
                      scream, “I’m authenticated, let me in!”
                    </p>
                  </div>
                  <div className="subject-section">
                    <h2>What is inside a JWT?</h2>
                    <p>
                      A <b>JWT</b> is like a digital sandwich, neatly split into
                      three layers (and yes, they’re <b>Base64Url</b> encoded
                      for extra nerd flair):
                    </p>
                    <ol>
                      <li>
                        <b>Header:</b> The top bun, where you declare what kind
                        of sandwich (<b>token</b>) this is and how it’s signed.
                        Typical ingredients include “alg”: “HS256” and “typ”:
                        “JWT”.
                      </li>
                      <li>
                        <b>Payload:</b> The meat (or tofu, for our vegans). It’s
                        packed with claims — fancy talk for bits of info like
                        user roles or session details. Some claims are standard,
                        others are custom, and developers can toss in anything
                        they want (though we’re not judging their culinary
                        skills here).
                      </li>
                      <li>
                        <b>Signature:</b> The spicy sauce. This proves the
                        sandwich hasn’t been tampered with. It’s created using
                        the <b>header</b>, <b>payload</b>, and a secret recipe (
                        <b>key</b>).
                      </li>
                    </ol>
                  </div>
                  <div className="subject-section">
                    <h2>Signing Algorithms: The Sauce Varieties</h2>
                    <p>
                      <b>JWTs</b> get their authenticity from the signature, and
                      there are three main styles:
                    </p>
                    <ol>
                      <li>
                        <b>None:</b> Yup, no sauce at all. It’s basically
                        handing over a plain sandwich and hoping no one notices.
                        Spoiler: this is a terrible idea for security.
                      </li>
                      <li>
                        <b>Symmetric Signing (HS256):</b> The sauce is made with
                        a shared secret key. Both the creator and verifier need
                        to know the secret recipe. Great for cozy, in-house
                        parties.
                      </li>
                      <li>
                        <b>Asymmetric Signing (RS256):</b> Now we’re fancy. The
                        sauce is made with a <b>private key</b> and verified
                        with a matching <b>public key</b>. Perfect for big,
                        exclusive events where you can’t trust everyone with the
                        recipe.
                      </li>
                    </ol>
                  </div>
                  <div className="subject-section">
                    <h2>Why JWTs Are Awesome</h2>
                    <p>
                      The real power of <b>JWTs</b> lies in their signature.
                      Once signed, they can travel around freely — like a VIP
                      pass that works across apps. A central authentication
                      server can issue these <b>tokens</b>, and every app in the
                      network can independently verify them. No phone calls, no
                      awkward questions, just seamless trust.
                    </p>
                    <p>
                      Oh, and if you’re feeling extra secure, you can encrypt
                      <b>JWTs</b> (called <b>JWEs</b>). But usually, the
                      signature alone does the job of keeping everything
                      trustworthy and efficient.
                    </p>
                    <p>
                      So, the next time you interact with a sleek <b>API</b> or
                      login flow, just remember — you’re holding the ultimate
                      tech wristband: the <b>JWT</b>. 🎟️
                    </p>
                  </div>
                </dd>
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 4</span>Sensitive Information Disclosure
                </dt>
                <dd className="fadeInUp faq-body-labd" id="border-left">
                  <div className="subject-section">
                    <p>
                      JWTs are great for securely transmitting information, but
                      when developers get careless, these tokens can turn into a
                      treasure map for sensitive data. Let’s dive into the world
                      of “oops, did I just expose a password in the token?”
                    </p>
                  </div>
                  <div className="subject-section">
                    <h2>The Problem: JWTs Aren’t Diaries</h2>
                    <p>
                      In traditional <span>cookie-based</span> sessions, data
                      stays server-side, tucked away from prying eyes. But{" "}
                      <b>JWTs</b> send everything client-side, like a loud
                      friend who can’t keep secrets. If developers cram
                      sensitive data into the token’s payload, it’s like mailing
                      someone your diary —<span>Base64-encoded</span>, sure, but
                      still readable if someone looks hard enough.
                    </p>
                    <p>
                      Here are some classic examples of <b>JWT</b> oversharing:
                    </p>
                    <ol>
                      <li>
                        <b>Passwords:</b> Including hashed passwords — or worse,
                        plain-text ones. (Yes, this happens.)
                      </li>
                      <li>
                        <b>Internal Network Details:</b> Exposing private IPs or
                        hostnames.
                      </li>
                      <li>
                        <b>Flags or Secrets:</b> Embedding sensitive app details
                        directly in the token.
                      </li>
                    </ol>
                  </div>
                  <div className="subject-section">
                    <h2>Practical Oops Moment: An Example</h2>
                    <div className="terminal-container">
                      <div className="terminal-content">
                        <div className="terminal-top">
                          Imagine this <b>cURL</b> request to authenticate a
                          user:
                        </div>
                        <pre
                          className="terminal-codelanguage-shell-session"
                          tabIndex="0"
                        >
                          <code className="language-shell-session">
                            <span className="token command-c">
                              <span className="token info punctuation">
                                <span className="token user">
                                  curl -H 'Content-Type: application/json' -X
                                  POST -d{" "}
                                  {
                                    '{ "username" : "user", "password" : "password1" }'
                                  }{" "}
                                  http://MACHINE_IP/api/v1.0/example1
                                </span>
                              </span>
                            </span>
                          </code>
                        </pre>
                      </div>
                    </div>
                    <p>
                      You get a JWT token in return. Great, right? Until you
                      decode it on{" "}
                      <a
                        href="https://jwt.io/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        JWT.io
                      </a>{" "}
                      and see something like this:
                    </p>
                    <div className="terminal-container">
                      <div className="terminal-content">
                        <div className="terminal-top">
                          Imagine this <b>cURL</b> request to authenticate a
                          user:
                        </div>
                        <pre
                          className="terminal-codelanguage-shell-session"
                          tabIndex="0"
                        >
                          <code className="language-shell-session">
                            <span className="token command-c">
                              <span className="token info punctuation">
                                <span className="token punctuation">{"{"}</span>
                              </span>
                            </span>
                            <span className="token command-c">
                              <span className="token info punctuation">
                                <span className="token user">
                                  "username":{" "}
                                  <span className="token class-name">
                                    "user"
                                  </span>
                                  ,
                                </span>
                              </span>
                            </span>
                            <span className="token command-c">
                              <span className="token info punctuation">
                                <span className="token user">
                                  "password":{" "}
                                  <span className="token class-name">
                                    "password1"
                                  </span>
                                  ,
                                </span>
                              </span>
                            </span>
                            <span className="token command-c">
                              <span className="token info punctuation">
                                <span className="token user">
                                  "admin":{" "}
                                  <span className="token string">0</span>,
                                </span>
                              </span>
                            </span>
                            <span className="token command-c">
                              <span className="token info punctuation">
                                <span className="token user">
                                  "flag":{" "}
                                  <span className="token class-name">
                                    "secret_flag"
                                  </span>
                                  ,
                                </span>
                              </span>
                            </span>
                            <span className="token command-c">
                              <span className="token info punctuation">
                                <span className="token punctuation">{"}"}</span>
                              </span>
                            </span>
                          </code>
                        </pre>
                      </div>
                    </div>
                    <p>
                      Oops! Now anyone who gets their hands on this token knows
                      your password and the system’s internal workings.
                    </p>
                  </div>
                  <div className="subject-section">
                    <h2>Why This Happens: Developer Shortcut Syndrome</h2>
                    <p>
                      Instead of securely storing sensitive information
                      server-side, some developers toss it all into the token
                      payload, thinking, “Eh, it’s encoded; no one will look.”
                      Bad move. <b>JWTs</b> are encoded, not encrypted, and
                      decoding them is as easy as pie (or{" "}
                      <span>Base64 decoding</span>).
                    </p>
                  </div>
                  <div className="subject-section">
                    <h2>The Fix: Keep Secrets, Well, Secret</h2>
                    <p>
                      To fix this, sensitive data like passwords or flags should
                      never leave the server. Here’s the right way to handle it:
                    </p>
                    <ol>
                      <li>
                        <b>JWT Payload: </b>Only include non-sensitive
                        identifiers, like a username or user ID.
                      </li>
                      <li>
                        <b>Server-Side Storage: </b>Store the sensitive info
                        (e.g., passwords, flags) securely in the backend.
                      </li>
                      <li>
                        <b>Look It Up: </b>When you need that data, verify the
                        JWT and use the included identifiers to fetch the
                        sensitive information server-side.
                      </li>
                    </ol>
                    <p>Here’s a cleaner, safer implementation:</p>
                    <div className="terminal-container">
                      <div className="terminal-content">
                        <div className="terminal-top">
                          Imagine this <b>cURL</b> request to authenticate a
                          user:
                        </div>
                        <pre
                          className="terminal-codelanguage-shell-session"
                          tabIndex="0"
                        >
                          <code className="language-shell-session">
                            <span className="token command-c">
                              <span className="token info punctuation">
                                <span className="token user">
                                  payload = jwt.decode(token, self.secret,
                                  algorithms=
                                  <span className="token class-name">
                                    "HS256"
                                  </span>
                                  )
                                </span>
                              </span>
                            </span>
                            <span className="token command-c">
                              <span className="token info punctuation">
                                <span className="token user">
                                  username = payload[
                                  <span className="token class-name">
                                    'username'
                                  </span>
                                  ]
                                </span>
                              </span>
                            </span>
                            <span className="token command-c">
                              <span className="token info punctuation">
                                <span className="token user">
                                  flag = self.db_lookup(username,
                                  <span className="token class-name">
                                    "flag"
                                  </span>
                                  ){" "}
                                  <span className="token string">
                                    # Fetch sensitive data server-side
                                  </span>
                                </span>
                              </span>
                            </span>
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div className="subject-section">
                    <h2>Takeaway</h2>
                    <p>
                      <b>JWTs</b> are powerful, but with great power comes great
                      responsibility. Treat them like postcards everyone can
                      read. Keep sensitive data locked up server-side, and only
                      let <b>JWTs</b> carry what’s absolutely necessary. Because
                      no one wants their passwords and secrets turned into
                      public spectacle — especially not <span>Base64 ones</span>
                      !
                    </p>
                  </div>
                </dd>
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 5</span>Signature Validation Mistakes
                </dt>
                <dd className="fadeInUp faq-body-labd" id="border-left">
                  <div className="subject-section">
                    <h4> Not Verifying the Signature</h4>
                    <h2>Problem</h2>
                    <p>
                      When a server skips signature validation, claims within a
                      <b>JWT</b> can be modified arbitrarily. Attackers can
                      strip the signature or tamper with the payload, and the
                      server won’t notice.
                    </p>
                  </div>
                  <div className="subject-section">
                    <h2>Practical Example</h2>
                    <ol>
                      <li>
                        <div className="terminal-container">
                          <div className="terminal-content">
                            <div className="terminal-top">
                              <b>Authenticate using::</b>
                            </div>
                            <pre
                              className="terminal-codelanguage-shell-session"
                              tabIndex="0"
                            >
                              <code className="language-shell-session">
                                <span className="token command-c">
                                  <span className="token info punctuation">
                                    <span className="token user">
                                      curl -H 'Content-Type: application/json'
                                      -X POST -d{" "}
                                      {
                                        '{ "username" : "user", "password" : "password2" }'
                                      }
                                    </span>
                                  </span>
                                </span>
                                <span className="token command-c">
                                  <span className="token info punctuation">
                                    <span className="token user">
                                      http://10.10.94.61/api/v1.0/example2
                                    </span>
                                  </span>
                                </span>
                              </code>
                            </pre>
                          </div>
                        </div>
                      </li>
                      <li>
                        <p>
                          obtain <b>JWT</b> Token.
                        </p>
                      </li>
                      <li>
                        <div className="terminal-container">
                          <div className="terminal-content">
                            <div className="terminal-top">
                              Remove the signature portion (everything after the
                              second dot .).
                            </div>
                            <pre
                              className="terminal-codelanguage-shell-session"
                              tabIndex="0"
                            >
                              <code className="language-shell-session">
                                <span className="token command-c">
                                  <span className="token info punctuation">
                                    <span className="token user">
                                      curl -H 'Authorization: Bearer [JWT
                                      Token]'
                                    </span>
                                  </span>
                                </span>
                                <span className="token command-c">
                                  <span className="token info punctuation">
                                    <span className="token user">
                                      http://10.10.94.61/api/v1.0/example2?username=user
                                    </span>
                                  </span>
                                </span>
                              </code>
                            </pre>
                          </div>
                        </div>
                      </li>
                      <li>
                        The request succeeds, proving the server isn’t
                        validating the signature.
                      </li>
                    </ol>
                  </div>
                  <div className="subject-section">
                    <h2>Fix</h2>
                    <div className="terminal-container">
                      <div className="terminal-content">
                        <div className="terminal-top">
                          Always validate the<b>JWT</b> signature before
                          trusting claims:
                        </div>
                        <pre
                          className="terminal-codelanguage-shell-session"
                          tabIndex="0"
                        >
                          <code className="language-shell-session">
                            <span className="token command-c">
                              <span className="token info punctuation">
                                <span className="token user">
                                  payload = jwt.decode(token, self.secret,
                                  algorithms="HS256"){" "}
                                </span>
                              </span>
                            </span>
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div className="subject-section">
                    <h4>Algorithm Downgrade to None</h4>
                    <h2>Problem</h2>
                    <p>
                      <b>JWTs</b>signed using weak symmetric keys can be cracked
                      offline, allowing attackers to forge valid tokens.
                    </p>
                    <h2>Pratical Example</h2>
                    <ol>
                      <li>
                        <div className="terminal-container">
                          <div className="terminal-content">
                            <div className="terminal-top">
                              Edit the JWT header:
                            </div>
                            <pre
                              className="terminal-codelanguage-shell-session"
                              tabIndex="0"
                            >
                              <code className="language-shell-session">
                                <span className="token command-c">
                                  <span className="token info punctuation">
                                    <span className="token punctuation">
                                      {"{"}
                                    </span>
                                  </span>
                                </span>
                                <span className="token command-c">
                                  <span className="token info punctuation">
                                    <span className="token user">
                                      "alg":{" "}
                                      <span className="token class-name">
                                        "None"
                                      </span>
                                      ,
                                    </span>
                                  </span>
                                </span>
                                <span className="token command-c">
                                  <span className="token info punctuation">
                                    <span className="token user">
                                      "typ":{" "}
                                      <span className="token class-name">
                                        "JWT"
                                      </span>
                                    </span>
                                  </span>
                                </span>
                                <span className="token command-c">
                                  <span className="token info punctuation">
                                    <span className="token punctuation">
                                      {"}"}
                                    </span>
                                  </span>
                                </span>
                              </code>
                            </pre>
                          </div>
                        </div>
                      </li>
                      <li>Re-sign the token with no signature.</li>
                      <li>
                        Send the modified token to the server, which accepts it
                        if signature verification is improperly configured.
                      </li>
                    </ol>
                    <h2>Fix</h2>
                    <div className="terminal-container">
                      <div className="terminal-content">
                        <div className="terminal-top">
                          Explicitly deny the None algorithm and restrict
                          supported algorithms:
                        </div>
                        <pre
                          className="terminal-codelanguage-shell-session"
                          tabIndex="0"
                        >
                          <code className="language-shell-session">
                            <span className="token command-c">
                              <span className="token info punctuation">
                                <span className="token user">
                                  payload = jwt.decode(token, self.secret,
                                  algorithms=["HS256", "HS384", "HS512"])
                                </span>
                              </span>
                            </span>
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div className="subject-section">
                    <h4>Weak Symmetric Secrets</h4>
                    <h2>Problem</h2>
                    <p>
                      <b>JWTs</b> support the None algorithm, which skips
                      signature verification. Attackers can change the alg claim
                      in the <b>JWT</b> header to None, bypassing signature
                      checks entirely if developers haven’t restricted
                      algorithms.
                    </p>
                    <h2>Pratical Example</h2>
                    <ol>
                      <li>
                        Save the <b>JWT</b> in a file (jwt.txt).
                      </li>
                      <li>
                        <div className="terminal-container">
                          <div className="terminal-content">
                            <div className="terminal-top">
                              Use a tool like Hashcat to brute-force the secret
                              key:
                            </div>
                            <pre
                              className="terminal-codelanguage-shell-session"
                              tabIndex="0"
                            >
                              <code className="language-shell-session">
                                <span className="token command-c">
                                  <span className="token info punctuation">
                                    <span className="token user">
                                      hashcat -m 16500 -a 0 jwt.txt
                                      jwt.secrets.list
                                    </span>
                                  </span>
                                </span>
                              </code>
                            </pre>
                          </div>
                        </div>
                      </li>
                      <li>
                        Once cracked, use the secret to create a new token with
                        altered claims.
                      </li>
                    </ol>
                    <h2>Fix</h2>
                    <div className="terminal-container">
                      <div className="terminal-content">
                        <div className="terminal-top">
                          Use a secure, randomly generated secret with high
                          entropy:
                        </div>
                        <pre
                          className="terminal-codelanguage-shell-session"
                          tabIndex="0"
                        >
                          <code className="language-shell-session">
                            <span className="token command-c">
                              <span className="token info punctuation">
                                <span className="token user">
                                  secret = secrets.token_urlsafe(64)
                                </span>
                              </span>
                            </span>
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div className="subject-section">
                    <h4>Signature Algorithm Confusion</h4>
                    <h2>Problem</h2>
                    <p>
                      When mixing <b>symmetric</b> (e.g., <span>HS256</span>)
                      and <b>asymmetric</b> (e.g.,
                      <span>RS256</span>) algorithms, some libraries mistakenly
                      treat the
                      <b>public key</b> of an <b>asymmetric</b> algorithm as the
                      secret for a<b>symmetric</b> algorithm, enabling token
                      forgery.
                    </p>
                    <h2>Pratical Example</h2>
                    <ol>
                      <li>
                        Use the <b>public key</b> to sign a JWT with the{" "}
                        <span>HS256</span> algorithm instead of{" "}
                        <span>RS256</span>.
                      </li>
                      <li>
                        Submit the <b>token</b> to the server, which
                        misinterprets the <b>public key</b> as the{" "}
                        <b>symmetric </b> secret.
                      </li>
                    </ol>
                    <h2>Fix</h2>
                    <div className="terminal-container">
                      <div className="terminal-content">
                        <div className="terminal-top">
                          Ensure the algorithm is explicitly validated and
                          process keys appropriately:
                        </div>
                        <pre
                          className="terminal-codelanguage-shell-session"
                          tabIndex="0"
                        >
                          <code className="language-shell-session">
                            <span className="token command-c">
                              <span className="token info punctuation">
                                <span className="token user">
                                  header = jwt.get_unverified_header(token)
                                </span>
                              </span>
                            </span>
                            <span className="token command-c">
                              <span className="token info punctuation">
                                <span className="token user">
                                  algorithm = header[
                                  <span className="token class-name">
                                    'alg'
                                  </span>
                                  ]
                                </span>
                              </span>
                            </span>
                            <span className="token command-c">
                              <span className="token info punctuation">
                                <span className="token user">
                                  <span className="token string">
                                    if{" "}
                                    <span className="token class-name">
                                      "RS"{" "}
                                    </span>
                                    in{" "}
                                  </span>
                                  algorithm:
                                </span>
                              </span>
                            </span>
                            <span className="token command-c">
                              <span className="token info punctuation">
                                <span className="token user">
                                  payload = jwt.decode(token, self.public_key,
                                  algorithms=[
                                  <span className="token class-name">
                                    "RS256"
                                  </span>
                                  ,{" "}
                                  <span className="token class-name">
                                    "RS384"
                                  </span>
                                  ,{" "}
                                  <span className="token class-name">
                                    "RS512"
                                  </span>
                                  ])
                                </span>
                              </span>
                            </span>
                            <span className="token command-c">
                              <span className="token info punctuation">
                                <span className="token user">
                                  <span className="token string">
                                    if{" "}
                                    <span className="token class-name">
                                      "HS"{" "}
                                    </span>
                                    in{" "}
                                  </span>
                                  algorithm:
                                </span>
                              </span>
                            </span>
                            <span className="token command-c">
                              <span className="token info punctuation">
                                <span className="token user">
                                  payload = jwt.decode(token, self.secret,
                                  algorithms=[
                                  <span className="token class-name">
                                    "HS256"
                                  </span>
                                  ,{" "}
                                  <span className="token class-name">
                                    "HS384"
                                  </span>
                                  ,{" "}
                                  <span className="token class-name">
                                    "HS512"
                                  </span>
                                  ])
                                </span>
                              </span>
                            </span>
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div className="subject-section">
                    <h4>
                      Omitting Additional Authentication Layers for
                      Server-to-Server APIs
                    </h4>
                    <h2>Problem</h2>
                    <p>
                      Server-to-server <b>APIs</b> may not properly verify{" "}
                      <b>JWTs</b> under the assumption that upstream systems
                      have already authenticated the token. This assumption is
                      risky in complex distributed systems.
                    </p>
                    <h2>Fix</h2>
                    <div className="terminal-container">
                      <div className="terminal-content">
                        <div className="terminal-top">
                          Use certificates for added authentication and verify
                          JWTs explicitly:
                        </div>
                        <pre
                          className="terminal-codelanguage-shell-session"
                          tabIndex="0"
                        >
                          <code className="language-shell-session">
                            <span className="token command-c">
                              <span className="token info punctuation">
                                <span className="token user">
                                  payload = jwt.decode(token, self.public_key,
                                  algorithms=[
                                  <span className="token class-name">
                                    "RS256"
                                  </span>
                                  ])
                                </span>
                              </span>
                            </span>
                          </code>
                        </pre>
                      </div>
                    </div>
                    <h2>Key Takeaways for Developers</h2>
                    <ol>
                      <li>
                        Always validate <b>JWT</b> signatures.
                      </li>
                      <li>Deny insecure algorithms like None.</li>
                      <li>
                        Use secure, random secrets for <b>symmetric</b> signing.
                      </li>
                      <li>
                        Avoid mixing <b>symmetric</b> and <b>asymmetric</b>{" "}
                        algorithms carelessly.
                      </li>
                      <li>
                        Implement additional authentication for sensitive
                        server-to-server communications.
                      </li>
                    </ol>
                    <p>
                      Properly implemented <b>JWT</b> validation is your first
                      line of defense against forgery and exploitation. Ensure
                      your applications follow these practices to keep attackers
                      at bay!
                    </p>
                  </div>
                </dd>
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 6</span>JSON Web Tokens
                </dt>
                <dd className="fadeInUp faq-body-labd" id="border-left">
                  <div className="subject-section">
                    <p>
                      Imagine you’re at an exclusive party. You flash a fancy
                      wristband at the bouncer, and they immediately know you’re
                      legit. That’s how <b>JSON Web Tokens (JWTs)</b> work in
                      the digital world — they’re self-contained tokens that
                      scream, “I’m authenticated, let me in!”
                    </p>
                  </div>
                  <div className="subject-section">
                    <h2>What is inside a JWT?</h2>
                    <p>
                      A <b>JWT</b> is like a digital sandwich, neatly split into
                      three layers (and yes, they’re <b>Base64Url</b> encoded
                      for extra nerd flair):
                    </p>
                    <ol>
                      <li>
                        <b>Header:</b>The top bun, where you declare what kind
                        of sandwich (<b>token</b>) this is and how it’s signed.
                        Typical ingredients include “alg”: “HS256” and “typ”:
                        “JWT”.
                      </li>
                      <li>
                        <b>Payload:</b>The meat (or tofu, for our vegans). It’s
                        packed with claims — fancy talk for bits of info like
                        user roles or session details. Some claims are standard,
                        others are custom, and developers can toss in anything
                        they want (though we’re not judging their culinary
                        skills here).
                      </li>
                      <li>
                        <b>Signature:</b>The spicy sauce. This proves the
                        sandwich hasn’t been tampered with. It’s created using
                        the <b>header</b>, <b>payload</b>, and a secret recipe (
                        <b>key</b>).
                      </li>
                    </ol>
                  </div>
                  <div className="subject-section">
                    <h2>Signing Algorithms: The Sauce Varieties</h2>
                    <p>
                      <b>JWTs</b> get their authenticity from the signature, and
                      there are three main styles:
                    </p>
                    <ol>
                      <li>
                        <b>None:</b>Yup, no sauce at all. It’s basically handing
                        over a plain sandwich and hoping no one notices.
                        Spoiler: this is a terrible idea for security.
                      </li>
                      <li>
                        <b>Symmetric Signing (HS256):</b>The sauce is made with
                        a shared secret key. Both the creator and verifier need
                        to know the secret recipe. Great for cozy, in-house
                        parties.
                      </li>
                      <li>
                        <b>Asymmetric Signing (RS256):</b>Now we’re fancy. The
                        sauce is made with a <b>private key</b> and verified
                        with a matching <b>public key</b>. Perfect for big,
                        exclusive events where you can’t trust everyone with the
                        recipe.
                      </li>
                    </ol>
                  </div>
                  <div className="subject-section">
                    <h2>Why JWTs Are Awesome</h2>
                    <p>
                      The real power of <b>JWTs</b> lies in their signature.
                      Once signed, they can travel around freely — like a VIP
                      pass that works across apps. A central authentication
                      server can issue these <b>tokens</b>, and every app in the
                      network can independently verify them. No phone calls, no
                      awkward questions, just seamless trust.
                    </p>
                    <p>
                      Oh, and if you’re feeling extra secure, you can encrypt
                      <b>JWTs</b> (called <b>JWEs</b>). But usually, the
                      signature alone does the job of keeping everything
                      trustworthy and efficient.
                    </p>
                    <p>
                      So, the next time you interact with a sleek <b>API</b> or
                      login flow, just remember — you’re holding the ultimate
                      tech wristband: the <b>JWT</b>. 🎟️
                    </p>
                  </div>
                </dd>
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 7</span>JSON Web Tokens
                </dt>
                <dd className="fadeInUp faq-body-labd" id="border-left">
                  <div className="subject-section">
                    <img src={exampleImage2} alt="Example" />
                    <p>
                      Imagine you’re at an exclusive party. You flash a fancy
                      wristband at the bouncer, and they immediately know you’re
                      legit. That’s how <b>JSON Web Tokens (JWTs)</b> work in
                      the digital world — they’re self-contained tokens that
                      scream, “I’m authenticated, let me in!”
                    </p>
                  </div>
                  <div className="subject-section">
                    <h2>What is inside a JWT?</h2>
                    <p>
                      A <b>JWT</b> is like a digital sandwich, neatly split into
                      three layers (and yes, they’re <b>Base64Url</b> encoded
                      for extra nerd flair):
                    </p>
                    <ol>
                      <li>
                        <b>Header:</b>The top bun, where you declare what kind
                        of sandwich (<b>token</b>) this is and how it’s signed.
                        Typical ingredients include “alg”: “HS256” and “typ”:
                        “JWT”.
                      </li>
                      <li>
                        <b>Payload:</b>The meat (or tofu, for our vegans). It’s
                        packed with claims — fancy talk for bits of info like
                        user roles or session details. Some claims are standard,
                        others are custom, and developers can toss in anything
                        they want (though we’re not judging their culinary
                        skills here).
                      </li>
                      <li>
                        <b>Signature:</b>The spicy sauce. This proves the
                        sandwich hasn’t been tampered with. It’s created using
                        the <b>header</b>, <b>payload</b>, and a secret recipe (
                        <b>key</b>).
                      </li>
                    </ol>
                  </div>
                  <div className="subject-section">
                    <h2>Signing Algorithms: The Sauce Varieties</h2>
                    <p>
                      <b>JWTs</b> get their authenticity from the signature, and
                      there are three main styles:
                    </p>
                    <ol>
                      <li>
                        <b>None:</b>Yup, no sauce at all. It’s basically handing
                        over a plain sandwich and hoping no one notices.
                        Spoiler: this is a terrible idea for security.
                      </li>
                      <li>
                        <b>Symmetric Signing (HS256):</b>The sauce is made with
                        a shared secret key. Both the creator and verifier need
                        to know the secret recipe. Great for cozy, in-house
                        parties.
                      </li>
                      <li>
                        <b>Asymmetric Signing (RS256):</b>Now we’re fancy. The
                        sauce is made with a <b>private key</b> and verified
                        with a matching <b>public key</b>. Perfect for big,
                        exclusive events where you can’t trust everyone with the
                        recipe.
                      </li>
                    </ol>
                  </div>
                  <div className="subject-section">
                    <h2>Why JWTs Are Awesome</h2>
                    <p>
                      The real power of <b>JWTs</b> lies in their signature.
                      Once signed, they can travel around freely — like a VIP
                      pass that works across apps. A central authentication
                      server can issue these <b>tokens</b>, and every app in the
                      network can independently verify them. No phone calls, no
                      awkward questions, just seamless trust.
                    </p>
                    <p>
                      Oh, and if you’re feeling extra secure, you can encrypt
                      <b>JWTs</b> (called <b>JWEs</b>). But usually, the
                      signature alone does the job of keeping everything
                      trustworthy and efficient.
                    </p>
                    <p>
                      So, the next time you interact with a sleek <b>API</b> or
                      login flow, just remember — you’re holding the ultimate
                      tech wristband: the <b>JWT</b>. 🎟️
                    </p>
                  </div>
                </dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button
                onClick={() => handleGoToLab("/jwtattacks/jwtattacks_lab")}
                className="go-to"
              >
                Go To Labs
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
