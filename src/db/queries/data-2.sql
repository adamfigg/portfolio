insert into project_tech (project_id, tech_id)
values
(1,1),(1,2),(1,3),(1,4),(1,5),(1,6),
(2,1),(2,2),(2,5),(2,6),(2,9),
(3,5),(3,8),(3,9),(3,10),(3,11),(3,14),
(4,1),(4,8),(4,13),(4,12),(4,11),
(5,1),(5,8),(5,13),
(6,1),(6,3),(6,8),(6,13),(6,10),(6,11);

insert into detail (project_id, value)
values
(4,'Implemented a user experience that makes active calls to an outside API within a React based app'),
(4,'Prototyped and designed with Adobe Experience and used React best practices to reduce load times on API calls'),
(4,'Utilized javascript libraries jQuery, bootstrap, and Json to create functions that run calls and actions'),
(5,'Personally developed an online store with login, shopping cart, checkout, and payment components'),
(5,'Created a sleek mobile-first shopping experience complete with a desktop version using media-queries'),
(5,'Set up data tables and SQL files to allow for a RESTful interaction between the user and their shopping cart'),
(6,'Worked with a group of 4 programmers to plan and create an app using location tracking and multiple APIs'),
(6,'Integrated Google Maps and Flight Tracker APIs to enable travel planning for mobile and online users'),
(6,'Acted as project manager by leading paired programming time to keep team on track to reach MVP on time');