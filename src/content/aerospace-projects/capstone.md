---
id: "aeroproj3"
title: "Capstone Project: Solid Propulsion Motor for a High-Powered Rocket"
description: "For my senior design capstone project, I was the Propulsion Lead for the design, analysis, and manufacturing of a solid propulsion motor."
pubDate: "2024-05-31"
heroImage: "/aero-proj/capstone/rocket.jpg"
tags: ["OpenMotor","Propulsion","OpenRocket","CAD","FEA","Fluid Dynamics"]
---

As the Propulsion Team Lead for my senior capstone design project, I designed, analyzed, and manufactured a student researched and developed propulsion system for a high-powered rocket that my peers were creating in parallel. The main objectives of the capstone project were to successfully launch and recover a rocket with a target apogee of at most 4,000 feet. Many of the components of a high-powered rocket of this scale are usually outsourced, but the capstone class decided to manufacture most of the components in-house to gain and hone engineering skills. Designing, analyzing, and manufacturing the components added an extra layer of difficulty—especially when coordinating with UVA Environmental Health & Safety—but ultimately led to a final prototype that embodied hours of sound engineering principles and justifications, culminating our undergraduate experience.

### Capstone Overview
The whole capstone had a total of around 30 students distributed amongst three teams: Aerostructures, Mechatronics & Controls, and Propulsion. The Propulsion Team that I led consisted of 10 members, and I split those members across 3 sub-teams I created based on the project needs. The sub-teams were Propellant Configuration, Motor Design, and Thermal & Structural Analysis. The Propellant Configuration team eventually became the Motor Selection team after conversations with UVA Environmental Health & Safety (EHS).

### Environmental Health & Safety Disclaimer
Initially, the Propulsion Team was planning on manufacturing solid propellant in-house with a formula based off of MIT's Cherry Limeade, an Ammonium Perchlorate Composite Propellant (APCP). Many system requirements, identified risks, design & analysis work, and manufacturing procedures were created with this in mind. Unfortunately, UVA Environmental Health & Safety restricted us from modifying or manufacturing energetics, leading us to fall back on a couple of our backup plans. I will be explaining the system with the propellant configuration that resulted from the UVA EHS constraints, while mentioning previous iterations whenever necessary.

### System Overview
As the Propulsion Team Lead, I developed the system requirements, identified risks of the system, created risk mitigation plans, kept track of the motor's budget, and used a Gantt chart to create deadlines for critical tasks. The system requirements for the solid motor were based off of the overall requirement of launching the rocket at the Tripoli Central Virginia launch site. This launch site has a maximum apogee constraint of 4,000 feet for rockets that are flying for the first time, so the propulsion system must be able to achieve this while keeping the rocket and engine intact/undamaged.

<p style="text-align:center;"><b>System Requirements</b></p>

| Item # | Requirement | Verification Plan | Validation Plan |
| ----- | :-----------: | :-----------------: | :---------------: |
| P-1 | Propulsion system must meet safety standards for storage, handling, transportation, and use. | Review design manufacturing, and handling procedures for safety compliance | Manufacturing tests, static fire tests |
| P-2 | The motor must achieve an altitude of under 4000 feet. | Utilize motor performance software and conduct ground tests to measure thrust | Static fire tests, flight test |
| P-3 | The motor must have reasonable performance specifications | Confirm motor’s design meets performance criteria with analysis tools | Flight test |
| P-4 | The motor must be properly manufactured given time constraints | Ensure that the design is manufacturable | Design reviews |
| P-5 | The motor must be designed to withstand all likely forces and thermal conditions with an acceptable factor of safety. | Perform engineering analyses & simulations to verify design | Static fire tests | 
| P-6 | The motor must be designed to ensure the safety of the team in the event of failure. | Review safety procedures during testing | Static fire tests, flight test |

The risks for the propulsion were identified early in the semester. Initially, there were more risks involving the manufacturing, storage, and handling of student researched and developed propellant, but they were no longer necessary once we were given the restriction from UVA EHS.

| Item # | Risk | Description |
| --- | --- | ----------- |
| RP-1 | Structural Failure | Fails catastrophically, poses safety threat |
| RP-2 | Mis-Design | Inefficient operation or engine failure |
| RP-6 | Motor Misfire | Unintended burn of motor during storage/handling | 

