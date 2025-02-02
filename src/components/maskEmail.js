export const maskEmail = (email) => {
    const [name, domain] = email.split('@')
    const maskedName =
        name.length > 2 ? name.slice(0, 2) + '*'.repeat(name.length - 2) : name
    return `${maskedName}@${domain}`
}
