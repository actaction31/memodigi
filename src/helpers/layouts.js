export function getAccountTemplate({ accountTemplate }) {
    const css = accountTemplate?.css;
    return css;
    // return ({
    //     html: {
    //         background: css?.html?.background,
    //     },
    //     accountLayout: {
    //         wrapper: {
    //             background: css?.accountLayout?.wrapper?.background,
    //         }
    //     }
    // })
}