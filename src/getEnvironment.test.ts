import Environment  from "./Environment";

export default function getEnvironment() : string {

    const url = document.baseURI;

    if (url.includes("localhost")) {
        return Environment.LOCAL;
    }

    if (url.includes("http://fxsap-")) { // f5 - this is not bullet proof but fails gracefully

        const env = url.substring(url.indexOf("-") + 1, url.indexOf("."));

        return Environment[env.toUpperCase()];
    }

    return null;
}