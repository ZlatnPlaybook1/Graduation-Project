import React from "react";
import "./Word_list.css";

export default function WordsList() {
  const words = `
    Able, Among, Animal, Believe, Balance, Bottles, Courage, Disease,
    Approve, Blanket, Benefit, Combine, Digital, Captain, Against, Antique,
    Anxiety, Circuit, Compare, Counsel, Correct, Capture, Declare, Defeats,
    Deliver, Density, Dispose, Display, Created, Acquire, Analyze, Content,
    Article, Attempt, Compass, Decline, Defense, Develop, Destroy, Classic,
    Contact, Curious, Country, Culture, Believe, Creator, Climate, Abandon,
    Absolve, Arrange, Antique, Appeals, Against, Antique, Ability, Circuit,
    Acquire, Anybody, Bottles, Captain, Chicken, Compute, Compass, Bandage,
    Content, Declare, Deliver, Disease, Dispose, Created, Blanket, Develop,
    Correct, Diamond, Digital, Courage, Capture, Classic, Decline, Appeals,
    Believe, Benefit, Abandon, Contact, Compute, Counsel, Bottles, Defeats,
    Circuit, Courage, Combine, Culture, Acquire, Against, Antique, Anxiety,
    Balance, Among, Absolve, Approve, Capture, Density, Deliver, Dispose,
    Digital, Analyze, Attempt, Climate, Created, Absolve, Acquire, Antique,
    Anybody, Anxiety, Balance, Bandage, Benefit, Blanket, Believe, Bottles,
    Captain, Capture, Ceiling, Charity, Contact, Country, Circuit, Courage,
    Compute, Compass, Compute, Compare, Declare, Deliver, Disease, Dispose,
    Culture, Curious, Decline, Defense, Cyberlab, Destroy, Created, Digital, Display,
    Density, Diamond, Ability, Anybody, Antique, Among, Analyze, Acquire,
    Arrange, Appeals, Blanket, Benefit, Balance, Bottles, Captain, Capture,
    Classic, Declare, Correct, Defense, Diamond, Climate, Decline, Compute,
    Contact, Created, Density, Dignity, Dispose, Digital, Believe, Abandon,
    Combine, Declare, Courage, Culture, Develop 
  `;

  return (
    <div className="words-list-container">
      <h1>Words List</h1>
      <p>{words}</p>
    </div>
  );
}
