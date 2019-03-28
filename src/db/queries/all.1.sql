SELECT p.name name, t.name tech
FROM project p, project_tech pt, tech t
where p.id = pt.project_id
AND t.id = pt.tech_id