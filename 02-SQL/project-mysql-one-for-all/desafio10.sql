SELECT
  C.cancao AS nome,
  COUNT(*) AS reproducoes
FROM
  SpotifyClone.cancao AS C
  INNER JOIN SpotifyClone.historico_reproducao AS HR ON HR.cancao_id = C.cancao_id
  INNER JOIN SpotifyClone.usuario AS U ON U.usuario_id = HR.usuario_id
WHERE
  U.plano_id IN (1, 4)
GROUP BY
  nome
ORDER BY
  nome ASC;