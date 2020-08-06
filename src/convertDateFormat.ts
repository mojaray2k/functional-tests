import moment from "moment";

function convertDateFormat(dateVal: string, defaultDateFormat: string) {
    let dateFormat = null;
    let convertedDateFormat = dateVal;

    if (dateVal !== "" && typeof dateVal === "string") {
        switch (true) {
        case /^[0-9]{1,2}-[a-zA-Z]{3}-[0-9]{4}$/.test(dateVal):
            dateFormat = "DD-MMM-YYYY";
            break;
        case /^[0-9]{1,2}-[a-zA-Z]{3}-[0-9]{2}$/.test(dateVal):
            dateFormat = "DD-MMM-YY";
            break;
        case /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2}$/.test(dateVal):
            dateFormat = "MM/DD/YY";
            break;
        case /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/.test(dateVal):
            dateFormat = "MM/DD/YYYY";
            break;
        case /^\d{1,2}\s[a-z]{3}\s\d{4}$/.test(dateVal):
            dateFormat = "DD MMM YYYY";
            break;
        case /^\d{1,2}\s[a-z]{3}\s\d{2}$/.test(dateVal):
            dateFormat = "DD MMM YY";
            break;
        case /^\d{4}-\d{1,2}-\d{1,2}$/.test(dateVal):
            dateFormat = "YYYY-MM-DD";
            break;
        case /^\d{4}\/\d{1,2}\/\d{1,2}$/.test(dateVal):
            dateFormat = "YYYY/MM/DD";
            break;
        case /^\d{4}.\d{1,2}.\d{1,2}$/.test(dateVal):
            dateFormat = "YYYY.MM.DD";
            break;
        case /\d{1,2}-\d{1,2}-\d{4}$/.test(dateVal):
            dateFormat = "MM-DD-YYYY";
            break;
        case /\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateVal):
            dateFormat = "MM/DD/YYYY";
            break;
        case /\d{1,2}.\d{1,2}.\d{4}$/.test(dateVal):
            dateFormat = "MM.DD.YYYY";
            break;
        case /\d{1,2}-\d{4}-\d{1,2}$/.test(dateVal):
            dateFormat = "MM-YYYY-DD";
            break;
        case /\d{1,2}\/\d{4}\/\d{1,2}$/.test(dateVal):
            dateFormat = "MM/YYYY/DD";
            break;
        case /\d{1,2}.\d{4}.\d{1,2}$/.test(dateVal):
            dateFormat = "MM.YYYY.DD";
            break;
        case /\d{2}-\d{2}-\d{2}$/.test(dateVal):
            dateFormat = "MM-DD-YY";
            break;
        }

        if (dateFormat) {
            const momentDate = moment(dateVal, dateFormat);

            convertedDateFormat = momentDate.isValid() ? momentDate.format(defaultDateFormat) : convertedDateFormat;
        }
    }
    return convertedDateFormat;
}

export default convertDateFormat;
