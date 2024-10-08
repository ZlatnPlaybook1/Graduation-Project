import React, { useState } from "react";
import "./Second_lab.css";
import Header from "../../../Header/Header";
import image_1 from "../../../assets/img/practical_lab2/image_1.png";
import icon from "../../../assets/img/practical_lab2/icon.png";
import axios from "axios";
import Cookie from "cookie-universal";
import Footer from "../../../Footer/Footer";

export default function Second_lab_XSS() {
  const [form, setForm] = useState({
    email: "",
    content: "",
  });
  //  Navigate
  // const navigate = useNavigate();
  // Loading state
  const [loading, setLoading] = useState(false);
  // Error state
  const [err, setErr] = useState("");

  // Handle Form Change
  function handleChange(e) {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Handle Form Submit
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErr("");
    try {
      const res = await axios.post("http://127.0.0.1:8080/api/comment", form);
      console.log(res);
      setLoading(false);
      // const userId = res.data.userId;
      // cookie.set("userId", userId);
    } catch (error) {
      setLoading(false);
      // if (error.response) {
      //   if (error.response.status === 401) {
      //     setErr("Wrong Email or Password");
      //   } else {
      //     setErr("Internal server error");
      //   }
      //   console.error(error.response.data);
      // } else {
      //   setErr("Network Error");
      //   console.error(error);
      // }
    }
  }
  return (
    <>
      <Header />
      {/* Start Courses  */}
      <div className="course-Second_lab">
        <div className="container-Second_lab">
          <div className="row-practice">
            <div className="card-Second_lab">
              <img src={image_1} alt="" />
              <div className="card-text-Second_lab">
                <h2>Robots in Our Lives</h2>
                <p>
                  The development of robots has significantly transformed our
                  daily lives, industries, and the global economy. Over the past
                  century, robots have evolved from simple mechanical devices
                  into highly sophisticated machines capable of performing
                  complex tasks with precision and speed. The concept of robots
                  dates back to ancient civilizations, with myths and stories
                  about automated beings. However, modern robotics began in the
                  20th century, notably in the 1950s when George Devol invented
                  the Second programmable robot called "Unimate." This marked
                  the beginning of robots being used in manufacturing,
                  especially in the automotive industry.
                </p>
                <p>
                  During the 1960s and 1970s, robots became an essential part of
                  industrial automation. They were used to perform repetitive,
                  dangerous, or labor-intensive tasks, improving efficiency and
                  safety in factories. Industrial robots, such as robotic arms,
                  revolutionized production lines, allowing for faster and more
                  consistent manufacturing processes. In recent decades,
                  robotics has entered the medical field. Robots like the Da
                  Vinci Surgical System allow surgeons to perform minimally
                  invasive surgeries with greater precision. These machines have
                  reduced recovery times for patients and improved surgical
                  outcomes. Medical robots are also used in diagnostics,
                  rehabilitation, and even drug delivery.
                </p>
                <p>
                  Beyond industry and healthcare, robots are increasingly used
                  in everyday services. Automated vacuum cleaners, lawn mowers,
                  and even robots that assist in customer service are becoming
                  more common in households and businesses. Service robots help
                  with tasks that were traditionally manual, saving time and
                  effort. The integration of artificial intelligence (AI) has
                  been a game-changer for robotics. AI allows robots to learn,
                  adapt, and perform tasks with minimal human intervention.
                  AI-driven robots are used in areas like autonomous vehicles,
                  drone technology, and customer service bots. They can process
                  large amounts of data, recognize patterns, and make decisions,
                  making them increasingly valuable in various sectors.
                </p>
                <p>
                  As robots become more advanced, they raise social and ethical
                  questions. The impact on employment, for example, is a
                  concern, as automation could replace jobs in certain
                  industries. Additionally, ethical issues arise with the use of
                  robots in warfare, law enforcement, and surveillance. Looking
                  ahead, robots will likely play an even more significant role
                  in society. We can expect advancements in humanoid robots,
                  capable of interacting with humans in natural ways. Robots
                  will continue to be integrated into smart homes, public
                  infrastructure, and even space exploration. These innovations
                  hold the promise of making life more convenient and efficient.
                </p>
                <p>
                  In conclusion, the development of robots has brought immense
                  progress, changing the way we work, heal, and live. As
                  technology continues to advance, robots will undoubtedly play
                  an even more integral role in our future.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <textarea
                  name="content"
                  id="content"
                  value={form.content}
                  onChange={handleChange}
                  placeholder="Write Your Comment......"
                  required
                ></textarea>
                <input 
                type="email"
                name="email"
                placeholder="Write Your Email"
                value={form.email}
                onChange={handleChange}
                className="form_input"/>
                <button type="submit">Submit</button>
                {err !== "" && <span className="error">{err}</span>}
              </form>
              <div className="comment-section">
                <div className="comment-card">
                  <div className="comment-header">
                    <img src={icon} className="icon"  alt="Card"/>
                    <p className="name">Ebrahiem Gamal</p>
                  </div>
                  <p className="comment-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur, aliquid dolores totam rerum minus commodi enim
                    non sed, aspernatur minima laudantium laboriosam ipsam
                    incidunt. Numquam repudiandae expedita nobis! Accusamus,
                    numquam.
                  </p>
                </div>
                <div className="comment-card">
                  <div className="comment-header">
                    <img src={icon} className="icon" alt="Card" />
                    <p className="name">Ebrahiem Gamal</p>
                  </div>
                  <p className="comment-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur, aliquid dolores totam rerum minus commodi enim
                    non sed, aspernatur minima laudantium laboriosam ipsam
                    incidunt. Numquam repudiandae expedita nobis! Accusamus,
                    numquam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
