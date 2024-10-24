import React from "react";
import { useEffect, useRef } from "react";
import $ from "jquery";
import styles from "./Linux.module.css";
import Header from "../../Header/Header";
import background from "../../assets/img/background.png";
import image from "../../assets/img/course_image.png";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

export default function Linux() {
  const faqSectionRef = useRef(null);

  useEffect(() => {
    const $faqSection = $(faqSectionRef.current);
    const $dt = $faqSection.find("dt");
    const $dd = $faqSection.find("dd");

    $dd.hide();
    $dt.first().addClass("active");
    $dd.first().show();

    $dt.on("click", function () {
      const $this = $(this);
      const $nextDd = $this.next("dd");

      if ($this.hasClass("active")) {
        $this.removeClass("active");
        $nextDd.slideUp(500);
      } else {
        $dt.removeClass("active");
        $dd.slideUp(500);
        $this.addClass("active");
        $nextDd.slideDown(500);
      }
    });

    return () => {
      $dt.off("click");
    };
  }, []);
  return (
    <>
      <Header />
      {/* Start Landing  */}
      <div className={styles.landing}>
        <div className={styles.banner}>
          <img src={background} alt="bacground" />
        </div>
        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Linux Fundamentals</Link>
              </li>
            </ul>
          </div>
          <div className={styles["course-info"]}>
            <img src={image} alt="logo" />
            <div className={styles["course-text"]}>
              <h1>Linux Fundamentals</h1>
              <p>
              Build a solid foundation in Linux, the operating system at the core of many cybersecurity tools and infrastructures.
              </p>
              <div className={styles["course-icons"]}>
                <div className={styles.diff}>
                  <div className={styles.easy}>
                    <i className="fas fa-signal"></i>
                    <p>Easy</p>
                  </div>
                </div>
                <div className={styles.duration}>
                  <i className="fa-solid fa-clock"></i>
                  <p className={styles.time}>15 min</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.options}>
            <button>
              <i className="far fa-bookmark"></i>
              <p>Save Room</p>
            </button>
            <div className={styles.like}>
              <button>
                <i className="fas fa-thumbs-up"></i>
                <p></p>
              </button>
              <button>
                <i className="fas fa-thumbs-down"></i>
                <p></p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Landing  */}
      {/* Start Course Content  */}
      <div className={styles.course}>
        <div className={styles.container} ref={faqSectionRef}>
          <div className={styles.container}>
            <div className={styles["faq-section"]}>
              <dl className={styles["section-text"]}>
                {/* Single FAQ Area  */}
                <dt className={`${styles["faq-header"]} wave fadeInUp`}>
                  <span>Task 1</span>Running Your First few Commands
                </dt>
                <dd className={`${styles["faq-body"]} fadeInUp`}>
                  <ul>
                    <li>
                      <p>
                        As we previously discussed, a large selling point of
                        using OSs such as Ubuntu is how lightweight they can be.
                        This, of course, doesn't come without its disadvantages,
                        where for example, often there is no GUI (Graphical User
                        Interface) or what is also known as a desktop
                        environment that we can use to interact with the machine
                        (unless it has been installed). A large part of
                        interacting with these systems is using the "Terminal".
                      </p>
                      <div className={styles["terminal-container"]}>
                        <div className={styles["terminal-content"]}>
                          <div className={styles["terminal-top"]}>
                            This is what a terminal looks like
                          </div>
                          <pre
                            className={`${styles["terminal-code"]} language-shell-session`}
                            tabIndex="0"
                          >
                            <code className="language-shell-session">
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    CyberLabs@linux1
                                  </span>
                                  <span
                                    className={`${styles.token}  ${styles.punctuation}`}
                                  >
                                    :
                                  </span>
                                  <span
                                    className={`${styles.token}  ${styles.path}`}
                                  >
                                    ~
                                  </span>
                                </span>
                                <span
                                  className={`${styles.token}  ${styles["shell-symbol"]} ${styles.important}`}
                                >
                                  $
                                </span>
                                <span
                                  className={`${styles.token}  ${styles["language-bash"]} ${styles.bash}`}
                                >
                                  <span className={styles.token}>
                                    {" "}
                                    enter commands here
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
                        We need to be able to do basic functions like navigate
                        to files, output their contents and make files! The
                        commands to do so are self-explanatory (once you know
                        what they are of course...)
                      </p>
                      <p>
                        Let's get started with two of the first commands which I
                        have broken down in the table below:
                      </p>
                      <table
                        className={`${styles.table} ${styles["table-bordered"]}`}
                      >
                        <tbody>
                          <tr>
                            <td>Command</td>
                            <td>Description</td>
                          </tr>
                          <tr>
                            <td>echo</td>
                            <td>Output any text that we provide</td>
                          </tr>
                          <tr>
                            <td>whoami</td>
                            <td>
                              Find out what user we're currently logged in as!
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <h2 className={styles.note}>
                        See the snippets below for an example of each command
                        being used...
                      </h2>
                      <div className={styles["terminal-container"]}>
                        <div className={styles["terminal-content"]}>
                          <div className={styles["terminal-top"]}>
                            Using echo
                          </div>
                          <pre
                            className={`${styles["terminal-code"]} language-shell-session`}
                            tabIndex="0"
                          >
                            <code className="language-shell-session">
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    CyberLabs@linux1
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.punctuation}`}
                                  >
                                    :
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.path}`}
                                  >
                                    ~
                                  </span>
                                </span>
                                <span
                                  className={`${styles.token} ${styles["shell-symbol"]} ${styles.important}`}
                                >
                                  $
                                </span>
                                <span
                                  className={`${styles.token} ${styles.bash} ${styles["language-bash"]}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles["class-name"]}`}
                                  >
                                    {" "}
                                    echo{" "}
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.string}`}
                                  >
                                    {" "}
                                    "Hello Friend!"{" "}
                                  </span>
                                </span>
                              </span>
                            </code>
                          </pre>
                        </div>
                      </div>
                      <div className={styles["terminal-container"]}>
                        <div className={styles["terminal-content"]}>
                          <div className={styles["terminal-top"]}>
                            Using whoami to find out the username of who we're
                            logged in as
                          </div>
                          <pre
                            className={`${styles["terminal-code"]} language-shell-session`}
                            tabIndex="0"
                          >
                            <code className="language-shell-session">
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    CyberLabs@linux1
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.punctuation}`}
                                  >
                                    :
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.path}`}
                                  >
                                    ~
                                  </span>
                                </span>
                                <span
                                  className={`${styles.token} ${styles["shell-symbol"]} ${styles.important}`}
                                >
                                  $
                                </span>
                                <span
                                  className={`${styles.token} ${styles.bash} ${styles["language-bash"]}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.function}`}
                                  >
                                    {" "}
                                    whoami{" "}
                                  </span>
                                </span>
                              </span>
                            </code>
                          </pre>
                        </div>
                      </div>
                    </li>
                  </ul>
                  {/* <p className={styles.question}>
                    If we wanted to output the text "TryHackMe", what would our
                    command be?
                  </p>
                  <form>
                    <input
                      type="text"
                      name="answer"
                      placeholder="Answer Format: **********"
                    />
                    <button>
                      <i className="fa-regular fa-paper-plane"></i>Submit
                    </button>
                  </form>
                  <p className={styles.question}>
                    What is the username of who you're logged in as on your
                    deployed Linux machine?
                  </p>
                  <form action="">
                    <input
                      type="text"
                      name="answer"
                      placeholder="Answer Format: **********"
                    />
                    <button>
                      <i className="fa-regular fa-paper-plane"></i>Submit
                    </button>
                  </form> */}
                </dd>
                <dt className={`wave fadeInUp ${styles["faq-header"]}`}>
                  <span>Task 2</span>Interacting With the Filesystem!
                </dt>
                <dd className={`fadeInUp ${styles["faq-body"]}`}>
                  <ul>
                    <li>
                      <p>
                        So far we've only covered the <span> echo </span>and
                        <span> whoami </span>
                        commands. Not all that useful when you consider things
                        that we need to do - including navigating the
                        filesystem, read and write to it as well.
                      </p>
                      <p>
                        In this task, we're going to be learning the commands so
                        that we can do just that. Just like the previous task,
                        I'll display the commands in the table in the next
                        heading & show examples of these commands being used.
                      </p>
                    </li>
                    <li>
                      <h2>Interacting With the Filesystem</h2>
                      <p>
                        As I previously stated, being able to navigate the
                        machine that you are logged into without relying on a
                        desktop environment is pretty important. After all,
                        what's the point of logging in if we can't go anywhere?
                      </p>
                      <table
                        className={`${styles.table} ${styles["table-bordered"]}`}
                      >
                        <tbody>
                          <tr>
                            <td>Command</td>
                            <td>Full Name</td>
                          </tr>
                          <tr>
                            <td>ls</td>
                            <td>listing</td>
                          </tr>
                          <tr>
                            <td>cd</td>
                            <td>change directory</td>
                          </tr>
                          <tr>
                            <td>cat</td>
                            <td>concatenate</td>
                          </tr>
                          <tr>
                            <td>pwd</td>
                            <td>print working directory</td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    <li>
                      <h2>Listing Files in Our Current Directory (ls)</h2>
                      <p>
                        Before we can do anything such as finding out the
                        contents of any files or folders, we need to know what
                        exists in the first place. This can be done using the
                        "ls" command (short for listing)
                      </p>
                      <p>
                        Using "ls" to to list the contents of the current
                        directory
                      </p>
                      <div className={`${styles["terminal-container"]}`}>
                        <div className={`${styles["terminal-content"]}`}>
                          <div className={`${styles["terminal-top"]}`}>
                            Using "ls" to to list the contents of the current
                            directory
                          </div>
                          <pre
                            className={`${styles["terminal-code"]} language-shell-session`}
                            tabIndex="0"
                          >
                            <code className="language-shell-session">
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    CyberLabs@linux1
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.punctuation}`}
                                  >
                                    :
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.path}`}
                                  >
                                    ~
                                  </span>
                                </span>
                                <span
                                  className={`${styles.token} ${styles.important} ${styles["shell-symbol"]}`}
                                >
                                  $
                                </span>
                                <span
                                  className={`${styles.token} ${styles.bash} ${styles["language-bash"]}`}
                                >
                                  <span
                                    className={`${styles.function} ${styles.token}`}
                                  >
                                    {" "}
                                    ls
                                  </span>
                                </span>
                              </span>
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    'Important Files' 'My Documents' Notes
                                    Pictures
                                  </span>
                                </span>
                              </span>
                            </code>
                          </pre>
                        </div>
                      </div>
                      <p>
                        In the screenshot above, we can see there are the
                        following directories/folders:
                      </p>
                      <ol>
                        <li>Important Files</li>
                        <li>My Documents</li>
                        <li>Notes</li>
                        <li>Pictures</li>
                      </ol>
                      <p>
                        Great! You can probably take a guess as to what to
                        expect a folder to contain given by its name.
                      </p>
                      <h2 className={styles.note}>
                        Pro tip: You can list the contents of a directory
                        without having to navigate to it by using ls and the
                        name of the directory. I.e. <span>ls Pictures</span>
                      </h2>
                    </li>
                    <li>
                      <h2>Changing Our Current Directory (cd)</h2>
                      <p>
                        Now that we know what folders exist, we need to use the
                        <span> cd </span>command (short for change directory) to
                        change to that directory. Say if I wanted to open the
                        "Pictures" directory - I'd do <span>cd Pictures</span>.
                        Where again, we want to find out the contents of this
                        "Pictures" directory and to do so, we'd use{" "}
                        <span>ls</span> again:
                      </p>
                      <div className={`${styles["terminal-container"]}`}>
                        <div className={`${styles["terminal-content"]}`}>
                          <div className={`${styles["terminal-top"]}`}>
                            Listing our new directory after we have used "cd"
                          </div>
                          <pre
                            className={`${styles["terminal-code"]} language-shell-session`}
                            tabIndex="0"
                          >
                            <code className="language-shell-session">
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    CyberLabs@linux1
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.punctuation}`}
                                  >
                                    :
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.path}`}
                                  >
                                    ~/Pictures
                                  </span>
                                </span>
                                <span
                                  className={`${styles.token} ${styles.important} ${styles["shell-symbol"]}`}
                                >
                                  $
                                </span>
                                <span
                                  className={`${styles.token} ${styles.bash} ${styles["language-bash"]}`}
                                >
                                  <span
                                    className={`${styles.function} ${styles.token}`}
                                  >
                                    {" "}
                                    ls
                                  </span>
                                </span>
                              </span>
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    dog_picture1.jpg dog_picture2.jpg
                                    dog_picture3.jpg dog_picture4.jpg
                                  </span>
                                </span>
                              </span>
                            </code>
                          </pre>
                        </div>
                      </div>
                      <p>
                        In this case, it looks like there are 4 pictures of
                        dogs!
                      </p>
                    </li>
                    <li>
                      <h2>Outputting the Contents of a File (cat)</h2>
                      <p>
                        Whilst knowing about the existence of files is great —
                        it's not all that useful unless we're able to view the
                        contents of them.
                      </p>
                      <p>
                        We will come on to discuss some of the tools available
                        to us that allows us to transfer files from one machine
                        to another in a later room. But for now, we're going to
                        talk about simply seeing the contents of text files
                        using a command called <span>cat</span>.
                      </p>
                      <p>
                        <span>Cat</span> is short for concatenating & is a
                        fantastic way for us to output the contents of files
                        (not just text files!).
                      </p>
                      <p>
                        In the screenshot below, you can see how I have combined
                        the use of <span>ls</span> to list the files within a
                        directory called "Documents":
                      </p>
                      <div className={`${styles["terminal-container"]}`}>
                        <div className={`${styles["terminal-content"]}`}>
                          <div className={`${styles["terminal-top"]}`}>
                            Using "ls" to to list the contents of the current
                            directory
                          </div>
                          <pre
                            className={`${styles["terminal-code"]} language-shell-session`}
                            tabIndex="0"
                          >
                            <code className="language-shell-session">
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    CyberLabs@linux1
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.punctuation}`}
                                  >
                                    :
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.path}`}
                                  >
                                    ~/Documents
                                  </span>
                                </span>
                                <span
                                  className={`${styles.token} ${styles.important} ${styles["shell-symbol"]}`}
                                >
                                  $
                                </span>
                                <span
                                  className={`${styles.token} ${styles.bash} ${styles["language-bash"]}`}
                                >
                                  <span
                                    className={`${styles.function} ${styles.token}`}
                                  >
                                    {" "}
                                    ls
                                  </span>
                                </span>
                              </span>
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    todo.txt
                                  </span>
                                </span>
                              </span>
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    CyberLabs@linux1
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.punctuation}`}
                                  >
                                    :
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.path}`}
                                  >
                                    ~/Documents
                                  </span>
                                </span>
                                <span
                                  className={`${styles.token} ${styles.important} ${styles["shell-symbol"]}`}
                                >
                                  $
                                </span>
                                <span
                                  className={`${styles.token} ${styles.bash} ${styles["language-bash"]}`}
                                >
                                  <span
                                    className={`${styles.function} ${styles.token}`}
                                  >
                                    {" "}
                                    cat{" "}
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    todo.txt
                                  </span>
                                </span>
                              </span>
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    Here's something important for me to do
                                    later!
                                  </span>
                                </span>
                              </span>
                            </code>
                          </pre>
                        </div>
                      </div>
                      <p>
                        We've applied some knowledge from earlier in this task
                        to do the following:
                      </p>
                      <ol>
                        <li>
                          Used <span>ls</span> to let us know what files are
                          available in the "Documents" folder of this machine.
                          In this case, it is called <span>todo.txt</span>.
                        </li>
                        <li>
                          We have then used <span>cat todo.txt</span> to
                          concatenate/output the contents of this "todo.txt"
                          file, where the contents are "Here's something
                          important for me to do later!"
                        </li>
                      </ol>
                      <h2 className={styles.note}>
                        Pro tip: You can use <span>cat</span> to output the
                        contents of a file within directories without having to
                        navigate to it by using cat and the name of the
                        directory. I.e. <br />
                        <span
                          style={{ display: "inline-block", marginTop: "15px" }}
                        >
                          {" "}
                          cat /home/ubuntu/Documents/todo.txt
                        </span>
                      </h2>
                      <p>
                        Sometimes things like usernames, passwords (yes -
                        really...), flags or configuration settings are stored
                        within files where "cat" can be used to retrieve these.
                      </p>
                    </li>
                    <li>
                      <h2>
                        Finding out the full Path to our Current Working
                        Directory (pwd)
                      </h2>
                      <p>
                        You'll notice as you progress through navigating your
                        Linux machine, the name of the directory that you are
                        currently working in will be listed in your terminal.
                      </p>
                      <p>
                        It's easy to lose track of where we are on the
                        filesystem exactly, which is why I want to introduce{" "}
                        <span>pwd</span>. This stands for print working
                        directory.
                      </p>
                      <p>
                        Using the example machine from before, we are currently
                        in the "Documents" folder — but where is this exactly on
                        the Linux machine's filesystem? We can find this out
                        using this "pwd" command like within the screenshot
                        below:
                      </p>
                      <div className={`${styles["terminal-container"]}`}>
                        <div className={`${styles["terminal-content"]}`}>
                          <div className={`${styles["terminal-top"]}`}>
                            Using "pwd" to list the full path of the current
                            directory
                          </div>
                          <pre
                            className={`${styles["terminal-code"]} language-shell-session`}
                            tabIndex="0"
                          >
                            <code className="language-shell-session">
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    CyberLabs@linux1
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.punctuation}`}
                                  >
                                    :
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.path}`}
                                  >
                                    ~/Documents
                                  </span>
                                </span>
                                <span
                                  className={`${styles.token} ${styles.important} ${styles["shell-symbol"]}`}
                                >
                                  $
                                </span>
                                <span
                                  className={`${styles.token} ${styles.bash} ${styles["language-bash"]}`}
                                >
                                  <span
                                    className={`${styles["class-name"]} ${styles.token}`}
                                  >
                                    {" "}
                                    pwd
                                  </span>
                                </span>
                              </span>
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    /home/ubuntu/Documents
                                  </span>
                                </span>
                              </span>
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    CyberLabs@linux1
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.punctuation}`}
                                  >
                                    :
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.path}`}
                                  >
                                    ~/Documents
                                  </span>
                                </span>
                                <span
                                  className={`${styles.token} ${styles.important} ${styles["shell-symbol"]}`}
                                >
                                  $
                                </span>
                              </span>
                            </code>
                          </pre>
                        </div>
                      </div>
                      <p>Let's break this down:</p>
                      <ol>
                        <li>
                          We already know we're in "Documents" thanks to our
                          terminal, but at this point in time, we have no idea
                          where "Documents" is stored so that we can get back to
                          it easily in the future.
                        </li>
                        <li>
                          I have used the <span>pwd</span> (print working
                          directory) command to find the full file path of this
                          "Documents" folder.
                        </li>
                        <li>
                          We're helpfully told by Linux that this "Documents"
                          directory is stored at "/home/ubuntu/Documents" on the
                          machine — great to know!
                        </li>
                        <li>
                          Now in the future, if we find ourselves in a different
                          location, we can just use
                          <span> cd /home/ubuntu/Documents</span> to change our
                          working directory to this "Documents" directory.
                        </li>
                      </ol>
                    </li>
                  </ul>
                  {/* <p className={styles.question}>
                    On the Linux machine that you deploy, how many folders are
                    there?
                  </p>
                  <form action="">
                    <input
                      type="text"
                      name="answer"
                      placeholder="Answer Format: **********"
                    />
                    <button>
                      <i className="fa-regular fa-paper-plane"></i>Submit
                    </button>
                  </form>
                  <p className={styles.question}>
                    Which directory contains a file?
                  </p>
                  <form action="">
                    <input
                      type="text"
                      name="answer"
                      placeholder="Answer Format: **********"
                    />
                    <button>
                      <i className="fa-regular fa-paper-plane"></i>Submit
                    </button>
                  </form>
                  <p className={styles.question}>
                    What is the contents of this file?
                  </p>
                  <form action="">
                    <input
                      type="text"
                      name="answer"
                      placeholder="Answer Format: **********"
                    />
                    <button>
                      <i className="fa-regular fa-paper-plane"></i>Submit
                    </button>
                  </form>
                  <p className={styles.question}>
                    Use the cd command to navigate to this file and find out the
                    new current working directory. What is the path?
                  </p>
                  <form action="">
                    <input
                      type="text"
                      name="answer"
                      placeholder="Answer Format: **********"
                    />
                    <button>
                      <i className="fa-regular fa-paper-plane"></i>Submit
                    </button>
                  </form> */}
                </dd>
                <dt className={`wave fadeInUp ${styles["faq-header"]}`}>
                  <span>Task 3</span>Searching for Files
                </dt>
                <dd className={`fadeInUp ${styles["faq-body"]}`}>
                  <ul>
                    <li>
                      <p>
                        Although it doesn't seem like it so far, one of the
                        redeeming features of Linux is truly how efficient you
                        can be with it. With that said, you can only be as
                        efficient as you are familiar with it of course. As you
                        interact with OSs such as Ubuntu over time, essential
                        commands like those we've already covered will start to
                        become muscle-memory.
                      </p>
                      <p>
                        One fantastic way to show just how efficient you can be
                        with systems like this is using a set of commands to
                        quickly search for files across the entire system that
                        our user has access to. No need to consistently use
                        <span> cd </span>
                        and <span>ls</span> to find out what is where. Instead,
                        we can use commands such as <span>find </span> to
                        automate things like this for us!
                      </p>
                      <p>
                        This is where Linux starts to become a bit more
                        intimidating to approach -- but we'll break this down
                        and ease you into it.
                      </p>
                    </li>
                    <li>
                      <h2>Using Find</h2>
                      <p>
                        The find command is fantastic in the sense that it can
                        be used both very simply or rather complex depending
                        upon what it is you want to do exactly. However, let's
                        stick to the fundamentals first.
                      </p>
                      <p>
                        Take the snippet below; we can see a list of directories
                        available to us:
                      </p>
                      <div className={`${styles["terminal-container"]}`}>
                        <div className={`${styles["terminal-content"]}`}>
                          <div className={`${styles["terminal-top"]}`}>
                            Using "ls" to list the contents of the current
                            directory
                          </div>
                          <pre
                            className={`${styles["terminal-code"]} language-shell-session`}
                            tabIndex="0"
                          >
                            <code className="language-shell-session">
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    CyberLabs@linux1
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.punctuation}`}
                                  >
                                    :
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.path}`}
                                  >
                                    ~
                                  </span>
                                </span>
                                <span
                                  className={`${styles.token} ${styles.important} ${styles["shell-symbol"]}`}
                                >
                                  $
                                </span>
                                <span
                                  className={`${styles.token} ${styles.bash} ${styles["language-bash"]}`}
                                >
                                  <span
                                    className={`${styles.function} ${styles.token}`}
                                  >
                                    {" "}
                                    ls
                                  </span>
                                </span>
                              </span>
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    Desktop Documents Pictures folder1
                                  </span>
                                </span>
                              </span>
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    CyberLabs@linux1
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.punctuation}`}
                                  >
                                    :
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.path}`}
                                  >
                                    ~
                                  </span>
                                </span>
                                <span
                                  className={`${styles.token} ${styles.important} ${styles["shell-symbol"]}`}
                                >
                                  $
                                </span>
                              </span>
                            </code>
                          </pre>
                        </div>
                      </div>
                      <ol>
                        <li>Desktop</li>
                        <li>Documents</li>
                        <li>Pictures</li>
                        <li>folder1</li>
                      </ol>
                      <p>
                        Now, of course, directories can contain even more
                        directories within themselves. It becomes a headache
                        when we're having to look through every single one just
                        to try and look for specific files. We can use
                        <span> find</span> to do just this for us!
                      </p>
                      <p>
                        Let's start simple and assume that we already know the
                        name of the file we're looking for — but can't remember
                        where it is exactly! In this case, we're looking for
                        "passwords.txt"
                      </p>
                      <p>
                        If we remember the filename, we can simply use
                        <span> find -name passwords.txt</span> where the command
                        will look through every folder in our current directory
                        for that specific file like so:
                      </p>
                      <div className={`${styles["terminal-container"]}`}>
                        <div className={`${styles["terminal-content"]}`}>
                          <div className={`${styles["terminal-top"]}`}>
                            Using "find" to find a file with the name of
                            "passwords.txt"
                          </div>
                          <pre
                            className={`${styles["terminal-code"]} language-shell-session`}
                            tabIndex="0"
                          >
                            <code className="language-shell-session">
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    CyberLabs@linux1
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.punctuation}`}
                                  >
                                    :
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.path}`}
                                  >
                                    ~
                                  </span>
                                </span>
                                <span
                                  className={`${styles.token} ${styles.important} ${styles["shell-symbol"]}`}
                                >
                                  $
                                </span>
                                <span
                                  className={`${styles.token} ${styles.bash} ${styles["language-bash"]}`}
                                >
                                  <span
                                    className={`${styles.function} ${styles.token}`}
                                  >
                                    {" "}
                                    find -name{" "}
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    passwords.txt
                                  </span>
                                </span>
                              </span>
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    ./folder1/passwords.txt
                                  </span>
                                </span>
                              </span>
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    CyberLabs@linux1
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.punctuation}`}
                                  >
                                    :
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.path}`}
                                  >
                                    ~
                                  </span>
                                </span>
                                <span
                                  className={`${styles.token} ${styles.important} ${styles["shell-symbol"]}`}
                                >
                                  $
                                </span>
                              </span>
                            </code>
                          </pre>
                        </div>
                      </div>
                      <p>
                        "Find" has managed to find the file — it turns out it is
                        located in folder1/passwords.txt — sweet. But let's say
                        that we don't know the name of the file, or want to
                        search for every file that has an extension such as
                        ".txt". Find let's us do that too!
                      </p>
                      <p>
                        We can simply use what's known as a wildcard (*) to
                        search for anything that has .txt at the end. In our
                        case, we want to find every .txt file that's in our
                        current directory. We will construct a command such as
                        <span>find -name *.txt </span>. Where "Find" has been
                        able to find every .txt file and has then given us the
                        location of each one:
                      </p>
                      <div className={`${styles["terminal-container"]}`}>
                        <div className={`${styles["terminal-content"]}`}>
                          <div className={`${styles["terminal-top"]}`}>
                            Using "find" to find any file with the extension of
                            ".txt"
                          </div>
                          <pre
                            className={`${styles["terminal-code"]} language-shell-session`}
                            tabIndex="0"
                          >
                            <code className="language-shell-session">
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    CyberLabs@linux1
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.punctuation}`}
                                  >
                                    :
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.path}`}
                                  >
                                    ~
                                  </span>
                                </span>
                                <span
                                  className={`${styles.token} ${styles.important} ${styles["shell-symbol"]}`}
                                >
                                  $
                                </span>
                                <span
                                  className={`${styles.token} ${styles.bash} ${styles["language-bash"]}`}
                                >
                                  <span
                                    className={`${styles.function} ${styles.token}`}
                                  >
                                    {" "}
                                    find -name{" "}
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    *.txt
                                  </span>
                                </span>
                              </span>
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    ./folder1/passwords.txt
                                  </span>
                                </span>
                              </span>
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    ./Documents/todo.txt
                                  </span>
                                </span>
                              </span>
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    CyberLabs@linux1
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.punctuation}`}
                                  >
                                    :
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.path}`}
                                  >
                                    ~
                                  </span>
                                </span>
                                <span
                                  className={`${styles.token} ${styles.important} ${styles["shell-symbol"]}`}
                                >
                                  $
                                </span>
                              </span>
                            </code>
                          </pre>
                        </div>
                      </div>
                      <p>Find has managed to find:</p>
                      <ol>
                        <li>"passwords.txt" located within "folder1"</li>
                        <li>"todo.txt" located within "Documents"</li>
                      </ol>
                    </li>
                    <li>
                      <h2>Using Grep</h2>
                      <p>
                        Another great utility that is a great one to learn about
                        is the use of <span>grep</span>. The <span>grep </span>
                        command allows us to search the contents of files for
                        specific values that we are looking for.
                      </p>
                      <p>
                        Take for example, the access log of a web server. In
                        this case, the access.log of a web server has 244
                        entries.
                      </p>
                      <div className={`${styles["terminal-container"]}`}>
                        <div className={`${styles["terminal-content"]}`}>
                          <div className={`${styles["terminal-top"]}`}>
                            Using "wc" to count the number of entries in
                            "access.log"
                          </div>
                          <pre
                            className={`${styles["terminal-code"]} language-shell-session`}
                            tabIndex="0"
                          >
                            <code className="language-shell-session">
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    CyberLabs@linux1
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.punctuation}`}
                                  >
                                    :
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.path}`}
                                  >
                                    ~
                                  </span>
                                </span>
                                <span
                                  className={`${styles.token} ${styles.important} ${styles["shell-symbol"]}`}
                                >
                                  $
                                </span>
                                <span
                                  className={`${styles.token} ${styles.bash} ${styles["language-bash"]}`}
                                >
                                  <span
                                    className={`${styles.function} ${styles.token}`}
                                  >
                                    {" "}
                                    wc -l{" "}
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    access.log
                                  </span>
                                </span>
                              </span>
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    244 access.log
                                  </span>
                                </span>
                              </span>
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    CyberLabs@linux1
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.punctuation}`}
                                  >
                                    :
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.path}`}
                                  >
                                    ~
                                  </span>
                                </span>
                                <span
                                  className={`${styles.token} ${styles.important} ${styles["shell-symbol"]}`}
                                >
                                  $
                                </span>
                              </span>
                            </code>
                          </pre>
                        </div>
                      </div>
                      <p>
                        Using a command like <span>cat</span> isn't going to cut
                        it too well here. Let's say for example if we wanted to
                        search this log file to see the things that a certain
                        user/IP address visited? Looking through 244 entries
                        isn't all that efficient considering we want to find a
                        specific value.
                      </p>
                      <p>
                        We can use <span>grep</span> to search the entire
                        contents of this file for any entries of the value that
                        we are searching for. Going with the example of a web
                        server's access log, we want to see everything that the
                        IP address "81.143.211.90" has visited (note that this
                        is fictional)
                      </p>
                      <div className={`${styles["terminal-container"]}`}>
                        <div className={`${styles["terminal-content"]}`}>
                          <div className={`${styles["terminal-top"]}`}>
                            Using "grep" to find any entries with the IP address
                            of "81.143.211.90" in "access.log"
                          </div>
                          <pre
                            className={`${styles["terminal-code"]} language-shell-session`}
                            tabIndex="0"
                          >
                            <code className="language-shell-session">
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    CyberLabs@linux1
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.punctuation}`}
                                  >
                                    :
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.path}`}
                                  >
                                    ~
                                  </span>
                                </span>
                                <span
                                  className={`${styles.token} ${styles.important} ${styles["shell-symbol"]}`}
                                >
                                  $
                                </span>
                                <span
                                  className={`${styles.token} ${styles.bash} ${styles["language-bash"]}`}
                                >
                                  <span
                                    className={`${styles.function} ${styles.token}`}
                                  >
                                    {" "}
                                    grep{" "}
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.string}`}
                                  >
                                    "81.143.211.90"{" "}
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    access.log
                                  </span>
                                </span>
                              </span>
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    81.143.211.90 - - [25/Mar/2021:11:17 + 0000]
                                    "GET / HTTP/1.1" 200 417 "-" "Mozilla/5.0
                                    (Linux; Android 7.0; Moto G(4))"
                                  </span>
                                </span>
                              </span>
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    CyberLabs@linux1
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.punctuation}`}
                                  >
                                    :
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.path}`}
                                  >
                                    ~
                                  </span>
                                </span>
                                <span
                                  className={`${styles.token} ${styles.important} ${styles["shell-symbol"]}`}
                                >
                                  $
                                </span>
                              </span>
                            </code>
                          </pre>
                        </div>
                      </div>
                      <p>
                        "Grep" has searched through this file and has shown us
                        any entries of what we've provided and that is contained
                        within this log file for the IP.
                      </p>
                    </li>
                  </ul>
                  {/* <p className={styles.question}>
                    Use grep on "access.log" to find the flag that has a prefix
                    of "THM". What is the flag?
                  </p>
                  <form action="">
                    <input
                      type="text"
                      name="answer"
                      placeholder="Answer Format: **********"
                    />
                    <button>
                      <i className="fa-regular fa-paper-plane"></i>Submit
                    </button>
                  </form>
                  <p className={styles.question}>
                    And I still haven't found what I'm looking for!
                  </p>
                  <form action="">
                    <input
                      type="text"
                      name="answer"
                      placeholder="Answer Format: **********"
                    />
                    <button>
                      <i className="fa-regular fa-paper-plane"></i>Submit
                    </button>
                  </form> */}
                </dd>
                <dt className={`wave fadeInUp ${styles["faq-header"]}`}>
                  <span>Task 4</span>An Introduction to Shell Operators
                </dt>
                <dd className={`fadeInUp ${styles["faq-body"]}`}>
                  <ul>
                    <li>
                      <p>
                        Linux operators are a fantastic way to power up your
                        knowledge of working with Linux. There are a few
                        important operators that are worth noting. We'll cover
                        the basics and break them down accordingly to bite-sized
                        chunks.
                      </p>
                      <p>
                        At an overview, I'm going to be showcasing the following
                        operators:
                      </p>
                      <table
                        className={`${styles.table} ${styles["table-bordered"]}`}
                      >
                        <tbody>
                          <tr>
                            <td>Symbol / Operator </td>
                            <td>Description</td>
                          </tr>
                          <tr>
                            <td>&</td>
                            <td>
                              This operator allows you to run commands in the
                              background of your terminal.
                            </td>
                          </tr>
                          <tr>
                            <td>&&</td>
                            <td>
                              This operator allows you to combine multiple
                              commands together in one line of your terminal.
                            </td>
                          </tr>
                          <tr>
                            <td>&gt;</td>
                            <td>
                              This operator is a redirector - meaning that we
                              can take the output from a command (such as using
                              cat to output a file) and direct it elsewhere.
                            </td>
                          </tr>
                          <tr>
                            <td>&gt;&gt;</td>
                            <td>
                              This operator does the same function of the{" "}
                              <span>&gt;</span> operator but appends the output
                              rather than replacing (meaning nothing is
                              overwritten).
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p>Let's cover these in a bit more detail.</p>
                    </li>
                    <li>
                      <h2>Operator "&"</h2>
                      <p>
                        This operator allows us to execute commands in the
                        background. For example, let's say we want to copy a
                        large file. This will obviously take quite a long time
                        and will leave us unable to do anything else until the
                        file successfully copies.
                      </p>
                      <p>
                        The "&" shell operator allows us to execute a command
                        and have it run in the background (such as this file
                        copy) allowing us to do other things!
                      </p>
                    </li>
                    <li>
                      <h2>Operator "&&"</h2>
                      <p>
                        This shell operator is a bit misleading in the sense of
                        how familiar is to its partner "&". Unlike the "&"
                        operator, we can use "&&" to make a list of commands to
                        run for example <span>command1 && command2</span>.
                        However, it's worth noting that <span>command2 </span>
                        will only run if <span>command2</span> was successful.
                      </p>
                    </li>
                    <li>
                      <h2>Operator "&gt;"</h2>
                      <p>
                        This operator is what's known as an output redirector.
                        What this essentially means is that we take the output
                        from a command we run and send that output to somewhere
                        else.
                      </p>
                      <p>
                        A great example of this is redirecting the output of the
                        <span> echo</span> command that we learned in Task 4. Of
                        course, running something such as
                        <span> echo howdy </span>will return "howdy" back to our
                        terminal — that isn't super useful. What we can do
                        instead, is redirect "howdy" to something such as a new
                        file!
                      </p>
                      <p>
                        Let's say we wanted to create a file named "welcome"
                        with the message "hey". We can run
                        <span> echo hey &gt; welcome</span> where we want the
                        file created with the contents "hey" like so:
                      </p>
                      <div className={`${styles["terminal-container"]}`}>
                        <div className={`${styles["terminal-content"]}`}>
                          <div className={`${styles["terminal-top"]}`}>
                            Using the &gt; Operator
                          </div>
                          <pre
                            className={`${styles["terminal-code"]} language-shell-session`}
                            tabIndex="0"
                          >
                            <code className="language-shell-session">
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    CyberLabs@linux1
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.punctuation}`}
                                  >
                                    :
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.path}`}
                                  >
                                    ~
                                  </span>
                                </span>
                                <span
                                  className={`${styles.token} ${styles.important} ${styles["shell-symbol"]}`}
                                >
                                  $
                                </span>
                                <span
                                  className={`${styles.token} ${styles.bash} ${styles["language-bash"]}`}
                                >
                                  <span
                                    className={`${styles["class-name"]} ${styles.token}`}
                                  >
                                    {" "}
                                    echo
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    {" "}
                                    hey{" "}
                                  </span>
                                  <span
                                    className={`${styles["class-name"]} ${styles.token}`}
                                  >
                                    &gt;{" "}
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    welcome
                                  </span>
                                </span>
                              </span>
                            </code>
                          </pre>
                        </div>
                      </div>
                      <div className={`${styles["terminal-container"]}`}>
                        <div className={`${styles["terminal-content"]}`}>
                          <div className={`${styles["terminal-top"]}`}>
                            Using cat to output the "welcome" file
                          </div>
                          <pre
                            className={`${styles["terminal-code"]} language-shell-session`}
                            tabIndex="0"
                          >
                            <code className="language-shell-session">
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    CyberLabs@linux1
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.punctuation}`}
                                  >
                                    :
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.path}`}
                                  >
                                    ~
                                  </span>
                                </span>
                                <span
                                  className={`${styles.token} ${styles.important} ${styles["shell-symbol"]}`}
                                >
                                  $
                                </span>
                                <span
                                  className={`${styles.token} ${styles.bash} ${styles["language-bash"]}`}
                                >
                                  <span
                                    className={`${styles.function} ${styles.token}`}
                                  >
                                    {" "}
                                    cat{" "}
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    welcome
                                  </span>
                                </span>
                              </span>
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    hey
                                  </span>
                                </span>
                              </span>
                            </code>
                          </pre>
                        </div>
                      </div>
                      <h2 className={styles.note}>
                        Note: If the file i.e. "welcome" already exists, the
                        contents will be overwritten!
                      </h2>
                    </li>
                    <li>
                      <h2>Operator "&gt;&gt;"</h2>
                      <p>
                        This operator is also an output redirector like in the
                        previous operator <span>&gt;</span> we discussed.
                        However, what makes this operator different is that
                        rather than overwriting any contents within a file, for
                        example, it instead just puts the output at the end.
                      </p>
                      <p>
                        Following on with our previous example where we have the
                        file "welcome" that has the contents of "hey". If were
                        to use echo to add "hello" to the file using the
                        <span> &gt;</span> operator, the file will now only have
                        "hello" and not "hey".
                      </p>
                      <p>
                        The <span>&gt;&gt;</span> operator allows to append the
                        output to the bottom of the file — rather than replacing
                        the contents like so:
                      </p>
                      <div className={`${styles["terminal-container"]}`}>
                        <div className={`${styles["terminal-content"]}`}>
                          <div className={`${styles["terminal-top"]}`}>
                            Using the &gt;&gt; Operator
                          </div>
                          <pre
                            className={`${styles["terminal-code"]} language-shell-session`}
                            tabIndex="0"
                          >
                            <code className="language-shell-session">
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    CyberLabs@linux1
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.punctuation}`}
                                  >
                                    :
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.path}`}
                                  >
                                    ~
                                  </span>
                                </span>
                                <span
                                  className={`${styles.token} ${styles.important} ${styles["shell-symbol"]}`}
                                >
                                  $
                                </span>
                                <span
                                  className={`${styles.token} ${styles.bash} ${styles["language-bash"]}`}
                                >
                                  <span
                                    className={`${styles["class-name"]} ${styles.token}`}
                                  >
                                    {" "}
                                    echo
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    {" "}
                                    hello{" "}
                                  </span>
                                  <span
                                    className={`${styles["class-name"]} ${styles.token}`}
                                  >
                                    &gt;&gt;{" "}
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    welcome
                                  </span>
                                </span>
                              </span>
                            </code>
                          </pre>
                        </div>
                      </div>
                      <div className={`${styles["terminal-container"]}`}>
                        <div className={`${styles["terminal-content"]}`}>
                          <div className={`${styles["terminal-top"]}`}>
                            Using cat to output the "welcome" file
                          </div>
                          <pre
                            className={`${styles["terminal-code"]} language-shell-session`}
                            tabIndex="0"
                          >
                            <code className="language-shell-session">
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    CyberLabs@linux1
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.punctuation}`}
                                  >
                                    :
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.path}`}
                                  >
                                    ~
                                  </span>
                                </span>
                                <span
                                  className={`${styles.token} ${styles.important} ${styles["shell-symbol"]}`}
                                >
                                  $
                                </span>
                                <span
                                  className={`${styles.token} ${styles.bash} ${styles["language-bash"]}`}
                                >
                                  <span
                                    className={`${styles.function} ${styles.token}`}
                                  >
                                    {" "}
                                    cat{" "}
                                  </span>
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    welcome
                                  </span>
                                </span>
                              </span>
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    hey
                                  </span>
                                </span>
                              </span>
                              <span
                                className={`${styles.token} ${styles.command}`}
                              >
                                <span
                                  className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                                >
                                  <span
                                    className={`${styles.token} ${styles.user}`}
                                  >
                                    hello
                                  </span>
                                </span>
                              </span>
                            </code>
                          </pre>
                        </div>
                      </div>
                    </li>
                  </ul>
                  {/* <p className={styles.question}>
                    If we wanted to run a command in the background, what
                    operator would we want to use?
                  </p>
                  <form action="">
                    <input
                      type="text"
                      name="answer"
                      placeholder="Answer Format: **********"
                    />
                    <button>
                      <i className="fa-regular fa-paper-plane"></i>Submit
                    </button>
                  </form>
                  <p className={styles.question}>
                    If I wanted to replace the contents of a file named
                    "passwords" with the word "password123", what would my
                    command be?
                  </p>
                  <form action="">
                    <input
                      type="text"
                      name="answer"
                      placeholder="Answer Format: **********"
                    />
                    <button>
                      <i className="fa-regular fa-paper-plane"></i>Submit
                    </button>
                  </form>
                  <p className={styles.question}>
                    Now if I wanted to add "tryhackme" to this file named
                    "passwords" but also keep "passwords123", what would my
                    command be
                  </p>
                  <form action="">
                    <input
                      type="text"
                      name="answer"
                      placeholder="Answer Format: **********"
                    />
                    <button>
                      <i className="fa-regular fa-paper-plane"></i>Submit
                    </button>
                  </form>
                  <p className={styles.question}>
                    Now use the deployed Linux machine to put these into
                    practice
                  </p>
                  <form action="">
                    <input
                      type="text"
                      name="answer"
                      placeholder="Answer Format: **********"
                    />
                    <button>
                      <i className="fa-regular fa-paper-plane"></i>Submit
                    </button>
                  </form> */}
                </dd>
              </dl>
            </div>
            <div className={styles["go-to-section"]}>
              <Link to="/linux/linux_lab" className={styles["go-to"]}>
                Go To Lab
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
