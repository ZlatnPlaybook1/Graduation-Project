import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "../../Components/Topics CSS/topics.css";
import background from "../../assets/img/SQL_Injection/New/background.png";
import courseImage from "../../assets/img/SQL_Injection/New/courseImage.png";
import UseFaqSection from "../../Components/UseFaqSection/UseFaqSection.jsx";
import CourseLanding from "../../Components/CourseLanding/CourseLanding.jsx";
import Banner from "../../Components/Banner/Banner.jsx";
import "../Page_Styles/Content_sec.css"
import Go2TopBtn from "../../Components/Go2Top_Btn/Go2Top_Btn.jsx";
import IntroImage from "../../assets/img/ACV/topic2.png"
import DacImage from "../../assets/img/ACV/DAC.png"
import DBServer from "../../assets/img/SQL_Injection/DBServer.png"
import MacImage from "../../assets/img/ACV/MAC.png"
import table from "../../assets/img/SQL_Injection/table.png"
import RbacImage from "../../assets/img/ACV/RBAC.png"
import AbacImage from "../../assets/img/ACV/ABAC.png"
import ACVImage from "../../assets/img/ACV/access-control.svg"
import BrokenAccImage from "../../assets/img/ACV/BrokeAcc.png"
import IdorImage from "../../assets/img/ACV/IDOR.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import OutOfBased from "../../assets/img/SQL_Injection/Out-of-Band SQLi.png"
import ThemeSwitcher from "../../Components/ThemeSwitcher/ThemeSwitcher.jsx";
export default function Sql_Injection() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();

  return (
    <>
      <Banner />
      <Header />
      <ThemeSwitcher />
      {/* Start Landing */}
      <CourseLanding
        background={background}
        backgroundStyle={{ objectFit: "cover", height: "100%", width: "100%" }}
        courseImage={courseImage}
        courseTitle="SQL Injection"
        courseDescription="Learn how attackers exploit vulnerabilities in web applications
                using SQL injection and understand the techniques to detect and
                prevent them."
        difficulty="Intermediate"
        duration="30 min"
        onSaveRoom={() => console.log("Room Saved!")}
        onLike={() => console.log("Liked!")}
        onDislike={() => console.log("Disliked!")}
      />
      {/* End Landing */}

      {/* Start Course */}
      <div className="Content ">
        <div className="secure-container" ref={faqSectionRef} >
          <div className="content-row">
            <div className="content-section">
              <dl className="topics-text ">
                {/* Task 1 */}
                <dt className="fadeInUp faq-header">
                  <span>Intro </span> Brief
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">

                  <p>SQL (Structured Query Language) Injection, mostly referred to as SQLi, is an attack on a web application database server that causes malicious queries to be executed. When a web application communicates with a database using input from a user that hasn't been properly validated, there runs the potential of an attacker being able to steal, delete or alter private and customer data and also attack the web application authentication methods to private or customer areas. This is why SQLi is one of the oldest web application vulnerabilities, and it can also be the most damaging.</p>
                  <p>In this room, you'll learn what databases are, what SQL is with some basic SQL commands, how to detect SQL vulnerabilities, how to exploit SQLi vulnerabilities and, as a developer, how you can protect yourself against SQL Injection.</p>





                </dd>
                {/* Topic 1 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 1</span>  What is a Database?
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">
                  <p>If you're not used to working with databases or exploiting them, there's probably some new terminology to get used to, so let's start with some basics on how databases are structured and how they work.</p>
                  <p>
                    <h3 className="content__title">What is a database?</h3> A database is a way of electronically storing collections of data in an organised manner. A database is controlled by a DBMS, which is an acronym for  Database Management System. DBMSs fall into two camps: Relational and Non-Relational; the focus of this room will be on Relational databases; some common ones you'll come across are MySQL, Microsoft SQL Server, Access, PostgreSQL and SQLite. We'll explain the difference between Relational and Non-Relational databases at the end of this task, but first, it's important to learn a few terms.
                  </p>
                  <p>Within a DBMS, you can have multiple databases, each containing its own set of related data. For example, you may have a database called "shop". Within this database, you want to store information about products available to purchase, users who have signed up to your online shop, and information about the orders you've received. You'd store this information separately in the database using something called tables. The tables are identified with a unique name for each one. You can see this structure in the diagram below, but you can also see how a business might have other separate databases to store staff information or the accounts team.</p>
                  <img src={DBServer} alt="" className="img-fluid w-50 mx-auto d-block " />
                  <hr />
                  <p>
                    <h3 className="content__title">What are tables?</h3> A table is made up of columns and rows; a useful way to imagine a table is like a grid with the columns going across the top from left to right containing the name of the cell and the rows going from top to bottom, with each one having the actual data.
                  </p>
                  <img src={table} alt="" className="img-fluid w-50 mx-auto d-block " />
                  <hr />
                  <p>
                    <h3 className="content__title">Columns:</h3> Each column, better referred to as a field, has a unique name per table. When creating a column, you also set the type of data it will contain, common ones being integers (numbers), strings (standard text) or dates. Some databases can contain much more complex data, such as geospatial, which contains location information. Setting the data type also ensures that incorrect information isn't stored, such as the string "hello world" being stored in a column meant for dates. If this happens, the database server will usually produce an error message. A column containing an integer can also have an auto-increment feature enabled; this gives each row of data a unique number that grows (increments) with each subsequent row. Doing so creates what is called a key field; a key field has to be unique for every row of data, which can be used to find that exact row in SQL queries.</p>
                  <p>
                    <h3 className="content__title">Rows:</h3> Rows or records contain individual lines of data. When you add data to the table, a new row/record is created; when you delete data, a row/record is removed.
                  </p>
                  <p>
                    <h3 className="content__title">Relational Vs Non-Relational Databases:</h3> A relational database stores information in tables, and often, the tables share information between them; they use columns to specify and define the data being stored and rows actually to store the data. The tables will often contain a column that has a unique ID (primary key), which will then be used in other tables to reference it and cause a relationship between the tables, hence the name relational database.
                  </p>
                  <p>Non-relational databases, sometimes called NoSQL, on the other hand, are any sort of database that doesn't use tables, columns and rows to store the data. A specific database layout doesn't need to be constructed so each row of data can contain different information, giving more flexibility over a relational database.  Some popular databases of this type are MongoDB, Cassandra and ElasticSearch.</p>
                </dd>
                {/* Topic 2 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 2</span> What is SQL?
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">
                  <p>SQL (Structured Query Language) is a feature-rich language used for querying databases. These SQL queries are better referred to as statements.</p>
                  <p>The simplest of the commands which we'll cover in this task is used to retrieve (select), update, insert and delete data. Although somewhat similar, some database servers have their own syntax and slight changes to how things work. All of these examples are based on a MySQL database. After learning the lessons, you'll easily be able to search for alternative syntax online for the different servers. It's worth noting that SQL syntax is not case-sensitive.</p>
                  <p><h3 className="content__title">SELECT</h3>
                    The first query type we'll learn is the SELECT query used to retrieve data from the database. </p>
                  <p><h3 className="content__title">select * from users;</h3>
                  </p>
                  <hr />
                  <table class="table table-bordered table-striped">
                    <thead class="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>jon</td>
                        <td>pass123</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>admin</td>
                        <td>p4ssword</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>martin</td>
                        <td>secret123</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>The first word SELECT, tells the database we want to retrieve some data; the * tells the database we want to receive back all columns from the table. For example, the table may contain three columns (id, username and password). "from users" tells the database we want to retrieve the data from the table named users. Finally, the semicolon at the end tells the database that this is the end of the query.  </p>
                  <p>The next query is similar to the above, but this time, instead of using the * to return all columns in the database table, we are just requesting the username and password field.</p>
                  <p><h3 className="content__title">select username,password from users;</h3></p>
                  <table class="table table-bordered table-striped">
                    <thead class="table-dark">
                      <tr>
                        <th>Username</th>
                        <th>Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>jon</td>
                        <td>pass123</td>
                      </tr>
                      <tr>
                        <td>admin</td>
                        <td>p4ssword</td>
                      </tr>
                      <tr>
                        <td>martin</td>
                        <td>secret123</td>
                      </tr>
                    </tbody>
                  </table>
                </dd>
                {/* Topic 3 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 3</span> Role-Based Access Control (RBAC)
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">
                  <p><h3 className="content__subtitle">Role-Based Access Control (RBAC):</h3>
                    In this type of access control, users are assigned roles that define their level of access to resources. RBAC is commonly used in enterprise systems, where users have different levels of authority based on their job responsibilities. In layman’s terms, imagine a modern corporation. You have your managers, your executives, your sales staff, etc. They each have different access to the building. Some can enter the boardroom, others can access the sales floor, and so on. That’s the essence of RBAC - assigning access based on a person’s role within an organization.</p>

                  <table class="table table-bordered table-striped">
                    <thead class="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>jon</td>
                        <td>pass123</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>admin</td>
                        <td>p4ssword</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>martin</td>
                        <td>secret123</td>
                      </tr>
                    </tbody>
                  </table>
                </dd>
                {/* Topic 4 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 4</span>  Attribute-Based Access Control (ABAC)
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">
                  <p>
                    <h3 className="content__subtitle"> Attribute-Based Access Control (ABAC):</h3>
                    In this type of access control, access to resources is determined by a set of attributes, such as user role, time of day, location, and device. ABAC is commonly used in cloud environments and web applications. In layman’s terms, think of a highly advanced sci-fi security system that scans individuals for certain attributes. Maybe it checks whether they’re from a particular planet, whether they’re carrying a specific device, or if they’re trying to access a resource at a specific time. That’s ABAC. It’s like the smart, flexible security of the future.
                  </p>

                  <img src={AbacImage} alt="" className="img-fluid w-75 mx-auto d-block " />
                  <hr />
                  <p>
                    Implementing access control can help prevent security breaches and unauthorized access to sensitive data. However, access control is not foolproof and can be vulnerable to various types of attacks, such as privilege escalation and broken access control vulnerabilities. Therefore, it is important to regularly review and test access control mechanisms to ensure that they are working as intended.
                  </p>
                </dd>
                {/* Topic 5 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 5</span>  Access control vulnerabilities and privilege escalation
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">
                  <h3 className="content__title">In this section, we describe:</h3>
                  <ul >
                    <li > <FontAwesomeIcon
                      icon={faArrowRight}
                      className="me-2 my-0 text-warning"
                    /> Privilege escalation.</li>
                    <li> <FontAwesomeIcon
                      icon={faArrowRight}
                      className="me-2 my-0 text-warning"
                    />The types of vulnerabilities that can arise with access control.</li>
                    <li> <FontAwesomeIcon
                      icon={faArrowRight}
                      className="me-2 my-0 text-warning"
                    />How to prevent access control vulnerabilities.</li>
                  </ul>

                  <div className="note">
                    Labs
                    If you're familiar with the basic concepts behind access control vulnerabilities and want to practice exploiting them on some realistic, deliberately vulnerable targets, you can access labs in this topic from this link 👉🏻   <button
                      onClick={() => handleGoToLab("/AC-Vuln/AC_Vuln_labs")}
                      className="border-0 bg-transparent link-primary text-decoration-underline"
                    >
                      Go To Labs
                    </button>
                  </div>
                  <h3 className="content__title">
                    What is access control?
                  </h3>
                  <p className="desc">
                    Access control is the application of constraints on who or what is authorized to perform actions or access resources. In the context of web applications, access control is dependent on authentication and session management:
                  </p>
                  <ul>
                    <li><FontAwesomeIcon
                      icon={faArrowRight}
                      className="me-2 my-0 text-warning"
                    /><b className="content__subtitle">Authentication </b> 	&nbsp;confirms that the user is who they say they are.</li>
                    <li><FontAwesomeIcon
                      icon={faArrowRight}
                      className="me-2 my-0 text-warning"
                    /><b className="content__subtitle">Session management</b> 	&nbsp; identifies which subsequent HTTP requests are being made by that same user.</li>
                    <li><FontAwesomeIcon
                      icon={faArrowRight}
                      className="me-2 my-0 text-warning"
                    /><b className="content__subtitle">Access control</b> 	&nbsp; determines whether the user is allowed to carry out the action that they are attempting to perform.</li>

                  </ul>
                  <p>
                    Broken access controls are common and often present a critical security vulnerability. Design and management of access controls is a complex and dynamic problem that applies business, organizational, and legal constraints to a technical implementation. Access control design decisions have to be made by humans so the potential for errors is high.
                  </p>
                  <div className="note">
                    You can  Read more from this link 👉🏻
                    <a href="https://portswigger.net/web-security/access-control/security-models" className="border-0 bg-transparent link-primary text-decoration-underline">Access control security models</a>
                  </div>
                  <img src={ACVImage} alt="" className="img-fluid w-75 mx-auto d-block " />
                  <hr />
                </dd>
                {/* Topic 6 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 6</span>  Broken Access Control
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">
                  <h3 className="content__title">Broken Access Control:</h3>
                  <p>
                    Broken access control vulnerabilities refer to situations where access control mechanisms fail to enforce proper restrictions on user access to resources or data. Here are some common exploits for broken access control and examples:</p>
                  <ol>
                    <li><b className="content__subtitle">Horizontal privilege escalation: </b> 	&nbsp;
                      occurs when an attacker can access resources or data belonging to other users with the same level of access. For example, a user might be able to access another user’s account by changing the user ID in the URL.
                    </li>
                    <li><b className="content__subtitle">Vertical privilege escalation: </b> 	&nbsp;
                      occurs when an attacker can access resources or data belonging to users with higher access levels. For example, a regular user can access administrative functions by manipulating a hidden form field or URL parameter.
                      <img src={BrokenAccImage} alt="" className="img-fluid w-50 mx-auto d-block " />
                    </li>
                    <li><b className="content__subtitle">
                      Insufficient access control checks</b> 	&nbsp; occur when access control checks are not performed correctly or consistently, allowing an attacker to bypass them. For example, an application might allow users to view sensitive data without verifying their proper permissions.</li>
                    <li>
                      <b className="content__subtitle">Insecure direct object references</b> 	&nbsp; occur when an attacker can access a resource or data by exploiting a weakness in the application’s access control mechanisms. For example, an application might use predictable or easily guessable identifiers for sensitive data, making it easier for an attacker to access. You may refer to this room in Task #4 to learn more about this.
                      <img src={IdorImage} alt="" className="img-fluid w-75 mx-auto d-block " />
                      <hr />
                    </li>

                  </ol>
                  These exploits can be prevented by implementing strong access control mechanisms and regularly reviewing and testing them to ensure they are functioning as intended.

                </dd>
                {/* Topic 7 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 6</span>  Examples of broken access controls
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">
                  <p>Broken access control vulnerabilities exist when a user can access resources or perform actions that they are not supposed to be able to.</p>
                  <h3 className="content__title">Vertical privilege escalation</h3>
                  <p>If a user can gain access to functionality that they are not permitted to access then this is vertical privilege escalation. For example, if a non-administrative user can gain access to an admin page where they can delete user accounts, then this is vertical privilege escalation.</p>
                  <h3 className="content__title">Unprotected functionality</h3>
                  <p>At its most basic, vertical privilege escalation arises where an application does not enforce any protection for sensitive functionality. For example, administrative functions might be linked from an administrator's welcome page but not from a user's welcome page. However, a user might be able to access the administrative functions by browsing to the relevant admin URL.</p>
                  <p>For example, a website might host sensitive functionality at the following URL:
                    <br />
                    <code className="content__code">https://insecure-website.com/admin</code>
                  </p>
                  <p>This might be accessible by any user, not only administrative users who have a link to the functionality in their user interface. In some cases, the administrative URL might be disclosed in other locations, such as the <code className="content__code">robots.txt</code> file:
                    <br />
                    <code className="content__code">https://insecure-website.com/robots.txt</code></p>
                  <p>Even if the URL isn't disclosed anywhere, an attacker may be able to use a wordlist to brute-force the location of the sensitive functionality.</p>

                </dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button
                onClick={() => handleGoToLab("/sql_Injection/sql_Injection_labs")}
                className="go-to"
              >
                Go To Labs
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Course */}
      <Go2TopBtn />
      <Footer />
    </>
  );
}
