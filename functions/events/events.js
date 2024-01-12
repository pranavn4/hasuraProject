const handleInsert = (eventPayload) => {

    console.log('Insert operation:', eventPayload.event.data.new);
    return(eventPayload.event.data.new);
};

const handleUpdate = (eventPayload) => {
    console.log('Update operation:', eventPayload.event.data.new);
    return(eventPayload.event.data.new);
};

const handleDelete = (eventPayload) => {
    console.log('Delete operation:', eventPayload.event.data.old);
    return(eventPayload.event.data.old);
};

export const eventHandler = async (event) => {
    let result;
    const event_payload = JSON.parse(event.body);
    const operation = event_payload.event.op;

    switch (operation) {
        case 'INSERT':
            result=handleInsert(event_payload);
            break;
        case 'UPDATE':
            result=handleUpdate(event_payload);
            break;
        case 'DELETE':
            result=handleDelete(event_payload);
            break;
        default:
            console.log('Unsupported operation:', operation);
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ message: result }),
    };
};






