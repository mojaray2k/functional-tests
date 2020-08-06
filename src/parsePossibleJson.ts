const parsePossibleJson = (value: any): any => {
    if (typeof(value) === "string") {
        try {
            return JSON.parse(value);
        } catch (error) {
            return value;
        }
    }

    return value;
};

export default parsePossibleJson;
