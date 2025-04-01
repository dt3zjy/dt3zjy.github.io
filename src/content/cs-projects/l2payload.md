---
id: "csproj2"
title: "Electronic Payload for Yultuz"
description: "I am creating an electronic payload for my Tripoli Level 2 Certification rocket to measure atmospheric conditions."
pubDate: "2023-01-01"
heroImage: "/aero-proj/yultuz.png"
tags: ["C++", "Sensor Integration", "Arduino"]
---

I am creating an **Electronic Payload** for my Level 2 Tripoli Certification Rocket called *Yultuz* to collect real-time atmospheric data during flight. The payload will process and transmit data from sensors (altimeter, pressure sensor, temperature sensors) to a ground station using a microcontroller (Arduino) and an RF communication module while also storing the data locally in the payload. The project focuses on tracking variations in atmospheric pressure and temperature against altitude, comparing the results with standard atmospheric models. Through data collection and analysis, this project enhances my understanding of atmospheric dynamics while refining engineering and data acquisition skills.

Currently, the project is in the research and planning phase, with hardware and software components already selected. For the payload, I chose the **Arduino Nano 33 BLE Sense** for its built-in pressure and temperature sensors, while an **Arduino UNO R4 Minima** will be used for the ground station. I will also use two **RRC3+ Altimeters** from Missile Works as altimeters and as dual deployment devices for the rocket. Two were chosen to add a level of redundancy in case one altimeter fails because the deployment phase is critical for mission success. I will be using **XBee** communication systems to transfer data from the payload to the ground station in real time. Other critical components, including micro-SD storage, antennas, and power management systems, have been selected. On the software side, development tools such as the **Arduino IDE, MATLAB, and Python** will be used for data processing and visualization, while **Altium Designer** is being used to develop circuit diagrams for the payload. The next steps involve assembling and integrating the hardware, coding for data acquisition and transmission, and conducting preliminary ground tests before full-scale rocket launches. At the moment, *I do not have the funds* necessary to purchase the components for assembly.

[Click here](https://www.danieltohti.com/aerospace-projects/l2cert/) for a link to the mechanical/physical side of the project, which is the **design, analysis, manufacturing, and testing** of the certification rocket that will be flying the payload.