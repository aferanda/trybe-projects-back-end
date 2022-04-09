SELECT
  ART.artista AS artista,
  ALB.album AS album
FROM
  SpotifyClone.artista AS ART
  INNER JOIN SpotifyClone.album AS ALB ON ALB.artista_id = ART.artista_id
WHERE
  artista = 'Walter Phoenix'
ORDER BY
  album ASC;