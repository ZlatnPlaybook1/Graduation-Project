import React from "react";
import { useEffect, useRef } from "react";
import $ from "jquery";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
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
    <div class="login-page">
      <div class="container-login">
        <div class="login-form">
            <h1>Login</h1>
            <form action="login.php" method="post">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" required/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <div class="form-group">
                    <button type="submit" class="btn-login">Login</button>
                </div>
            </form>
        </div>
    </div>
    </div>
    </>
  );
}
