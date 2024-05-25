const getData = async () => {
    const response = await fetch("https://api.github.com/users/LUISEDOCCOR")
    const data  = await response.json()
    return data
}

//When the api reached its limit, already defined data is shown
export const getImageProfile = async () => {
    const { avatar_url } = await getData()
    return avatar_url ? avatar_url : "./profile.webp"
}
export const GetPublicRepos = async () => {
    const { public_repos } = await getData()
    return public_repos ? public_repos : "+50"
}