# Sports x Data - Digital Tools and Services for Sports Teams

This site/web app uses Django, Python, and PostgreSQL for the backend and JS/JQuery/HTML/CSS for the Front-End. It's currently deployed on Heroku. 

## User Flow:

- Login
- Upload footage of gameplay
- Access 50+ insights/stats tracked from this footage by logging in, and viewing their TeamCentre and MatchCentre pages. 

Sports x Data Team Flow

- Footage is uploaded via TransferNow (arrives in email), download onto private machine for analysis
- Spend 2+ hours analyzing, and tracking stats
- Create Match instance, then update DB with new Stats (ensure right team_id, season_id, and game_id is assigned)
- Match Centre UI should automatically be created for that Match Instance 
