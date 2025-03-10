import { useEffect } from 'react'
import './App.css'

import { SkillList } from '../Components/SkillList';
import { EducationComponent } from '../Components/EducationComponent';
import { WorkComponent } from '../Components/WorkComponent';
import { AboutMeComponent } from '../Components/AboutMeComponent';

import LinkedInLogo from './assets/linkedin.svg';
import GitHubLogo from './assets/github.svg';
import ProfilePicture from './assets/ht_headshot.jpg';
import RedirectArrow from './assets/arrow.svg';

const linkedInURL = 'https://www.linkedin.com/in/hannes-t%C3%B6yr%C3%A4-2837a9213/' 
const githubURL = 'https://github.com/hannesToyra';
const umeaPublication = 'https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1555801&dswid=-4466';
const uppsalaPublication = 'https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1773894&dswid=8604';


function App() {

  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-fade-in");
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("Element synligt:", entry.target); 
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.2 }); // Aktivera när 20% av elementet syns

    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);


  const softronicProjects = [
    {
      Name: "Fullmaktskollen (nuvarande projekt)",
      details: [
        {
          Role: "Systemutveckling",
          RoleDescription: "Vidareutvecklar legacy code utifrån kundens behov genom att implementera nya funktionaliteter i C#, JavaScript och HTML."
        },
        {
          Role: "Estimering, databashantering och testning",
          RoleDescription: "Estimerar ärenden, hanterar databaser (SQL), samt testar och kvalitetssäkrar ändringar innan produktionssättning."
        }
      ]
    },
    {
      Name: "CM1",
      details: [
        {
          Role: "Support och systemförvaltning",
          RoleDescription: "Ansvarade för att besvara kundfrågor om systemet och antipenningtvätt (AML), samt hantera och prioritera inkommande supportärenden i Jira Service Desk.",
        },
        {
          Role: "SQL och utveckling",
          RoleDescription: "Utförde databas-utdrag, skapade och modifierade lagrade procedurer samt utvecklade nya funktioner i C# och SQL baserat på kundkrav.",
        }
      ]
    }
  ]

  return (
    <>
      <div className="introDiv fade-in">
      <div className="introContent">
          <h1>Hannes Töyrä</h1>
          <p>
            Fullstack-utvecklare med en master i systemvetenskap och erfarenhet inom backend, frontend och databaser.
          </p>
    <div className="contactDetails">
      <a href={linkedInURL}>
        <img src={LinkedInLogo} alt="LinkedIn Logo" />
      </a>
      <a href={githubURL}>
        <img src={GitHubLogo} alt="Github Logo" className='githubLogo'/>
      </a>
    </div>
  </div>
  <div className="profileImageContainer">
    <img src={ProfilePicture} alt="Hannes Töyrä" className='profileImage'/>
  </div>
</div>

      <div className='aboutDiv fade-in'>
        <h1> Om mig :) </h1>
        <AboutMeComponent/>
      </div>

      <div className='educationDiv fade-in'>
        <h1> Utbildning </h1>
        <EducationComponent school={'Uppsala universitet'} degree={'M.Sc. Information Systems (Master systemvetenskap)'} year={'September 2021 - Juni 2023'}/>
        <EducationComponent school={'Umeå universitet'} degree={'B.Sc. Information Systems (Kandidat systemvetenskap)'} year={'September 2018 - Juni 2021'}/>
      </div>

      <div className='experienceDiv fade-in'>
        <h1> Erfarenhet </h1>
        <WorkComponent workPlace={'Softronic'} role={'Utvecklare'} year={'Augusti 2023 - PÅGÅENDE'} projects={softronicProjects}/>
        <WorkComponent workPlace={'Luleå kommun'} role={'Äldreboende'} year={'Juni 2020 - Augusti 2020'}/>
        <WorkComponent workPlace={'Coop Konsum'} role={'Butiksbiträde'} year={'Juni 2017 - September 2017'}/>
        <WorkComponent workPlace={'Luleå kommun'} role={'Hemtjänst'} year={'Juni 2016 - Augusti 2016'}/>
        <WorkComponent workPlace={'Fotbollsskola'} role={'Ledare'} year={'Juni 2015'}/>
      </div>

      <div className='skillsDiv scroll-fade-in'>
        <h1> Tekniska kunskaper </h1>
        <div className='skillListDiv'>
          <SkillList listOfSkills={['React', 'Javascript', 'CSS', 'SQL', 'C#', 'HTML', 'Python']}/>
        </div>
      </div>

      <div className='publicationsDiv scroll-fade-in'>
        <h1> Publikationer </h1>
        <ul>
          <li>
          <b>Töyrä, H. (2023).</b> Bot or not: A customer’s perspective of customer service 
          chatbots and human customer service representatives in E-commerce 
          <a href={uppsalaPublication} target='_blank'>
            <img src={RedirectArrow} alt='Right arrow' height={20} className='arrowIcon' style={{verticalAlign: 'middle', marginLeft: '10px'}}/>
          </a>
          </li>

          <li>
            <b> Ekenberg, W., Ekström, A., & Töyrä, H. (2021). </b>  
            ’’Hey Google, jag är hemma!’’: En studie om smarta hem och hur tekniken skapar värde för konsumenten 
            <a href={umeaPublication} target='_blank'>
              <img src={RedirectArrow} alt="Right arrow" height={20} className='arrowIcon' style={{verticalAlign: 'middle', marginLeft: '10px'}}/>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
