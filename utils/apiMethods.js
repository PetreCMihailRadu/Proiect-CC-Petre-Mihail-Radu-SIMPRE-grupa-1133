export const sendOk = (res, data) => {
    res.status(200).json(data);
}

export const sendNotFound = (res, message) => {
    res.status(404).json({ message });
}

export const sendBadRequest = (res, message) => {
    res.status(400).json({ message });
}

export const sendUnauthorized = (res, message) => {
	res.status(401).json({ message });
}

export const sendMethodNotAllowed = (res, message) => {
	res.status(405).json({ message });
}