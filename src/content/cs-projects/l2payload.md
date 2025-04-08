---
id: "csproj2"
title: "Electronic Payload for Yultuz"
description: "I am creating an electronic payload for my Tripoli Level 2 Certification rocket to measure atmospheric conditions."
pubDate: "2024-01-01"
heroImage: "/aero-proj/yultuz/yultuz-or.png"
tags: ["C++", "Sensor Integration", "Arduino"]
---

### Project Overview  
I am developing an **Electronic Payload** for my Level 2 Tripoli Certification Rocket, named *Yultuz*, designed to collect real-time atmospheric data during flight. This payload will process and transmit data from various sensors to a ground station that I will be creating. The main objective is to track variations in atmospheric pressure and temperature with respect to altitude, comparing these measurements against standard atmospheric models.

### Hardware Selection  
- **Arduino Nano 33 BLE Sense**  
  This microcontroller was selected for its built-in pressure and temperature sensors, simplifying the integration of the required sensing capabilities into the payload.
  
- **Arduino UNO R4 Minima**  
  The ground station will be connected to this microcontroller to manage and display the received data.

- **RRC3+ Altimeters**  
  Two **RRC3+ Altimeters** from Missile Works will be used, providing altitude data and acting as dual deployment devices for the rocket. The redundancy of two altimeters ensures mission success in the critical deployment phase, as one altimeter can serve as a backup in case of failure.

- **XBee Communication Systems (XB3-24Z8UT)**  
  These will be used to wirelessly transmit data from the payload to the ground station in real time, ensuring smooth communication throughout the flight.

- **Additional Components**  
  - **Micro-SD Storage** for local data logging.
  - **Medium-gain antennas with 2.4 GHz capability** for data transmission.
  - **A 3.7V 500 mAh LiPo Battery** to ensure the payload operates throughout the flight.

### Software Tools and Development  
The project will use several development tools to process, analyze, and visualize the collected data:

- **Arduino IDE** for programming the microcontrollers.
- **MATLAB and Python** for post-flight data processing and visualization, allowing for detailed analysis of the atmospheric data against standard models.
- **Altium Designer** for developing the circuit diagrams for the payload, ensuring a robust design.

### Payload Integration
The payload will be integrating in my Level 2 rocket through an electronics bay within a coupler tube. More details on the rest of the rocket and the physical mounting system can be found in the following link to my *Yultuz* project: [Yultuz: A Tripoli L2 Certification Rocket](https://www.danieltohti.com/aerospace-projects/l2cert/) 

### Next Steps: Acquiring Components & Creating the Ground Station
The next steps involve assembling and integrating the hardware, writing the necessary code for data acquisition and transmission, and conducting preliminary ground tests before full-scale rocket launches. At present, I am facing a funding gap, and I do not have the funds necessary to purchase the components for assembly. Stay tuned for updates!