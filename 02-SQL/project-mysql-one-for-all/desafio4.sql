SELECT
  U.usuario AS usuario,
  IF(MAX(YEAR(HR.data_reproducao)) = 2021, 'Usuário ativo', 'Usuário inativo') AS condicao_usuario
FROM
  SpotifyClone.usuario AS U
  INNER JOIN SpotifyClone.historico_reproducao AS HR ON HR.usuario_id = U.usuario_id
GROUP BY
  HR.usuario_id
ORDER BY
  U.usuario ASC;