# soft<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerenciamento de Rede Hoteleira</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            padding: 10px;
            border: 1px solid #ddd;
            text-align: left;
        }
        th {
            background-color: #f4f4f4;
        }
        .section {
            margin-bottom: 40px;
        }
    </style>
</head>
<body>
    <h1>Gerenciamento de Rede Hoteleira</h1>

    <!-- Formulário de Adição de Hotel -->
    <div class="section">
        <h2>Adicionar Hotel</h2>
        <form id="hotelForm">
            <label for="hotelName">Nome do Hotel:</label>
            <input type="text" id="hotelName" required>
            <label for="location">Localização:</label>
            <input type="text" id="location" required>
            <label for="rooms">Número de Quartos:</label>
            <input type="number" id="rooms" required>
            <button type="submit">Adicionar Hotel</button>
        </form>
        <table id="hotelTable">
            <thead>
                <tr>
                    <th>Nome do Hotel</th>
                    <th>Localização</th>
                    <th>Número de Quartos</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>

    <!-- Formulário de Gerenciamento de Reservas -->
    <div class="section">
        <h2>Gerenciar Reservas</h2>
        <form id="reservationForm">
            <label for="hotelSelect">Selecione o Hotel:</label>
            <select id="hotelSelect" required></select>
            <label for="guestName">Nome do Hóspede:</label>
            <input type="text" id="guestName" required>
            <label for="checkInDate">Data de Check-in:</label>
            <input type="date" id="checkInDate" required>
            <label for="checkOutDate">Data de Check-out:</label>
            <input type="date" id="checkOutDate" required>
            <button type="submit">Adicionar Reserva</button>
        </form>
        <table id="reservationTable">
            <thead>
                <tr>
                    <th>Hotel</th>
                    <th>Nome do Hóspede</th>
                    <th>Check-in</th>
                    <th>Check-out</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>

    <!-- Formulário de Check-in/Check-out -->
    <div class="section">
        <h2>Check-in/Check-out</h2>
        <form id="checkInOutForm">
            <label for="reservationSelect">Selecione a Reserva:</label>
            <select id="reservationSelect" required></select>
            <label for="checkInOutAction">Ação:</label>
            <select id="checkInOutAction" required>
                <option value="checkin">Check-in</option>
                <option value="checkout">Check-out</option>
            </select>
            <button type="submit">Registrar</button>
        </form>
        <table id="checkInOutTable">
            <thead>
                <tr>
                    <th>Hotel</th>
                    <th>Nome do Hóspede</th>
                    <th>Ação</th>
                    <th>Data e Hora</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>

    <!-- Formulário de Serviços de Quarto -->
    <div class="section">
        <h2>Serviços de Quarto</h2>
        <form id="roomServiceForm">
            <label for="roomServiceSelect">Selecione a Reserva:</label>
            <select id="roomServiceSelect" required></select>
            <label for="serviceRequest">Solicitação:</label>
            <input type="text" id="serviceRequest" required>
            <button type="submit">Registrar Solicitação</button>
        </form>
        <table id="roomServiceTable">
            <thead>
                <tr>
                    <th>Hotel</th>
                    <th>Nome do Hóspede</th>
                    <th>Solicitação</th>
                    <th>Data e Hora</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>

    <!-- Formulário de Feedback -->
    <div class="section">
        <h2>Feedback dos Hóspedes</h2>
        <form id="feedbackForm">
            <label for="feedbackSelect">Selecione a Reserva:</label>
            <select id="feedbackSelect" required></select>
            <label for="guestFeedback">Feedback:</label>
            <textarea id="guestFeedback" required></textarea>
            <button type="submit">Enviar Feedback</button>
        </form>
        <table id="feedbackTable">
            <thead>
                <tr>
                    <th>Hotel</th>
                    <th>Nome do Hóspede</th>
                    <th>Feedback</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>

    <script src="script.js"></script>
</body>
</html>
ware-de-gest-o-hoteleira
