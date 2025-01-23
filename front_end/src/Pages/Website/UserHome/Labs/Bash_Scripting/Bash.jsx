import React from "react";
import { useEffect, useRef } from "react";
import $ from "jquery";
import styles from "../Page_Styles/Content.module.css";
import Header from "../../Header/Header";
import background from "../../assets/img/background.png";
import image from "../../assets/img/bash/full_colored_dark (1).png";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import exampleImage1 from "../../assets/img/bash/carbon-8.png";
import exampleImage2 from "../../assets/img/bash/carbon-9.png";
import exampleImage3 from "../../assets/img/bash/carbon-10.png";
import exampleImage4 from "../../assets/img/bash/carbon-2.png";
import exampleImage5 from "../../assets/img/bash/carbon-3.png";
import exampleImage6 from "../../assets/img/bash/carbon-4.png";
import exampleImage7 from "../../assets/img/bash/carbon-5.png";
import exampleImage8 from "../../assets/img/bash/carbon-6.png";
import exampleImage9 from "../../assets/img/bash/carbon-7.png";
import exampleImage10 from "../../assets/img/bash/carbon-12.png";
import exampleImage11 from "../../assets/img/bash/carbon-13.png";
import exampleImage12 from "../../assets/img/bash/carbon-14.png";
import exampleImage13 from "../../assets/img/bash/carbon-19.png";
import exampleImage14 from "../../assets/img/bash/carbon-15.png";
import exampleImage15 from "../../assets/img/bash/carbon-16.png";
import exampleImage16 from "../../assets/img/bash/carbon-17.png";
import exampleImage17 from "../../assets/img/bash/carbon-25.png";
import exampleImage18 from "../../assets/img/bash/first.jpg";

