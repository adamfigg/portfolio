SELECT p.name name, link, thumbnail thumb, t.name tech, d.value detail
FROM project p, project_tech pt, tech t, detail d
where p.id = pt.project_id
AND t.id = pt.tech_id
and d.project_id = p.id