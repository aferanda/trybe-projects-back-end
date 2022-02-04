SELECT
  ART.artista AS artista,
  ALB.album AS album,
  COUNT(*) AS seguidores
FROM
  SpotifyClone.artista AS ART
  INNER JOIN SpotifyClone.album AS ALB ON ALB.artista_id = ART.artista_id
  INNER JOIN SpotifyClone.seguidor AS S ON S.artista_id = ART.artista_id
GROUP BY
  artista,
  album
ORDER BY
  seguidores DESC,
  artista ASC,
  album ASC;