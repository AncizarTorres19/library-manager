
const TableBooks = () => {

    const columns = [
        {
            field: 'name',
            headerName: 'Nombre',
            width: 190,
            editable: true,
        },
        {
            field: 'author',
            headerName: 'Autor',
            width: 190,
        },
        {
            field: 'editorial',
            headerName: 'Editorial',
            width: 190,
        },
        {
            field: 'edition',
            headerName: 'Edición',
            type: 'number',
        },
        {
            field: 'quantity',
            headerName: 'Cantidad',
            type: 'number',
        },
        {
            field: 'available',
            headerName: 'Disponibles',
            type: 'number',
        },
        {
            field: 'lended',
            headerName: 'Prestados',
            type: 'number',
        },
        {
            field: 'reserved',
            headerName: 'Reservados',
            type: 'number',
        },
        {
            field: 'status',
            headerName: 'Estado',
        },
    ];

    const rows = [
        { id: 1, name: 'Libro 1', author: 'Autor 1', editorial: 'Editorial 1', edition: 1, quantity: 1, available: 1, lended: 0, reserved: 0, status: 'Disponible' },
        { id: 2, name: 'Libro 2', author: 'Autor 2', editorial: 'Editorial 2', edition: 2, quantity: 2, available: 2, lended: 0, reserved: 0, status: 'Disponible' },
        { id: 3, name: 'Libro 3', author: 'Autor 3', editorial: 'Editorial 3', edition: 3, quantity: 3, available: 3, lended: 0, reserved: 0, status: 'Disponible' },
        { id: 4, name: 'Libro 4', author: 'Autor 4', editorial: 'Editorial 4', edition: 4, quantity: 4, available: 4, lended: 0, reserved: 0, status: 'Disponible' },
        { id: 5, name: 'Libro 5', author: 'Autor 5', editorial: 'Editorial 5', edition: 5, quantity: 5, available: 5, lended: 0, reserved: 0, status: 'Disponible' },
        { id: 6, name: 'Libro 6', author: 'Autor 6', editorial: 'Editorial 6', edition: 6, quantity: 6, available: 6, lended: 0, reserved: 0, status: 'Disponible' },
        { id: 7, name: 'Libro 7', author: 'Autor 7', editorial: 'Editorial 7', edition: 7, quantity: 7, available: 7, lended: 0, reserved: 0, status: 'Disponible' },
        { id: 8, name: 'Libro 8', author: 'Autor 8', editorial: 'Editorial 8', edition: 8, quantity: 8, available: 8, lended: 0, reserved: 0, status: 'Disponible' },
        { id: 9, name: 'Libro 9', author: 'Autor 9', editorial: 'Editorial 9', edition: 9, quantity: 9, available: 9, lended: 0, reserved: 0, status: 'Disponible' },
        { id: 10, name: 'Libro 10', author: 'Autor 10', editorial: 'Editorial 10', edition: 10, quantity: 10, available: 10, lended: 0, reserved: 0, status: 'Disponible' },
    ];

    return (
     <></>
    )
}

export default TableBooks
