export function formatTime(timestamp: string) {
    const date = new Date(timestamp); // Converte o string para um objeto Date
    const hours = date.getHours(); // Extrai as horas (0-23)
    const minutes = date.getMinutes(); // Extrai os minutos (0-59)
    return `${hours}:${minutes}`;
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate();
    const monthNames = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agost",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${day < 10 ? "0" + day : day} ${month} ${year}`;
}