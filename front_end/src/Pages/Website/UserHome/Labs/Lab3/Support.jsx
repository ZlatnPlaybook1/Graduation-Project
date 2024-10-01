import React from "react";
import { useEffect, useRef } from "react";
import $ from "jquery";
import "./Support.css";
import support from "../../assets/img/support.png";
import { Link } from "react-router-dom";

export default function Support() {
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
      <div class="container-support">
        <div class="row-support">
            <h1>We're Support, How Can I Help You?</h1>
            <img src={support} alt="" />
        </div>
    </div>
    </>
  );
}
