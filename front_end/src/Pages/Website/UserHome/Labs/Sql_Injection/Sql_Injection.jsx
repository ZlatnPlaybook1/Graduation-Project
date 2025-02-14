import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "../Page_Styles/Content.css";
import background from "../../assets/img/SQL_Injection/bg.png";
import courseImage from "../../assets/img/SQL_Injection/courseImage.png";
import UseFaqSection from "../../UseFaqSection/UseFaqSection.jsx";
import tableImage from "../../assets/img/SQL_Injection/table.png";
import LandingLab from "../../LandingLab/LandingLab.jsx";
import Banner from "../../Banner/Banner.jsx";
// import OutOfBandImage from "../../assets/img/SQL_Injection/Out-of-Band SQLi.png";
// import DBServerImage from "../../assets/img/SQL_Injection/DBServer.png";

export default function Sql_Injection() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();

  return (
    <>
      <Banner />
      <Header />
      {/* Start Landing */}
      <LandingLab
        background={background}
        imagecourse={courseImage}
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
      <div className="course-labd">
        <div className="container" ref={faqSectionRef}>
          <div className="row">
            <div className="faq-section-labd">
              <dl className="section-text-labd">
                {/* Topic 1: Brief */}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 1</span>Brief
                </dt>
                <dd className="fadeInUp faq-body-labd" id="border-left">
                  <div className="faq-content">
                    <p>
                      SQL (Structured Query Language) Injection, mostly referred
                      to as SQLi, is an attack on a web application database
                      server that causes malicious queries to be executed. When
                      a web application communicates with a database using input
                      from a user that hasn't been properly validated, there
                      runs the potential of an attacker being able to steal,
                      delete or alter private and customer data and also attack
                      the web application authentication methods to private or
                      customer areas. This is why SQLi is one of the oldest web
                      application vulnerabilities, and it can also be the most
                      damaging.
                    </p>
                    <p>
                      In this room, you'll learn what databases are, what SQL is
                      with some basic SQL commands, how to detect SQL
                      vulnerabilities, how to exploit SQLi vulnerabilities and,
                      as a developer, how you can protect yourself against SQL
                      Injection.
                    </p>
                  </div>
                </dd>

                {/* Topic 2: What is a Database? */}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 2</span>What is a Database?
                </dt>
                <dd className="faq-body-labd" id="border-left">
                  <div className="faq-content">
                    <p>
                      If you're not used to working with databases or exploiting
                      them, there's probably some new terminology to get used
                      to, so let's start with some basics on how databases are
                      structured and how they work.
                    </p>
                    <p>
                      A database is a way of electronically storing collections
                      of data in an organised manner. A database is controlled
                      by a DBMS, which is an acronym for Database Management
                      System. DBMSs fall into two camps: Relational and
                      Non-Relational; the focus of this room will be on
                      Relational databases; some common ones you'll come across
                      are MySQL, Microsoft SQL Server, Access, PostgreSQL and
                      SQLite. We'll explain the difference between Relational
                      and Non-Relational databases at the end of this task, but
                      first, it's important to learn a few terms.
                    </p>
                    <p>
                      Within a DBMS, you can have multiple databases, each
                      containing its own set of related data. For example, you
                      may have a database called "shop". Within this database,
                      you want to store information about products available to
                      purchase, users who have signed up to your online shop,
                      and information about the orders you've received. You'd
                      store this information separately in the database using
                      something called tables. The tables are identified with a
                      unique name for each one. You can see this structure in
                      the diagram below, but you can also see how a business
                      might have other separate databases to store staff
                      information or the accounts team.
                    </p>
                    <div className="faq-image">
                      <img src={tableImage} alt="Database Table" />
                      <p className="image-caption">
                        Example of a database table.
                      </p>
                    </div>
                    <p>
                      A table is made up of columns and rows; a useful way to
                      imagine a table is like a grid with the columns going
                      across the top from left to right containing the name of
                      the cell and the rows going from top to bottom, with each
                      one having the actual data.
                    </p>
                    <p>
                      <strong>Columns:</strong> Each column, better referred to
                      as a field, has a unique name per table. When creating a
                      column, you also set the type of data it will contain,
                      common ones being integers (numbers), strings (standard
                      text) or dates. Some databases can contain much more
                      complex data, such as geospatial, which contains location
                      information. Setting the data type also ensures that
                      incorrect information isn't stored, such as the string
                      "hello world" being stored in a column meant for dates. If
                      this happens, the database server will usually produce an
                      error message. A column containing an integer can also
                      have an auto-increment feature enabled; this gives each
                      row of data a unique number that grows (increments) with
                      each subsequent row. Doing so creates what is called a key
                      field; a key field has to be unique for every row of data,
                      which can be used to find that exact row in SQL queries.
                    </p>
                    <p>
                      <strong>Rows:</strong> Rows or records contain individual
                      lines of data. When you add data to the table, a new
                      row/record is created; when you delete data, a row/record
                      is removed.
                    </p>
                    <p>
                      <strong>Relational Vs Non-Relational Databases:</strong> A
                      relational database stores information in tables, and
                      often, the tables share information between them; they use
                      columns to specify and define the data being stored and
                      rows actually to store the data. The tables will often
                      contain a column that has a unique ID (primary key), which
                      will then be used in other tables to reference it and
                      cause a relationship between the tables, hence the name
                      relational database.
                    </p>
                    <p>
                      Non-relational databases, sometimes called NoSQL, on the
                      other hand, are any sort of database that doesn't use
                      tables, columns and rows to store the data. A specific
                      database layout doesn't need to be constructed so each row
                      of data can contain different information, giving more
                      flexibility over a relational database. Some popular
                      databases of this type are MongoDB, Cassandra and
                      ElasticSearch.
                    </p>
                  </div>
                </dd>

                {/* Topic 3: What is SQL? */}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 3</span>What is SQL?
                </dt>
                <dd className="faq-body-labd" id="border-left">
                  <div className="faq-content">
                    <p>
                      SQL (Structured Query Language) is a feature-rich language
                      used for querying databases. These SQL queries are better
                      referred to as statements.
                    </p>
                    <p>
                      The simplest of the commands which we'll cover in this
                      task is used to retrieve (select), update, insert and
                      delete data. Although somewhat similar, some database
                      servers have their own syntax and slight changes to how
                      things work. All of these examples are based on a MySQL
                      database. After learning the lessons, you'll easily be
                      able to search for alternative syntax online for the
                      different servers. It's worth noting that SQL syntax is
                      not case-sensitive.
                    </p>
                    <p>
                      <strong>SELECT:</strong> The first query type we'll learn
                      is the SELECT query used to retrieve data from the
                      database.
                    </p>
                    <pre>
                      <code>{`select * from users;`}</code>
                    </pre>
                    <p>
                      The first word SELECT, tells the database we want to
                      retrieve some data; the * tells the database we want to
                      receive back all columns from the table. For example, the
                      table may contain three columns (id, username and
                      password). "from users" tells the database we want to
                      retrieve the data from the table named users. Finally, the
                      semicolon at the end tells the database that this is the
                      end of the query.
                    </p>
                    <p>
                      The next query is similar to the above, but this time,
                      instead of using the * to return all columns in the
                      database table, we are just requesting the username and
                      password field.
                    </p>
                    <pre>
                      <code>{`select username,password from users;`}</code>
                    </pre>
                    <p>
                      The following query, like the first, returns all the
                      columns by using the * selector, and then the "LIMIT 1"
                      clause forces the database to return only one row of data.
                      Changing the query to "LIMIT 1,1" forces the query to skip
                      the first result, and then "LIMIT 2,1" skips the first two
                      results, and so on. You need to remember the first number
                      tells the database how many results you wish to skip, and
                      the second number tells the database how many rows to
                      return.
                    </p>
                    <pre>
                      <code>{`select * from users LIMIT 1;`}</code>
                    </pre>
                    <p>
                      Lastly, we're going to utilise the where clause; this is
                      how we can finely pick out the exact data we require by
                      returning data that matches our specific clauses:
                    </p>
                    <pre>
                      <code>
                        {`select * from users where username='admin';`}
                      </code>
                    </pre>
                    <p>
                      This will only return the rows where the username is equal
                      to admin.
                    </p>
                    <pre>
                      <code>
                        {`select * from users where username != 'admin';`}
                      </code>
                    </pre>
                    <p>
                      This will only return the rows where the username is NOT
                      equal to admin.
                    </p>
                    <pre>
                      <code>
                        {`select * from users where username='admin' or username='jon';`}
                      </code>
                    </pre>
                    <p>
                      This will only return the rows where the username is
                      either equal to admin or jon.
                    </p>
                    <pre>
                      <code>
                        {`select * from users where username='admin' and password='p4ssword';`}
                      </code>
                    </pre>
                    <p>
                      This will only return the rows where the username is equal
                      to admin and the password is equal to p4ssword.
                    </p>
                    <p>
                      Using the like clause allows you to specify data that
                      isn't an exact match but instead either starts, contains
                      or ends with certain characters by choosing where to place
                      the wildcard character represented by a percentage sign %.
                    </p>
                    <pre>
                      <code>
                        {`select * from users where username like 'a%';`}
                      </code>
                    </pre>
                    <p>
                      This returns any rows with a username beginning with the
                      letter a.
                    </p>
                    <pre>
                      <code>
                        {`select * from users where username like '%n';`}
                      </code>
                    </pre>
                    <p>
                      This returns any rows with a username ending with the
                      letter n.
                    </p>
                    <pre>
                      <code>
                        {`select * from users where username like '%mi%';`}
                      </code>
                    </pre>
                    <p>
                      This returns any rows with a username containing the
                      characters mi within them.
                    </p>
                    <p>
                      <strong>UNION:</strong> The UNION statement combines the
                      results of two or more SELECT statements to retrieve data
                      from either single or multiple tables; the rules to this
                      query are that the UNION statement must retrieve the same
                      number of columns in each SELECT statement, the columns
                      have to be of a similar data type, and the column order
                      has to be the same. This might sound not very clear, so
                      let's use the following analogy. Say a company wants to
                      create a list of addresses for all customers and suppliers
                      to post a new catalogue. We have one table called
                      customers with the following contents:
                    </p>
                    <pre>
                      <code>
                        {`id | name           | address          | city      | postcode
1  | Mr John Smith  | 123 Fake Street  | Manchester | M2 3FJ
2  | Mrs Jenny Palmer | 99 Green Road   | Birmingham | B2 4KL
3  | Miss Sarah Lewis | 15 Fore Street  | London     | NW12 3GH`}
                      </code>
                    </pre>
                    <p>
                      And another called suppliers with the following contents:
                    </p>
                    <pre>
                      <code>
                        {`id | company          | address                     | city     | postcode
1  | Widgets Ltd     | Unit 1a, Newby Estate | Bristol   | BS19 4RT
2  | The Tool Company | 75 Industrial Road   | Norwich   | N22 3DR
3  | Axe Makers Ltd  | 2b Makers Unit, Market Road | London | SE9 1KK`}
                      </code>
                    </pre>
                    <p>
                      Using the following SQL Statement, we can gather the
                      results from the two tables and put them into one result
                      set:
                    </p>
                    <pre>
                      <code>
                        {`SELECT name,address,city,postcode from customers UNION SELECT company,address,city,postcode from suppliers;`}
                      </code>
                    </pre>
                    <p>The results will look like this:</p>
                    <pre>
                      <code>
                        {`name           | address                     | city      | postcode
Mr John Smith  | 123 Fake Street          | Manchester | M2 3FJ
Mrs Jenny Palmer | 99 Green Road           | Birmingham | B2 4KL
Miss Sarah Lewis | 15 Fore Street          | London     | NW12 3GH
Widgets Ltd     | Unit 1a, Newby Estate   | Bristol    | BS19 4RT
The Tool Company | 75 Industrial Road     | Norwich    | N22 3DR
Axe Makers Ltd  | 2b Makers Unit, Market Road | London | SE9 1KK`}
                      </code>
                    </pre>
                    <p>
                      <strong>INSERT:</strong> The INSERT statement tells the
                      database we wish to insert a new row of data into the
                      table. "into users" tells the database which table we wish
                      to insert the data into, "(username,password)" provides
                      the columns we are providing data for and then "values
                      ('bob','password');" provides the data for the previously
                      specified columns.
                    </p>
                    <pre>
                      <code>
                        {`insert into users (username,password) values ('bob','password123');`}
                      </code>
                    </pre>
                    <p>The results will look like this:</p>
                    <pre>
                      <code>
                        {`id | username | password
1  | jon      | pass123
2  | admin    | p4ssword
3  | martin   | secret123
4  | bob      | password123`}
                      </code>
                    </pre>
                    <p>
                      <strong>UPDATE:</strong> The UPDATE statement tells the
                      database we wish to update one or more rows of data within
                      a table. You specify the table you wish to update using
                      "update %tablename% SET" and then select the field or
                      fields you wish to update as a comma-separated list such
                      as "username='root',password='pass123'" then finally,
                      similar to the SELECT statement, you can specify exactly
                      which rows to update using the where clause such as "where
                      username='admin;".
                    </p>
                    <pre>
                      <code>
                        {`update users SET username='root',password='pass123' where username='admin';`}
                      </code>
                    </pre>
                    <p>The results will look like this:</p>
                    <pre>
                      <code>
                        {`id | username | password
1  | jon      | pass123
2  | root     | pass123
3  | martin   | secret123
4  | bob      | password123`}
                      </code>
                    </pre>
                    <p>
                      <strong>DELETE:</strong> The DELETE statement tells the
                      database we wish to delete one or more rows of data. Apart
                      from missing the columns you wish to return, the format of
                      this query is very similar to the SELECT. You can specify
                      precisely which data to delete using the where clause and
                      the number of rows to be deleted using the LIMIT clause.
                    </p>
                    <pre>
                      <code>
                        {`delete from users where username='martin';`}
                      </code>
                    </pre>
                    <p>The results will look like this:</p>
                    <pre>
                      <code>
                        {`id | username | password
1  | jon      | pass123
2  | root     | pass123
4  | bob      | password123`}
                      </code>
                    </pre>
                    <p>
                      If no WHERE clause is used, all data will be deleted from
                      the table.
                    </p>
                    <pre>
                      <code>{`delete from users;`}</code>
                    </pre>
                    <p>The results will look like this:</p>
                    <pre>
                      <code>{`id | username | password`}</code>
                    </pre>
                  </div>
                </dd>

                {/* Topic 4: What is SQL Injection? */}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 4</span>What is SQL Injection?
                </dt>
                <dd className="faq-body-labd" id="border-left">
                  <div className="faq-content">
                    <p>
                      The point wherein a web application using SQL can turn
                      into SQL Injection is when user-provided data gets
                      included in the SQL query.
                    </p>
                    <p>
                      Take the following scenario where you've come across an
                      online blog, and each blog entry has a unique ID number.
                      The blog entries may be either set to public or private,
                      depending on whether they're ready for public release. The
                      URL for each blog entry may look something like this:
                    </p>
                    <pre>
                      <code>{`https://website.thm/blog?id=1`}</code>
                    </pre>
                    <p>
                      From the URL above, you can see that the blog entry
                      selected comes from the id parameter in the query string.
                      The web application needs to retrieve the article from the
                      database and may use an SQL statement that looks something
                      like the following:
                    </p>
                    <pre>
                      <code>
                        {`SELECT * from blog where id=1 and private=0 LIMIT 1;`}
                      </code>
                    </pre>
                    <p>
                      From what you've learned in the previous task, you should
                      be able to work out that the SQL statement above is
                      looking in the blog table for an article with the id
                      number of 1 and the private column set to 0, which means
                      it's able to be viewed by the public and limits the
                      results to only one match.
                    </p>
                    <p>
                      As was mentioned at the start of this task, SQL Injection
                      is introduced when user input is introduced into the
                      database query. In this instance, the id parameter from
                      the query string is used directly in the SQL query.
                    </p>
                    <p>
                      Let's pretend article ID 2 is still locked as private, so
                      it cannot be viewed on the website. We could now instead
                      call the URL:
                    </p>
                    <pre>
                      <code>{`https://website.thm/blog?id=2;--`}</code>
                    </pre>
                    <p>Which would then, in turn, produce the SQL statement:</p>
                    <pre>
                      <code>
                        {`SELECT * from blog where id=2;-- and private=0 LIMIT 1;`}
                      </code>
                    </pre>
                    <p>
                      The semicolon in the URL signifies the end of the SQL
                      statement, and the two dashes cause everything afterwards
                      to be treated as a comment. By doing this, you're just, in
                      fact, running the query:
                    </p>
                    <pre>
                      <code>{`SELECT * from blog where id=2;--`}</code>
                    </pre>
                    <p>
                      Which will return the article with an ID of 2 whether it
                      is set to public or not.
                    </p>
                    <p>
                      This was just one example of an SQL Injection
                      vulnerability of a type called In-Band SQL Injection;
                      there are three types in total: In-Band, Blind and
                      Out-of-Band, which we'll discuss over the following tasks.
                    </p>
                  </div>
                </dd>

                {/* Topic 5: In-Band SQLi */}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 5</span>In-Band SQLi
                </dt>
                <dd className="faq-body-labd" id="border-left">
                  <div className="faq-content">
                    <p>
                      In-Band SQL Injection is the easiest type to detect and
                      exploit; In-Band just refers to the same method of
                      communication being used to exploit the vulnerability and
                      also receive the results, for example, discovering an SQL
                      Injection vulnerability on a website page and then being
                      able to extract data from the database to the same page.
                    </p>
                    <p>
                      <strong>Error-Based SQL Injection:</strong> This type of
                      SQL Injection is the most useful for easily obtaining
                      information about the database structure, as error
                      messages from the database are printed directly to the
                      browser screen. This can often be used to enumerate a
                      whole database.
                    </p>
                    <p>
                      <strong>Union-Based SQL Injection:</strong> This type of
                      Injection utilises the SQL UNION operator alongside a
                      SELECT statement to return additional results to the page.
                      This method is the most common way of extracting large
                      amounts of data via an SQL Injection vulnerability.
                    </p>
                    <p>
                      <strong>Practical:</strong> Click the green "Start
                      Machine" button to use the SQL Injection Example practice
                      lab. Each level contains a mock browser and also SQL Query
                      and Error boxes to assist in getting your queries/payload
                      correct.
                    </p>
                    <p>
                      Level one of the practice lab contains a mock browser and
                      website featuring a blog with different articles, which
                      can be accessed by changing the id number in the query
                      string.
                    </p>
                    <p>
                      The key to discovering error-based SQL Injection is to
                      break the code's SQL query by trying certain characters
                      until an error message is produced; these are most
                      commonly single apostrophes ( ' ) or a quotation mark ( "
                      ).
                    </p>
                    <p>
                      Try typing an apostrophe ( ' ) after the id=1 and press
                      enter. And you'll see this returns an SQL error informing
                      you of an error in your syntax. The fact that you've
                      received this error message confirms the existence of an
                      SQL Injection vulnerability. We can now exploit this
                      vulnerability and use the error messages to learn more
                      about the database structure.
                    </p>
                    <p>
                      The first thing we need to do is return data to the
                      browser without displaying an error message. Firstly,
                      we'll try the UNION operator so we can receive an extra
                      result if we choose it. Try setting the mock browsers id
                      parameter to:
                    </p>
                    <pre>
                      <code>{`1 UNION SELECT 1`}</code>
                    </pre>
                    <p>
                      This statement should produce an error message informing
                      you that the UNION SELECT statement has a different number
                      of columns than the original SELECT query. So let's try
                      again but add another column:
                    </p>
                    <pre>
                      <code>{`1 UNION SELECT 1,2`}</code>
                    </pre>
                    <p>
                      Same error again, so let's repeat by adding another
                      column:
                    </p>
                    <pre>
                      <code>{`1 UNION SELECT 1,2,3`}</code>
                    </pre>
                    <p>
                      Success, the error message has gone, and the article is
                      being displayed, but now we want to display our data
                      instead of the article. The article is displayed because
                      it takes the first returned result somewhere in the
                      website's code and shows that. To get around that, we need
                      the first query to produce no results. This can simply be
                      done by changing the article ID from 1 to 0.
                    </p>
                    <pre>
                      <code>{`0 UNION SELECT 1,2,3`}</code>
                    </pre>
                    <p>
                      You'll now see the article is just made up of the result
                      from the UNION select, returning the column values 1, 2,
                      and 3. We can start using these returned values to
                      retrieve more useful information. First, we'll get the
                      database name that we have access to:
                    </p>
                    <pre>
                      <code>{`0 UNION SELECT 1,2,database()`}</code>
                    </pre>
                    <p>
                      You'll now see where the number 3 was previously
                      displayed; it now shows the name of the database, which is
                      sqli_one.
                    </p>
                    <p>
                      Our next query will gather a list of tables that are in
                      this database.
                    </p>
                    <pre>
                      <code>
                        {`0 UNION SELECT 1,2,group_concat(table_name) FROM information_schema.tables WHERE table_schema = 'sqli_one'`}
                      </code>
                    </pre>
                    <p>
                      There are a couple of new things to learn in this query.
                      Firstly, the method group_concat() gets the specified
                      column (in our case, table_name) from multiple returned
                      rows and puts it into one string separated by commas. The
                      next thing is the information_schema database; every user
                      of the database has access to this, and it contains
                      information about all the databases and tables the user
                      has access to. In this particular query, we're interested
                      in listing all the tables in the sqli_one database, which
                      is article and staff_users.
                    </p>
                    <p>
                      As the first level aims to discover Martin's password, the
                      staff_users table is what interests us. We can utilise the
                      information_schema database again to find the structure of
                      this table using the below query.
                    </p>
                    <pre>
                      <code>
                        {`0 UNION SELECT 1,2,group_concat(column_name) FROM information_schema.columns WHERE table_name = 'staff_users'`}
                      </code>
                    </pre>
                    <p>
                      This is similar to the previous SQL query. However, the
                      information we want to retrieve has changed from
                      table_name to column_name, the table we are querying in
                      the information_schema database has changed from tables to
                      columns, and we're searching for any rows where the
                      table_name column has a value of staff_users.
                    </p>
                    <p>
                      The query results provide three columns for the
                      staff_users table: id, password, and username. We can use
                      the username and password columns for our following query
                      to retrieve the user's information.
                    </p>
                    <pre>
                      <code>
                        {`0 UNION SELECT 1,2,group_concat(username,':',password SEPARATOR '<br/>') FROM staff_users`}
                      </code>
                    </pre>
                    <p>
                      Again, we use the group_concat method to return all of the
                      rows into one string and make it easier to read. We've
                      also added ,':', to split the username and password from
                      each other. Instead of being separated by a comma, we've
                      chosen the HTML <br /> tag that forces each result to be
                      on a separate line to make for easier reading.
                    </p>
                    <p>
                      You should now have access to Martin's password to enter
                      and move to the next level.
                    </p>
                  </div>
                </dd>

                {/* Topic 6: Blind SQLi - Authentication Bypass */}
                <dt className="wave-labd fadeInUp faq-header-labd">
                  <span>Topic 6</span>Blind SQLi - Authentication Bypass
                </dt>
                <dd className="faq-body-labd" id="border-left">
                  <div className="faq-content">
                    <p>
                      Unlike In-Band SQL injection, where we can see the results
                      of our attack directly on the screen, blind SQLi is when
                      we get little to no feedback to confirm whether our
                      injected queries were, in fact, successful or not, this is
                      because the error messages have been disabled, but the
                      injection still works regardless. It might surprise you
                      that all we need is that little bit of feedback to
                      successfully enumerate a whole database.
                    </p>
                    <p>
                      <strong>Authentication Bypass:</strong> One of the most
                      straightforward Blind SQL Injection techniques is when
                      bypassing authentication methods such as login forms. In
                      this instance, we aren't that interested in retrieving
                      data from the database; We just want to get past the
                      login.
                    </p>
                    <p>
                      Login forms that are connected to a database of users are
                      often developed in such a way that the web application
                      isn't interested in the content of the username and
                      password but more in whether the two make a matching pair
                      in the users table. In basic terms, the web application is
                      asking the database, "Do you have a user with the username
                      bob and the password bob123?" the database replies with
                      either yes or no (true/false) and, depending on that
                      answer, dictates whether the web application lets you
                      proceed or not.
                    </p>
                    <p>
                      Taking the above information into account, it's
                      unnecessary to enumerate a valid username/password pair.
                      We just need to create a database query that replies with
                      a yes/true.
                    </p>
                    <p>
                      <strong>Practical:</strong> Level Two of the SQL Injection
                      examples shows this exact example. We can see in the box
                      labelled "SQL Query" that the query to the database is the
                      following:
                    </p>
                    <pre>
                      <code>
                        {`select * from users where username='%username%' and password='%password%' LIMIT 1;`}
                      </code>
                    </pre>
                    <p>
                      N.B The %username% and %password% values are taken from
                      the login form fields. The initial values in the SQL Query
                      box will be blank as these fields are currently empty.
                    </p>
                    <p>
                      To make this into a query that always returns as true, we
                      can enter the following into the password field:
                    </p>
                    <pre>
                      <code>{`' OR 1=1;--`}</code>
                    </pre>
                    <p>Which turns the SQL query into the following:</p>
                    <pre>
                      <code>
                        {`select * from users where username='' and password='' OR 1=1;`}
                      </code>
                    </pre>
                    <p>
                      Because 1=1 is a true statement and we've used an OR
                      operator, this will always cause the query to return as
                      true, which satisfies the web applications logic that the
                      database found a valid username/password combination and
                      that access should be allowed.
                    </p>
                  </div>
                </dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button
                onClick={() =>
                  handleGoToLab("/sql_Injection/sql_Injection_labs")
                }
                className="go-to"
              >
                Go To Labs
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
