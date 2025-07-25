import './Checkout.scss';
import { useCart } from '../context/useCart';
import { serverTimestamp } from 'firebase/firestore';
import { createOrder } from '../firebase/db';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';



function Checkout() {

    const { cart } = useCart()
    const { vaciarCarrito } = useCart()
    const [orderId, setOrderId] = useState(null);
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
            e.preventDefault();

            const form = e.target;

            const nombre = form.nombre.value;
            const apellido = form.apellido.value;
            const dni = form.dni.value;
            const telefono = form.telefono.value;
            const email = form.email.value;
            const calle = form.calle.value;
            const numero = form.numero.value;
            const ciudad = form.ciudad.value;
            const provincia = form.provincia.value;
            const codigoPostal = form.codigoPostal.value;
            const comentario = form.comentario.value;
            const metodoPago = form.metodoPago.value;

            const order = {
                user: {
                    nombre,
                    apellido,
                    dni,
                    telefono,
                    email,
                    direccion: {
                        calle,
                        numero,
                        ciudad,
                        provincia,
                        codigoPostal,
                    },
                    comentario,
                    metodoPago
                },
                items: cart,
                time: serverTimestamp()
            };

            try {
                const id = await createOrder(order);
                setOrderId(id);
            } catch (error) {
                console.error("Error al crear la orden:", error);
            }
            
        };


        useEffect(() => {
            if (orderId) {
                vaciarCarrito();
            }
        }, [orderId]);

    return (

        <div>
            {orderId ? (
                <div>
                    <h2>¡Gracias por su compra!</h2>
                    <p>El ID de su orden es: {orderId}</p>
                    <button onClick={() => navigate("/")}>Volver a la Home</button>
                </div>
            ) : (
            <form onSubmit={handleSubmit} className="Checkout">
            <h2>Finalizar Compra</h2>

            <label>
                Nombre:
                <input type="text" name="nombre" required />
            </label>

            <label>
                Apellido:
                <input type="text" name="apellido" required />
            </label>

            <label>
                DNI:
                <input type="text" name="dni" required />
            </label>

            <label>
                Teléfono:
                <input type="tel" name="telefono" required />
            </label>

            <label>
                Email:
                <input type="email" name="email" required />
            </label>

            <label>
                Dirección:
                <input type="text" name="calle" placeholder="Calle" required />
                <input type="text" name="numero" placeholder="Número" required />
                <input type="text" name="ciudad" placeholder="Ciudad" required />
                <input type="text" name="provincia" placeholder="Provincia" required />
                <input type="text" name="codigoPostal" placeholder="Código Postal" required />
            </label>

            <label>
                Comentarios adicionales:
                <textarea name="comentario" placeholder="¿Desea dejarnos algún comentario?" />
            </label>

            <label>
                Método de pago:
                <select name="metodoPago" required>
                    <option value="">Seleccione un método</option>
                    <option value="tarjeta">Tarjeta de crédito/débito</option>
                    <option value="transferencia">Transferencia bancaria</option>
                    <option value="efectivo">Efectivo al recibir</option>
                </select>
            </label>

            <button type="submit">Confirmar compra</button>




            </form>

            )}


        </div>
    );
}

export default Checkout;