RP-1 is mitigated through sound engineering principles and calculations, along with a high factor of safety for different components of the propulsion system. RP-2 is similarly mitigated with engineering principles, along with detailed documentation and drawings for the engine parts. Risks RP-3 to RP-5 were all related to the propellant manufacturing, but these were removed after UVA EHS barred us from working with energetics. RP-6 is mitigated with safe handling, storage, and manufacturing procedures that were laid out beforehand, which consisted of using fire hazard storage systems and training members on manufacturing & handling procedures.

### Propellant Configuration & Motor Selection
Originally, the initial iteration of the propellant configuration was a mix of a BATES and finocyl grains of student manufactured propellant to achieve a neutral thrust profile while also minimizing erosive burning. Erosive burning is a phenomena where the rapid flowing gas in the combustion chamber sheds some of the propellant surface, leading to inefficient burning and unexpected pressure spikes. The cross-section of those grains and the thrust profile of this initial iteration are shown below.

<p style="text-align:center;"><b>Thrust Profile and Grain Cross-Section of Initial Iteration</b></p>
<p style="display: flex; gap: 5px;">
  <a href="/aero-proj/capstone/old-thrust.png" style="flex: 1; margin-right: 1px;">
    <img src="/aero-proj/capstone/old-thrust.png" alt="Thrust profile of the grains" style="max-width: 100%; height: auto;">
  </a>
  <a href="/aero-proj/capstone/grainburns.gif" style="flex: 1; margin-left: 1px;">
    <img src="/aero-proj/capstone/grainburns.gif" alt="Burn profile of the grains" style="transform: scale(0.8); transform-origin: center;">
  </a>
</p>


The final iteration of our student researched and developed propellant configuration was a result of meeting the system requirements for the project while complying with the restrictions that UVA EHS had set upon us. We combined open-source propellant burning simulation software (OpenMotor) and commercially available propellant grains to develop a configuration that met the system requirements. The grains would be sourced from Rocket Motor Components and scientific data on the propellants were imported into OpenMotor to analyze performance characteristics of the several propellant options that was available to us. After analysis, the final design was a set of 3 BATES grains of AeroTech Classic Propellant with an outer diameter of 2.493 inches, a core diameter of 0.875 inches, and a length of 4.177 inches to achieve a neutral thrust profile while also meeting other constraints laid out by our technical advisors. Characteristics of the AeroTech Classic Propellant and the motor that we designed are shown below.

<p style="text-align:center;"><b>AeroTech Classic Propellant Data Sheet</b></p>

[ ![](/aero-proj/capstone/rcs-char.jpg) ](/aero-proj/capstone/rcs-char.jpg)
<p style="text-align:center;"><b>Capstone Propellant Configuration</b></p>

[ ![](/aero-proj/capstone/openmotor.png) ](/aero-proj/capstone/openmotor.png)


This motor was imported into OpenRocket, an open-source 6DOF rocket simulator to analyze the flight characteristics of the capstone's rocket with the Propulsion Team's motor. The simulation parameters were defined by the launch site and the results of the analysis met the requirement of an apogee of less than 4,000 feet, along with other important characteristics. The results of the propellant design and analysis met the system requirements set in the beginning of the year.

### Motor Hardware Design
While working on the propellant configuration, I led the engineering of the hardware that would house the propellant and integrate with the rest of the rocket. There were a lot of iterations in this phase of the project, and I successfully led the team through the engineering process to create a full-scale prototype of the motor hardware. 

The motor hardware consisted of the casing, the forward closure, the graphite nozzle, the phenolic liner, and the aft closure/nozzle holder. Additionally, I helped develop a specific nozzle to be used during hydrostatic tests. Starting from the top, the motor casing had a 3 inch outer diameter, 2.75 inch inner diameter, and a height of 20.79 inches. Next, the forward closure had an OD of 2.75in, grooves for two 144 O-rings, a height of 1.67in, and a shoulder for the phenolic liner. Similarly, the aft closure had a 2.75in OD and a 2.25in ID, with a height of 0.5in. These closures are fastened with two internal retaining rings that fit into grooves cut into the inside wall of the casing. The hydrostatic nozzle had the same outer geometry as the nozzle. The only difference was the inside, which was a through hole with a threaded inlet for NPT piping. All of the components, besides the nozzle and liner, are made out of aluminum 6061 for its manufacturability, thermal conductivity, and low costs. The nozzle was made out of graphite for its thermal conductivity and high temperature resistance, although it is harder to manufacture due to it being anisotropic and wouldn't be used during hydrostatic tests due to it being porous. Regardless, its properties made it a viable material to pursue for the nozzle. Lastly, the liner is made out of phenolic because it is an excellent thermal insulator and resists the high-temperature environment of combustion. Models of the all of the parts, except the liner, are shown below.

