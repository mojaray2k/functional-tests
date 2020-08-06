import momentTimezone from "moment-timezone";

function getCurrentTimeInEST() {
    return momentTimezone().tz("America/New_York");
}

function convertUTCTimeToEST(timeInUTC: Date){
    return momentTimezone.utc(timeInUTC).tz("America/New_York");
}

export {
    getCurrentTimeInEST,
    convertUTCTimeToEST
};
