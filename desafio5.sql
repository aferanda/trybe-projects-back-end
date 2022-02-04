SELECT
  C.cancao AS cancao,
  COUNT(HR.usuario_id) AS reproducoes
FROM
  SpotifyClone.cancao AS C
  INNER JOIN SpotifyClone.historico_reproducao AS HR ON HR.cancao_id = C.cancao_id
GROUP BY
  HR.cancao_id
ORDER BY
  reproducoes DESC,
  cancao ASC
LIMIT
  2;