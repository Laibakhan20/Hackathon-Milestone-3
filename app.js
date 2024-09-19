"use strict";
//get references to the  form and diplay area
const form = document.getElementById('form-section');
const resumeSection = document.getElementById('resume-display');
//handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); //prevent page reload
    //collect input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const linkedin = document.getElementById('linkedin').value;
    const education = document.getElementById('education').value;
    const institute = document.getElementById('institute').value;
    const skills = document.getElementById('skills').value;
    const jobTitle = document.getElementById('experience').value;
    const companyName = document.getElementById('experience').value;
    const dates = document.getElementById('dates-0').value;
    const summary = document.getElementById('summary').value;
    //generate the resume content dynamically:
    const resumeHtmlContent = `
      <h2><b>Resume</b></h2>
      <h3>Personal Information</h3>
      <p><b>Name</b>: ${name}</p>
      <p><b>Email</b>: ${email}</p>
      <p><b>Contact</b>: ${contact}</p>
      <p><b>LinkedIn</b>: ${linkedin}</p>
      <h3>Education</h3>
      <p><b>Education</b>: ${education}</p>
      <p><b>Institute</b>: ${institute}</p>
      <h3>Skills</h3>
      <p><b>Skills</b>: ${skills}</p>
      <h3>Experience</h3>
      <p><b>Job Title</b>: ${jobTitle}</p>
      <p><b>Company Name</b>: ${companyName}</p>
      <p><b>Dates</b>: ${dates}</p>
      <h3>Professional Summary</h3>
      <p><b>Summary</b>: ${summary}</p>
      `;
    //display generated resume
    if (resumeSection) {
        resumeSection.innerHTML = resumeHtmlContent;
    }
    else {
        console.log('Resume section not found');
    }
});
