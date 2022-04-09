SELECT
  MIN(valor_plano) AS faturamento_minimo,
  MAX(valor_plano) AS faturamento_maximo,
  ROUND(AVG(valor_plano), 2) AS faturamento_medio,
  SUM(valor_plano) AS faturamento_total
FROM
  SpotifyClone.plano AS P
  INNER JOIN SpotifyClone.usuario AS U ON U.plano_id = P.plano_id;