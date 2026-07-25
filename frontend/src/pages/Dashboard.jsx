import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    brand: "",
    quantity: "",
    supplier: "",
    sku: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

 const fetchProducts = async () => {
  setLoading(true);
  setError("");

  try {
    const response = await api.get("/products");
    setProducts(response.data.data);
  } catch (error) {
    console.error("Error fetching products:", error);
    setError("Failed to load products.");
  } finally {
    setLoading(false);
  }
};

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingProduct) {
        await api.put(`/products/${editingProduct._id}`, formData);

        alert("Product Updated Successfully");

        setEditingProduct(null);
      } else {
        await api.post("/products", formData);

        alert("Product Added Successfully");
      }

      fetchProducts();

      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        brand: "",
        quantity: "",
        supplier: "",
        sku: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/products/${id}`);

      alert("Product Deleted Successfully");

      fetchProducts();
    } catch (error) {
      console.error(error);
      alert("Error deleting product");
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);

    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      brand: product.brand,
      quantity: product.quantity,
      supplier: product.supplier,
      sku: product.sku,
    });
  };
    return (
    <div className="dashboard">
      <h1>Inventory Dashboard</h1>
      {loading && (
  <p style={{ color: "blue", fontWeight: "bold" }}>
    Loading products...
  </p>
)}

{error && (
  <p
    style={{
      color: "red",
      fontWeight: "bold",
      marginBottom: "15px",
    }}
  >
    {error}
  </p>
)}

      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "15px",
          marginBottom: "30px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="supplier"
          placeholder="Supplier"
          value={formData.supplier}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="sku"
          placeholder="SKU"
          value={formData.sku}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          style={{
            gridColumn: "span 2",
            padding: "12px",
            background: editingProduct ? "#16a34a" : "#2563eb",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "8px",
          }}
        >
          {editingProduct ? "Update Product" : "Add Product"}
        </button>
      </form>

      <div className="cards">
        <div className="card">
          <h2>Total Products</h2>
          <p>{products.length}</p>
        </div>
      </div>

      <h2 style={{ marginTop: "30px" }}>Product List</h2>

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          marginTop: "20px",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Brand</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>₹{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.brand}</td>

              <td>
                <button
                  onClick={() => handleEdit(product)}
                  style={{
                    marginRight: "10px",
                    background: "orange",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(product._id)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;