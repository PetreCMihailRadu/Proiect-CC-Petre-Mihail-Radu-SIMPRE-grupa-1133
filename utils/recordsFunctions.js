export const getRecords = async () => {
    try {
        const response = await fetch('/api/records', {
            method: 'GET',
        })

        const data = await response.json();

        if (!data) {
            return [];
        }

        return data;
    } catch (error) {
        console.log(error)
    }
}

export const deleteRecord = async (id) => {
    try {
        const response = await fetch(`/api/records?id=${id}`, {
            method: 'DELETE',
        })

        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error)
    }
}