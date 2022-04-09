SELECT
  cancao AS nome_musica,
  CASE
    WHEN cancao LIKE '%Streets' THEN REPLACE(cancao, 'Streets', 'Code Review')
    WHEN cancao LIKE '%Her Own' THEN REPLACE(cancao, 'Her Own', 'Trybe')
    WHEN cancao LIKE '%Inner Fire' THEN REPLACE(cancao, 'Inner Fire', 'Project')
    WHEN cancao LIKE '%Silly' THEN REPLACE(cancao, 'Silly', 'Nice')
    WHEN cancao LIKE '%Circus' THEN REPLACE(cancao, 'Circus', 'Pull Request')
  END AS novo_nome
FROM
  SpotifyClone.cancao AS C
GROUP BY
  nome_musica
HAVING
  nome_musica <> novo_nome
ORDER BY
  nome_musica ASC,
  novo_nome ASC;