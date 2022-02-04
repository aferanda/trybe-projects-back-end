SELECT
  U.usuario AS usuario,
  COUNT(HR.usuario_id) AS qtde_musicas_ouvidas,
  ROUND(SUM(C.duracao_segundos / 60), 2) AS total_minutos
FROM
  SpotifyClone.usuario AS U
  INNER JOIN SpotifyClone.historico_reproducao AS HR ON HR.usuario_id = U.usuario_id
  INNER JOIN SpotifyClone.cancao AS C ON C.cancao_id = HR.cancao_id
GROUP BY
  HR.usuario_id
ORDER BY
  usuario ASC;