<p style="text-align:center;"><b>CAD Models (images not to scale)</b></p>

[ ![](/aero-proj/capstone/CAD.png) ](/aero-proj/capstone/CAD.png)

The nuts, retaining rings, and the O-rings were the only things that were purchased and outsourced.

### Motor Analysis
A mix of hand calculations and computer simulations were used to analyze the different iterations of the solid rocket motor system. One of the first iterations of the motor casing design had bolted closures, and I did a quick hand calculation to find out the amount of bolts needed to withstand the pressure in the combustion chamber. The snap ring case design was the final iteration where the internal retaining ring was outsourced from McMaster-Carr. The website showed the thrust load capacity of the chosen internal retaining ring, so that was used for a hand calculation to confirm that the ring would withstand combustion. Finally, Solidworks was used for a structural and thermal analysis of the casing to ensure that the maximum stress was under the yield stress of aluminum and that the temperature didn't exceed the maximum service temperature at any point during the burn. The thermal stress was simplified in a worst-case scenario by assuming that the motor would hold its highest temperature during the whole propellant burn. This wouldn't be the case in reality because the combustion is a transient process, but this assumption simplified the thermal analysis and the hardware still withstood this harsher condition.

<p style="text-align:center;"><b>Structural Analysis</b></p>

[ ![](/aero-proj/capstone/FEA-struct.jpg) ](/aero-proj/capstone/FEA-struct.jpg)

<p style="text-align:center;"><b>Thermal Analysis</b></p>

[ ![](/aero-proj/capstone/FEA-thermal.jpg) ](/aero-proj/capstone/FEA-thermal.jpg)

### Motor Manufacturing
The manufacturing part of the process is where I felt I grew the most as an engineer. Many of the design iterations came as a result of learning lessons during the manufacturing process, including understanding the equipment and experience we had on hand and the importance of balanced tolerancing. One of the designs included a threaded case to secure the forward and aft closures, but it was scrapped because we didn't have access to a CNC lathe. Another problem was the lack of manufacturing experience within the group, so I, and a couple others, got trained with the shop manager. I learned basic workshop safety procedures and got experience using the bandsaw, vertical mill, and a lathe. After gaining lathe experience, I started working on creating the closures and the hydrostatic nozzle where I ran into another problem. The tolerances we had in our initial drawings were pretty tight, so I went back to the team and let them know of the issue. We reworked the tolerances by identifying which ones were critical and finding out the minimum tolerances we could work with given the tools we had. At the end, we got a product that we could manufacture successfully.

<p style="text-align:center;"><b>Hydrostatic Nozzle on the Lathe</b></p>

[ ![](/aero-proj/capstone/lathe-work.png) ](/aero-proj/capstone/lathe-work.png)

<p style="text-align:center;"><b>Disassembled and Assembled Pieces</b></p>

[ ![](/aero-proj/capstone/finished-pieces.png) ](/aero-proj/capstone/finished-pieces.png)

### Motor Testing
Two tests were planned for the capstone: a hydrostatic test and a static hotfire. I led the planning for both tests by speaking with an industry professional to get guidance on the hydrostatic test and by collaborating with VCU's Rocketry Team to use their test stand that they were creating. I created the plumbing diagram for the hydrostatic test and gathered a bill of materials for the equipment necessary to conduct the test.

<p style="text-align:center;"><b>Hydrostatic Test Plumbing Diagram</b></p>

[ ![](/aero-proj/capstone/plumbing.png) ](/aero-proj/capstone/plumbing.png)

Also, a procedure for the static hotfire was being planned out with VCU because they were creating a test stand that would be able to hold a motor of our size. Unfortunately, due the timing constaints mainly stemming from the UVA EHS restrictions, these tests were not executed.

### Final Report
The rest of the capstone was much more than just the propulsion system. A lot of collaboration was required between the other teams, and they did a ton of work for the whole rocket. More details of the whole capstone project can be found in the final report shown below. 

<iframe src="/aero-proj/capstone/capstone-report.pdf" width="100%" height="600"></iframe>