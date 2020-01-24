UPDATE products
SET (name, price, img) = ($2, $3, $4)
WHERE id = $1;