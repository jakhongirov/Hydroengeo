const modeling = {
  heading: "LABORATORY OF GEOINFORMATION TECHNOLOGIES AND MODELING",
  services: {
    title: "The laboratory provides the following services:",
    s1: "Installation and commissioning of the telemetric module for automatic monitoring of groundwater in hydrogeological wells”;",
    s2: "Georeferencing and raster vectorization;",
    s3: "Spatial database design;",
    s4: "Computer cartography;",
    s5: "3D geological modeling;",
    s6: "Development and compilation of cartographic reports;",
    s7: "Software development. ",
  },
  objectives: {
    title: "Main objectives of laboratory",
    o1: "• Development of mathematical models of groundwater deposits based on modern software products;",
    o2: "• Creation of natural, geofiltration and mathematical models of geofiltration processes in order to predict the behavior of groundwater levels and assess their quality based on modern software products; Construction and processing of hydrogeological and engineering-geological maps using GIS technology; ",
    o3: "•Processing and generalization of geological, hydrogeological, geophysical and aerospace data using computer technology methods;",
    o4: "• Statistical processing of hydrogeological and engineering-geological data;",
    o5: "• Substantiation and improvement of groundwater monitoring methods;",
    o6: "• Development of computer technologies and devices for automatic measurement of the level, temperature and electrical conductivity of groundwater, relating to the conditions of Uzbekistan; ",
    o7: "• The use and implementation of automated devices for measuring the ground water level, temperature and salimnity.",
    o8: "• Development and introduction into practice of modern software and modeling systems;",
    o9: "• Development of recommendations and guidelines for the application and implementation of mathematical methods for modeling, automated measuring instruments of geoinformation technology, as well as software. ",
  },
  results: {
    title: "Main results",
    r1: "Creation of modern digital hydrogeological 3D models for groundwater deposits of the Republic of Uzbekistan for processing the results of geological exploration, resource assessment and rational use (on the example of the Akhangaran river valley).",
    r2: "As a result of research for the 3D model, a factographic and cartographic basis of the hydrogeological information system, hydrogeological parameters and factors that determine the state of groundwater, hydrogeological conditions of the object of study were prepared, and materials were collected on the hydrogeological, geomorphological and water management conditions of the object of study. ",
    r3: "The database created in the ArcGIS system includes cartographic material and tabular information that is entered into the attribute information of objects. 3D modeling was performed using the Visual Modflow program; as a result, digital maps of groundwater levels and the piezometric surface of the study area were compiled. ",
    r4: "Study of the processes of groundwater damming and territory flooding under the influence of the Aidar-Arnasay lake system based on GIS technologies.",
    r5: "A set of sequential forms of diagrams, tabular, graphical and cartographic materials has been compiled as initial data for modeling, analysis and assessment of hydrogeological conditions in order to identify the causes and rates of changes in the state of groundwater in Neogene-Quaternary deposits under the influence of the AAOS. ",
    r6: "A geofiltration model of groundwater deposits of Neogene-Quaternary sediments within the influence of the Aidar-Arnasay lake system based on modern software products Modflow and ArcGIS under anthropogenic impact has been created. ",
    r7: "Development of a mathematical model of groundwater deposits on the example of the Fergana Valley in order to assess the predicted resources in connection with changes in water management conditions.",
    r8: "A geofiltration mathematical model of groundwater deposits in the Fergana Valley has been developed to identify the prospects for their use in the national economy, increasing the water supply of irrigated lands in conditions of technogenic low water.",
    r9: "With geofiltration schematization, the analysis of series of regime observations of the groundwater level and geofiltration parameters, Kf, Km, m, as well as retrospective data on water intakes, etc. was conducted.",
    r10: `In the course of the regional assessment of probable resources (PR) and operating reserves (OR), the regularities of groundwater formation, their balance, lithofacies conditions of occurrence of aquifers, hydrodynamic (and hydraulic) state of aquifers, the relationship between groundwater and surface water, etc. `,
    r11: "A schematic map of various types of relationship between pressure and groundwater in the Fergana Valley has been created and a schematic 3D model of the groundwater level of the Fergana Valley has been built in Visual ModFlow.",
    r12: `The following tasks were solved on the basis of the created mathematical model: 
    a) schematic map of various types of relationship between pressure water and groundwater in the Fergana Valley was created and a schematic 3D model of the groundwater level of the Fergana Valley was built in Visual ModFlow. b) groundwater extraction in a three-layer environment (periphery of alluvial fans, Central Fergana, the valley of the Naryn, Karadarya, Syrdarya river). 
    `,
  },
  scientific: {
    title: "Scientific developments",
    text: `Scientific developments of the "Geoinformation Technology and Modeling" laboratory are associated with a wide range of fundamental, applied and innovative tasks of modeling and implementation of new geoinformation technologies. These include:`,
    s1: "• construction of mathematical models of geofiltration processes,",
    s2: "• solution on their basis of urgent problems of hydrogeology, ameliorative hydrogeology and engineering geology",
    s3: "• creation and development of numerical methods and their adaptation to the latest computer technology, compilation of geographic information systems using ArcGIS.",
    s4: "• development of new software for the assigned task.",
    text2: `The laboratory has developed a device for automated measurement of the level, temperature and electrical conductivity of groundwater in observation wells with remote data transmission. Purpose of the device. A device for automated measurement of the level, temperature and salinity of groundwater in observation wells allows you to measure, collect, store, process and remotely transmit information about the state of groundwater to the processing center.
      The advantages of using an automated device for monitoring the quantitative and qualitative characteristics of groundwater (GW): 
      `,
    s5: `- periodic lowering, raising of the float or electrodes of the water level sensor is not required;`,
    s6: `- receiving the parameters of the GW online;`,
    s7: `- autonomous work without human intervention;`,
    s8: `- the possibility of organizing wireless data transmission;`,
    s9: `- the possibility of electronic logging of data with the required frequency. `,
  },
  characteristics: {
    title: "Main technical characteristics of the device:",
    c1: "Depth of level measurements - 200 m",
    c2: "Level measurement range - 0 - 2 m",
    c3: "Memory capacity, measurements - not less than 50000",
    c4: "Well water temperature measurement range, С from +5 to +30",
    c5: "Power is supplied from a battery (accumulator) - 3.6 V",
    c6: "Average service life, years, not less than 5",
  },
  parts: "The device consists of two interconnected parts:",
  part1:
    "1) a submersible unit with sensors for pressure, temperature, salinity and an electronic board with a microcontroller;",
  part2:
    "2) pressurized compartment, where interconnected GSM-modem with an external antenna and power supply of the device are located. ",
  paragraph1: `Principle of operation. 
  The operation of the device begins with connecting it to a power source (battery). After connecting the battery to the connector, the microcontroller starts and initializes. 
  After lowering and installing the device in the well, you need to enter a special website and set the required measurement interval in the settings section. The microcontroller starts up and initializes after a specified time interval. After the end of the measurements, the microcontroller saves the data in the memory chip, and then sends a measurement results to the information collection center via the Internet (3G, GPRS, EDGE), indicating the identification number of the device, date and time of measurement. At the end of the transfer of information, the microcontroller turns off the power, puts the device's microcircuit into low power consumption mode, starts the internal timer and goes into sleep mode. Thus, this measurement cycle is repeated at the frequency specified in the settings..  
  `,
  paragraph2: `The transfer of measurement results via the Internet immediately after the measurement ensures rapid data collection, i.e. using the Internet channel, it is possible to transmit measured data over any distance. 
  The use of a device for automatic measurement of groundwater parameters in hydrogeological wells makes it possible to save time and material costs in hydrogeological monitoring, increase work productivity and data reliability, and also create an effective system for monitoring groundwater in real time.
  `,
  secondaryHeading1: "Installation of the device in hydrogeological wells",
  secondaryHeading2: "Scientific achievements of the laboratory",
  paragraph3:
    "A computer information system of underground waters of the Republic of Karakalpakstan, Khorezm and Samarkand regions was created on the basis of GIS technology.",
  paragraph4:
    "A model of hydrodynamic processes has been created to study negative phenomena (flooding, pollution, salinization, deformation of buildings and structures, etc.) based on GIS technology. ",
  paragraph5:
    "A computer information system and a data bank have been created for registration, accounting and evaluation of zones of manifestation of hazardous geological processes in the Republic of Uzbekistan. ",
  paragraph6:
    "A mathematical model of groundwater deposits in the Ferghana Valley has been developed to assess predicted resources in connection with changes in water management conditions. ",
  paragraph7: `With regard to the groundwater regime, the laboratory has developed a method for assessing the representativeness of observations and compiling regional characteristics of the groundwater regime according to the average annual regional norm of groundwater level.`,
  paragraph8:
    "A technique has been developed for the use of automatic measurement devices of the diver-type during experimental filtration work; ",
  paragraph9:
    "A technique has been developed for using diver-type equipment to study the groundwater regime in cluster wells.",
  paragraph10:
    "The possibility of using a water sensor of the diver-type device instead of an air device has been established. The methodology for assessing the representativeness of observations and compiling regional characteristics of the groundwater regime according to the average annual regional norm of groundwater level provision was transferred for use by the Angren hydrogeological station. ",
  paragraph11:
    "The methodology for assessing the representativeness of observations and compiling regional characteristics of the groundwater regime according to the average annual regional norm of groundwater level provision was transferred for use by the Angren hydrogeological station. ",
  paragraph12:
    "The problems of information resources and the quality of their presentation play a decisive role in the economy and the functioning of ecosystems in the 21st century in connection with which the service of geoinformation technologies, both in individual states and in the world as a whole, has become of great importance. ",
  paragraph13:
    "Hydrogeological conditions are one of the main factors that significantly affect the state of the underground hydrosphere, on the basis of knowledge, assessment of the designed protective measures against pollution, depletion and flooding of the territories of future or already constructed buildings and structures is carried out. Forecast of changes in these conditions, as well as assessment of the current state of the underground hydrosphere, assessment of the possibility of using groundwater to increase the water supply of the territory based on the solution of forecast problems, forecast of changes in groundwater resources in connection with the possible construction of hydraulic structures, etc. solved using modern GIS technologies (ArcGIS, HydroGeoAnalyst, ENVI, MapInfo, Erdasimaging), mathematical modeling methods (Visual Modflow, GWVistas, Gidpar, Modgidpros, etc.) is a necessary element of any hydrogeological, engineering-geological and geoecological research related to calculations of water intake structures, artificial formation of groundwater, melioration and statistical processing. ",
  secondaryHeading3: "Monitoring the state of groundwater through the website",
  secondaryHeading4: "Efficiency from the implementation of research results",
  secondaryHeading5:
    "Location of devices for automated measurement of the groundwater level and temperature in observation wells in the regions of the Republic of Uzbekistan.",
  secondaryHeading6: `Received certificates for the developed software.
  Intellectual Property Agency under the Ministry of Justice of the Republic of Uzbekistan in accordance with the Law of the Republic of Uzbekistan "On the legal protection of programs for electronic computers and databases".
  `,
};

export default modeling;
