import React from 'react';


const Experience = () => {
  return (
    <div className="container">
      <h1>Uddanelse & erhvervserfaring</h1>
      <section>
        <h2>Uddanelse</h2>
        <p><strong>TEC, Technical Education Copenhagen / Datatekniker med speciale i programmering</strong></p>
        <p>Januar 2019 - December 2023, Ballerup</p>
        <p>
          En kombineret uddannelse, der vekslede mellem 10 ugers skoleophold og 6-8
          måneders læreophold. Uddannelsen gav et bredt kendskab inden for IT,
          sikkerhedsaspekter, programmering, softwareudvikling, backend, frontend & database, webapplikationer, API og agile processer. 
          Disse færdigheder blev praktisk anvendt og udbygget gennem erhvervserfaring. 
          Svendeprøve aflagt i november 2023 med et 12-tal.
        </p>
      </section>
      <section>
        <h2>Erhvervserfaring</h2>
        <h3>Nota IT-afdelling / Datateknikerelev</h3>
        <p>August 2022 - februar 2024, København Ø</p>
        <p>
          Som softwareudvikler i et agilt team, bestående af fem medlemmer, havde jeg ansvaret for moderniseringen af to interne Windows-applikationer. 
          Disse applikationer blev integreret og omstruktureret til en samlet webbaseret løsning. 
          Projektet krævede dybdegående viden om forskellige komplekse systemintegrationer og implementering af ADFS-autorisering.
        </p>
        <p>Mine ansvarsområder omfattede:</p>
        <ul>
          <li>Koordinering af omskrivningen fra Windows form til web.</li>
          <li>Udvikling i C# .NET 6, MSSQL, Flutter Web, Dart & JavaScript.</li>
          <li>Implementering af UI design i samarbejde med UX-designer.</li>
          <li>Analyse af eksisterende legacy kode.</li>
          <li>Udførte code reviews, deltog i SCRUM meetings, definere epics, features, user stories & løbende dialog med Product Owners omkring ønsker og test.</li>
        </ul>
        <h3>Trophy Games Development / Datateknikerelev</h3>
        <p>Oktober 2021 - Juli 2022, København K</p>
        <p>
          Som udvikler, har jeg været en del af et agilt udviklingsteam, der har specialiseret sig i at udvikle deres egne spil. 
          Jeg havde en central rolle i teamet på 5 udviklere, hvori vi udviklede spillet Shipping Manager fra starten, i PHP/Laravel og Adminer/MySQL. 
          Mit primære fokus har været backend-udvikling/API endpoints, hvor jeg har anvendt mine kompetencer i PHP/Laravel og Adminer/MySQL. 
          Ydermere har jeg deltaget i daglige standup-møder, refinement sessions og code reviews, som har bidraget til at sikre et kontinuerligt flow af kvalitet og innovation i projektet.
        </p>
      </section>
    </div>
  );
};

export default Experience;
