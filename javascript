document.addEventListener('DOMContentLoaded', function() {
    const hotelForm = document.getElementById('hotelForm');
    const reservationForm = document.getElementById('reservationForm');
    const checkInOutForm = document.getElementById('checkInOutForm');
    const roomServiceForm = document.getElementById('roomServiceForm');
    const feedbackForm = document.getElementById('feedbackForm');

    const hotelTable = document.getElementById('hotelTable').getElementsByTagName('tbody')[0];
    const reservationTable = document.getElementById('reservationTable').getElementsByTagName('tbody')[0];
    const checkInOutTable = document.getElementById('checkInOutTable').getElementsByTagName('tbody')[0];
    const roomServiceTable = document.getElementById('roomServiceTable').getElementsByTagName('tbody')[0];
    const feedbackTable = document.getElementById('feedbackTable').getElementsByTagName('tbody')[0];

    const hotelSelect = document.getElementById('hotelSelect');
    const reservationSelect = document.getElementById('reservationSelect');
    const roomServiceSelect = document.getElementById('roomServiceSelect');
    const feedbackSelect = document.getElementById('feedbackSelect');

    const hotels = [];
    const reservations = [];

    // Adicionar Hotel
    hotelForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const hotelName = document.getElementById('hotelName').value;
        const location = document.getElementById('location').value;
        const rooms = document.getElementById('rooms').value;

        const newRow = hotelTable.insertRow();
        newRow.insertCell(0).textContent = hotelName;
        newRow.insertCell(1).textContent = location;
        newRow.insertCell(2).textContent = rooms;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remover';
        deleteButton.addEventListener('click', function() {
            hotelTable.deleteRow(newRow.rowIndex - 1);
            hotels.splice(hotels.indexOf(hotelName), 1);
            updateSelectOptions();
        });

        newRow.insertCell(3).appendChild(deleteButton);

        hotels.push(hotelName);
        updateSelectOptions();
        hotelForm.reset();
    });

    // Adicionar Reserva
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const hotel = hotelSelect.value;
        const guestName = document.getElementById('guestName').value;
        const checkInDate = document.getElementById('checkInDate').value;
        const checkOutDate = document.getElementById('checkOutDate').value;

        const newRow = reservationTable.insertRow();
        newRow.insertCell(0).textContent = hotel;
        newRow.insertCell(1).textContent = guestName;
        newRow.insertCell(2).textContent = checkInDate;
        newRow.insertCell(3).textContent = checkOutDate;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remover';
        deleteButton.addEventListener('click', function() {
            reservationTable.deleteRow(newRow.rowIndex - 1);
            reservations.splice(res
