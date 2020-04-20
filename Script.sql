
SELECT * FROM dbo.clientes

ALTER TABLE  dbo.clientes
ADD Clave CHAR(8)

UPDATE dbo.clientes
SET Clave= '//**//**'
WHERE idCliente = 'ALFKI'