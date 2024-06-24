export const prepareUrl = ({ urlTemplate, urlParams = {}, data = {}, queryParams = false, withApiPath = true }) => {
    let resultUrl = urlTemplate;
    Object.keys(urlParams).forEach(key => {
        resultUrl = resultUrl.replace(new RegExp('{' + key + '}', 'g'), urlParams[key]);
    });
    if (queryParams) {
        const requestParams = new URLSearchParams();
        Object.keys(data).forEach(paramKey => {
            requestParams.append(paramKey, data[paramKey]);
        })
        resultUrl += '?' + requestParams.toString();
    }
    return resultUrl;
}

export const arrayToQueryParam = ({ array, paramName }) => {
    if (!array?.length) {
        return null;
    }
    return array.map(function(el, idx) {
        if (el === undefined) {
            return null
        }
        return `${paramName}[${idx}]=${el}`;
    }).join('&');
}
