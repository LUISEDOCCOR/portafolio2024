const getData = async () => {
    const response = await fetch("https://api.github.com/users/LUISEDOCCOR")
    const data  = await response.json()
    return data
}


export const getImageProfile = async () => {
    const { avatar_url } = await getData()
    return avatar_url ? avatar_url : "./profile.webp"
}

export const GetPublicRepos = async () => {
    const { public_repos } = await getData()
    return public_repos
}