import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

let productos = [
    { id: 1, nombre: "Camiseta Drew", precio: 25 },
    { id: 2, nombre: "Pantalón Jeans", precio: 30 },
    { id: 3, nombre: "Chaqueta Negra", precio: 50},
    { id: 4, nombre: "Gorra Street", precio: 15 },
    { id: 5, nombre: "Sudadera Cool", precio: 35 },
    { id: 6, nombre: "Zapatos Urbanos", precio: 60 },
    { id: 7, nombre: "Cinturón Cuero", precio: 18 },
    { id: 8, nombre: "Calcetines Color", precio: 8 },
];

app.get('/productos', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 4;
    const start = (page - 1) * limit;
    const end = start + limit;
    const paged = productos.slice(start, end);
    res.json({
        data: paged,
        page,
        total: productos.length,
        totalPages: Math.ceil(productos.length / limit)
    });
});

app.get('/productos/search', (req, res) => {
    const q = (req.query.q || '').toLowerCase();
    const filtered = productos.filter(p =>
        p.nombre.toLowerCase().includes(q) || String(p.id) === q
    );
    res.json(filtered);
});

app.post('/productos', (req, res) => {
    const { nombre, precio } = req.body;
    if (!nombre || !precio) return res.status(400).json({ error: 'Faltan datos' });
    const id = productos.length ? productos[productos.length - 1].id + 1 : 1;
    const nuevoProducto = { id, nombre, precio };
    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
});

app.listen(3000, () => {
    console.log('API corriendo en http://localhost:3000');
});
