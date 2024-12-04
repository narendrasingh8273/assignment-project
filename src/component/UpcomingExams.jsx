import React from "react";

const exams = [
  { date: "02nd October 2014", level: "Level 1 Exam" },
  { date: "Nov-Dec 2016", level: "Level 2 Exam" },
  { date: "Ongoing this year", level: "Level 3 (Grad)" },
];

const UpcomingExams = () => {
  return (
    <section className="examinations-section container">
      <div className="exam-title">
        <h2>Upcoming Examinations</h2>
        <p>Enquire about the examination & register for the exams</p>
      </div>

      <div className="exams">
        {exams.map((exam, index) => (
          <div key={index} className="exam-item">
            <i className="fa-regular fa-calendar-check"></i>
            <div>
            <h3>{exam.date}</h3>
            <p>{exam.level}</p>
            </div>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingExams;
