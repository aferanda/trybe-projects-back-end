SELECT
  COUNT(*) AS quantidade_musicas_no_historico
FROM
  SpotifyClone.historico_reproducao AS HR
  INNER JOIN SpotifyClone.usuario AS U ON U.usuario_id = HR.usuario_id
WHERE
  U.usuario = 'Bill';