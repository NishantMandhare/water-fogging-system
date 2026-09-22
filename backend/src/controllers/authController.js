const bcrypt = require("bcryptjs");
const prisma = require("../prismaClient");

const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            role,
        },
    });

    res.json({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
    });
};

module.exports = { registerUser };