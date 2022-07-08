const includesStringOnAnother = function (string, stringIncludes) {

    const firstString = String(string)
                            .toLocaleLowerCase()
                             .substring(0, stringIncludes.length)

    const secondString = stringIncludes
                             .toLocaleLowerCase()

    if (firstString.includes(secondString))
        return true
    return false
}

export { includesStringOnAnother }