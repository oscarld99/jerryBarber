document.addEventListener('DOMContentLoaded', function() {
    const appointmentsTable = document.getElementById('appointments');
    const openFormBtn = document.getElementById('openFormBtn');
    const appointmentForm = document.getElementById('appointmentForm');
    const closeFormBtn = document.querySelector('.close');
    const form = document.getElementById('newAppointmentForm');

    // Función para abrir el formulario de nueva cita
    openFormBtn.addEventListener('click', function() {
        appointmentForm.style.display = 'block';
    });

    // Función para cerrar el formulario de nueva cita
    closeFormBtn.addEventListener('click', function() {
        appointmentForm.style.display = 'none';
        form.reset();
    });

    // Función para manejar el envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const time = form.time.value;
        const barber = form.barber.value;
        const client = form.client.value;
        const service = form.service.value;

        // Crear nueva fila de cita
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${time}</td>
            <td>${barber}</td>
            <td>${client}</td>
            <td>${service}</td>
        `;

        // Agregar la fila a la tabla
        appointmentsTable.querySelector('tbody').appendChild(newRow);

        // Cerrar el formulario
        appointmentForm.style.display = 'none';
        form.reset();
    });

});
