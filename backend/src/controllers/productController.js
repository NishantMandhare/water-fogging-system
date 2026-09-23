const prisma = require("../prismaClient");

const getAllProducts = async (req, res) => {
    const products = await prisma.product.findMany();
    res.json(products);
};

const createProduct = async (req, res) => {
    const { name, sku, category, description, costPrice, sellingPrice, stock, minStock } = req.body;

    const newProduct = await prisma.product.create({
        data: {
            name,
            sku,
            category,
            description,
            costPrice: costPrice ? Number(costPrice) : null,
            sellingPrice: Number(sellingPrice),
            stock: stock ? Number(stock) : 0,
            minStock: minStock ? Number(minStock) : 5,
        },
    });

    res.json(newProduct);
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, sku, category, description, costPrice, sellingPrice, stock, minStock } = req.body;

    const updatedProduct = await prisma.product.update({
        where: { id: Number(id) },
        data: {
            name,
            sku,
            category,
            description,
            costPrice: costPrice ? Number(costPrice) : undefined,
            sellingPrice: sellingPrice ? Number(sellingPrice) : undefined,
            stock: stock !== undefined ? Number(stock) : undefined,
            minStock: minStock !== undefined ? Number(minStock) : undefined,
        },
    });

    res.json(updatedProduct);
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    await prisma.product.delete({
        where: { id: Number(id) },
    });

    res.json({ message: "Product deleted successfully" });
};

module.exports = { getAllProducts, createProduct, updateProduct, deleteProduct };