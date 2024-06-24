export const getContentPath = ({ contentHash, type }) => {
    return `/${process.env.apiSlug}/account-view/content/${contentHash}/${type}`
}