export default function Bash() {
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
                <Link to="">Bash Scripting</Link>
              </li>
              {/* <li>
                <span className="active-breadcrumb">
                  Intro To Offensive Security
                </span>
              </li> */}
            </ul>
          </div>
          <div className={styles["course-info"]}>
            <img src={image} alt="logo" />
            <div className={styles["course-text"]}>
              <h1>Bash Scripting</h1>
              <p>
                Master the basics of Bash scripting, a powerful tool for
                automating tasks and managing systems in cybersecurity
                environments.
              </p>
              <div className={styles["course-icons"]}>
                <div className={styles.diff}>
                  <div className={styles.easy}>
                    <i className="fa-solid fa-signal"></i>
                    <p>Easy</p>
                  </div>
                </div>
                <div className={styles.duration}>
                  <i className="fa-solid fa-clock "></i>
                  <p className={styles.time}>50 min</p>
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
          <div className={styles.row}>
            <div className={styles["faq-section"]}>
              <dl className={styles["section-text"]}>
                {/* Single FAQ Area  */}
                <dt className={`wave fadeInUp ${styles["faq-header"]}`}>
                  <span>Lesson 1</span> Introduction
                </dt>
                <dd className={`fadeInUp ${styles["faq-body"]}`}>
                  <h1>Welcome to the introductory bash scripting room!</h1>
                  <img src={exampleImage18} alt="Example" />
                  <h2>What is bash?</h2>
                  <p>
                    Bash is a scripting language that runs within the terminal
                    on most Linux distros, as well as MacOS. Shell scripts are a
                    sequence of bash commands within a file, combined together
                    to achieve more complex Lessons than simple one-liner and
                    are especially useful when it comes to automating sysadmin
                    Lessons such as backups.
                  </p>
                  <p>
                    This is a few things among many that you will learn in this
                    room:
                  </p>
                  <ol>
                    <li>Bash syntax</li>
                    <li>Variables</li>
                    <li>Using parameters</li>
                    <li>Arrays</li>
                    <li>Conditionals</li>
                  </ol>
                </dd>
                <dt className={`wave fadeInUp ${styles["faq-header"]}`}>
                  <span>Lesson 2</span> Our first simple bash scripts
                </dt>
                <dd className={`fadeInUp ${styles["faq-body"]}`}>
                  <h1>
                    Ok now that we have had a brief introduction to what bash is
                    and what it is used for let's jump right into some examples!
                  </h1>
                  <p>First of all let’s lay out our structure.</p>
                  <p>
                    A bash script always starts with the following line of code
                    at the top of the script.
                  </p>
                  <img src={exampleImage1} alt="Example" />
                  <p>
                    This is so your shell (whatever type of it) knows that it
                    needs to run your file using bash in the terminal.
                  </p>
                  <p>Lets get into some basic examples.</p>
                  <img src={exampleImage2} alt="Example" />
                  <p>
                    This will return the string “Hello World”. The command “
                    <span>"echo"</span>” is used to output text to the screen,
                    the same way as “<span>print</span>” in python. I suggest
                    you test this out in your terminal to get to grips with
                    bash!
                  </p>
                  You can also perform normal Linux commands inside your bash
                  script and it will be executed if formatted right. For example
                  we can run the command “<span>ls</span>” inside our bash
                  script and we will see the output when we run the file. So
                  lets make it do this!
                  <img src={exampleImage3} alt="Example" />
                  <p>
                    Now from here on I am going to assume that you have a basic
                    understanding of Linux and its commands.
                  </p>
                  <p>
                    I'm also not going to include the<span> #!/bin/bash </span>
                    at the start of my code snippets otherwise it will take up a
                    lot of room so be aware that you need it always at the start
                    of your files!
                  </p>
                  <p>
                    Now to run our bash script we must first give it executable
                    permissions :
                  </p>
                  <span>Chmod +x yourfile.sh</span>
                  <p>
                    And then we run it using <span>./</span>
                  </p>
                  {/* <div className={styles["go-to-section"]}>
                  <Link
                    to="/bash-scripting/bash_quiz#Our first simple bash scripts"
                    className={styles["go-to"]}
                  >
                    Test your self
                  </Link>
                  </div> */}
                </dd>
                <dt className={`wave fadeInUp ${styles["faq-header"]}`}>
                  <span>Lesson 3</span> Variables
                </dt>
                <dd className={`fadeInUp ${styles["faq-body"]}`}>
                  <h1>
                    Now we are moving onto variables,in bash these are quite
                    simple and we create them
                  </h1>
                  <strong>like so:</strong>
                  <img src={exampleImage4} alt="Example" />
                  <p>
                    Where we give the value of <span>Jammy</span> and assign it
                    to the variable <span>name</span>.
                  </p>
                  <p>
                    Please note that for variables to work you cannot leave a
                    space between the variable name, the ”=” and the value. They
                    cannot have spaces in.
                  </p>
                  <p>
                    So how would we now use our variable? Well its also very
                    simple.
                  </p>
                  <p>
                    We have to add a <span>$</span> onto front of our variable
                    name in order to use it.
                  </p>
                  <img src={exampleImage5} alt="Example" />
                  <p>
                    If we test this out in our own terminal we get something
                    like this:
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
                          <span className={`${styles.token} ${styles.command}`}>
                            <span
                              className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                            >
                              <span
                                className={`${styles.token} ${styles.user}`}
                              >
                                $ name = "Jammy"
                              </span>
                            </span>
                          </span>
                          <span className={`${styles.token} ${styles.command}`}>
                            <span
                              className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                            >
                              <span
                                className={`${styles.token} ${styles.user}`}
                              >
                                $ echo $name
                              </span>
                            </span>
                          </span>
                          <span className={`${styles.token} ${styles.command}`}>
                            <span
                              className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                            >
                              <span
                                className={`${styles.token} ${styles.user}`}
                              >
                                Jammy
                              </span>
                            </span>
                          </span>
                        </code>
                      </pre>
                    </div>
                  </div>
                  <p>
                    This would output <strong>“Jammy”</strong> to the screen.
                  </p>
                  <p>
                    Variables make it much easier to store data and rather than
                    typing out the same thing in multiple places we could simply
                    insert our variable with $var and then declare that to a
                    certain value making it easier to fall back on if you do
                    something wrong and need to change it. So how can we debug
                    our code?
                  </p>
                  <p>
                    Debugging is a very important part of programming so we
                    should get used to problem solving and fixing errors as
                    early as possible. And bash has a few built in features that
                    make our life simple.
                  </p>
                  <p>When running at the command line you can do:</p>
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
                          <span className={`${styles.token} ${styles.command}`}>
                            <span
                              className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                            >
                              <span
                                className={`${styles.token} ${styles.user}`}
                              >
                                bash -x ./file.sh
                              </span>
                            </span>
                          </span>
                        </code>
                      </pre>
                    </div>
                  </div>
                  <p>
                    You can make a simple bash script(now you know some basic
                    syntax) and make something completely wrong. Then step
                    through your program with debug mode and see what it looks
                    like when it throws errors!
                  </p>
                  <p>
                    This tells you which lines are working and which lines are
                    not. If you want to debug at a certain point you can insert{" "}
                    <strong>set -x</strong> into your script and{" "}
                    <strong>set +x</strong> to end the section like the
                    following:
                  </p>
                  <img src={exampleImage6} alt="Example" />
                  <p>
                    So lets look at an example. This is our script from earlier
                    being ran with <span>bash -x ./example.sh</span>
                  </p>
                  <img src={exampleImage7} alt="Example" />
                  <p>
                    You can see its outputting a + for the command and then the
                    output of what that command executed. If there was an error
                    it would output a - on that line this makes it easy to spot
                    where you have gone wrong so you can fix them.
                  </p>
                  <p>
                    We can also use multiple variables in something like an echo
                    statement. You aren't just limited to using 1!
                  </p>
                  <img src={exampleImage8} alt="Example" />
                  <p>
                    Answer the following questions and use this piece of code to
                    guide you.
                  </p>
                  <img src={exampleImage9} alt="Example" />
                  <div className={styles["go-to-section"]}>
                  <Link
                    to="/bash-scripting/bash_quiz#Variables"
                    className={styles["go-to"]}
                  >
                    Go To Variables Questions
                  </Link>
                  </div>
                </dd>
                <dt className={`wave fadeInUp ${styles["faq-header"]}`}>
                  <span>Lesson 4</span> Parameters
                </dt>
                <dd className={`fadeInUp ${styles["faq-body"]}`}>
                  <h1>
                    We will now look at one of the main features of bash and
                    that's using parameters.
                  </h1>
                  <p>
                    We will firstly look at parameters specified using the
                    command line when running the file. These come in many forms
                    but often have the "$" prefix because a parameter is still a
                    variable.
                  </p>
                  <p>
                    Lets start by declaring a parameter that is going to be our
                    first argument when running our bash script.
                  </p>
                  <img src={exampleImage10} alt="Example" />
                  <p>
                    We now run our script with <span>./example.sh Alex</span>
                  </p>
                  <p>And sure enough we get returned with “Alex”</p>
                  <p>
                    So what if we wanted the 2nd argument? Well the process is
                    very simple and we simply add a <span>$2</span> instead of{" "}
                    <span>name=$1</span>
                  </p>
                  <p>
                    Then run with <span>./example.sh Alex Tony</span>
                  </p>
                  <p>What do you think it would return ?</p>
                  <p>
                    <span>it would return "Tony".</span>
                  </p>
                  <p>
                    What if we didn't want to supply them like this however, and
                    instead it would let us type in our name in a more
                    interactive way, we can do this using <span>read</span>.
                  </p>
                  <img src={exampleImage11} alt="Example" />
                  <p>
                    This code will hang after its ran, this gives you the
                    opportunity to type in your name.
                  </p>
                  <img src={exampleImage12} alt="Example" />
                  <p>And we can see that it worked!</p>
                  <p>
                    Maybe try making a little biography maker, where you take
                    the name, age, and job as parameters. Store them inside a
                    variable and then output them to the screen inside a
                    sentence.
                  </p>
                  <p>
                    However there is so much more that you can do with
                    parameters and I advice you to play around with them, after
                    all practice is what makes you better!
                  </p>
                  <div className={styles["go-to-section"]}>
                  <Link
                    to="/bash-scripting/bash_quiz#Parameters"
                    className={styles["go-to"]}
                  >
                    Go To Parameters Questions
                  </Link>
                  </div>
                </dd>
                <dt className={`wave fadeInUp ${styles["faq-header"]}`}>
                  <span>Lesson 5</span> Arrays
                </dt>
                <dd className={`fadeInUp ${styles["faq-body"]}`}>
                  <h1>Arrays</h1>
                  <p>
                    For this module i suggest you follow along in a standard
                    linux terminal to make it easier to understand.
                  </p>
                  <p>
                    Arrays are used to store multiple pieces of data in one
                    variable, which can then be extracted by using an index.
                    Most commonly notated as <span>var[index_position]</span>.
                  </p>
                  <p>
                    Arrays use indexing meaning that each item in an array
                    stands for a number.
                  </p>
                  <p>
                    In the array <span>['car', 'train', 'bike', 'bus'] </span>
                    each item has a corresponding index , All indexes start at
                    position 0
                  </p>
                  <table
                    className={`${styles.table} ${styles["table-bordered"]}`}
                  >
                    <tbody>
                      <tr>
                        <td>item</td>
                        <td>index</td>
                      </tr>
                      <tr>
                        <td>car</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>train</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>bike</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>bus</td>
                        <td>3</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>Now we have covered this, let's make an array in bash.</p>
                  <p>The syntax is as follows :</p>
                  <p>
                    We have the variable name, in our case
                    <span> ‘transport’</span> We then wrap each item in brackets
                    leaving a space between each item.
                  </p>
                  <p>
                    <span>transport=('car' 'train' 'bike' 'bus')</span>
                  </p>
                  <p>
                    We can then echo out all the elements in our array like
                    this:
                  </p>
                  <p>
                    <span>echo "$/&#123;transport[@]&#125;"</span>
                  </p>
                  <p>
                    You can try this in your own terminal and see what it
                    outputs.
                  </p>
                  <p>
                    So what if we wanted to print out the item
                    <span> train</span>.
                  </p>
                  <p>
                    We would simply type:
                    <span> echo "$&#123;transport[1]&#125;"</span> because the
                    train is at index position 1.
                  </p>
                  <p>
                    The last thing we will cover is if we want to change an
                    element, or delete it. If we wanted to remove an element we
                    would use the <span>unset</span> utility.
                  </p>
                  <p>
                    <span>unset transport[1]</span>
                  </p>
                  <p>
                    This now removes the <span>train</span> item, if we wanted
                    to we could echo it back out and see that it is indeed gone,
                  </p>
                  <p>Now lets set it to something else. We can do:</p>
                  <p>transport[1]='trainride'</p>
                  <p>If we echo the array then we get:</p>
                  <p>
                    <span>car trainride bike bus</span>
                  </p>
                  <p>
                    So we successfully managed to swap out an element in our
                    array!
                  </p>
                  <div className={styles["go-to-section"]}>
                  <Link
                    to="/bash-scripting/bash_quiz#Arrays"
                    className={styles["go-to"]}
                  >
                    Go To Arrays Questions
                  </Link>
                  </div>
                </dd>
                <dt className={`wave fadeInUp ${styles["faq-header"]}`}>
                  <span>Lesson 6</span> Conditionals
                </dt>
                <dd className={`fadeInUp ${styles["faq-body"]}`}>
                  <img src={exampleImage13} alt="Example" />
                  <p>
                    When we talk about conditionals it means that a certain
                    piece of code relies on a condition being met, this is often
                    determined with relational operators, such as equal to,
                    greater than, and less than.
                  </p>
                  <p>
                    We will make a simple "if" statement to check if a variable
                    is equal to a value, we will also make a script that checks
                    if a file exists and that it is writeable, if it is we will
                    write a message to that file, if not writeable it will
                    delete it and make a new one. A Lot of new things will be
                    taught here so pay attention.
                  </p>
                  <p>
                    First, we will discuss the basic syntax of an if statement.
                  </p>
                  <p>All if statements look like so:</p>
                  <img src={exampleImage14} alt="Example" />
                  <p>Let's look at an example:</p>
                  <img src={exampleImage15} alt="Example" />
                  <p>
                    If statements always use a pair of brackets and in the case
                    of the [] we need to leave a space on both sides of the
                    text(the bash syntax). We also always need to end the if
                    statement with <span>fi</span>
                  </p>
                  <p>
                    Here a variable is being declared as 10 and in the top line
                    of the if statement the variable $count is being compared to
                    the integer 10.
                  </p>
                  <p>
                    If they are equal then it outputs <strong>true</strong>, if
                    its false it outputs <strong>false</strong>. As we know 10
                    is equal to 10 so it outputs true.
                  </p>
                  <p>
                    The <span>-eq</span> is one way of doing this, you could
                    also use <span>“=”</span>
                  </p>
                  <table
                    className={`${styles.table} ${styles["table-bordered"]}`}
                  >
                    <thead>
                      <tr>
                        <th>Operator</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>-eq</td>
                        <td>
                          Checks if the value of two operands are equal or not;
                          if yes, then the condition becomes true.
                        </td>
                      </tr>
                      <tr>
                        <td>-ne</td>
                        <td>
                          Checks if the value of two operands are not equal; if
                          values are not equal, then the condition becomes true.
                        </td>
                      </tr>
                      <tr>
                        <td>-gt</td>
                        <td>
                          Checks if the left operand is greater than the right
                          operand; if yes, then the condition becomes true.
                        </td>
                      </tr>
                      <tr>
                        <td>-lt</td>
                        <td>
                          Checks if the left operand is less than the right
                          operand; if yes, then the condition becomes true.
                        </td>
                      </tr>
                      <tr>
                        <td>-ge</td>
                        <td>
                          Checks if the left operand is greater than or equal to
                          the right operand; if yes, then the condition becomes
                          true.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>These are some examples. ↑↑↑ </p>
                  <p>
                    So now let's use this to make a little script that compares
                    an input(a parameter) and checks it against a value to check
                    if it's true or not. A guessing game if you will.
                  </p>
                  <img src={exampleImage16} alt="Example" />
                  <p>Now let's test this in our terminal.</p>
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
                          <span className={`${styles.token} ${styles.command}`}>
                            <span
                              className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                            >
                              <span
                                className={`${styles.token} ${styles.user}`}
                              >
                                # ./example.sh guessme
                              </span>
                            </span>
                          </span>
                          <span className={`${styles.token} ${styles.command}`}>
                            <span
                              className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                            >
                              <span
                                className={`${styles.token} ${styles.user}`}
                              >
                                "They are equal"
                              </span>
                            </span>
                          </span>
                          <span className={`${styles.token} ${styles.command}`}>
                            <span
                              className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                            >
                              <span
                                className={`${styles.token} ${styles.user}`}
                              >
                                # ./example.sh hi
                              </span>
                            </span>
                          </span>
                          <span className={`${styles.token} ${styles.command}`}>
                            <span
                              className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                            >
                              <span
                                className={`${styles.token} ${styles.user}`}
                              >
                                "They are not equal"
                              </span>
                            </span>
                          </span>
                        </code>
                      </pre>
                    </div>
                  </div>
                  <p>And we can see that it works!</p>
                  <p>
                    Feel free to play around with these and try making different
                    combinations and using different operators.
                  </p>
                  <p>
                    Now let's create another script where we will use 2
                    conditions simultaneously and coming back to a concept we
                    learnt in the first lesson.
                  </p>
                  <p>Let's begin.</p>
                  <p>
                    We want to make a script that we will perform on a file
                    given by a <strong>parameter</strong>.
                  </p>
                  <p>
                    We then check if it exists and if it has{" "}
                    <span>write permissions</span>. If it has write perms then
                    we echo “hello” to it. If it is either non-accessible or
                    doesn't exist we will create the file and echo{" "}
                    <span>“hello”</span> to it. Let's begin!
                  </p>
                  <img src={exampleImage17} alt="Example" />
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
                          <span className={`${styles.token} ${styles.command}`}>
                            <span
                              className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                            >
                              <span
                                className={`${styles.token} ${styles.user}`}
                              >
                                ./example.sh hello.txt
                              </span>
                            </span>
                          </span>
                          <span className={`${styles.token} ${styles.command}`}>
                            <span
                              className={`${styles.token} ${styles.info} ${styles.punctuation}`}
                            >
                              <span
                                className={`${styles.token} ${styles.user}`}
                              >
                                ─# cat hello.txt
                              </span>
                            </span>
                          </span>
                          <span className={`${styles.token} ${styles.command}`}>
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
                  <p>And we can see that it worked!!</p>
                  <p>
                    The <strong>-f </strong>checked if the file existed.
                  </p>
                  <p>
                    The <strong> -w </strong> checked if the file was writable,
                    without write permissions we wouldn't be able to output our
                    text into the file.
                  </p>
                  <p>
                    To finish off our little project from the previous Lesson.
                    You can build on your script using an if/else statement.
                    Test to see if the age is under 18, if it is then echo out
                    their name with "You are not eligible for work" or something
                    along these lines, if they are over 18 then ask them for
                    their job, you can do this with <span>read</span>
                  </p>
                  <p>
                    Feel free to add anything you like and make it as
                    complicated as you wish and good luck with your project!
                  </p>
                  <div className={styles["go-to-section"]}>
                    <Link
                      to="/bash-scripting/bash_quiz#Conditionals"
                      className={styles["go-to"]}
                    >
                      Go To Conditionals Questions
                    </Link>
                  </div>
                </dd>
                {/* 
            # main slider

            <dt className="wave fadeInUp faq-header"><span>Lesson 3</span> Variables </dt>
                <dd className="fadeInUp faq-body">
                <p><br></br></p>


            </dd> 
            
            */}
              </dl>
            </div>
            <div className={styles["go-to-section"]}>
              <Link to="/bash-scripting/bash_quiz" className={styles["go-to"]}>
                Go To Quiz
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
